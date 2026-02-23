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
    { text: "Planes", path: "/plane" },
];

const Footer = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            component="footer"
            sx={{
                mt: 14,
                py: { xs: 6, md: 10 },
                position: "relative",
                background: isDark
                    ? "linear-gradient(180deg, #000000 0%, #0a133a 100%)"
                    : "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
                borderTop: "1px solid",
                borderColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.06)",
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
                    {/* Marca */}
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

                    {/* Enlaces */}
                    <Box>
                        <Typography variant="subtitle1" fontWeight={700} mb={3}>
                            Explorar
                        </Typography>

                        <Stack spacing={2}>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.text}
                                    href={item.path}
                                    underline="none"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "0.95rem",
                                        transition: "0.2s",
                                        "&:hover": {
                                            color: "primary.main",
                                            pl: 1
                                        }
                                    }}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </Stack>
                    </Box>

                    {/* Contacto */}
                    <Box sx={{ minWidth: 250 }}>
                        <Typography variant="subtitle1" fontWeight={700} mb={3}>
                            Contacto Directo
                        </Typography>

                        <Typography variant="body2" fontWeight={500}>
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

                <Divider sx={{ my: 6, opacity: isDark ? 0.1 : 1 }} />

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