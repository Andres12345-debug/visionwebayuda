import { Box } from "@mui/material";
import ImageCarousel from "../componentsWelcome/ImageCarousel";
import SectionHeader from "../componentsWelcome/SectionHeader";
import SectionHeroSplit from "../componentsWelcome/SectionHeroSplit";
import SectionHeroSplitLeft from "../componentsWelcome/SectionHeroSplitLeft";
import ServicesSection from "../componentsWelcome/ServicesSection";
import StepsSection from "../componentsWelcome/SectionSteps";
import FAQSection from "../componentsWelcome/SectionFaqs";
import InventoryAgentSection from "../componentsWelcome/InventaroryAgentSection";
import HelpdeskVideoSection from "../componentsWelcome/HelpDeskVideoSection";

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
