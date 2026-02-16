import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function HeroSection() {
  const { t } = useTranslation();
  const phoneNumber = "573007538453"; // 👉 SIN +, SIN espacios
  const message = encodeURIComponent(
    "Hola, quiero solicitar asesoría sobre soluciones TIC para mi empresa."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


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
            startIcon={<WhatsAppIcon />}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 600,
background: "linear-gradient(90deg, #6366f1, #9333ea)",              "&:hover": {
                background: "linear-gradient(90deg, #20c75a, #0f7a6d)",
              },
            }}
          >
            {t("Solicitar asesoría")}
          </Button>



        </Stack>
      </Box>
    </Box>
  );
}
