import { Box, Typography, Button, useTheme } from "@mui/material";

export const ImageTextSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        px: { xs: 2, md: 6 },
        py: 6,
        bgcolor: theme.palette.background.default,
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
          height: "auto",
          borderRadius: 3,
          boxShadow: 3,
          objectFit: "cover",
        }}
      />

      {/* TEXTO */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          color={theme.palette.text.primary}
        >
          Con nuestro servicio
        </Typography>

        <Typography variant="body1" color={theme.palette.text.secondary}>
          hablas cara a cara con un experto que te guía mientras compras tus
          productos en tiempo real.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          href="https://mac-center.com/pages/video-commerce-ventas"
          sx={{
            mt: 2,
            borderRadius: 3,
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            boxShadow: 3,
            "&:hover": { boxShadow: 6, transform: "translateY(-2px)" },
          }}
        >
          Iniciar Llamada
        </Button>
      </Box>
    </Box>
  );
};
