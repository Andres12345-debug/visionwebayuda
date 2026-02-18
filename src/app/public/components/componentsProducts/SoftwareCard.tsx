import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
} from "@mui/material";

export interface SoftwareItem {
    id: number;
    name: string;
    description: string;
    category: string;
    icon: React.ReactNode;
}

interface Props {
    item: SoftwareItem;
    onClick?: () => void;
}

export const SoftwareCard: React.FC<Props> = ({ item, onClick }) => {
    return (
        <Card
            elevation={0}
            onClick={onClick}
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",

                backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                        ? "rgba(18,18,23,0.9)"
                        : "#ffffff",

                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                            ? "0 20px 40px rgba(0,0,0,0.6)"
                            : `0 20px 40px ${theme.palette.primary.main}20`,
                },
            }}
        >
            <CardContent
                sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    p: 4,
                }}
            >
                {/* Icono */}
                <Box
                    sx={{
                        color: "primary.main",
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {item.icon}
                </Box>

                {/* Nombre */}
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1 }}
                >
                    {item.name}
                </Typography>

                {/* Descripción */}
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                >
                    {item.description}
                </Typography>
            </CardContent>

            {/* Botón */}
            <Box sx={{ p: 3, pt: 0 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                        e.stopPropagation(); // 👈 evita que el botón dispare el modal si quieres acción distinta
                    }}
                    sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #6366f1, #9333ea)",
                        "&:hover": {
                            background: "linear-gradient(90deg, #4f46e5, #7e22ce)",
                        },
                    }}
                >
                    Solicitar
                </Button>
            </Box>
        </Card>
    );
};
