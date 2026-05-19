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
    {
      question: t("faqs.q6"),
      answer: t("faqs.a6"),
    },
    {
      question: t("faqs.q7"),
      answer: t("faqs.a7"),
    },
  ];

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        borderRadius: 4,
        //background: isDark
          //? "linear-gradient(180deg, #000000 0%, #020617 100%)"
          //: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* CONTENEDOR CENTRAL */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",

              fontSize: {
                xs: "1.9rem",
                sm: "2.2rem",
                md: "2.8rem",
              },

              mb: 2,
            }}
          >
            {t("faqs.titulo")}{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #6366f1, #9333ea)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",

                filter: "saturate(1.3) contrast(1.05)",
              }}
            >
              {t("faqs.tituloGradient")}
            </Box>
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,

              fontSize: {
                xs: "0.98rem",
                md: "1.05rem",
              },
            }}
          >
            {t(
              "faqs.subtitulo",
              "Encuentra respuestas rápidas sobre nuestra plataforma, funcionalidades y servicios."
            )}
          </Typography>
        </Box>

        {/* FAQ LIST */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.2,
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                borderRadius: 3,
                overflow: "hidden",

                position: "relative",

                background: isDark
                  ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
                  : "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",

                border: "1px solid",

                borderColor: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "#e2e8f0",

                boxShadow: isDark
                  ? "0 10px 30px rgba(0,0,0,.35)"
                  : "0 10px 30px rgba(15,23,42,.06)",

                transition:
                  "transform .25s ease, box-shadow .25s ease",

                "&:hover": {
                  transform: "translateY(-2px)",

                  boxShadow: isDark
                    ? "0 18px 40px rgba(0,0,0,.45)"
                    : "0 18px 40px rgba(15,23,42,.10)",
                },

                "&::before": {
                  display: "none",
                },

                /* barra superior premium */
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",

                 
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#6366f1",
                      transition: "0.25s ease",
                    }}
                  />
                }
                sx={{
                  px: { xs: 2.5, md: 3.5 },
                  py: 0.6,

                  "& .MuiAccordionSummary-content": {
                    my: 1.2,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.4,

                    fontSize: {
                      xs: "0.98rem",
                      md: "1.05rem",
                    },

                    color: isDark
                      ? "#ffffff"
                      : theme.palette.text.primary,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: { xs: 2.5, md: 3.5 },
                  pb: 3,
                  pt: 0,
                }}
              >
                <Typography
                  sx={{
                    color: isDark
                      ? "rgba(255,255,255,.72)"
                      : theme.palette.text.secondary,

                    lineHeight: 1.8,

                    fontSize: {
                      xs: "0.94rem",
                      md: "0.98rem",
                    },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}