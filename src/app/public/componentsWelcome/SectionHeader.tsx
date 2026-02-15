import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();


  return (
    <Box
      sx={{
        pt: { xs: 12, md: 18 },
        pb: { xs: 10, md: 16 },
        px: 2,
        textAlign: "center",
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
          {t("LLEVA TU EMPRESA AL SIGUIENTE NIVEL")}
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
          {t("Transformamos tu")}{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #6366f1, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("Mesa de Ayuda")}
          </Box>{" "}
          {t("en un sistema profesional")}

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
        >{t("Centraliza, organiza y controla todo el soporte técnico y los activos tecnológicos de tu empresa con una solución estructurada, medible y eficiente.")}
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
            {t("Solicitar asesoría")}
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
            {t("Ver más información")}

          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
