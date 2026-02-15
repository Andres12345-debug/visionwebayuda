import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import heroImg from "../../../assets/img/welcome/GlpiAgente.png";

type SectionHeroSplitProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function SectionHeroSplit({
  image = heroImg,
  subtitle = "Inventario Inteligente",
  title = "Control total de tus activos tecnológicos con GLPI Agent",
  description = "Automatiza la recolección de hardware y software, mantén trazabilidad completa y obtén visibilidad en tiempo real de todos los activos TIC desde una sola plataforma centralizada.",
  buttonText = "Solicitar demostración",
  buttonLink = "#",
}: SectionHeroSplitProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        px: 2,
        background: isDark ? "#0f172a" : "#f8fafc",
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
          {/* TEXTO IZQUIERDA */}
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

          {/* IMAGEN DERECHA */}
          <Box
            component="img"
            src={image}
            alt="Inventario GLPI"
            sx={{
              width: "100%",
              borderRadius: 5,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
