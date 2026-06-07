import React from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    Box,
    Divider,
    Chip,
    Stack,
} from "@mui/material";
import PrimaryButton from "../ui/PrimaryButton";
import { useTranslation } from "react-i18next";
import { SoftwareItem } from "./SoftwareCard";

interface Props {
    open: boolean;
    onClose: () => void;
    product: SoftwareItem | null;
}

export const ProductModal: React.FC<Props> = ({
    open,
    onClose,
    product,
}) => {
    const { t } = useTranslation();
    if (!product) return null;

    const features = [
        t("productModal.feature1"),
        t("productModal.feature2"),
        t("productModal.feature3"),
        t("productModal.feature4"),
        t("productModal.feature5"),
    ];

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    overflow: "hidden",
                },
            }}
        >
            {/* HEADER CON GRADIENTE */}
            <Box
                sx={{
                    background: "linear-gradient(135deg, #6366f1, #9333ea)",
                    color: "white",
                    p: 4,
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        width: 80,
                        height: 80,
                        margin: "0 auto 16px auto",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {product.icon}
                </Box>

                <Typography variant="h5" fontWeight={700}>
                    {product.name}
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                    {t("productModal.solucion")}
                </Typography>
            </Box>

            {/* CONTENIDO */}
            <DialogContent sx={{ py: 4 }}>
                <Typography variant="body1" mb={3}>
                    {product.description}
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Typography variant="h6" fontWeight={600} mb={2}>
                    {t("productModal.caracteristicas")}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                    {features.map((feature, index) => (
                        <Chip
                            key={index}
                            label={feature}
                            sx={{
                                borderRadius: 2,
                                fontWeight: 500,
                            }}
                        />
                    ))}
                </Stack>
            </DialogContent>

            {/* ACCIONES */}
            <DialogActions sx={{ px: 3, py: 3 }}>
                <Button
                    onClick={onClose}
                    color="inherit"
                    sx={{ textTransform: "none" }}
                >
                    {t("productModal.cerrar")}
                </Button>

                <PrimaryButton sx={{ borderRadius: 3, px: 4 }}>
                    {t("productModal.solicitarDemo")}
                </PrimaryButton>
            </DialogActions>
        </Dialog>
    );
};
