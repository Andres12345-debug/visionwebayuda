// InventoryAgentSection.tsx
import { Box, Typography, useTheme } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import AppsIcon from "@mui/icons-material/Apps";
import SyncIcon from "@mui/icons-material/Sync";

const features = [
  {
    icon: <ComputerIcon sx={{ fontSize: 36 }} />,
    title: "Escaneo automático del equipo",
    text: "El agente GLPI analiza cada computador y detecta hardware como procesador, memoria, discos y red sin intervención manual.",
  },
  {
    icon: <AppsIcon sx={{ fontSize: 36 }} />,
    title: "Inventario de software",
    text: "Registra automáticamente programas instalados, versiones y sistemas operativos para un control total.",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 36 }} />,
    title: "Información siempre actualizada",
    text: "Cada cambio en el equipo se sincroniza con GLPI, manteniendo el inventario actualizado en tiempo real.",
  },
  {
    icon: <SyncIcon sx={{ fontSize: 36 }} />,
    title: "Integración directa con GLPI",
    text: "Toda la información recolectada se centraliza en GLPI para facilitar reportes y decisiones.",
  },
];

export default function InventoryAgentSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        background: isDark
          ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
          : "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",

      }}
    >
      {/* TÍTULO */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          fontWeight={900}
          sx={{
            fontSize: { xs: "1.7rem", md: "2.2rem" },
            mb: 2,
          }}
        >
          Inventario Automático de Activos TI
        </Typography>

        <Typography
          sx={{
            maxWidth: 700,
            mx: "auto",
            color: theme.palette.text.secondary,
          }}
        >
          Con el agente GLPI, cada equipo se escanea automáticamente para
          mantener un inventario preciso, actualizado y centralizado.
        </Typography>
      </Box>

      {/* GRID DE CARDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 3,
              borderRadius: 3,
              background: isDark
                ? "rgba(255,255,255,0.06)"
                : "#ffffff",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(255,255,255,0.08)"
                : "#dbe3ff",
              boxShadow: "0 8px 25px rgba(28,66,174,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 30px rgba(28,66,174,0.18)",
              },
            }}
          >
            <Box
              sx={{
                mb: 2,
                color: "#1c42ae",
              }}
            >
              {item.icon}
            </Box>

            <Typography fontWeight={700} mb={1}>
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* MENSAJE FINAL */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography fontWeight={700}>
          Menos trabajo manual. Más control sobre tu infraestructura TI.
        </Typography>
      </Box>
    </Box>
  );
}
