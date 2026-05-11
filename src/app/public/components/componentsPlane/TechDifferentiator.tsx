import React from 'react';
import { Box, Typography, Paper } from "@mui/material";
// Cambiamos a Grid2 para que el prop "size" sea 100% compatible con MUI 7
import Grid from '@mui/material/Grid';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../shared/theme/ThemeConext";
import solucionProblemasImg from "../../../../assets/img/welcome/SolucionDeProblemas.png";

const TechDifferentiator = () => {
    const { t } = useTranslation();
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    return (
        <Box sx={{ py: 10, px: 2 }}>
            <Grid container spacing={6} alignItems="center" sx={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* LADO IZQUIERDO: LA PROPUESTA DE VALOR */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="overline" sx={{ color: '#6366f1', fontWeight: 800, letterSpacing: 2 }}>
                        {t("techDifferentiator.badge")}
                    </Typography>
                    <Typography variant="h3" sx={{
                        fontWeight: 900,
                        mt: 1,
                        mb: 3,
                        color: isDark ? '#fff' : '#1e293b',
                        lineHeight: 1.1,
                        fontSize: { xs: '2rem', md: '2.8rem' }
                    }}>
                        {t("techDifferentiator.titulo")}<span style={{ color: '#6366f1' }}>{t("techDifferentiator.tituloGradient")}</span>{t("techDifferentiator.tituloResto")}
                    </Typography>

                    <Typography variant="body1" sx={{ color: isDark ? '#94a3b8' : '#475569', mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {t("techDifferentiator.descripcion")}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {[
                            {
                                icon: <TerminalIcon sx={{ fontSize: 28 }} />,
                                title: t("techDifferentiator.item1Title"),
                                desc: t("techDifferentiator.item1Desc")
                            },
                            {
                                icon: <StorageIcon sx={{ fontSize: 28 }} />,
                                title: t("techDifferentiator.item2Title"),
                                desc: t("techDifferentiator.item2Desc")
                            },
                            {
                                icon: <AssessmentIcon sx={{ fontSize: 28 }} />,
                                title: t("techDifferentiator.item3Title"),
                                desc: t("techDifferentiator.item3Desc")
                            }
                        ].map((item, i) => (
                            <Box key={i} sx={{ display: 'flex', gap: 2.5 }}>
                                <Box sx={{
                                    color: '#6366f1',
                                    backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)',
                                    p: 1.5,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 'fit-content'
                                }}>
                                    {item.icon}
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800, color: isDark ? '#fff' : '#1e293b', mb: 0.5, fontSize: '1.1rem' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: isDark ? '#94a3b8' : '#64748b', lineHeight: 1.6 }}>
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>

                {/* LADO DERECHO: EL MOCKUP VISUAL */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ position: 'relative' }}>
                        {/* Elemento decorativo detrás de la imagen */}
                        <Box sx={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
                            opacity: 0.3,
                            zIndex: 0
                        }} />

                        <Paper
                            elevation={0}
                            sx={{
                                p: 1,
                                borderRadius: '30px',
                                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: isDark ? '0 30px 60px rgba(0,0,0,0.5)' : '0 30px 60px rgba(99, 102, 241, 0.2)'
                            }}
                        >
                            <Box
                                component="img"
                                src={solucionProblemasImg}
                                alt={t("techDifferentiator.imgAlt")}
                                sx={{
                                    width: '100%',
                                    borderRadius: '24px',
                                    display: 'block',
                                    filter: isDark ? 'brightness(0.9)' : 'none'
                                }}
                            />
                        </Paper>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default TechDifferentiator;