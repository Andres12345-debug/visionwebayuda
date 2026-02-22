import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useThemeContext } from "../../../shared/theme/ThemeConext";

const PLANES = [
    {
        title: "Plan Básico",
        price: "$25.000",
        period: "/equipo/mes",
        features: ["Soporte Remoto 8/5", "Gestión de Inventario", "Monitoreo de Red", "Soporte GLPI Básico"],
        recommended: false,
        btnText: "Empezar ahora"
    },
    {
        title: "Plan Pro",
        price: "$45.000",
        period: "/equipo/mes",
        features: ["Todo lo del Básico", "Soporte Proactivo 24/7", "Mantenimiento Preventivo", "Seguridad Administrada"],
        recommended: true,
        btnText: "El más elegido"
    },
    {
        title: "Enterprise",
        price: "Custom",
        period: "Contactar",
        features: ["Todo lo del Plan Pro", "Soporte Presencial", "Auditoría de Sistemas", "Consultoría Estratégica"],
        recommended: false,
        btnText: "Hablar con ventas"
    }
];

const PricingCards = () => {
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    // Función para manejar el clic y enviar a WhatsApp
    const handlePlanSelection = (planTitle: string) => {
        const telefono = "573007538453"; // 👈 REEMPLAZA CON TU NÚMERO (incluye código de país)
        const mensaje = encodeURIComponent(
            `¡Hola VISIONWeb! Me interesa obtener más información sobre el *${planTitle}*. ¿Podrían asesorarme?`
        );
        window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
    };

    return (
        <Box sx={{ py: 8, px: 2, maxWidth: '1100px', margin: '0 auto' }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    fontWeight: 900,
                    mb: 6,
                    color: isDark ? '#fff' : '#1e293b',
                    fontSize: { xs: '1.8rem', md: '2.5rem' }
                }}
            >
                Selecciona el plan ideal para tu <span style={{ color: '#6366f1' }}>negocio</span>
            </Typography>

            {/* Usamos size en lugar de item/xs para cumplir con MUI 7 */}
            <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
                {PLANES.map((plan, index) => (
                    <Grid key={index} size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                height: '100%',
                                borderRadius: '24px',
                                backgroundColor: isDark ? '#1e293b' : '#fff',
                                border: plan.recommended ? '2px solid #6366f1' : '1px solid',
                                borderColor: plan.recommended ? '#6366f1' : (isDark ? '#334155' : '#e2e8f0'),
                                boxShadow: plan.recommended
                                    ? '0 20px 40px rgba(99, 102, 241, 0.15)'
                                    : '0 10px 30px rgba(0,0,0,0.02)',
                                transform: plan.recommended ? { md: 'scale(1.05)' } : 'none',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <CardContent sx={{ p: 4, flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: isDark ? '#fff' : '#1e293b' }}>
                                    {plan.title}
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                                    <Typography variant="h3" sx={{ fontWeight: 800, color: plan.recommended ? '#6366f1' : (isDark ? '#fff' : '#1e293b') }}>
                                        {plan.price}
                                    </Typography>
                                    <Typography sx={{ ml: 1, color: isDark ? '#94a3b8' : '#64748b', fontSize: '0.9rem' }}>
                                        {plan.period}
                                    </Typography>
                                </Box>

                                <List sx={{ mb: 3 }}>
                                    {plan.features.map((feature, i) => (
                                        <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <CheckCircleIcon sx={{ color: '#10b981', fontSize: '1.2rem' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={feature}
                                                sx={{ '& span': { fontSize: '0.95rem', color: isDark ? '#cbd5e1' : '#475569' } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>

                            <Box sx={{ p: 4, pt: 0 }}>
                                <Button
                                    fullWidth
                                    variant={plan.recommended ? "contained" : "outlined"}
                                    onClick={() => handlePlanSelection(plan.title)}
                                    sx={{
                                        py: 1.5,
                                        borderRadius: '12px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        backgroundColor: plan.recommended ? '#6366f1' : 'transparent',
                                        borderColor: '#6366f1',
                                        color: plan.recommended ? '#fff' : '#6366f1',
                                        '&:hover': {
                                            backgroundColor: plan.recommended ? '#4f46e5' : 'rgba(99, 102, 241, 0.08)',
                                            borderColor: '#4f46e5'
                                        }
                                    }}
                                >
                                    {plan.btnText}
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PricingCards;