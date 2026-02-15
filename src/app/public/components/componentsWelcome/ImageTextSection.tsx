import { Box, Typography, Button, useTheme } from "@mui/material";

export const ImageTextSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        px: { xs: 3, md: 8 },
        py: 12,
        background: isDark
          ? "linear-gradient(180deg, #0f172a 0%, #0b1120 100%)"
          : "linear-gradient(180deg, #f0f6ff 0%, #ffffff 100%)",
      }}
    >
      {/* IMAGEN */}
      <Box
        component="img"
        src="https://mac-center.com/cdn/shop/files/Diseno_sin_titulo_18_1500x.png?v=1755698692"
        alt="Servicio"
        loading="lazy"
        sx={{
          width: { xs: "100%", md: "50%" },
          borderRadius: 4,
          objectFit: "cover",
          border: isDark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid #e3f2fd",
          boxShadow: isDark
            ? "0 10px 30px rgba(0,0,0,0.5)"
            : "0 15px 40px rgba(25,118,210,0.15)",
          transition: "0.4s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      />

      {/* TEXTO */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{
            color: isDark ? "#fff" : "primary.main",
          }}
        >
          Con nuestro servicio
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: isDark
              ? "rgba(255,255,255,0.75)"
              : "text.secondary",
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          Hablas cara a cara con un experto que te guía mientras compras tus
          productos en tiempo real, resolviendo dudas y optimizando tu decisión.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            alignSelf: { xs: "center", md: "flex-start" },
            borderRadius: 3,
            textTransform: "none",
            px: 5,
            py: 1.6,
            fontWeight: 700,
            fontSize: 15,
            background:
              "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            boxShadow: "0 8px 20px rgba(25,118,210,0.3)",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 12px 25px rgba(25,118,210,0.4)",
              background:
                "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
            },
          }}
        >
          Iniciar Llamada
        </Button>
      </Box>
    </Box>
  );
};
