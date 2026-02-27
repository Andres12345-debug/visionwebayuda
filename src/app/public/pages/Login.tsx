import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  Paper,
  useTheme,
  IconButton,
  alpha,
  Grid, // Estándar MUI v7
} from "@mui/material";
import {
  PersonOutline as UserIcon,
  LockOutlined as LockIcon,
  Visibility,
  VisibilityOff,
  VerifiedUserOutlined as ShieldIcon,
  CloudDoneOutlined as CloudIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// === IMPORTS CRÍTICOS QUE FALTABAN ===
import { Acceso } from "../../models/Acess";
import { AccesoService } from "../../services/AcessService";
import { useFormulario } from "../../utilities/hoks/useForm";
import { crearMensaje } from "../../utilities/functions/messge";

// Definición de la interfaz para el Token
interface TokenPayload {
  id: number;
  nombre: string;
  rol: string;
  telefono: string;
  acceso: string;
}

const Sesion = () => {
  const [enProceso, setEnProceso] = useState(false);
  const [mostrarClave, setMostrarClave] = useState(false);
  const theme = useTheme();
  const navegacion = useNavigate();

  // Inicialización del formulario
  const { nombreAcceso, claveAcceso, dobleEnlace } = useFormulario<Acceso>(
    new Acceso(0, "", ""),
  );

  // Validación básica
  const formularioValido =
    nombreAcceso.trim().length > 0 && claveAcceso.trim().length > 0;

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formularioValido) return;
    setEnProceso(true);

    try {
      const respuesta = await AccesoService.iniciarSesion({
        nombreAcceso,
        claveAcceso,
      } as Acceso);

      const token = respuesta?.tokenApp;

      if (!token) {
        throw new Error("TOKEN_NOT_FOUND");
      }

      const datosToken = jwtDecode<TokenPayload>(token);

      // Persistencia del token
      localStorage.setItem("TOKEN_AUTORIZACION", token);

      crearMensaje("success", `¡Bienvenido, ${datosToken.nombre}!`);

      // Redirección limpia
      navegacion("/dash", { replace: true });
    } catch (error: any) {
      console.error("Login Error:", error);
      crearMensaje("error", "Credenciales inválidas o error de conexión");
    } finally {
      setEnProceso(false);
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* PANEL IZQUIERDO (Informativo) */}
      <Grid
        size={{ xs: 0, md: 7 }}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "relative",
          background:
            theme.palette.mode === "light"
              ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #4338ca 100%)`
              : `linear-gradient(135deg, #0f172a 0%, #1e293b 100%)`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          p: 6,
        }}
      >
        <Stack spacing={4} sx={{ maxWidth: 500, zIndex: 1 }}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{ lineHeight: 1, letterSpacing: -2 }}
          >
            VisionWeb <br />
            <Box component="span" sx={{ opacity: 0.7 }}>
              Ayuda.
            </Box>
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300 }}>
            Gestión eficiente de servicios y usuarios en una sola plataforma.
          </Typography>

          <Stack spacing={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <ShieldIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1">Cifrado de datos AES-256</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CloudIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1">
                Infraestructura de alta disponibilidad
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Grid>

      {/* PANEL DERECHO (Login) */}
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          p: { xs: 3, md: 8 },
        }}
      >
        <Paper
          elevation={0}
          sx={{ width: "100%", maxWidth: 400, bgcolor: "transparent" }}
        >
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ letterSpacing: -1, mb: 1 }}
            >
              Ingresar
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Bienvenido de nuevo.
            </Typography>
          </Box>

          <Box component="form" onSubmit={enviarFormulario} noValidate>
            <Stack spacing={3}>
              <TextField
                label="Usuario"
                name="nombreAcceso"
                variant="filled"
                value={nombreAcceso}
                onChange={dobleEnlace}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UserIcon color="primary" />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: { borderRadius: 2 },
                }}
              />

              <TextField
                label="Contraseña"
                name="claveAcceso"
                variant="filled"
                type={mostrarClave ? "text" : "password"}
                value={claveAcceso}
                onChange={dobleEnlace}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setMostrarClave(!mostrarClave)}
                      >
                        {mostrarClave ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: { borderRadius: 2 },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={enProceso || !formularioValido}
                sx={{
                  py: 2,
                  borderRadius: 3,
                  fontWeight: 800,
                  textTransform: "none",
                  boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                }}
              >
                {enProceso ? "Autenticando..." : "Entrar al Panel"}
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Sesion;
