// src/components/ImageCarousel.tsx
import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

type Slide = {
  src: string;
  title?: string;
  caption?: string;
  ctaText?: string;
  ctaHref?: string;
};

type Props = {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;
};

const DEFAULT_SLIDES: Slide[] = [
  {
    src: require("../../../assets/img/welcome/SolucionDeProblemas.png"),
    title: "Soporte Técnico Organizado",
    caption:
      "Centraliza solicitudes, asigna técnicos y lleva historial completo.",
    ctaText: "Saber más",
  },
  {
    src: require("../../../assets/img/welcome/PresentacionDelServicio.png"),
    title: "Control Total de Activos",
    caption:
      "Registra equipos, responsables y mantenimientos en un solo lugar.",
    ctaText: "Iniciar",
  },
  {
    src: require("../../../assets/img/welcome/SolucionesTics.png"),
    title: "Gestión TIC Profesional",
    caption:
      "Métricas, tiempos de respuesta y reportes en tiempo real.",
    ctaText: "Ver más",
  },
];

export default function ImageCarousel({
  slides = DEFAULT_SLIDES,
  autoPlay = true,
  interval = 4500,
}: Props) {
  const theme = useTheme();
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(autoPlay);
  const total = slides.length;

  const next = React.useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = React.useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [playing, next, interval]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 420, md: "100vh" },
        overflow: "hidden",
        borderRadius: 3,        
      }}
    >
      {/* SLIDES */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${active * 100}%)`,
          transition: "transform 900ms cubic-bezier(.22,.61,.36,1)",
        }}
      >
        {slides.map((slide, i) => (
          <Box
            key={i}
            sx={{
              minWidth: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={slide.src}
              alt={slide.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark"
                    ? "brightness(.75)"
                    : "brightness(.9)",
                transform: active === i ? "scale(1.05)" : "scale(1)",
                transition: "transform 6s ease",
              }}
            />

            {/* Overlay elegante */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,.3) 40%, rgba(0,0,0,0) 80%)",
              }}
            />

            {/* TEXTO */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: 20, md: 80 },
                transform: "translateY(-50%)",
                color: "#fff",
                maxWidth: { xs: "85%", md: 500 },
              }}
            >
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{
                  mb: 2,
                  fontSize: { xs: "1.6rem", md: "2.8rem" },
                }}
              >
                {slide.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  opacity: 0.95,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                {slide.caption}
              </Typography>

              {slide.ctaText && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: 4,
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  {slide.ctaText}
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* FLECHAS */}
      <IconButton
        onClick={() => {
          setPlaying(false);
          prev();
        }}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          backdropFilter: "blur(10px)",
          bgcolor: "rgba(255,255,255,.2)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(255,255,255,.35)" },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={() => {
          setPlaying(false);
          next();
        }}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          backdropFilter: "blur(10px)",
          bgcolor: "rgba(255,255,255,.2)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(255,255,255,.35)" },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* PLAY / PAUSE */}
      <IconButton
        onClick={() => setPlaying((p) => !p)}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          backdropFilter: "blur(10px)",
          bgcolor: "rgba(255,255,255,.2)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(255,255,255,.35)" },
        }}
      >
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      {/* INDICADORES PREMIUM */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => {
              setPlaying(false);
              setActive(i);
            }}
            sx={{
              width: active === i ? 40 : 12,
              height: 12,
              borderRadius: 6,
              bgcolor: active === i ? "secondary.main" : "rgba(255,255,255,.5)",
              transition: "all .3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
