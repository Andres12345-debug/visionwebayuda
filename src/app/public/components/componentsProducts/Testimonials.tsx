import {
    Box,
    Container,
    Typography,
    Paper,
    Avatar,
    Rating,
    useTheme,
    Grid
} from "@mui/material";

const testimonials = [
    {
        name: "Carlos Martínez",
        role: "Gerente IT",
        company: "Empresa Logística",
        feedback:
            "La implementación fue impecable. Mejoramos nuestros tiempos de respuesta y redujimos incidentes significativamente.",
        rating: 5,
    },
    {
        name: "Laura Gómez",
        role: "Directora Administrativa",
        company: "Institución Educativa",
        feedback:
            "El acompañamiento técnico ha sido constante y profesional. La estabilidad del sistema es excelente.",
        rating: 5,
    },
    {
        name: "Andrés Ramírez",
        role: "Jefe de Tecnología",
        company: "PYME Comercial",
        feedback:
            "Las soluciones implementadas optimizaron nuestros procesos internos y mejoraron el control operativo.",
        rating: 4,
    },
];

const Testimonials = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            component="section"
            sx={{
                py: 12,
                // Aplicamos tu gradiente dinámico
                background: isDark
                    ? "linear-gradient(180deg, #000000 0%, #000000 100%)"
                    : "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
                color: "text.primary",
                transition: "all 0.4s ease",
            }}
        >
            <Container maxWidth="lg">
                {/* Encabezado */}
                <Box textAlign="center" mb={8}>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        gutterBottom
                        sx={{ color: isDark ? "#f1f5f9" : "inherit" }}
                    >
                        Lo que dicen nuestros clientes
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        maxWidth={600}
                        mx="auto"
                    >
                        Empresas que confiaron en nuestras soluciones y hoy cuentan con
                        infraestructuras más eficientes y seguras.
                    </Typography>
                </Box>

                {/* Cards Grid */}
                <Grid container spacing={4}>
                    {testimonials.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Paper
                                elevation={isDark ? 0 : 2}
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    borderRadius: 4,
                                    border: "1px solid",
                                    // Borde sutil adaptable
                                    borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "divider",
                                    // Fondo de la tarjeta adaptable
                                    bgcolor: isDark ? "rgba(30, 41, 59, 0.7)" : "background.paper",
                                    // Efecto de desenfoque solo en dark mode para estilo moderno
                                    backdropFilter: isDark ? "blur(10px)" : "none",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: isDark
                                            ? "0px 10px 30px rgba(0,0,0,0.5)"
                                            : "0px 10px 20px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                <Rating
                                    value={item.rating}
                                    readOnly
                                    sx={{ mb: 2, color: isDark ? "#fbbf24" : "#faaf00" }}
                                />

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.8}
                                    mb={3}
                                    sx={{ fontStyle: "italic" }}
                                >
                                    “{item.feedback}”
                                </Typography>

                                <Box display="flex" alignItems="center" gap={2}>
                                    <Avatar
                                        sx={{
                                            bgcolor: isDark ? "primary.light" : "primary.main",
                                            color: "primary.contrastText",
                                            width: 48,
                                            height: 48,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {item.name.charAt(0)}
                                    </Avatar>

                                    <Box>
                                        <Typography variant="subtitle1" fontWeight={600}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.role} • {item.company}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;