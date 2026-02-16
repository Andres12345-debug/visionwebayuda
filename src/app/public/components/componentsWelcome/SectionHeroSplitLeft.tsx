import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import heroImg from "../../../../assets/img/welcome/MesaDeAyuda.png";

type SectionHeroSplitRightProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function SectionHeroSplitLeft({
  image = heroImg,
  subtitle = "MESA DE AYUDA Y GESTIÓN DE INCIDENCIAS",
  title = "Soporte técnico centralizado, organizado y trazable",
  description = "Gestiona eficientemente tus solicitudes de soporte con nuestra plataforma de mesa de ayuda, centralizando la gestión de incidencias, usuarios y reportes en una interfaz moderna y fácil de usar, mejorando tiempos de respuesta y satisfacción del cliente.",
  buttonText = "Ver funcionalidades",
  buttonLink = "#",
}: SectionHeroSplitRightProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        pt: { xs: 0, md: 2 },   // 👈 casi nada arriba
        pb: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          background: isDark ? "#111827" : "#ffffff",
          borderRadius: 6,
          p: { xs: 4, md: 8 },
          boxShadow: isDark
            ? "0 20px 60px rgba(0,0,0,0.6)"
            : "0 20px 60px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >
          {/* IMAGEN MÁS PROTAGONISTA */}
          <Box
            component="img"
            src={image}
            alt="Mesa de ayuda"
            sx={{
              width: "100%",
              borderRadius: 5,
            }}
          />

          {/* TEXTO */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "primary.main",
                mb: 2,
              }}
            >
              {subtitle}
            </Typography>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.9rem", md: "2.6rem" },
                lineHeight: 1.2,
                mb: 3,
                color: "text.primary",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              {description}
            </Typography>

            <Button
              variant="contained"
              size="large"
              href={buttonLink}
              sx={{
                px: 5,
                py: 1.6,
                borderRadius: "14px",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(90deg, #6366f1, #9333ea)",
                boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "all .3s ease",
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
