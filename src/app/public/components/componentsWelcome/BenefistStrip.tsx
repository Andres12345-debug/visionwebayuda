import { Box, Typography, useTheme } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";

export default function BenefitsStrip() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const items = [
    { icon: <SpeedIcon fontSize="large" />, text: "Implementación rápida" },
    { icon: <TrendingUpIcon fontSize="large" />, text: "Mayor productividad" },
    { icon: <GroupsIcon fontSize="large" />, text: "Mejor colaboración" },
    { icon: <SecurityIcon fontSize="large" />, text: "Datos seguros" },
  ];

  return (
    <Box
      sx={{
        py: { xs: 5, md: 6 },
        px: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: { xs: 4, md: 6 },
        background: isDark
          ? "linear-gradient(180deg,#0f172a,#0b1220)"
          : "linear-gradient(180deg,#f8fafc,#ffffff)",
      }}
    >
      {items.map((item, i) => (
        <Box
          key={i}
          sx={{
            minWidth: 180,
            textAlign: "center",
            transition: "all .3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
            },
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              margin: "0 auto 16px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: isDark
                ? "rgba(255,255,255,.05)"
                : "rgba(99,102,241,.08)",
              color: "primary.main",
              transition: "all .3s ease",

              "&:hover": {
                background: "primary.main",
                color: "#ffffff",
                boxShadow: "0 10px 25px rgba(99,102,241,0.35)",
              },
            }}
          >
            {item.icon}
          </Box>

          <Typography
            fontWeight={700}
            sx={{
              fontSize: "1rem",
              color: isDark ? "rgba(255,255,255,.9)" : "text.primary",
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
