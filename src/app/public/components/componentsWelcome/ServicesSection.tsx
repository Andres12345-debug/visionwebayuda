import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
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
  const { t } = useTranslation();

  const services: Service[] = [
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
        backgroundColor: theme.palette.mode === "dark"
          ? theme.palette.background.default
          : theme.palette.grey[50],
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 900, letterSpacing: "-0.03em", mb: 2 }}
          >
            {t("servicesSection.titulo")} {" "}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(90deg, #3b82f6, #a855f7)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "saturate(1.4) contrast(1.1)",
              }}
            >
              {t("servicesSection.tuAreaTIC")}
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: "auto" }}>
            {t(
              "servicesSection.subtitulo",
              "Potenciamos tu área TI con servicios diseñados para ofrecer soporte, seguridad y control inteligente."
            )}
          </Typography>
        </Box>

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
              <Card
                elevation={2}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: "transform 0.28s ease, box-shadow 0.28s ease",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: theme.palette.background.paper,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  '&:hover': {
                    transform: "translateY(-6px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 4,
                    overflow: "hidden",

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
                />
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      mb: 3,
                      borderRadius: 3,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(
                      135deg,
                      #3b82f6,
                      #a855f7
                    )`,
                      filter: "saturate(1.4) contrast(1.1)",
                      color: theme.palette.common.white,
                      boxShadow: "0 18px 30px -20px rgba(59,130,246,0.8)",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography variant="h6" component="h3" sx={{ fontWeight: 800, mb: 1.2, color: theme.palette.text.primary }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
