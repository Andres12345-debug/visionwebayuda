// InventoryAgentSection.tsx

import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import GradientText from "../ui/GradientText";

import ServiceCard from "../shared/ServiceCards";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import AssessmentIcon from "@mui/icons-material/Assessment";
// Removed unused icon imports

export default function InventoryAgentSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Inventory2Icon />,
      title: t("inventoryAgent.card1Title"),
      description: t("inventoryAgent.card1Text"),
    },
    {
      icon: <StorageIcon />,
      title: t("inventoryAgent.card2Title"),
      description: t("inventoryAgent.card2Text"),
    },
    {
      icon: <SecurityIcon />,
      title: t("inventoryAgent.card3Title"),
      description: t("inventoryAgent.card3Text"),
    },
    {
      icon: <AssessmentIcon />,
      title: t("inventoryAgent.card4Title"),
      description: t("inventoryAgent.card4Text"),
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 }
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
            {t("inventoryAgent.titulo")} {" "}
            <GradientText gradient="linear-gradient(90deg, #3b82f6, #8b5cf6)">
              {t("inventoryAgent.tituloGradient")}
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
              "inventoryAgent.lead",
              "Controla, administra y analiza tu inventario TI en tiempo real con una solución centralizada, moderna y escalable."
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