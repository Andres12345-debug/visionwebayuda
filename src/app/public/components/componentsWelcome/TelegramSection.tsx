import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import TelegramIcon from "@mui/icons-material/Telegram";
import GradientText from "../ui/GradientText";
import PrimaryButton from "../ui/PrimaryButton";

const TELEGRAM_BOT_URL = "https://t.me/JuliCalendarBot";
const TELEGRAM_GRADIENT = "linear-gradient(90deg, #2AABEE, #229ED9)";

export default function TelegramSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const PREVIEW_MESSAGES = [
    { role: "user" as const, text: t("telegramSection.previewQ1") },
    { role: "model" as const, text: t("telegramSection.previewA1") },
    { role: "user" as const, text: t("telegramSection.previewQ2") },
  ];

  const handleAbrirTelegram = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2 }}>
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
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
            <GradientText gradient={TELEGRAM_GRADIENT}>{t("telegramSection.titulo")}</GradientText>
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
            {t("telegramSection.descripcion")}
          </Typography>

          <PrimaryButton
            size="large"
            startIcon={<TelegramIcon />}
            onClick={handleAbrirTelegram}
            sx={{
              px: 5,
              py: 1.6,
              background: TELEGRAM_GRADIENT,
              boxShadow: "0 8px 20px rgba(34,158,217,0.35)",
              "&:hover": {
                background: "linear-gradient(90deg, #229ED9, #1c87ba)",
              },
            }}
          >
            {t("telegramSection.boton")}
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
              : "0 24px 60px rgba(34,158,217,0.18)",
            border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e2e8f0",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: TELEGRAM_GRADIENT,
              px: 2.5,
              py: 1.6,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <TelegramIcon sx={{ color: "#fff", fontSize: 24 }} />
            <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>
              {t("telegramSection.previewHeader")}
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
                        ? TELEGRAM_GRADIENT
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
