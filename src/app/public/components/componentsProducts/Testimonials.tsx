import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
    Rating,
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
    return (
        <Box sx={{ py: 12, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                {/* Encabezado */}
                <Box textAlign="center" mb={8}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
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

                {/* Cards */}
                <Grid container spacing={4}>
                    {testimonials.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    borderRadius: 3,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: 4,
                                    },
                                }}
                            >
                                <Rating value={item.rating} readOnly sx={{ mb: 2 }} />

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.8}
                                    mb={3}
                                >
                                    “{item.feedback}”
                                </Typography>

                                <Box display="flex" alignItems="center" gap={2}>
                                    <Avatar>
                                        {item.name.charAt(0)}
                                    </Avatar>

                                    <Box>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.role} · {item.company}
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
