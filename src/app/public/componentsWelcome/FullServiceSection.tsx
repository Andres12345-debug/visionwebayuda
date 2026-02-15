import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function StepsSection() {
  const theme = useTheme();

  const steps = [
    {
      title: "Analizamos tu operación",
      desc: "Estudiamos tu flujo de soporte.",
    },
    {
      title: "Configuramos la plataforma",
      desc: "Adaptamos todo a tu empresa.",
    },
    {
      title: "Capacitamos tu equipo",
      desc: "Entrenamiento práctico.",
    },
    {
      title: "Optimización continua",
      desc: "Mejoramos con métricas reales.",
    },
  ];

  const loopSteps = [...steps, ...steps];

  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: 12,
        px: 2,
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(180deg, #0f172a 0%, #0b1120 100%)"
          : "linear-gradient(180deg, #f0f6ff 0%, #ffffff 100%)",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={800}
        mb={10}
        sx={{
          color: isDark ? "#fff" : "primary.main",
        }}
      >
        Cómo trabajamos contigo
      </Typography>

      <Box sx={{ overflow: "hidden" }}>
        <motion.div
          style={{
            display: "flex",
            gap: "40px",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "linear",
          }}
        >
          {loopSteps.map((step, i) => (
            <Box
              key={i}
              sx={{
                minWidth: 280,
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "#ffffff",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid #e3f2fd",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: isDark
                    ? "0 10px 25px rgba(0,0,0,0.5)"
                    : "0 10px 25px rgba(25,118,210,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  width: 65,
                  height: 65,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 22,
                  mx: "auto",
                  mb: 3,
                }}
              >
                {(i % steps.length) + 1}
              </Box>

              <Typography
                fontWeight={700}
                mb={1}
                sx={{ color: isDark ? "#fff" : "#0d47a1" }}
              >
                {step.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: isDark
                    ? "rgba(255,255,255,0.7)"
                    : "text.secondary",
                }}
              >
                {step.desc}
              </Typography>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
