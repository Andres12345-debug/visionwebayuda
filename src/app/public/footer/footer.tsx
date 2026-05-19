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
import { useTranslation } from "react-i18next";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const menuItems = [
        { text: t("footer.inicio"), path: "/" },
        { text: t("footer.planes"), path: "/planDeGestion" },
    ];

    return (
        <Box
            component="footer"
            sx={{
                py: { xs: 6, md: 10 },
                position: "relative",
               background: isDark
          ? "linear-gradient(180deg, #000000 0%, #020617 100%)"
          : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
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
                            {t("footer.visionCode")}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 4, lineHeight: 1.8, fontSize: "1rem" }}
                        >
                            {t("footer.descripcion")}
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
                            {t("footer.explorar")}
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
                            {t("footer.contactoDirecto")}
                        </Typography>

                        <Typography variant="body2" fontWeight={500}>
                            {t("footer.direccion")}
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
                        © {new Date().getFullYear()} {t("footer.visionCode")}. {t("footer.derechos")}
                    </Typography>

                    <Stack direction="row" spacing={3}>
                        <Link href="#" variant="caption" color="text.secondary" underline="hover">
                            {t("footer.privacidad")}
                        </Link>
                        <Link href="#" variant="caption" color="text.secondary" underline="hover">
                            {t("footer.terminos")}
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;