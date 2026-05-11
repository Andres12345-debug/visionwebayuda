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
import { useTranslation } from "react-i18next";

const Testimonials = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const testimonials = [
        {
            name: t("testimonials.t1Name"),
            role: t("testimonials.t1Role"),
            company: t("testimonials.t1Company"),
            feedback: t("testimonials.t1Feedback"),
            rating: 5,
        },
        {
            name: t("testimonials.t2Name"),
            role: t("testimonials.t2Role"),
            company: t("testimonials.t2Company"),
            feedback: t("testimonials.t2Feedback"),
            rating: 5,
        },
        {
            name: t("testimonials.t3Name"),
            role: t("testimonials.t3Role"),
            company: t("testimonials.t3Company"),
            feedback: t("testimonials.t3Feedback"),
            rating: 4,
        },
    ];

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
                        {t("testimonials.titulo")}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        maxWidth={600}
                        mx="auto"
                    >
                        {t("testimonials.descripcion")}
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