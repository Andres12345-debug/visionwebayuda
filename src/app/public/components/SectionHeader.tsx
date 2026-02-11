import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function HeroSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 18 },
        pb: { xs: 10, md: 16 },
        px: 2,
        textAlign: "center",
        background: isDark
          ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
          : "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        transition: "all 0.3s ease",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {/* Badge */}
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: 1,
            mb: 2,
            fontSize: "0.8rem",
          }}
        >
          NUEVA SOLUCIÓN EMPRESARIAL
        </Typography>

        {/* Título */}
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            lineHeight: 1.1,
            mb: 3,
            color: "text.primary",
          }}
        >
          Transformamos tu{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #6366f1, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mesa de Ayuda
          </Box>{" "}
          en un sistema profesional
        </Typography>

        {/* Descripción */}
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.2rem" },
            mb: 5,
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Centraliza, organiza y controla todo el soporte técnico y los activos
          tecnológicos de tu empresa con una solución estructurada, medible y
          eficiente.
        </Typography>

        {/* Botones */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 600,
              background: "linear-gradient(90deg, #6366f1, #9333ea)",
            }}
          >
            Solicitar asesoría
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 600,
            }}
          >
            Ver más información
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
