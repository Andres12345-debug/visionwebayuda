// src/components/ImageCarousel.tsx
import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  useTheme,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
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
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        position: "relative",
        height: { xs: 420, md: "100vh" },
      }}
    >
      {/* VIEWPORT */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          borderRadius: 4,
        }}
      >
        {/* TRACK */}
        <Box
          sx={{
            display: "flex",
            width: `${slides.length * 100}%`,
            height: "100%",
            transform: `translateX(-${active * (100 / slides.length)}%)`,
            transition: "transform 900ms cubic-bezier(.22,.61,.36,1)",
            willChange: "transform",
          }}
        >
          {slides.map((slide, i) => (
            <Box
              key={i}
              sx={{
                flex: "0 0 100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* IMAGE */}
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
                      ? "brightness(.72)"
                      : "brightness(.88)",

                  transform:
                    active === i ? "scale(1.015)" : "scale(1)",

                  transition: "transform 7s ease",
                  backfaceVisibility: "hidden",
                }}
              />

              {/* OVERLAY */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: `
                    linear-gradient(
                      90deg,
                      rgba(15,23,42,.88) 0%,
                      rgba(15,23,42,.55) 30%,
                      rgba(15,23,42,.15) 65%,
                      rgba(15,23,42,0) 100%
                    )
                  `,
                }}
              />

              {/* TEXT */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: 20, md: 80 },
                  transform: "translateY(-50%)",
                  color: "#fff",
                  maxWidth: { xs: "85%", md: 520 },
                  zIndex: 2,

                  opacity: active === i ? 1 : 0,
                  transition: "all 700ms ease",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight={800}
                  sx={{
                    mb: 2,
                    fontSize: { xs: "1.8rem", md: "3rem" },
                    lineHeight: 1.1,
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  sx={{
                    mb: 3,
                    opacity: 0.9,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {slide.caption}
                </Typography>

                {slide.ctaText && (
                  <Button
                    sx={{
                      borderRadius: 999,
                      px: 4,
                      py: 1.2,
                      fontWeight: 700,
                      textTransform: "none",

                      background: `
                        linear-gradient(
                          90deg,
                          #3b82f6,
                          #8b5cf6
                        )
                      `,

                      color: "#fff",
                      boxShadow: "0 14px 30px rgba(59,130,246,.25)",

                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 18px 40px rgba(139,92,246,.35)",
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

        {/* LEFT */}
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
              backdropFilter: "blur(14px)",
              background: "rgba(255,255,255,.12)",
              color: "#fff",
              "&:hover": {
                background: "rgba(255,255,255,.25)",
              },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
        </Tooltip>

        {/* RIGHT */}
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
              backdropFilter: "blur(14px)",
              background: "rgba(255,255,255,.12)",
              color: "#fff",
              "&:hover": {
                background: "rgba(255,255,255,.25)",
              },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Tooltip>

        {/* PLAY / PAUSE */}
        <IconButton
          onClick={() => setPlaying((p) => !p)}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            backdropFilter: "blur(14px)",
            background: "rgba(255,255,255,.12)",
            color: "#fff",
          }}
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        {/* COUNTER */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            backdropFilter: "blur(14px)",
            background: "rgba(255,255,255,.12)",
            color: "#fff",
            px: 2,
            py: 1,
            borderRadius: 999,
          }}
        >
          {active + 1} / {total}
        </Box>

        {/* INDICATORS */}
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
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
                width: active === i ? 40 : 10,
                height: 10,
                borderRadius: 999,
                cursor: "pointer",
                background:
                  active === i
                    ? "linear-gradient(90deg,#3b82f6,#8b5cf6)"
                    : "rgba(255,255,255,.35)",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}