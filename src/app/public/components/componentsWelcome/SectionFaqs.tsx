import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faqs.q1"),
      answer: t("faqs.a1"),
    },
    {
      question: t("faqs.q2"),
      answer: t("faqs.a2"),
    },
    {
      question: t("faqs.q3"),
      answer: t("faqs.a3"),
    },
    {
      question: t("faqs.q4"),
      answer: t("faqs.a4"),
    },
    {
      question: t("faqs.q5"),
      answer: t("faqs.a5"),
    },
  ];

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        borderRadius: 4,
        background: isDark
          ? "linear-gradient(180deg, #000000, #000000)"
          : "linear-gradient(180deg, #ffffff, #f8fafc)",
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        {t("faqs.titulo")}{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg, #6366f1, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          {t("faqs.tituloGradient")}
        </Box>
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          disableGutters
          sx={{
            mb: 3,
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
