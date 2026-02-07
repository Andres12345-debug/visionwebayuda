// InventoryAgentSection.tsx
import { Box, Typography, Divider } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import AppsIcon from "@mui/icons-material/Apps";
import SyncIcon from "@mui/icons-material/Sync";

const features = [
  {
    icon: <ComputerIcon sx={{ fontSize: 36 }} />,
    title: "Escaneo automático del equipo",
    text: "El agente GLPI analiza cada computador y detecta hardware como procesador, memoria, discos, red y periféricos sin intervención manual.",
  },
  {
    icon: <AppsIcon sx={{ fontSize: 36 }} />,
    title: "Inventario de software",
    text: "Registra automáticamente los programas instalados, versiones y sistemas operativos para un control total del parque tecnológico.",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 36 }} />,
    title: "Información siempre actualizada",
    text: "Cada cambio en el equipo se sincroniza con GLPI, manteniendo el inventario actualizado en tiempo real.",
  },
  {
    icon: <SyncIcon sx={{ fontSize: 36 }} />,
    title: "Integración directa con GLPI",
    text: "Toda la información recolectada se centraliza en GLPI, facilitando reportes, soporte técnico y toma de decisiones.",
  },
];

export default function InventoryAgentSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 10 } }}>
      {/* TÍTULO */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Inventario Automático de Activos TI
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 720, mx: "auto" }}
        >
          Con el agente GLPI, cada computador de tu empresa se escanea
          automáticamente para mantener un inventario preciso, actualizado y
          centralizado.
        </Typography>
      </Box>

      {/* LISTADO DE BENEFICIOS */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ color: "primary.main" }}>{item.icon}</Box>

            <Box>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 720 }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* MENSAJE FINAL */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body1" fontWeight={600}>
          Menos trabajo manual, más control sobre tus activos tecnológicos.
        </Typography>
      </Box>
    </Box>
  );
}
