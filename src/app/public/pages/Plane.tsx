import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import SEO from "../../shared/SEO";
import PlanesPage from "../components/componentsPlane/PlanesPage";

const Plane = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <SEO
                title={t("seo.planesTitle")}
                description={t("seo.planesDescription")}
                keywords={t("seo.keywords")}
                ogUrl="/plan-de-gestion-it"
            />
            <PlanesPage />
        </Box>
    );
};

export default Plane;