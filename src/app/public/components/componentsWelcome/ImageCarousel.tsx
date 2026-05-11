// src/components/ImageCarousel.tsx
import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  useTheme,
  Chip,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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

export default function ImageCarousel({
  slides: externalSlides,
  autoPlay = true,
  interval = 4500,
}: Props) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(autoPlay);

  const DEFAULT_SLIDES: Slide[] = [
    {
      src: require("../../../../assets/img/welcome/SolucionDeProblemas.png"),
      title: t("imageCarousel.slide1Title"),
      caption: t("imageCarousel.slide1Caption"),
      ctaText: t("imageCarousel.slide1Cta"),
    },
    {
      src: require("../../../../assets/img/welcome/PresentacionDelServicio.png"),
      title: t("imageCarousel.slide2Title"),
      caption: t("imageCarousel.slide2Caption"),
      ctaText: t("imageCarousel.slide2Cta"),
    },
    {
      src: require("../../../../assets/img/welcome/SolucionesTics.png"),
      title: t("imageCarousel.slide3Title"),
      caption: t("imageCarousel.slide3Caption"),
      ctaText: t("imageCarousel.slide3Cta"),
    },
  ];

  const slides = externalSlides ?? DEFAULT_SLIDES;
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

  // Manejo de teclado para accesibilidad
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

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
       <Tooltip title={t("imageCarousel.anterior")}>
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
             transition: "all 0.3s ease",
             "&:hover": { 
               bgcolor: "rgba(255,255,255,.35)",
               transform: "translateY(-50%) scale(1.1)"
             },
           }}
           aria-label={t("imageCarousel.anterior")}
         >
           <KeyboardArrowLeft />
         </IconButton>
       </Tooltip>

       <Tooltip title={t("imageCarousel.siguiente")}>
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
             transition: "all 0.3s ease",
             "&:hover": { 
               bgcolor: "rgba(255,255,255,.35)",
               transform: "translateY(-50%) scale(1.1)"
             },
           }}
           aria-label={t("imageCarousel.siguiente")}
         >
           <KeyboardArrowRight />
         </IconButton>
       </Tooltip>

      {/* PLAY / PAUSE */}
       <Tooltip title={playing ? t("imageCarousel.pausar") : t("imageCarousel.reproducir")}>
         <IconButton
           onClick={() => setPlaying((p) => !p)}
           sx={{
             position: "absolute",
             top: 20,
             right: 20,
             backdropFilter: "blur(10px)",
             bgcolor: "rgba(255,255,255,.2)",
             color: "#fff",
             transition: "all 0.3s ease",
             "&:hover": { 
               bgcolor: "rgba(255,255,255,.35)",
               transform: "scale(1.1)"
             },
           }}
           aria-label={playing ? t("imageCarousel.pausar") : t("imageCarousel.reproducir")}
         >
           {playing ? <PauseIcon /> : <PlayArrowIcon />}
         </IconButton>
       </Tooltip>

       {/* CONTADOR DE SLIDES */}
       <Box
         sx={{
           position: "absolute",
           top: 20,
           left: 20,
           backdropFilter: "blur(10px)",
           bgcolor: "rgba(255,255,255,.15)",
           color: "#fff",
           px: 2,
           py: 1,
           borderRadius: 3,
           fontSize: "0.9rem",
           fontWeight: 600,
         }}
       >
         {active + 1} / {total}
       </Box>

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
            <Tooltip key={i} title={t("imageCarousel.irSlide", { n: i + 1 })}>
              <Box
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
                  "&:hover": {
                    bgcolor: active === i ? "secondary.main" : "rgba(255,255,255,.8)",
                  }
                }}
                role="button"
                tabIndex={0}
                aria-current={active === i}
                aria-label={t("imageCarousel.irSlide", { n: i + 1 })}
              />
            </Tooltip>
          ))}
      </Box>
    </Box>
  );
}
