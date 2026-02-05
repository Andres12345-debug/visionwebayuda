import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQSection() {
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
        "Claro. Puedes visualizar métricas de tiempos de respuesta, tickets atendidos, rendimiento del área TI y más.",
    },
    {
      question: "¿Ofrecen soporte después de la implementación?",
      answer:
        "Sí, ofrecemos acompañamiento continuo, soporte técnico y mejoras según el crecimiento de tu operación.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 8 }, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" fontWeight={800} textAlign="center" mb={6}>
        Preguntas Frecuentes
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            borderRadius: 3,
            boxShadow: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{faq.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography color="text.secondary">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
