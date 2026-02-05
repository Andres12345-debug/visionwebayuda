import { Box, Typography } from "@mui/material";

export default function StepsSection() {
  const steps = [
    { title: "Analizamos tu operación", desc: "Estudiamos tu flujo de soporte." },
    { title: "Configuramos la plataforma", desc: "Adaptamos todo a tu empresa." },
    { title: "Capacitamos tu equipo", desc: "Entrenamiento práctico." },
    { title: "Optimización continua", desc: "Mejoramos con métricas reales." },
  ];

  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h4" textAlign="center" fontWeight={800} mb={8}>
        Cómo trabajamos contigo
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
        {steps.map((step, i) => (
          <Box key={i} sx={{ maxWidth: 250, textAlign: "center" }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                bgcolor: "primary.main",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 20,
                mx: "auto",
                mb: 2,
              }}
            >
              {i + 1}
            </Box>
            <Typography fontWeight={700}>{step.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {step.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
