import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function HelpdeskVideoSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 8 },
        // APLICAMOS EL NEGRO PURO AQUÍ
        background: isDark ? "#000000" : "#ffffff",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2rem", md: "2.8rem" },
            textAlign: "center",
            color: isDark ? "#ffffff" : "#1e293b",
          }}
        >
          Conoce nuestra{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #6366f1, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            mesa de Ayuda
          </Box>{" "}
          en acción
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Descubre cómo centralizamos el soporte técnico y la gestión de activos
          con nuestra plataforma proactiva.
        </Typography>
      </Box>

      {/* Contenedor del Video */}
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          borderRadius: 6,
          overflow: "hidden",
          // Ajustamos el borde y sombra para que se vea premium en el fondo negro
          border: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid #e2e8f0",
          boxShadow: isDark
            ? "0 0 50px rgba(99, 102, 241, 0.15)" // Resplandor púrpura sutil sobre el negro
            : "0 20px 60px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            paddingTop: "56.25%", // Relación de aspecto 16:9
          }}
        >
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/Dq2FAU9vh9w"
            title="Mesa de Ayuda GLPI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
