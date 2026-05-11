import {
    Box,
    Container,
    Typography,
    Paper,
} from "@mui/material";
// Importación directa de Grid2 para evitar errores de tipos en MUI 7
import Grid from '@mui/material/Grid';
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const WhyChooseUs = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const items = [
        {
            icon: <SecurityIcon fontSize="large" />,
            title: t("whyChooseUs.card1Title"),
            description: t("whyChooseUs.card1Desc"),
        },
        {
            icon: <SupportAgentIcon fontSize="large" />,
            title: t("whyChooseUs.card2Title"),
            description: t("whyChooseUs.card2Desc"),
        },
        {
            icon: <SettingsSuggestIcon fontSize="large" />,
            title: t("whyChooseUs.card3Title"),
            description: t("whyChooseUs.card3Desc"),
        },
        {
            icon: <TrendingUpIcon fontSize="large" />,
            title: t("whyChooseUs.card4Title"),
            description: t("whyChooseUs.card4Desc"),
        },
    ];

    return (
        <Box
            sx={{
                py: 12,
                // FONDO NEGRO PURO
                backgroundColor: isDark ? "#000000" : "#f8fafc",
                transition: "background-color 0.3s ease",
            }}
        >
            <Container maxWidth="lg">
                {/* Encabezado */}
                <Box textAlign="center" mb={8}>
                    <Typography
                        variant="h3"
                        fontWeight={900}
                        gutterBottom
                        sx={{ color: isDark ? "#ffffff" : "#1e293b", fontSize: { xs: '2rem', md: '2.5rem' } }}
                    >
                        {t("whyChooseUs.titulo")}
                    </Typography>

                    <Typography
                        variant="body1"
                        maxWidth={650}
                        mx="auto"
                        sx={{ color: isDark ? "#94a3b8" : "#475569", fontSize: '1.1rem' }}
                    >
                        {t("whyChooseUs.descripcion")}
                    </Typography>
                </Box>

                {/* Cards usando Grid2 */}
                <Grid container spacing={4}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    borderRadius: 5,
                                    // FONDO DE LAS CARDS CASI NEGRO
                                    backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
                                    border: "1px solid",
                                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "#e2e8f0",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        borderColor: "#6366f1", // Color de marca al hacer hover
                                        boxShadow: isDark
                                            ? "0 20px 40px rgba(0,0,0,0.6)"
                                            : "0 20px 40px rgba(0,0,0,0.05)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        mb: 3,
                                        display: 'inline-flex',
                                        p: 1.5,
                                        borderRadius: '12px',
                                        backgroundColor: isDark ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0.05)",
                                        color: "#6366f1",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography
                                    variant="h6"
                                    fontWeight={800}
                                    gutterBottom
                                    sx={{ color: isDark ? "#ffffff" : "#1e293b" }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: isDark ? "#94a3b8" : "#64748b",
                                        lineHeight: 1.8
                                    }}
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