import { Box, Container, Typography, useTheme } from "@mui/material";

// 1. Importaciones de tus logos (Rutas confirmadas)
import logo1 from "../../logos/logo1.png";
import logo2 from "../../logos/logo2.png";
import logo3 from "../../logos/logo3.png";
import logo4 from "../../logos/logo4.png";
import logo5 from "../../logos/logo5.png";
import logo6 from "../../logos/logo6.png";

const logos: any[] = [logo1, logo2, logo3, logo4, logo5, logo6];

const ClientsSection = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                py: 10,
                // Fondo dinámico para que el texto sea legible, pero sin afectar imágenes
                backgroundColor: isDarkMode ? "background.default" : "#f5f5f5",
                overflow: "hidden",
                width: "100%"
            }}
        >
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h5" fontWeight={700} gutterBottom color="text.primary">
                        Empresas que confían en nosotros
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Organizaciones que han optimizado su infraestructura tecnológica con nuestras soluciones.
                    </Typography>
                </Box>

                {/* Contenedor del Carrusel */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "max-content",
                        animation: "scroll 25s linear infinite",
                        "@keyframes scroll": {
                            "0%": { transform: "translateX(0)" },
                            "100%": { transform: "translateX(-50%)" },
                        },
                        // Pausa el movimiento al pasar el mouse para poder ver bien los logos
                        "&:hover": {
                            animationPlayState: "paused",
                        }
                    }}
                >
                    {/* Duplicamos el contenido para el efecto infinito */}
                    {[...logos, ...logos].map((logo, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={logo?.src || logo}
                            alt={`Logo Cliente ${index}`}
                            sx={{
                                height: 60,
                                width: "auto",
                                mx: 5,
                                objectFit: "contain",
                                // Sin filtros: Color real siempre
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.1)", // Solo un pequeño aumento al pasar el mouse
                                },
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ClientsSection;