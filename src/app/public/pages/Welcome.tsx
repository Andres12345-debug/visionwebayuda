import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import SEO from "../../shared/SEO";
import SectionHeader from "../components/componentsWelcome/SectionHeader";
import HablaConVisionSection from "../components/componentsWelcome/HablaConVisionSection";
import SectionHeroSplit from "../components/componentsWelcome/SectionHeroSplit";
import SectionHeroSplitLeft from "../components/componentsWelcome/SectionHeroSplitLeft";
import ServicesSection from "../components/componentsWelcome/ServicesSection";
// Removed unused imports: ImageCarousel, StepsSection, HelpdeskVideoSection
import FAQSection from "../components/componentsWelcome/SectionFaqs";
import InventoryAgentSection from "../components/componentsWelcome/InventaroryAgentSection";
// HelpdeskVideoSection removed (not used in this page)
import FormularioContacto from "../components/componentsWelcome/ContactForm";

const Welcome = () => {
        const { t } = useTranslation();
        const theme = useTheme();
        const isDark = theme.palette.mode === "dark";


    return (
        <Box>
            <SEO
                title={t("seo.homeTitle")}
                description={t("seo.homeDescription")}
                keywords={t("seo.keywords")}
                ogUrl="/"
            />
            <SectionHeader />
            <ServicesSection />
            <SectionHeroSplit />
            <SectionHeroSplitLeft />            
            <InventoryAgentSection />            
            {/* <StepsSection /> */}            
            <HablaConVisionSection />
            <FAQSection />
            <FormularioContacto />
        </Box>
    );
};

export default Welcome;
