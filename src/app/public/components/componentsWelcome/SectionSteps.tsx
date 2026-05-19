import { Box, Typography, useTheme } from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import { useTranslation } from "react-i18next";

import ServiceCard from "../shared/ServiceCards";

export default function StepsSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation();

  const steps = [
    {
      icon: <SecurityIcon fontSize="large" />,
      title: t("sectionSteps.step1Title"),
      description: t("sectionSteps.step1Desc"),
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: t("sectionSteps.step2Title"),
      description: t("sectionSteps.step2Desc"),
    },
    {
      icon: <VisibilityIcon fontSize="large" />,
      title: t("sectionSteps.step3Title"),
      description: t("sectionSteps.step3Desc"),
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: t("sectionSteps.step4Title"),
      description: t("sectionSteps.step4Desc"),
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 6 }
      }}
    >
      {/* TITLE */}
      <Typography
        textAlign="center"
        fontWeight={800}
        mb={{ xs: 6, md: 8 }}
        sx={{
          fontSize: { xs: "1.8rem", md: "2.3rem" },
        }}
      >
        {t("sectionSteps.titulo")}
      </Typography>

      {/* GRID / MOBILE SWIPE */}
      <Box
        sx={{
          display: "flex",
          gap: 3,

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

          "&::-webkit-scrollbar": {
            display: "none",
          },

          scrollbarWidth: "none",

          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {steps.map((step, i) => (
          <Box
            key={i}
            sx={{
              flex: {
                xs: "0 0 85%",
                sm: "0 0 60%",
                md: "1 1 calc(25% - 24px)",
              },

              scrollSnapAlign: "center",
            }}
          >
            <ServiceCard
              icon={step.icon}
              title={step.title}
              description={step.description}
              minHeight={300}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}