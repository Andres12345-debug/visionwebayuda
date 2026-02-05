import { Box, Typography } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: "Mesa de Ayuda Profesional",
      description: "Centraliza solicitudes y controla tiempos de respuesta.",
      icon: <SupportAgentIcon fontSize="large" />,
    },
    {
      title: "Gestión de Inventario TI",
      description: "Administra equipos y activos con trazabilidad.",
      icon: <Inventory2Icon fontSize="large" />,
    },
    {
      title: "Documentación de Procesos",
      description: "Manualiza configuraciones y procedimientos.",
      icon: <DescriptionIcon fontSize="large" />,
    },
    {
      title: "Reportes y Métricas",
      description: "Visualiza estadísticas y desempeño del área TI.",
      icon: <BarChartIcon fontSize="large" />,
    },
    {
      title: "Soporte Multiplataforma",
      description: "Hardware, software y red desde una sola plataforma.",
      icon: <DevicesIcon fontSize="large" />,
    },
    {
      title: "Control y Seguridad",
      description: "Gestión de accesos e historial de cambios.",
      icon: <SecurityIcon fontSize="large" />,
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 } }}>
      <Typography variant="h4" fontWeight={800} textAlign="center" mb={6}>
        Servicios que transforman tu área TIC
      </Typography>

      {/* CONTENEDOR FLEX */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 300px", // responsive automático
              maxWidth: 360,
              p: 4,
              borderRadius: 4,
              backgroundColor: "background.paper",
              boxShadow: 3,
              transition: "all .3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              {service.icon}
            </Box>

            <Typography variant="h6" fontWeight={700} mb={1}>
              {service.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
