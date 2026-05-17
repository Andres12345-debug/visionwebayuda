import { Card, CardContent, Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  const theme = useTheme();

  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        transition: "transform 0.25s ease, box-shadow 0.25s ease",

        // UX móvil
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",

        "&:active": {
          transform: "scale(0.98)",
        },

        // Hover solo en dispositivos con mouse
        "@media (hover: hover)": {
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: theme.shadows[8],
          },
        },

        // barra superior degradada
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: `
            linear-gradient(
              90deg,
              #3b82f6,
              #8b5cf6,
              #ec4899
            )
          `,
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 4 } }}>
        {/* ICONO */}
        <Box
          sx={{
            width: 60,
            height: 60,
            mb: 3,
            borderRadius: 3,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",

            background: `
              linear-gradient(135deg, #3b82f6, #8b5cf6)
            `,

            filter: "saturate(1.4) contrast(1.1)",
            color: "#fff",

            boxShadow: "0 18px 30px -20px rgba(59,130,246,0.8)",
          }}
        >
          {icon}
        </Box>

        {/* TITULO */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            mb: 1.2,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        {/* DESCRIPCION */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.75,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}