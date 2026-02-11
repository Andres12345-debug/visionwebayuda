import { Box, Typography, Button, useTheme } from "@mui/material";

export default function FinalCTA() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        background: isDark
          ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
          : "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          textAlign: "center",
          borderRadius: 5,
          py: { xs: 4, md: 6 },
          px: { xs: 3, md: 6 },
          background: "linear-gradient(135deg, #1c42ae, #42BFA7)", // 🔥 este es solo de la tarjeta
          boxShadow: "0 15px 40px rgba(28,66,174,0.25)",
          color: "#fff",
        }}
      >
        <Typography
          fontWeight={900}
          sx={{
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            mb: 1.5,
          }}
        >
          Lleva tu área TIC al siguiente nivel
        </Typography>

        <Typography
          sx={{
            mb: 3,
            opacity: 0.95,
            fontSize: "1rem",
          }}
        >
          Implementa una mesa de ayuda profesional hoy mismo.
        </Typography>

        <Button
          size="large"
          sx={{
            px: 5,
            py: 1.4,
            borderRadius: 3,
            fontWeight: 700,
            textTransform: "none",
            background: "#ffffff",
            color: "#1c42ae",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
              background: "#f5f5f5",
            },
          }}
        >
          Solicitar asesoría
        </Button>
      </Box>
    </Box>
  );
}
