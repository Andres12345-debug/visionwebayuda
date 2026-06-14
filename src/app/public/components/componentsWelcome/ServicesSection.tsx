import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import GradientText from "../ui/GradientText";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";

import ServiceCard from "../shared/ServiceCards";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("servicesSection.mesaDeAyudaProfesional"),
      description: t("servicesSection.mesaAyudaDesc"),
      icon: <SupportAgentIcon fontSize="medium" />,
    },
    {
      title: t("servicesSection.gestionInventarioTitle"),
      description: t("servicesSection.gestionInventarioDesc"),
      icon: <Inventory2Icon fontSize="medium" />,
    },
    {
      title: t("servicesSection.documentacionTitle"),
      description: t("servicesSection.documentacionDesc"),
      icon: <DescriptionIcon fontSize="medium" />,
    },
    {
      title: t("servicesSection.reportesTitle"),
      description: t("servicesSection.reportesDesc"),
      icon: <BarChartIcon fontSize="medium" />,
    },
    {
      title: t("servicesSection.soporteMultiplataformaTitle"),
      description: t("servicesSection.soporteMultiplataformaDesc"),
      icon: <DevicesIcon fontSize="medium" />,
    },
    {
      title: t("servicesSection.controlSeguridadTitle"),
      description: t("servicesSection.controlSeguridadDesc"),
      icon: <SecurityIcon fontSize="medium" />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        borderRadius: 4,
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
            mb: { xs: 5, md: 7 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {t("servicesSection.titulo")}{" "}
            <GradientText gradient="linear-gradient(90deg, #3b82f6, #a855f7)">
              {t("servicesSection.tuAreaTIC")}
            </GradientText>
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
            {t(
              "servicesSection.descripcion",
              "Potenciamos su área tecnológica con herramientas modernas, soporte eficiente y control inteligente."
            )}
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
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: "0 0 85%",
                  sm: "0 0 60%",
                  md: "1 1 calc(33.33% - 16px)",
                },

                scrollSnapAlign: "center",
              }}
            >
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