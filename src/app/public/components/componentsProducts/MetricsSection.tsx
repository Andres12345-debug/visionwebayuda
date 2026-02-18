import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

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
        const duration = 1500;
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
        <Typography variant="h3" fontWeight={800}>
            {count}
            {suffix}
        </Typography>
    );
};

const MetricsSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: 10,
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? "background.default"
                        : "common.white",
            }}
        >
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Resultados que nos respaldan
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        maxWidth={600}
                        mx="auto"
                    >
                        Nuestra experiencia se refleja en números reales que generan
                        confianza y crecimiento para nuestros clientes.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {metrics.map((metric, index) => (
                        <Grid key={index} size={{ xs: 6, md: 3 }}>
                            <Box textAlign="center">
                                <Counter end={metric.value} suffix={metric.suffix} />

                                <Box
                                    sx={{
                                        width: 40,
                                        height: 2,
                                        mx: "auto",
                                        my: 2,
                                        backgroundColor:
                                            theme.palette.mode === "dark"
                                                ? "rgba(255,255,255,0.2)"
                                                : "rgba(0,0,0,0.1)",
                                    }}
                                />

                                <Typography variant="body2" color="text.secondary">
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
