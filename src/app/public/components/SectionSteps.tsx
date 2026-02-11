import { Box, Typography, useTheme } from "@mui/material";

export default function StepsSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const steps = [
    { title: "Analizamos tu operación", desc: "Estudiamos tu flujo de soporte y detectamos oportunidades de mejora." },
    { title: "Configuramos la plataforma", desc: "Adaptamos el sistema a los procesos reales de tu empresa." },
    { title: "Capacitamos tu equipo", desc: "Entrenamiento práctico para una adopción rápida y efectiva." },
    { title: "Optimización continua", desc: "Mejoramos con métricas reales y seguimiento constante." },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: 2,
        background: isDark
          ? "linear-gradient(180deg,#0b1220,#0f172a)"
          : "linear-gradient(180deg,#ffffff,#f8fafc)",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={800}
        mb={{ xs: 6, md: 8 }}
        sx={{
          fontSize: { xs: "1.8rem", md: "2.3rem" },
        }}
      >
        Cómo trabajamos contigo
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 4, md: 6 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {steps.map((step, i) => (
          <Box
            key={i}
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              transition: "all .3s ease",
              background: isDark
                ? "rgba(255,255,255,0.03)"
                : "#ffffff",
              border: isDark
                ? "1px solid rgba(255,255,255,0.05)"
                : "1px solid #f1f5f9",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: isDark
                  ? "0 15px 35px rgba(0,0,0,0.4)"
                  : "0 15px 35px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* Número */}
            <Box
              sx={{
                width: 65,
                height: 65,
                borderRadius: "50%",
                mx: "auto",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 22,
                background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(99,102,241,0.35)",
              }}
            >
              {i + 1}
            </Box>

            <Typography
              fontWeight={700}
              mb={1}
              sx={{
                fontSize: "1.05rem",
                color: isDark ? "#ffffff" : "text.primary",
              }}
            >
              {step.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: isDark
                  ? "rgba(255,255,255,.7)"
                  : "text.secondary",
                lineHeight: 1.5,
              }}
            >
              {step.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
