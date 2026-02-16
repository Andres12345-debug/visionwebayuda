import {
    Box,
    Container,
    Typography,
    IconButton,
    Link,
    useTheme,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 8 },
                borderRadius: 4,
                background: isDark
                    ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
                    : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
            }}>
    
            <Container maxWidth="lg">
                {/* CONTENIDO PRINCIPAL */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Empresa */}
                    <Box sx={{ flex: "1 1 250px", maxWidth: 300 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            viSion Code
                        </Typography>

                        <Typography variant="body2" >
                            Implementamos soluciones empresariales Open Source para
                            modernizar la infraestructura tecnológica de tu organización.
                        </Typography>
                    </Box>

                    {/* Enlaces */}
                    <Box sx={{ flex: "1 1 180px" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                            Enlaces
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Link href="/" underline="none" color="inherit">
                                Inicio
                            </Link>
                            <Link href="/products" underline="none" color="inherit">
                                Productos
                            </Link>
                        </Box>
                    </Box>
                    {/* Servicios */}
                    <Box sx={{ flex: "1 1 200px" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                            Soluciones
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="body2">
                                Mesa de Ayuda (GLPI)
                            </Typography>
                            <Typography variant="body2">
                                Monitoreo (Zabbix)
                            </Typography>
                            <Typography variant="body2">
                                Backup Empresarial
                            </Typography>
                            <Typography variant="body2">
                                Seguridad IT
                            </Typography>
                        </Box>
                    </Box>

                    {/* Contacto */}
                    <Box sx={{ flex: "1 1 220px" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                            Contacto
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Vision.code24@gmail.com
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 2 }}>
                            +57 3007538453
                        </Typography>

                        {/* Redes */}
                        <Box>
                            <IconButton sx={{ color: "#098bfc" }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#098bfc" }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#09fc5e" }}>
                                <WhatsAppIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#fc6209" }}>
                                <EmailIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Línea divisoria */}
                <Box
                    sx={{
                        borderTop: "1px solid #1e293b",
                        mt: 6,
                        pt: 3,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} TuEmpresa IT. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
