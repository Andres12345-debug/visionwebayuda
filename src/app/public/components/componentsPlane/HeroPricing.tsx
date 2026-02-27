import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const HeroPricing = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "80px 20px 40px",
        // Usa la paleta del tema, no valores hardcodeados
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, #000 100%)"
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, #fff 100%)",
        transition: theme.transitions.create("all"),
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 900,
          lineHeight: 1.1,
          maxWidth: "800px",
          margin: "0 auto 20px",
          color: theme.palette.text.primary,
        }}
      >
        Planes que crecen con tu{" "}
        <Typography component="span" sx={{ color: theme.palette.primary.main }}>
          empresa
        </Typography>
      </Typography>

      <Typography
        sx={{
          fontSize: "18px",
          color: theme.palette.text.secondary,
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        Olvídate de los costos sorpresa. Con VISIONWeb pagas una tarifa fija
        mensual por cada equipo y nosotros nos encargamos del resto.
      </Typography>
    </Box>
  );
};

export default HeroPricing;
