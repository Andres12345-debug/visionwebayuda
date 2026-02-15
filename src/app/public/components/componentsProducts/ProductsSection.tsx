import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import BackupIcon from "@mui/icons-material/Backup";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import ShieldIcon from "@mui/icons-material/Shield";
import { useTranslation } from "react-i18next";

interface Software {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const softwareList: Software[] = [
  {
    id: 1,
    name: "GLPI - Mesa de Ayuda",
    description:
      "Gestión de tickets, inventario IT y administración de activos empresariales.",
    icon: <SupportAgentIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 2,
    name: "ClamAV / ClamWin",
    description:
      "Protección antivirus Open Source para estaciones y servidores.",
    icon: <SecurityIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 3,
    name: "Zabbix - Monitoreo",
    description:
      "Supervisión avanzada de servidores, red y servicios críticos.",
    icon: <MonitorHeartIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 4,
    name: "Nextcloud",
    description:
      "Servidor privado de archivos y colaboración empresarial.",
    icon: <CloudIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 5,
    name: "Odoo Community",
    description:
      "ERP Open Source para gestión administrativa y empresarial.",
    icon: <BusinessIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 6,
    name: "LibreOffice",
    description:
      "Suite ofimática profesional para entornos corporativos.",
    icon: <DescriptionIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 7,
    name: "UrBackup",
    description:
      "Copias de seguridad automáticas para servidores y estaciones.",
    icon: <BackupIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 8,
    name: "Bacula / Bareos",
    description:
      "Plataforma avanzada de backup empresarial y recuperación.",
    icon: <StorageIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 9,
    name: "Wazuh - Seguridad",
    description:
      "SIEM y monitoreo de seguridad para infraestructura empresarial.",
    icon: <ShieldIcon sx={{ fontSize: 50 }} />,
  },
];

const EnterpriseSoftwareSection = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            lineHeight: 1.1,
            mb: 3,
            color: "text.primary",
            textAlign: "center",
          }}
        >
          {t("Implementación de Software")}{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #6366f1, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("Empresarial Open Source")}

          </Box>{" "}

        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            maxWidth: 800,
            mx: "auto",
            mb: 8,
          }}
        >
          {t("Instalamos, configuramos y optimizamos soluciones empresariales para mejorar la seguridad, gestión y productividad de tu organización.")}
        </Typography>

        {/* FLEX CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {softwareList.map((software) => (
            <Box
              key={software.id}
              sx={{
                flex: "1 1 300px",
                maxWidth: "340px",
              }}
            >
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  border: "1px solid #e5e7eb",
                  p: 4,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <CardContent>
                  {/* ICONO */}
                  <Box
                    sx={{
                      color: "primary.main",
                      mb: 3,
                    }}
                  >
                    {software.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {software.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 3 }}
                  >
                    {software.description}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: "10px",
                      fontWeight: 600,
                      background:
                        "linear-gradient(90deg, #6366f1, #9333ea)",
                    }}
                  >
                    Solicitar implementación
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default EnterpriseSoftwareSection;
