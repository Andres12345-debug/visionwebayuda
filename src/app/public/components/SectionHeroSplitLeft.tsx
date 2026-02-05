import { Box, Typography, Button } from "@mui/material";
import heroImg from "../../../assets/img/welcome/ClienteSubiendoIncidencia.png";

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
  subtitle = "AUTOMATIZACIÓN INTELIGENTE",
  title = "Optimiza el trabajo de tu equipo TI",
  description = "Reduce tiempos de respuesta, automatiza asignaciones y obtén métricas claras para tomar decisiones estratégicas.",
  buttonText = "Ver funcionalidades",
  buttonLink = "#",
}: SectionHeroSplitRightProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 👈 texto primero
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        maxWidth: 1400,
        mx: "auto",
      }}
    >
      {/* 📝 TEXTO IZQUIERDA */}
      <Box sx={{ width: { xs: "100%", md: "48%" } }}>
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mt: 1,
            mb: 2,
            lineHeight: 1.1,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            mb: 3,
          }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          href={buttonLink}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: 3,
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: 6,
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>

      {/* 🖼 IMAGEN DERECHA */}
      <Box
        component="img"
        src={image}
        alt="section visual"
        sx={{
          width: { xs: "100%", md: "48%" },
          borderRadius: 4,
          boxShadow: 4,
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
