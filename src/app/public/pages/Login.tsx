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
  Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import { Acceso } from "../../models/Acess";
import { DatoSesion } from "../../models/SessionData";
import { crearMensaje } from "../../utilities/functions/messge";
import { AccesoService } from "../../services/AcessService";
import { useFormulario } from "../../utilities/hoks/useForm";
import { jwtDecode } from "jwt-decode";

const Sesion = () => {
  const [enProceso, setEnProceso] = useState(false);

  const { nombreAcceso, claveAcceso, dobleEnlace } =
    useFormulario<Acceso>(new Acceso(0, "", ""));

  const navegacion = useNavigate();
  const theme = useTheme();

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    form.classList.add("was-validated");

    if (!form.checkValidity()) return;

    setEnProceso(true);

    try {
      // 🔥 Enviar datos directamente sin mutar el objeto global
      const respuesta = await AccesoService.iniciarSesion({
        nombreAcceso,
        claveAcceso,
      } as Acceso);

      const token = respuesta?.tokenApp;

      if (!token) {
        crearMensaje("error", "No se recibió el token");
        return;
      }

      const datosToken: any = jwtDecode(token);

      const datosUsuario = new DatoSesion(
        datosToken.id,
        datosToken.nombre,
        datosToken.rol,
        datosToken.telefono,
        datosToken.acceso
      );

      crearMensaje("success", `Bienvenido ${datosUsuario.nombre}`);

      localStorage.setItem("TOKEN_AUTORIZACION", token);

      navegacion("/dash");

    } catch (error: any) {
      console.error(error);
      crearMensaje(
        "error",
        error?.message || "Error al iniciar sesión"
      );
    } finally {
      setEnProceso(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.background.default,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          INICIAR SESIÓN
        </Typography>

        <Box component="form" onSubmit={enviarFormulario} noValidate>
          <Stack spacing={3} mt={2}>
            <TextField
              label="Usuario"
              name="nombreAcceso"
              type="text"
              value={nombreAcceso}
              onChange={dobleEnlace}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Contraseña"
              name="claveAcceso"
              type="password"
              value={claveAcceso}
              onChange={dobleEnlace}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={enProceso}
              sx={{
                borderRadius: 3,
                py: 1.3,
                fontWeight: 600,
                background:
                  "linear-gradient(90deg, #6366f1, #9333ea)",
              }}
            >
              {enProceso ? "Procesando..." : "Acceder"}
            </Button>
          </Stack>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          ¿No tienes una cuenta?{" "}
          <MuiLink
            component={Link}
            to="/register"
            underline="hover"
            fontWeight="bold"
          >
            Crear cuenta
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Sesion;