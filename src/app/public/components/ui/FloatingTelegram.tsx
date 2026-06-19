import { Box, Tooltip, keyframes } from "@mui/material";
import { useTranslation } from "react-i18next";
import TelegramIcon from "@mui/icons-material/Telegram";

const TELEGRAM_BOT_URL = "https://t.me/JuliCalendarBot";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(38, 165, 228, 0.55); }
  70% { box-shadow: 0 0 0 14px rgba(38, 165, 228, 0); }
  100% { box-shadow: 0 0 0 0 rgba(38, 165, 228, 0); }
`;

export const FloatingTelegram = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 2000,
      }}
    >
      <Tooltip title={t("floatingTelegram.tooltip")} placement="right">
        <Box
          component="a"
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2.5,
            py: 1.5,
            borderRadius: "999px",
            textDecoration: "none",
            background: "linear-gradient(135deg, #2AABEE, #229ED9)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.9rem",
            boxShadow: "0 10px 25px rgba(34,158,217,0.4)",
            animation: `${pulse} 2.4s infinite`,
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #229ED9, #1c87ba)",
              transform: "scale(1.05)",
            },
          }}
        >
          <TelegramIcon sx={{ fontSize: 26 }} />
          {t("floatingTelegram.etiqueta")}
        </Box>
      </Tooltip>
    </Box>
  );
};
