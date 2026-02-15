import { Box } from "@mui/material";
import ImageCarousel from "../components/componentsWelcome/ImageCarousel";
import SectionHeader from "../components/componentsWelcome/SectionHeader";
import SectionHeroSplit from "../components/componentsWelcome/SectionHeroSplit";
import SectionHeroSplitLeft from "../components/componentsWelcome/SectionHeroSplitLeft";
import ServicesSection from "../components/componentsWelcome/ServicesSection";
import StepsSection from "../components/componentsWelcome/SectionSteps";
import FAQSection from "../components/componentsWelcome/SectionFaqs";
import InventoryAgentSection from "../components/componentsWelcome/InventaroryAgentSection";
import HelpdeskVideoSection from "../components/componentsWelcome/HelpDeskVideoSection";

const Welcome = () => {


    return (
        <Box>
            <SectionHeader />
            <ServicesSection />
            <SectionHeroSplit />
            <SectionHeroSplitLeft />
            <ImageCarousel />
            <StepsSection />
            <InventoryAgentSection />
            <HelpdeskVideoSection />
            <FAQSection />
  
        </Box>
    );
};

export default Welcome;
