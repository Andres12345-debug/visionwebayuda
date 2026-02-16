import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function ServicesSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation();

  const services: Service[] = [
    {
      title: "Mesa de Ayuda Profesional",
      description:
        "Centraliza solicitudes y controla tiempos de respuesta.",
      icon: <SupportAgentIcon fontSize="medium" />,
    },
    {
      title: "Gestión de Inventario TI",
      description:
        "Administra equipos y activos con trazabilidad.",
      icon: <Inventory2Icon fontSize="medium" />,
    },
    {
      title: "Documentación de Procesos",
      description:
        "Manualiza configuraciones y procedimientos.",
      icon: <DescriptionIcon fontSize="medium" />,
    },
    {
      title: "Reportes y Métricas",
      description:
        "Visualiza estadísticas y desempeño del área TI.",
      icon: <BarChartIcon fontSize="medium" />,
    },
    {
      title: "Soporte Multiplataforma",
      description:
        "Hardware, software y red desde una sola plataforma.",
      icon: <DevicesIcon fontSize="medium" />,
    },
    {
      title: "Control y Seguridad",
      description:
        "Gestión de accesos e historial de cambios.",
      icon: <SecurityIcon fontSize="medium" />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        borderRadius: 4,
        /*
        background: isDark
          ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
          : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", */
      }}
    >
      {/* Título */}
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          textAlign: "center",
          mb: 8,
        }}
      >
        {t("Servicios que transforman")}{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg, #6366f1, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("tu área TIC")}
        </Box>
      </Typography>

      {/* CONTENEDOR RESPONSIVE */}
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gap: 4,
          maxWidth: 1200,
          mx: "auto",

          // GRID en desktop
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
          },

          // SLIDER en mobile
          overflowX: { xs: "auto", md: "unset" },
          scrollSnapType: { xs: "x mandatory", md: "none" },
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              minWidth: { xs: "85%", sm: "60%", md: "unset" },
              flexShrink: 0,
              scrollSnapAlign: { xs: "center", md: "unset" },

              p: 4,
              borderRadius: 4,
              backdropFilter: "blur(8px)",
              backgroundColor: isDark
                ? "rgba(255,255,255,0.03)"
                : "#ffffff",
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid #eee",
              transition: "all .3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: isDark
                  ? "0 10px 30px rgba(0,0,0,0.4)"
                  : "0 10px 30px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* Icono */}
            <Box
              sx={{
                width: 55,
                height: 55,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
                background:
                  "linear-gradient(135deg, #6366f1, #9333ea)",
                color: "#fff",
              }}
            >
              {service.icon}
            </Box>

            {/* Título */}
            <Typography
              sx={{
                fontWeight: 700,
                mb: 1.5,
                fontSize: "1.1rem",
              }}
            >
              {service.title}
            </Typography>

            {/* Descripción */}
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
