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
  Grid, // En v7, este ya es el nuevo motor de Grid
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

import { Acceso } from "../../models/Acess";
import { DatoSesion } from "../../models/SessionData";
import { crearMensaje } from "../../utilities/functions/messge";
import { AccesoService } from "../../services/AcessService";
import { useFormulario } from "../../utilities/hoks/useForm";

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

  const { nombreAcceso, claveAcceso, dobleEnlace } = useFormulario<Acceso>(
    new Acceso(0, "", "")
  );

  const formularioValido = nombreAcceso.trim() !== "" && claveAcceso.trim() !== "";

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formularioValido) return;
    setEnProceso(true);

    try {
      const respuesta = await AccesoService.iniciarSesion({ nombreAcceso, claveAcceso } as Acceso);
      const token = respuesta?.tokenApp;

      if (!token) {
        crearMensaje("error", "No se recibió el token");
        return;
      }

      const datosToken = jwtDecode<TokenPayload>(token);
      localStorage.setItem("TOKEN_AUTORIZACION", token);
      crearMensaje("success", `¡Bienvenido, ${datosToken.nombre}!`);
      navegacion("/dash");
    } catch (error: any) {
      crearMensaje("error", "Error de acceso");
    } finally {
      setEnProceso(false);
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      
      {/* PANEL IZQUIERDO (Informativo) */}
      <Grid
        // SINTAXIS V7: Usamos 'size' en lugar de props directas
        size={{ xs: 0, md: 7 }} 
        sx={{
          display: { xs: "none", md: "flex" },
          position: "relative",
          background: theme.palette.mode === "light" 
            ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #4338ca 100%)`
            : `linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          p: 6,
        }}
      >
        {/* Decoración circular */}
        <Box sx={{ position: "absolute", top: "15%", left: "10%", width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.06)", filter: "blur(20px)" }} />

        <Stack spacing={4} sx={{ maxWidth: 500, zIndex: 1 }}>
          <Typography variant="h2" fontWeight={900} sx={{ lineHeight: 1, letterSpacing: -2 }}>
            VisionWeb <br /> 
            <span style={{ opacity: 0.7 }}>Ayuda.</span>
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300, lineHeight: 1.4 }}>
            Tu plataforma centralizada para la gestión eficiente de servicios y usuarios.
          </Typography>
          
          <Stack spacing={3} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ShieldIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1" fontWeight={500}>Cifrado de datos AES-256</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <CloudIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1">Infraestructura en la nube de alta disponibilidad</Typography>
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
          sx={{ 
            width: "100%", 
            maxWidth: 400, 
            bgcolor: "transparent",
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Box sx={{ mb: 5 }}>
            <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: -1, mb: 1 }}>
              Ingresar
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Bienvenido de nuevo. Por favor, identifícate.
            </Typography>
          </Box>

          <Box component="form" onSubmit={enviarFormulario} noValidate>
            <Stack spacing={3}>
              <TextField
                label="Nombre de Usuario"
                name="nombreAcceso"
                variant="filled" // Un toque más moderno que combina con el panel
                value={nombreAcceso}
                onChange={dobleEnlace}
                fullWidth
                hiddenLabel={false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UserIcon color="primary" />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: { borderRadius: 2 }
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
                      <IconButton onClick={() => setMostrarClave(!mostrarClave)} edge="end">
                        {mostrarClave ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: { borderRadius: 2 }
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
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                  '&:hover': {
                    boxShadow: `0 15px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                {enProceso ? "Autenticando..." : "Entrar al Panel"}
              </Button>
            </Stack>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 6, textAlign: "center", opacity: 0.6 }}>
            © 2026 VisionWeb System. Todos los derechos reservados.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Sesion;