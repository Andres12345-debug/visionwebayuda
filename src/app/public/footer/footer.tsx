import {
    Box,
    Container,
    Typography,
    Link,
    Stack,
    Divider,
    IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 14,
                py: 8,
                borderTop: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={6}
                    justifyContent="space-between"
                >
                    {/* Marca */}
                    <Box maxWidth={300}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Vision Code
                        </Typography>

                        <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                            Soluciones tecnológicas Open Source enfocadas en eficiencia,
                            estabilidad y crecimiento empresarial.
                        </Typography>
                    </Box>

                    {/* Navegación */}
                    <Box>
                        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                            Navegación
                        </Typography>

                        <Stack spacing={1}>
                            <Link href="/" underline="hover" color="text.secondary">
                                Inicio
                            </Link>
                            <Link href="/products" underline="hover" color="text.secondary">
                                Productos
                            </Link>
                        </Stack>
                    </Box>

                    {/* Contacto */}
                    <Box>
                        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                            Contacto
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Vision.code24@gmail.com
                        </Typography>

                        <Typography variant="body2" color="text.secondary" mb={2}>
                            +57 300 753 8453
                        </Typography>

                        <Stack direction="row" spacing={1}>
                            <IconButton size="small" color="inherit">
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <WhatsAppIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <EmailIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>

                <Divider sx={{ my: 6 }} />

                <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    textAlign="center"
                >
                    © {new Date().getFullYear()} Vision Code. Todos los derechos reservados.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
