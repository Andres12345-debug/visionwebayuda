import { Box, Typography, useTheme } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GradientText from "../ui/GradientText";
import PrimaryButton from "../ui/PrimaryButton";

const PREVIEW_MESSAGES = [
  { role: "user" as const, text: "¿Qué incluye la mesa de ayuda?" },
  { role: "model" as const, text: "Implementamos GLPI para gestionar tickets, incidentes y soporte multiplataforma. ¿Quieres que te cuente más?" },
  { role: "user" as const, text: "Sí, ¿y el inventario de equipos?" },
];

export default function HablaConVisionSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleOpenChat = () => {
    window.dispatchEvent(new Event("open-vision-chat"));
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2 }}>
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, md: 8 },
        }}
      >
        {/* Texto + CTA */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2rem", md: "2.6rem" },
              lineHeight: 1.15,
              mb: 2,
              color: "text.primary",
            }}
          >
            <GradientText>Habla con Vision</GradientText>
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 4,
              lineHeight: 1.7,
              maxWidth: 480,
              mx: { xs: "auto", md: 0 },
            }}
          >
            Resuelve tus dudas al instante con nuestro asistente virtual. Pregúntale sobre mesa de ayuda, gestión de inventario TI o cualquier otro servicio de VisionWeb.
          </Typography>

          <PrimaryButton
            size="large"
            startIcon={<SmartToyIcon />}
            onClick={handleOpenChat}
            sx={{ px: 5, py: 1.6 }}
          >
            Iniciar conversación
          </PrimaryButton>
        </Box>

        {/* Mockup de chat */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: 420,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: isDark
              ? "0 24px 60px rgba(0,0,0,0.6)"
              : "0 24px 60px rgba(99,102,241,0.18)",
            border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e2e8f0",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: "linear-gradient(90deg, #6366f1, #9333ea)",
              px: 2.5,
              py: 1.6,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <SmartToyIcon sx={{ color: "#fff", fontSize: 24 }} />
            <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>
              Asistente VisionWeb
            </Typography>
          </Box>

          {/* Mensajes */}
          <Box
            sx={{
              p: 2.5,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              backgroundColor: isDark ? "#0f172a" : "#f8fafc",
            }}
          >
            {PREVIEW_MESSAGES.map((msg, i) => (
              <Box
                key={i}
                sx={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}
              >
                <Box
                  sx={{
                    maxWidth: "80%",
                    px: 2,
                    py: 1.1,
                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(90deg, #6366f1, #9333ea)"
                        : isDark ? "#1e293b" : "#ffffff",
                    color: msg.role === "user" ? "#fff" : isDark ? "#e2e8f0" : "#1e293b",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    boxShadow: isDark ? "0 2px 8px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.06)",
                    border: msg.role === "model" ? (isDark ? "1px solid #334155" : "1px solid #e2e8f0") : "none",
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
