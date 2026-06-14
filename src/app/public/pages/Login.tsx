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
  Grid,
} from "@mui/material";
import {
  AlternateEmail as EmailIcon,
  LockOutlined as LockIcon,
  Visibility,
  VisibilityOff,
  VerifiedUserOutlined as ShieldIcon,
  CloudDoneOutlined as CloudIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../../shared/SEO";

import { Acceso } from "../../models/Acess";
import { AccesoService } from "../../services/AcessService";
import { AuthService } from "../../services/auth/AuthService";
import { useFormulario } from "../../utilities/hoks/useForm";
import { crearMensaje } from "../../utilities/functions/messge";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Sesion = () => {
  const { t } = useTranslation();
  const [enProceso, setEnProceso] = useState(false);
  const [mostrarClave, setMostrarClave] = useState(false);
  const theme = useTheme();
  const navegacion = useNavigate();

  const { correoUsuario, claveAcceso, dobleEnlace } = useFormulario<Acceso>(
    new Acceso("", ""),
  );

  const formularioValido =
    EMAIL_REGEX.test(correoUsuario.trim()) && claveAcceso.trim().length > 0;

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formularioValido) return;
    setEnProceso(true);

    try {
      const respuesta = await AccesoService.iniciarSesion({
        correoUsuario,
        claveAcceso,
      } as Acceso);

      const token = respuesta?.tokenApp;

      if (!token) {
        throw new Error("TOKEN_NOT_FOUND");
      }

      const datosToken = AuthService.decodificarToken(token);

      AuthService.setToken(token);

      crearMensaje("success", `¡Bienvenido, ${datosToken.nombre}!`);

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
      <SEO
        title={t("seo.loginTitle")}
        description={t("seo.loginDescription")}
        keywords={t("seo.keywords")}
        ogUrl="/login"
      />
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
            {t("login.visionWeb")}<br />
            <Box component="span" sx={{ opacity: 0.7 }}>
              {t("login.ayuda")}
            </Box>
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300 }}>
            {t("login.descripcion")}
          </Typography>

          <Stack spacing={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <ShieldIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1">{t("login.cifrado")}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CloudIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1">
                {t("login.infraestructura")}
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
              {t("login.ingresar")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("login.bienvenido")}
            </Typography>
          </Box>

          <Box component="form" onSubmit={enviarFormulario} noValidate>
            <Stack spacing={3}>
              <TextField
                label={t("login.correoLabel")}
                name="correoUsuario"
                type="email"
                variant="filled"
                value={correoUsuario}
                onChange={dobleEnlace}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="primary" />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: { borderRadius: 2 },
                }}
              />

              <TextField
                label={t("login.contrasenaLabel")}
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
                {enProceso ? t("login.autenticando") : t("login.entrarBtn")}
              </Button>

              <Typography variant="body2" color="text.secondary" textAlign="center">
                {t("login.sinCuenta")}{" "}
                <Box
                  component="span"
                  onClick={() => navegacion("/registro")}
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("login.crearCuenta")}
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Sesion;
