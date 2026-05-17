// InventoryAgentSection.tsx

import { Box, Typography } from "@mui/material";
import ServiceCard from "../shared/ServiceCards";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function InventoryAgentSection() {
  const services = [
    {
      icon: <Inventory2Icon />,
      title: "Control de Inventario",
      description: "Gestión centralizada de equipos y activos TI.",
    },
    {
      icon: <StorageIcon />,
      title: "Base de Datos",
      description: "Organiza y consulta información en tiempo real.",
    },
    {
      icon: <SecurityIcon />,
      title: "Seguridad",
      description: "Control de accesos y trazabilidad de cambios.",
    },
    {
      icon: <AssessmentIcon />,
      title: "Reportes",
      description: "Análisis y métricas del inventario en tiempo real.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      {/* TITULO SECCIÓN */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.03em",
            mb: 2,
          }}
        >
          Agente de Inventario{" "}
          <Box
            component="span"
            sx={{
              background: `linear-gradient(90deg, #3b82f6, #8b5cf6)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "saturate(1.4) contrast(1.1)",
            }}
          >
            Inteligente
          </Box>
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          Controla, administra y analiza tu inventario TI en tiempo real con una
          solución centralizada y escalable.
        </Typography>
      </Box>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {services.map((item, index) => (
          <Box key={index} sx={{ display: "flex" }}>
            <ServiceCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}