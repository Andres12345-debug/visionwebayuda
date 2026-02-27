import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Grid,
  Paper,
  useTheme,
  Container,
  Stack,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import BusinessIcon from "@mui/icons-material/Business";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssessmentIcon from "@mui/icons-material/Assessment";

// CONFIGURACIÓN DE NEGOCIO (Fácil de editar)
const CONFIG = {
  PRECIO_VISION_POR_EQUIPO: 45000,
  COSTO_INTERNO_BASE: 280000, // Lo que gasta una empresa pequeña por equipo
  WHATSAPP_NUMBER: "573007538453",
};

const CalculadoraAdministracionIT = () => {
  const [cantidad, setCantidad] = useState(15);
  const theme = useTheme();

  // LÓGICA DE NEGOCIO: Curva de costos decreciente para mayor realismo
  // A más equipos, el costo interno por unidad baja (economía de escala)
  const factorEscala = cantidad > 50 ? 0.8 : 1;
  const costoInternoAjustado = CONFIG.COSTO_INTERNO_BASE * factorEscala;

  const totalInterno = cantidad * costoInternoAjustado;
  const totalNosotros = cantidad * CONFIG.PRECIO_VISION_POR_EQUIPO;
  const ahorroMensual = totalInterno - totalNosotros;

  const formatoCOP = (valor: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(valor);
  };

  const enviarWhatsApp = () => {
    const mensaje = `Hola VisionWeb! 
Estuve revisando su calculadora:
- Equipos: ${cantidad}
- Inversión mensual: ${formatoCOP(totalNosotros)}
- Ahorro estimado: ${formatoCOP(ahorroMensual)}/mes.
Me gustaría recibir más información.`;

    window.open(
      `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 8,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.default",
        }}
      >
        {/* CABECERA */}
        <Stack
          spacing={2}
          alignItems="center"
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: 5,
              bgcolor: "primary.main",
              color: "white",
            }}
          >
            <InventoryIcon sx={{ fontSize: 16 }} />
            <Typography
              variant="caption"
              sx={{ fontWeight: 800, letterSpacing: 1 }}
            >
              CALCULADORA DE COSTOS
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, color: "text.primary" }}
          >
            ¿Cuántos equipos vamos a administrar?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Desliza para calcular tu inversión y ahorro proyectado.
          </Typography>
        </Stack>

        {/* SELECTOR DE CANTIDAD */}
        <Box sx={{ maxWidth: 600, mx: "auto", mb: 8, textAlign: "center" }}>
          <Slider
            value={cantidad}
            min={5}
            max={300}
            step={5}
            onChange={(_, val) => setCantidad(val as number)}
            sx={{ mb: 2 }}
          />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            spacing={1}
          >
            <Typography
              variant="h2"
              sx={{ fontWeight: 900, color: "primary.main" }}
            >
              {cantidad}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 700 }}
            >
              EQUIPOS
            </Typography>
          </Stack>
        </Box>

        {/* REJILLA DE COMPARACIÓN (MUI v7 Grid2) */}
        <Grid container spacing={3} alignItems="stretch">
          {/* GESTIÓN INTERNA */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              variant="outlined"
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 3, color: "text.secondary" }}
              >
                <BusinessIcon />
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  GESTIÓN ACTUAL
                </Typography>
              </Stack>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ lineHeight: 2.5, color: "text.secondary" }}
                >
                  • Costos de personal técnico
                  <br />
                  • Tiempo muerto por fallos
                  <br />• Riesgos de ciberseguridad
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  pt: 2,
                  borderTop: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, color: "text.disabled" }}
                >
                  COSTO ESTIMADO
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, opacity: 0.6 }}>
                  {formatoCOP(totalInterno)}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* NUESTRA SOLUCIÓN */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={10}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 5,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                transform: { md: "scale(1.05)" },
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <SupportAgentIcon />
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  CON VISIONWEB
                </Typography>
              </Stack>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ lineHeight: 2.5 }}
                >
                  • Soporte profesional ilimitado
                  <br />
                  • Mantenimiento preventivo
                  <br />
                  •{" "}
                  <AssessmentIcon
                    sx={{ fontSize: 14, verticalAlign: "middle" }}
                  />{" "}
                  Inventario digital real
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  pt: 2,
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, opacity: 0.9 }}
                >
                  INVERSIÓN MENSUAL
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 900 }}>
                  {formatoCOP(totalNosotros)}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* AHORRO TOTAL */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              variant="outlined"
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 5,
                textAlign: "center",
                borderColor: "success.main",
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(16, 185, 129, 0.05)"
                    : "#f0fdf4",
              }}
            >
              <Typography
                variant="h6"
                color="success.main"
                sx={{ fontWeight: 900, mb: 3 }}
              >
                TU AHORRO
              </Typography>
              <Stack spacing={2}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontWeight: 700 }}
                  >
                    AHORRO MENSUAL
                  </Typography>
                  <Typography
                    variant="h5"
                    color="success.main"
                    sx={{ fontWeight: 900 }}
                  >
                    {formatoCOP(ahorroMensual)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "success.main",
                    color: "white",
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    AHORRO ANUAL
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    {formatoCOP(ahorroMensual * 12)}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* BOTÓN DE ACCIÓN */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            onClick={enviarWhatsApp}
            startIcon={<TrendingUpIcon />}
            sx={{
              py: 2,
              px: 6,
              borderRadius: 4,
              fontWeight: 900,
              fontSize: "1.1rem",
              boxShadow: theme.shadows[10],
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: theme.shadows[15],
              },
              transition: "all 0.3s",
            }}
          >
            ME INTERESA ESTE PRECIO
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CalculadoraAdministracionIT;
