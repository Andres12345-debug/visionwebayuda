import { Box, Typography, useTheme } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useRef } from "react";

export default function StepsSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <SecurityIcon fontSize="large" />,
      title: "Seguridad y control",
      desc: "Protegemos la información del área TIC con accesos controlados, registros auditables y trazabilidad completa.",
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: "Optimización del tiempo",
      desc: "Reducimos los tiempos de atención centralizando solicitudes, automatizando procesos y priorizando incidencias.",
    },
    {
      icon: <VisibilityIcon fontSize="large" />,
      title: "Trazabilidad total",
      desc: "Cada ticket, activo y cambio queda documentado, permitiendo seguimiento histórico y control en tiempo real.",
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: "Mejora continua",
      desc: "Analizamos métricas y reportes para optimizar el rendimiento del soporte técnico y la gestión TIC.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 6 },
        background: isDark
          ? "linear-gradient(180deg,#0b1220,#0f172a)"
          : "linear-gradient(180deg,#ffffff,#f8fafc)",
      }}
    >
      {/* TÍTULO */}
      <Typography
        textAlign="center"
        fontWeight={800}
        mb={{ xs: 6, md: 8 }}
        sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" } }}
      >
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg, #6366f1, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Beneficios{" "}
        </Box>
        clave para tu área TIC
      </Typography>

      {/* CONTENEDOR RESPONSIVE */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: { xs: "flex", md: "grid" },
          gap: { xs: 3, md: 6 },
          maxWidth: 1200,
          mx: { xs: -2, md: "auto" },

          gridTemplateColumns: {
            md: "repeat(4, 1fr)",
          },

          // Mobile: Scroll horizontal optimizado
          overflowX: { xs: "auto", md: "visible" },
          scrollSnapType: { xs: "x mandatory", md: "none" },
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",

          // Ocultar scrollbar
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",

          // Padding lateral para espacio
          px: { xs: 2, md: 0 },
        }}
      >
        {steps.map((step, i) => (
          <Box
            key={i}
            sx={{
              // Mobile: Ancho fijo para scroll
              minWidth: { xs: "280px", sm: "320px", md: "auto" },
              flexShrink: 0,
              scrollSnapAlign: { xs: "center", md: "none" },
              scrollSnapStop: { xs: "always", md: "normal" },

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
            {/* Ícono */}
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
                background:
                  "linear-gradient(135deg, #6366f1, #9333ea)",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(99,102,241,0.35)",
              }}
            >
              {step.icon}
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

      {/* INDICADORES DE DESLIZAMIENTO (solo mobile) */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          gap: 1,
          mt: 4,
        }}
      >
        {steps.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: isDark 
                ? "rgba(255,255,255,0.25)" 
                : "rgba(99,102,241,0.25)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}