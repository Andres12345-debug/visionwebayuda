// InfraServicesSection.tsx
import { Box, Typography, Divider } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import BackupIcon from "@mui/icons-material/Backup";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

const services = [
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: "Implementación de Mesa de Ayuda",
    text: "Instalamos y configuramos tu sistema de tickets para que tu empresa tenga control total sobre solicitudes, incidencias y soporte interno con GLPI.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    title: "VPS Empresarial",
    text: "Alojamos tu plataforma en servidores virtuales seguros, optimizados y siempre disponibles para que tu sistema funcione sin interrupciones.",
  },
  {
    icon: <BackupIcon sx={{ fontSize: 40 }} />,
    title: "Backups Automatizados",
    text: "Protegemos la información de tu empresa con copias de seguridad programadas y recuperación rápida ante cualquier incidente.",
  },
  {
    icon: <SettingsEthernetIcon sx={{ fontSize: 40 }} />,
    title: "Instalación de Agente GLPI",
    text: "Configuramos el agente en los equipos de tu red para inventario automático, monitoreo y control centralizado.",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: "Soporte Técnico Continuo",
    text: "Te acompañamos después de la implementación con soporte, ajustes, mejoras y asesoría técnica.",
  },
];

export default function InfraServicesSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        px: { xs: 3, md: 10 },
      }}
    >
      {/* TÍTULO */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Infraestructura y Soporte TI para tu Empresa
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          Nos encargamos de toda la base tecnológica para que tu equipo solo se preocupe por trabajar, no por los problemas técnicos.
        </Typography>
      </Box>

      {/* SERVICIOS */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ color: "primary.main" }}>{service.icon}</Box>

            <Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 700 }}
              >
                {service.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mt: 8 }} />

      {/* MENSAJE FINAL */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="body1" fontWeight="bold">
          Tú trabajas. Nosotros mantenemos tu tecnología funcionando.
        </Typography>
      </Box>
    </Box>
  );
}
