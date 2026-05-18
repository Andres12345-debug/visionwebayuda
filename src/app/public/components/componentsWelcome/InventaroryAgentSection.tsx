// InventoryAgentSection.tsx

import { Box, Typography, useTheme } from "@mui/material";

import ServiceCard from "../shared/ServiceCards";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function InventoryAgentSection() {
  const theme = useTheme();

  const services = [
    {
      icon: <Inventory2Icon />,
      title: "Control de Inventario",
      description:
        "Gestión centralizada de equipos y activos TI.",
    },
    {
      icon: <StorageIcon />,
      title: "Base de Datos",
      description:
        "Organiza y consulta información en tiempo real.",
    },
    {
      icon: <SecurityIcon />,
      title: "Seguridad",
      description:
        "Control de accesos y trazabilidad de cambios.",
    },
    {
      icon: <AssessmentIcon />,
      title: "Reportes",
      description:
        "Análisis y métricas del inventario en tiempo real.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },

        background:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : theme.palette.grey[50],
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.03em",
              mb: 2,

              fontSize: {
                xs: "2rem",
                md: "3rem",
              },

              lineHeight: 1.1,
            }}
          >
            Agente de Inventario{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #3b82f6, #8b5cf6)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",

                filter:
                  "saturate(1.4) contrast(1.1)",
              }}
            >
              Inteligente
            </Box>
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Controla, administra y analiza tu inventario
            TI en tiempo real con una solución
            centralizada, moderna y escalable.
          </Typography>
        </Box>

        {/* SERVICES */}
        <Box
          sx={{
            display: "flex",
            gap: 3,

            // MOBILE SWIPE
            flexWrap: {
              xs: "nowrap",
              md: "wrap",
            },

            overflowX: {
              xs: "auto",
              md: "visible",
            },

            scrollSnapType: {
              xs: "x mandatory",
              md: "none",
            },

            WebkitOverflowScrolling: "touch",

            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",

            px: {
              xs: 1,
              md: 0,
            },
          }}
        >
          {services.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: "0 0 85%",
                  sm: "0 0 60%",
                  md: "1 1 calc(25% - 18px)",
                },

                scrollSnapAlign: "center",
              }}
            >
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                minHeight={290}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}