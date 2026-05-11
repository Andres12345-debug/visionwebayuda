import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";

 const Error = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{ textAlign: "center", py: 10, px: 2 }}>
            <SEO
                title={t("seo.errorTitle")}
                description={t("seo.errorDescription")}
            />
            <Typography variant="h1" fontWeight={900} sx={{ fontSize: { xs: "4rem", md: "8rem" }, color: "primary.main" }}>
                404
            </Typography>
            <Typography variant="h5" fontWeight={700} mb={2}>
                {t("errorPage.titulo")}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4} maxWidth={500} mx="auto">
                {t("errorPage.descripcion")}
            </Typography>
            <Button variant="contained" href="/" sx={{ borderRadius: 3, textTransform: "none", fontWeight: 600 }}>
                {t("errorPage.boton")}
            </Button>
        </Box>
    );
 };

 export default Error;