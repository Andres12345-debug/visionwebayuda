import { Box, Typography, Button } from "@mui/material";
import heroImg from "../../../assets/img/welcome/GlpiAgente.png"; // usa tu imagen local

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
  subtitle = "PLATAFORMA INVENTARIO INTELIGENTE",
  title = "Gestiona tú Inventario Inteligente con Agente GLPI",
  description = "Automatiza el inventario tecnológico mediante el Agente GLPI, recolectando información de hardware y software como equipos, impresoras conectadas, pantallas, aplicaciones instaladas y licencias, manteniendo un control actualizado, centralizado y confiable de todos los activos TIC.",
  buttonText = "Comenzar ahora",
  buttonLink = "#",
}: SectionHeroSplitProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        maxWidth: 1400,
        mx: "auto",
      }}
    >
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
    </Box>
  );
}
