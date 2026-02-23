import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useThemeContext } from "../../../shared/theme/ThemeConext"; // Asegúrate de que la ruta sea correcta
import { Box, Typography } from "@mui/material";

const HeroPricing = () => {
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    return (
        <Box sx={{
            textAlign: 'center',
            padding: '80px 20px 40px',
            // El degradado ahora cambia según el modo
            background: isDark
                ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%)'
                : 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
            color: isDark ? '#f1f5f9' : '#000000',
            transition: 'all 0.3s ease'
        }}>

            <Typography variant="h1" sx={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 900,
                lineHeight: 1.1,
                maxWidth: '800px',
                margin: '0 auto 20px',
                color: isDark ? '#fff' : '#1e293b'
            }}>
                Planes que crecen con tu <span style={{ color: '#6366f1' }}>empresa</span>
            </Typography>

            <Typography sx={{
                fontSize: '18px',
                color: isDark ? '#94a3b8' : '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6
            }}>
                Olvídate de los costos sorpresa. Con VISIONWeb pagas una tarifa fija mensual por cada equipo y nosotros nos encargamos del resto.
            </Typography>
        </Box>
    );
};

export default HeroPricing;