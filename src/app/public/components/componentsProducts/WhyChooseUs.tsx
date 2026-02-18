import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const items = [
    {
        icon: <SecurityIcon fontSize="large" />,
        title: "Seguridad Empresarial",
        description:
            "Implementamos soluciones seguras y confiables para proteger la información crítica de tu organización.",
    },
    {
        icon: <SupportAgentIcon fontSize="large" />,
        title: "Soporte Continuo",
        description:
            "Acompañamiento técnico permanente para garantizar estabilidad y resolución rápida de incidentes.",
    },
    {
        icon: <SettingsSuggestIcon fontSize="large" />,
        title: "Implementación Profesional",
        description:
            "Configuraciones optimizadas y adaptadas a las necesidades reales de tu infraestructura.",
    },
    {
        icon: <TrendingUpIcon fontSize="large" />,
        title: "Escalabilidad",
        description:
            "Soluciones preparadas para crecer junto con tu empresa sin perder rendimiento.",
    },
];

const WhyChooseUs = () => {
    return (
        <Box
            sx={{
                py: 12,
                backgroundColor: "background.default",
            }}
        >
            <Container maxWidth="lg">
                {/* Encabezado */}
                <Box textAlign="center" mb={8}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        ¿Por qué elegirnos?
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        maxWidth={600}
                        mx="auto"
                    >
                        Más que implementar herramientas, construimos soluciones tecnológicas
                        sólidas que impulsan la eficiencia y el crecimiento empresarial.
                    </Typography>
                </Box>

                {/* Cards */}
                <Grid container spacing={4}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    borderRadius: 3,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: 4,
                                    },
                                }}
                            >

                                <Box
                                    sx={{
                                        mb: 3,
                                        color: "text.primary",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    gutterBottom
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.8}
                                >
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;
