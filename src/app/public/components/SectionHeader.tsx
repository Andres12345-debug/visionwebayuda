import { Box, Typography } from "@mui/material";

type SectionHeaderProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
};

export default function SectionHeader({
  title = "Expertos en Implementación y Soporte de Mesa de Ayuda",
  subtitle = "NUEVO",
  description = "Implementamos una Mesa de Servicios profesional que centraliza, organiza y controla todo el soporte técnico y los activos tecnológicos de tu empresa, permitiendo que el área TIC trabaje de forma estructurada, medible y eficiente",
  align = "center",
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: 900,
        mx: "auto",
        px: 2,
        py: { xs: 4, md: 6 },
      }}
    >
      {subtitle && (
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: 1.5,
            display: "block",
            mb: 1,
          }}
        >
          {subtitle}
        </Typography>
      )}

      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.6rem" },
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: 700,
            mx: "auto",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
