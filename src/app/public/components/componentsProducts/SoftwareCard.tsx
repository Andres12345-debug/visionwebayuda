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
            <Box
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                }}
            >
                {/* Icono - margen inferior uniforme */}
                <Box
                    sx={{
                        color: "primary.main",
                        mb: 3,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {item.icon}
                </Box>

                {/* Nombre - margen inferior uniforme */}
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}
                >
                    {item.name}
                </Typography>

                {/* Descripción - margen inferior uniforme */}
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", textAlign: "center", mb: 0 }}
                >
                    {item.description}
                </Typography>
            </Box>

            {/* Botón con margen uniforme */}
            <Box sx={{ px: 4, pb: 4 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 700,
                        py: 1.5,
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
