import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function HelpdeskVideoSection() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 8 },
            }}
        >
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: "1.8rem", md: "2.5rem" },
                        textAlign: "center"
                    }}
                >
                    Conoce nuestra{" "}
                    <Box
                        component="span"
                        sx={{
                            background: "linear-gradient(90deg, #6366f1, #9333ea)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        mesa de Ayuda
                    </Box>{" "}
                    en acción
                </Typography>
            </Box>

            {/* Video */}
            <Box
                sx={{
                    maxWidth: 1000,
                    mx: "auto",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: theme.palette.mode === "dark"
                        ? "0 30px 80px rgba(0,0,0,0.5)"
                        : "0 20px 60px rgba(0,0,0,0.12)",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        paddingTop: "56.25%", // 16:9
                    }}
                >
                    <Box
                        component="iframe"
                        src="https://www.youtube.com/embed/TU_ID_DE_VIDEO"
                        title="Mesa de Ayuda GLPI"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
