import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const faqs = [
    {
      question: "¿Qué es una mesa de ayuda?",
      answer:
        "Es un sistema que centraliza todas las solicitudes de soporte técnico, permitiendo organizarlas, asignarlas y darles seguimiento de manera eficiente.",
    },
    {
      question: "¿La plataforma funciona en la nube?",
      answer:
        "Sí, puede implementarse en la nube o en servidores locales según las necesidades de tu empresa.",
    },
    {
      question: "¿Puedo gestionar inventario de equipos?",
      answer:
        "Sí. La plataforma permite registrar equipos, licencias, responsables, historial de mantenimiento y más.",
    },
    {
      question: "¿Se pueden generar reportes?",
      answer:
        "Claro. Puedes visualizar métricas de tiempos de respuesta, tickets atendidos y rendimiento del área TI.",
    },
    {
      question: "¿Ofrecen soporte después de la implementación?",
      answer:
        "Sí, ofrecemos acompañamiento continuo, soporte técnico y mejoras según el crecimiento de tu operación.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        borderRadius: 4,
        background: isDark
          ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
          : "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          textAlign: "center"
        }}
      >
        Preguntas{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg, #6366f1, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Frecuentes
        </Box>
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          disableGutters
          sx={{
            mb: 2,
            borderRadius: 3,
            overflow: "hidden",
            background: isDark
              ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
              : "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",

            boxShadow: "0 6px 18px rgba(28,66,174,0.08)",
            border: "1px solid",
            borderColor: isDark ? "rgba(255,255,255,0.08)" : "#e3e8f5",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0 10px 25px rgba(28,66,174,0.15)",
              transform: "translateY(-2px)",
            },
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#1c42ae" }} />
            }
          >
            <Typography
              fontWeight={700}
              sx={{
                fontSize: "1rem",
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
