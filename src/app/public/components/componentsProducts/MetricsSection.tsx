import { Box, Container, Typography, useTheme, Grid} from "@mui/material";
import { useEffect, useState } from "react";

const metrics = [
    { value: 150, suffix: "+", label: "Proyectos entregados" },
    { value: 98, suffix: "%", label: "Satisfacción del cliente" },
    { value: 12, suffix: "+", label: "Años de experiencia" },
    { value: 24, suffix: "/7", label: "Soporte técnico" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // Un poco más lento para que sea más elegante
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <Typography
            variant="h3"
            fontWeight={800}
            sx={{
                // Color destacado que brilla un poco más en dark mode
                color: (theme) => theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main'
            }}
        >
            {count}{suffix}
        </Typography>
    );
};

const MetricsSection = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            component="section"
            sx={{
                py: 10,
                // Aplicamos la lógica de gradientes que pediste
                background: isDark
                    ? "linear-gradient(180deg, #000000 0%, #0f172a 100%)"
                    : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                color: "text.primary",
                transition: "all 0.4s ease",
            }}
        >
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        gutterBottom
                        sx={{ color: isDark ? "#f1f5f9" : "inherit" }}
                    >
                        Resultados que nos respaldan
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        maxWidth={600}
                        mx="auto"
                    >
                        Nuestra experiencia se refleja en números reales que generan
                        confianza y crecimiento para nuestros clientes.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {metrics.map((metric, index) => (
                        <Grid key={index} size={{ xs: 6, md: 3 }}>
                            <Box
                                textAlign="center"
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    // Agregamos un ligero borde de cristal en dark mode
                                    bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "transparent",
                                    border: isDark ? "1px solid rgba(255,255,255,0.05)" : "none",
                                }}
                            >
                                <Counter end={metric.value} suffix={metric.suffix} />

                                <Box
                                    sx={{
                                        width: 40,
                                        height: 3,
                                        mx: "auto",
                                        my: 2,
                                        borderRadius: 2,
                                        // Color de la barrita decorativa
                                        backgroundColor: isDark
                                            ? "primary.main"
                                            : "primary.light",
                                        opacity: 0.8
                                    }}
                                />

                                <Typography
                                    variant="subtitle1"
                                    fontWeight={500}
                                    sx={{ color: "text.secondary" }}
                                >
                                    {metric.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MetricsSection;