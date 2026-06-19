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

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const CONTACT_EMAIL = "gerencia@visionstore.com";
const WHATSAPP_NUMBER = "573007538453";
const TELEGRAM_BOT_URL = "https://t.me/JuliCalendarBot";

const Footer = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const menuItems = [
        { text: t("footer.inicio"), path: "/" },
        { text: t("footer.productos"), path: "/productos" },
        { text: t("footer.planes"), path: "/planDeGestion" },
    ];

    const socialLinks = [
        { icon: <WhatsAppIcon />, link: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
        { icon: <TelegramIcon />, link: TELEGRAM_BOT_URL, label: "Telegram" },
        { icon: <EmailIcon />, link: `mailto:${CONTACT_EMAIL}`, label: "Email" },
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
                            fontWeight={900}
                            letterSpacing={1}
                            gutterBottom
                        >
                            ViSion
                            <Box component="span" sx={{ color: "#6366f1" }}>
                                Web
                            </Box>
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
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    sx={{
                                        bgcolor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                                        color: "text.secondary",
                                        transition: "0.3s",
                                        "&:hover": {
                                            bgcolor: "#6366f1",
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
                                            color: "#6366f1",
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
                    <Box sx={{ minWidth: 260 }}>
                        <Typography variant="subtitle1" fontWeight={700} mb={3}>
                            {t("footer.contactoDirecto")}
                        </Typography>

                        <Stack spacing={1.5}>
                            <Stack
                                direction="row"
                                spacing={1.2}
                                alignItems="center"
                                justifyContent={{ xs: "center", md: "flex-start" }}
                            >
                                <LocationOnIcon fontSize="small" sx={{ color: "#6366f1" }} />
                                <Typography variant="body2" color="text.secondary">
                                    {t("footer.direccion")}
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1.2}
                                alignItems="center"
                                justifyContent={{ xs: "center", md: "flex-start" }}
                            >
                                <EmailIcon fontSize="small" sx={{ color: "#6366f1" }} />
                                <Link
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    underline="hover"
                                    color="text.secondary"
                                    variant="body2"
                                >
                                    {CONTACT_EMAIL}
                                </Link>
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1.2}
                                alignItems="center"
                                justifyContent={{ xs: "center", md: "flex-start" }}
                            >
                                <PhoneIcon fontSize="small" sx={{ color: "#6366f1" }} />
                                <Link
                                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    color="text.secondary"
                                    variant="body2"
                                >
                                    +57 300 753 8453
                                </Link>
                            </Stack>
                        </Stack>
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
