import { Box, Typography, Button } from "@mui/material";
import SEO from "./SEO";

 const Error = () => {
    return (
        <Box sx={{ textAlign: "center", py: 10, px: 2 }}>
            <SEO
                title="Página no encontrada - 404 | VisionWeb System"
                description="La página que buscas no existe. Regresa al inicio de VisionWeb para encontrar lo que necesitas."
            />
            <Typography variant="h1" fontWeight={900} sx={{ fontSize: { xs: "4rem", md: "8rem" }, color: "primary.main" }}>
                404
            </Typography>
            <Typography variant="h5" fontWeight={700} mb={2}>
                Página no encontrada
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4} maxWidth={500} mx="auto">
                La ruta a la que intentas acceder no existe o ha sido movida. Verifica la dirección o regresa al inicio.
            </Typography>
            <Button variant="contained" href="/" sx={{ borderRadius: 3, textTransform: "none", fontWeight: 600 }}>
                Volver al inicio
            </Button>
        </Box>
    );
 };

 export default Error;