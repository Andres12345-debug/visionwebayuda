import React from "react";
import {
    Card,
    Typography,
    Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../ui/PrimaryButton";

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
    const { t } = useTranslation();
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
                <PrimaryButton
                    fullWidth
                    onClick={(e) => e.stopPropagation()}
                    sx={{ borderRadius: 2, py: 1.5 }}
                >
                    {t("products.solicitarBtn")}
                </PrimaryButton>
            </Box>
        </Card>
    );
};
