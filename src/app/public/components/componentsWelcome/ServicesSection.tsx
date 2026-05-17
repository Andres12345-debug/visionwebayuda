import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";

import ServiceCard from "../shared/ServiceCards";

export default function ServicesSection() {
  const theme = useTheme();
  const { t } = useTranslation();

  const services = [
    {
      title: t("servicesSection.mesaDeAyudaProfesional"),
      description: t("servicesSection.mesaAyudaDesc"),
      icon: <SupportAgentIcon fontSize="medium" />,
    },
    {
      title: t("Gestión de Inventario TI"),
      description: t("Administra equipos y activos con trazabilidad."),
      icon: <Inventory2Icon fontSize="medium" />,
    },
    {
      title: t("Documentación de Procesos"),
      description: t("Manualiza configuraciones y procedimientos."),
      icon: <DescriptionIcon fontSize="medium" />,
    },
    {
      title: t("Reportes y Métricas"),
      description: t("Visualiza estadísticas y desempeño del área TI."),
      icon: <BarChartIcon fontSize="medium" />,
    },
    {
      title: t("Soporte Multiplataforma"),
      description: t("Hardware, software y red desde una sola plataforma."),
      icon: <DevicesIcon fontSize="medium" />,
    },
    {
      title: t("Control y Seguridad"),
      description: t("Gestión de accesos e historial de cambios."),
      icon: <SecurityIcon fontSize="medium" />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        borderRadius: 4,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : theme.palette.grey[50],
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* HEADER */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
            {t("servicesSection.titulo")}{" "}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(90deg, #3b82f6, #a855f7)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("servicesSection.tuAreaTIC")}
            </Box>
          </Typography>
        </Box>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
          }}
        >
          {services.map((service, index) => (
            <Box key={index} sx={{ display: "flex" }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}