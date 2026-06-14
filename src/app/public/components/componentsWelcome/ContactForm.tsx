import { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Alert,
    CircularProgress, 
    Paper,
    InputAdornment,
    useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import { URLS } from "../../../utilities/domains/urls";
import { HttpClient } from "../../../services/core/HttpClient";
import { useFormulario } from "../../../utilities/hoks/useForm";

export default function FormularioContacto() {
    const { t } = useTranslation();

    const { nombre, email, mensaje, objeto, setObjeto, dobleEnlace } = useFormulario({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const [loading, setLoading] = useState(false);
    const [respuesta, setRespuesta] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const enviarFormulario = async () => {
        if (!nombre || !email || !mensaje) {
            setError(t("contactForm.errorCampos"));
            return;
        }

        setLoading(true);
        setError(null);
        setRespuesta(null);

        try {
            const url = URLS.URL_BASE + URLS.CONTACTO;
            const resp = await HttpClient.post<any>(url, objeto);

            setRespuesta(resp.mensaje);
            setObjeto({ nombre: "", email: "", mensaje: "" });

        } catch (err) {
            setError(t("contactForm.errorEnvio"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 8 },
                backgroundColor: "background.default",
                transition: "background-color 0.3s ease",
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    maxWidth: 800,
                    mx: "auto",
                    p: { xs: 4, md: 6 },
                    borderRadius: "24px",
                    backdropFilter: "blur(20px)",
                    backgroundColor: isDark ? "#1e293b" : "#fff",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: "2rem", md: "2.8rem" },
                        textAlign: "center",
                        color: isDark ? "#ffffff" : "#1e293b",
                    }}
                >
                    {t("contactForm.titulo")}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mt: 2,
                        maxWidth: "700px",
                        mx: "auto",
                        textAlign: "center",
                    }}
                >
                    {t("contactForm.descripcion")}
                </Typography>

                <Stack spacing={3} mt={4}>

                    <TextField

                        label={t("contactForm.nombreLabel")}
                        name="nombre"
                        value={nombre}
                        onChange={dobleEnlace}
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ borderRadius: "12px" }}
                    />

                    <TextField
                        label={t("contactForm.emailLabel")}
                        name="email"
                        type="email"
                        value={email}
                        onChange={dobleEnlace}
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label={t("contactForm.mensajeLabel")}
                        name="mensaje"
                        value={mensaje}
                        onChange={dobleEnlace}
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MessageIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        variant="contained"
                        size="large"
                        endIcon={!loading && <SendIcon />}
                        onClick={enviarFormulario}
                        disabled={loading}
                        sx={{
                            px: 5,
                            py: 1.6,
                            borderRadius: "14px",
                            fontWeight: 600,
                            textTransform: "none",
                            background: "linear-gradient(90deg, #6366f1, #9333ea)",
                            boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
                            "&:hover": {
                                transform: "translateY(-3px)",
                            },
                            transition: "all .3s ease",
                        }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : t("contactForm.enviarBtn")}
                    </Button>

                    {respuesta && (
                        <Alert severity="success" sx={{ borderRadius: "12px" }}>
                            {respuesta}
                        </Alert>
                    )}

                    {error && (
                        <Alert severity="error" sx={{ borderRadius: "12px" }}>
                            {error}
                        </Alert>
                    )}

                </Stack>
            </Paper>
        </Box>
    );
}