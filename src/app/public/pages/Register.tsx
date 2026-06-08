import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
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
  Badge as NameIcon,
  AlternateEmail as EmailIcon,
  LockOutlined as LockIcon,
  PhoneIphoneOutlined as PhoneIcon,
  CalendarMonthOutlined as DateIcon,
  BusinessOutlined as CompanyIcon,
  Visibility,
  VisibilityOff,
  VerifiedUserOutlined as ShieldIcon,
  CloudDoneOutlined as CloudIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { jwtDecode } from "jwt-decode";
import SEO from "../../shared/SEO";

import { RegistroSesion } from "../../models/SessionRegister";
import { RegistroService } from "../../services/RegistroService";
import { useFormulario } from "../../utilities/hoks/useForm";
import { crearMensaje } from "../../utilities/functions/messge";

interface TokenPayload {
  id: number;
  nombre: string;
  rol: string;
  telefono: string;
  correo: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const { t } = useTranslation();
  const [enProceso, setEnProceso] = useState(false);
  const [mostrarClave, setMostrarClave] = useState(false);
  const theme = useTheme();
  const navegacion = useNavigate();

  const {
    nombreUsuario,
    correoUsuario,
    telefonoUsuario,
    empresaUsuario,
    fechaNacimientoUsuario,
    generoUsuario,
    claveAcceso,
    dobleEnlace,
  } = useFormulario<RegistroSesion>(
    new RegistroSesion("", "", 1, "", "", "", ""),
  );

  const formularioValido =
    nombreUsuario.trim().length > 0 &&
    EMAIL_REGEX.test(correoUsuario.trim()) &&
    telefonoUsuario.trim().length > 0 &&
    fechaNacimientoUsuario.trim().length > 0 &&
    claveAcceso.trim().length >= 8;

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formularioValido) return;
    setEnProceso(true);

    try {
      const respuesta = await RegistroService.registrarUsuario({
        nombreUsuario,
        correoUsuario,
        telefonoUsuario,
        empresaUsuario: empresaUsuario?.trim() ? empresaUsuario : undefined,
        fechaNacimientoUsuario,
        generoUsuario: Number(generoUsuario),
        claveAcceso,
      } as RegistroSesion);

      const token = respuesta?.tokenApp;

      if (!token) {
        throw new Error("TOKEN_NOT_FOUND");
      }

      const datosToken = jwtDecode<TokenPayload>(token);

      localStorage.setItem("TOKEN_AUTORIZACION", token);

      crearMensaje("success", `¡Bienvenido, ${datosToken.nombre}!`);

      navegacion("/dash", { replace: true });
    } catch (error: any) {
      console.error("Register Error:", error);
      const mensaje =
        error?.message === "El usuario ya existe"
          ? t("register.correoExistente")
          : t("register.errorGenerico");
      crearMensaje("error", mensaje);
    } finally {
      setEnProceso(false);
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <SEO
        title={t("seo.registerTitle")}
        description={t("seo.registerDescription")}
        keywords={t("seo.keywords")}
        ogUrl="/registro"
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

      {/* PANEL DERECHO (Registro) */}
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
          sx={{ width: "100%", maxWidth: 440, bgcolor: "transparent", py: { xs: 2, md: 0 } }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ letterSpacing: -1, mb: 1 }}
            >
              {t("register.titulo")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("register.subtitulo")}
            </Typography>
          </Box>

          <Box component="form" onSubmit={enviarFormulario} noValidate>
            <Stack spacing={2.5}>
              <TextField
                label={t("register.nombreLabel")}
                name="nombreUsuario"
                variant="filled"
                value={nombreUsuario}
                onChange={dobleEnlace}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NameIcon color="primary" />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: { borderRadius: 2 },
                }}
              />

              <TextField
                label={t("register.correoLabel")}
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

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                <TextField
                  label={t("register.telefonoLabel")}
                  name="telefonoUsuario"
                  variant="filled"
                  value={telefonoUsuario}
                  onChange={dobleEnlace}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="primary" />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    sx: { borderRadius: 2 },
                  }}
                />

                <TextField
                  label={t("register.fechaNacimientoLabel")}
                  name="fechaNacimientoUsuario"
                  type="date"
                  variant="filled"
                  value={fechaNacimientoUsuario}
                  onChange={dobleEnlace}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateIcon color="primary" />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    sx: { borderRadius: 2 },
                  }}
                />
              </Stack>

              <TextField
                label={t("register.empresaLabel")}
                name="empresaUsuario"
                variant="filled"
                value={empresaUsuario ?? ""}
                onChange={dobleEnlace}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CompanyIcon color="primary" />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: { borderRadius: 2 },
                }}
              />

              <TextField
                select
                label={t("register.generoLabel")}
                name="generoUsuario"
                variant="filled"
                value={generoUsuario}
                onChange={dobleEnlace}
                fullWidth
                InputProps={{ disableUnderline: true, sx: { borderRadius: 2 } }}
              >
                <MenuItem value={1}>{t("register.generoMasculino")}</MenuItem>
                <MenuItem value={2}>{t("register.generoFemenino")}</MenuItem>
              </TextField>

              <TextField
                label={t("register.claveLabel")}
                name="claveAcceso"
                variant="filled"
                type={mostrarClave ? "text" : "password"}
                value={claveAcceso}
                onChange={dobleEnlace}
                fullWidth
                helperText={t("register.claveAyuda")}
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
                {enProceso ? t("register.registrando") : t("register.crearCuentaBtn")}
              </Button>

              <Typography variant="body2" color="text.secondary" textAlign="center">
                {t("register.yaTieneCuenta")}{" "}
                <Box
                  component="span"
                  onClick={() => navegacion("/login")}
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("register.iniciarSesion")}
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
