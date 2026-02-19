import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    Paper
} from "@mui/material";
// Importación directa para evitar el error "undefined" y ts(2724)
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import { useThemeContext } from "../../../shared/theme/ThemeConext";

const STEPS = [
    {
        icon: <SearchIcon sx={{ fontSize: 30 }} />,
        title: "1. Diagnóstico Gratuito",
        desc: "Realizamos un escaneo de tu red y equipos para identificar vulnerabilidades y puntos de mejora inmediata.",
        color: "#6366f1"
    },
    {
        icon: <SettingsSuggestIcon sx={{ fontSize: 30 }} />,
        title: "2. Implementación",
        desc: "Instalamos nuestros agentes de monitoreo proactivo y configuramos el acceso a tu portal de soporte GLPI.",
        color: "#8b5cf6"
    },
    {
        icon: <ShieldMoonIcon sx={{ fontSize: 30 }} />,
        title: "3. Gestión Total",
        desc: "¡Listo! Tu empresa queda bajo nuestra vigilancia 24/7. Nosotros nos encargamos de que la tecnología nunca falle.",
        color: "#10b981"
    }
];

const OnboardingSteps = () => {
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    return (
        <Box sx={{ py: 10, px: 2, backgroundColor: isDark ? 'transparent' : '#f8fafc' }}>
            <Box sx={{ maxWidth: '1100px', margin: '0 auto' }}>

                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="overline" sx={{ color: '#6366f1', fontWeight: 800, letterSpacing: 2 }}>
                        PROCESO DE ACTIVACIÓN
                    </Typography>
                    <Typography variant="h3" sx={{
                        fontWeight: 900,
                        mt: 1,
                        color: isDark ? '#fff' : '#1e293b',
                        fontSize: { xs: '2rem', md: '2.8rem' }
                    }}>
                        ¿Cómo empezamos a trabajar?
                    </Typography>
                </Box>

                {/* Usamos Grid (que es Grid2) con la propiedad size de MUI 7 */}
                <Grid container spacing={4}>
                    {STEPS.map((step, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: '24px',
                                    backgroundColor: isDark ? '#1e293b' : '#fff',
                                    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        borderColor: step.color,
                                        boxShadow: isDark ? `0 10px 30px ${step.color}20` : `0 10px 30px rgba(0,0,0,0.05)`
                                    }
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: `${step.color}15`,
                                        color: step.color,
                                        width: 70,
                                        height: 70,
                                        mb: 3,
                                        border: `1px solid ${step.color}30`
                                    }}
                                >
                                    {step.icon}
                                </Avatar>

                                <Typography variant="h5" sx={{
                                    fontWeight: 800,
                                    mb: 2,
                                    color: isDark ? '#fff' : '#1e293b'
                                }}>
                                    {step.title}
                                </Typography>

                                <Typography variant="body2" sx={{
                                    color: isDark ? '#94a3b8' : '#475569',
                                    lineHeight: 1.7,
                                    fontSize: '1rem'
                                }}>
                                    {step.desc}
                                </Typography>

                                {/* Número decorativo de fondo */}
                                <Typography sx={{
                                    position: 'absolute',
                                    bottom: -10,
                                    right: 10,
                                    fontSize: '5rem',
                                    fontWeight: 900,
                                    opacity: 0.05,
                                    color: isDark ? '#fff' : '#000',
                                    userSelect: 'none'
                                }}>
                                    {index + 1}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Typography variant="body2" sx={{ color: isDark ? '#64748b' : '#94a3b8', fontStyle: 'italic' }}>
                        * Implementación rápida: tu infraestructura lista en menos de 48 horas.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default OnboardingSteps;