import {
    Box,
    Container,
    Typography,
    Link,
    Stack,
    Divider,
    IconButton,
    useTheme,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const menuItems = [
    { text: "Inicio", path: "/" },
    { text: "Productos", path: "/products" },
    { text: "Planes", path: "/plane" }, // Coincide con tu ruta en MainRoute
    // { text: "Nosotros", path: "/about" },
];

const Footer = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            component="footer"
            sx={{
                mt: 14,
                py: 10,
                position: "relative",
                // Gradiente para cerrar con broche de oro la página
                background: isDark
                    ? "linear-gradient(180deg, #000000 0%, #0a133a 100%)"
                    : "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
                borderTop: "1px solid",
                borderColor: isDark ? "rgba(255,255,255,0.05)" : "divider",
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={8}
                    justifyContent="space-between"
                    alignItems={{ xs: "center", md: "flex-start" }}
                    textAlign={{ xs: "center", md: "left" }}
                >
                    {/* Sección Marca y Social */}
                    <Box sx={{ maxWidth: 350 }}>
                        <Typography
                            variant="h5"
                            fontWeight={800}
                            gutterBottom
                            sx={{
                                letterSpacing: "-0.5px",
                                background: isDark
                                    ? "linear-gradient(90deg, #fff 0%, #b8ae94 100%)"
                                    : "linear-gradient(90deg, #0f172a 0%, #696247 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Vision Code
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 4, lineHeight: 1.8, fontSize: "1rem" }}
                        >
                            Elevando estándares tecnológicos mediante soluciones Open Source de alto rendimiento.
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            {[
                                { icon: <FacebookIcon />, link: "#" },
                                { icon: <LinkedInIcon />, link: "#" },
                                { icon: <WhatsAppIcon />, link: "#" },
                                { icon: <EmailIcon />, link: "mailto:Vision.code24@gmail.com" }
                            ].map((social, index) => (
                                <IconButton
                                    key={index}
                                    href={social.link}
                                    sx={{
                                        bgcolor: isDark ? "rgba(201, 21, 21, 0.03)" : "rgba(0,0,0,0.03)",
                                        color: "text.secondary",
                                        transition: "0.3s",
                                        "&:hover": {
                                            bgcolor: "primary.main",
                                            color: "white",
                                            transform: "translateY(-3px)"
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Box>

                    {/* Enlaces Rápidos con diseño vertical limpio */}
                    <Box>
                        <Typography variant="subtitle1" fontWeight={700} mb={3}>
                            Explorar
                        </Typography>
                        <Stack spacing={2}>
                            {["Inicio", "Productos", "Planes", "Nosotros"].map((item) => (
                                <Link
                                    key={item}
                                    href={menuItems.find(menu => menu.text === item)?.path || "#"}
                                    underline="none"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "0.95rem",
                                        transition: "0.2s",
                                        "&:hover": { color: "primary.main", pl: 1 }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Box>

                    {/* Newsletter o Info de contacto rápida */}
                    <Box sx={{ minWidth: 250 }}>
                        <Typography variant="subtitle1" fontWeight={700} mb={3}>
                            Contacto Directo
                        </Typography>
                        <Typography variant="body2" color="text.primary" fontWeight={500}>
                            Tunja, Boyacá, Colombia
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            Vision.code24@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                            +57 300 753 8453
                        </Typography>
                    </Box>
                </Stack>

                <Divider sx={{ my: 8, opacity: isDark ? 0.1 : 1 }} />

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="caption" color="text.secondary">
                        © {new Date().getFullYear()} Vision Code. Todos los derechos reservados.
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <Link href="#" variant="caption" color="text.secondary" underline="hover">
                            Privacidad
                        </Link>
                        <Link href="#" variant="caption" color="text.secondary" underline="hover">
                            Términos
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;