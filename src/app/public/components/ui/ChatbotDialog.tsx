import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { AsistenteService, ChatMessage, RateLimitError } from "../../../services/asistente/AsistenteService";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ChatbotDialog({ open, onClose }: Props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const WELCOME: ChatMessage = {
    role: "model",
    text: t("chatbot.welcome"),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = { role: "user", text };
    const history = messages.slice(1); // exclude welcome from API history
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await AsistenteService.preguntar(text, history);
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (err) {
      const errorText = err instanceof RateLimitError
        ? t("chatbot.rateLimitError")
        : t("chatbot.genericError");
      setMessages((prev) => [...prev, { role: "model", text: errorText }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 100,
        right: 24,
        width: { xs: "calc(100vw - 48px)", sm: 370 },
        maxHeight: 520,
        zIndex: 2001,
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: isDark
          ? "0 24px 60px rgba(0,0,0,0.7)"
          : "0 24px 60px rgba(99,102,241,0.2)",
        border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e2e8f0",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #6366f1, #9333ea)",
          px: 2.5,
          py: 1.8,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <SmartToyIcon sx={{ color: "#fff", fontSize: 26 }} />
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>
            {t("chatbot.title")}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.72rem" }}>
            {t("chatbot.subtitle")}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ color: "#fff" }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* MESSAGES */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 2,
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          backgroundColor: isDark ? "#0f172a" : "#f8fafc",
          "&::-webkit-scrollbar": { width: 4 },
          "&::-webkit-scrollbar-thumb": {
            background: isDark ? "#334155" : "#cbd5e1",
            borderRadius: 4,
          },
        }}
      >
        {messages.map((msg, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Box
              sx={{
                maxWidth: "80%",
                px: 2,
                py: 1.2,
                borderRadius:
                  msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                background:
                  msg.role === "user"
                    ? "linear-gradient(90deg, #6366f1, #9333ea)"
                    : isDark
                    ? "#1e293b"
                    : "#ffffff",
                color:
                  msg.role === "user"
                    ? "#fff"
                    : isDark
                    ? "#e2e8f0"
                    : "#1e293b",
                fontSize: "0.88rem",
                lineHeight: 1.6,
                boxShadow: isDark
                  ? "0 2px 8px rgba(0,0,0,0.3)"
                  : "0 2px 8px rgba(0,0,0,0.06)",
                border: msg.role === "model"
                  ? isDark ? "1px solid #334155" : "1px solid #e2e8f0"
                  : "none",
                whiteSpace: "pre-wrap",
              }}
            >
              {msg.text}
            </Box>
          </Box>
        ))}

        {loading && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                px: 2,
                py: 1.2,
                borderRadius: "18px 18px 18px 4px",
                background: isDark ? "#1e293b" : "#ffffff",
                border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CircularProgress size={14} sx={{ color: "#6366f1" }} />
              <Typography sx={{ fontSize: "0.82rem", color: isDark ? "#94a3b8" : "#64748b" }}>
                {t("chatbot.typing")}
              </Typography>
            </Box>
          </Box>
        )}

        <div ref={bottomRef} />
      </Box>

      {/* INPUT */}
      <Box
        sx={{
          px: 2,
          py: 1.5,
          backgroundColor: isDark ? "#111827" : "#ffffff",
          borderTop: isDark ? "1px solid #1e293b" : "1px solid #e2e8f0",
          display: "flex",
          gap: 1,
          alignItems: "flex-end",
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={3}
          size="small"
          placeholder={t("chatbot.placeholder")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              fontSize: "0.88rem",
              backgroundColor: isDark ? "#1e293b" : "#f8fafc",
              "& fieldset": {
                borderColor: isDark ? "#334155" : "#e2e8f0",
              },
              "&:hover fieldset": { borderColor: "#6366f1" },
              "&.Mui-focused fieldset": { borderColor: "#6366f1" },
            },
          }}
        />
        <IconButton
          onClick={handleSend}
          disabled={!input.trim() || loading}
          sx={{
            background: "linear-gradient(90deg, #6366f1, #9333ea)",
            color: "#fff",
            width: 40,
            height: 40,
            flexShrink: 0,
            "&:hover": { background: "linear-gradient(90deg, #4f46e5, #7e22ce)" },
            "&.Mui-disabled": { background: isDark ? "#334155" : "#e2e8f0", color: isDark ? "#64748b" : "#94a3b8" },
          }}
        >
          <SendIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
