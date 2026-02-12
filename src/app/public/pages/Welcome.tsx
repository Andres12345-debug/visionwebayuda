import { Box } from "@mui/material";
import ImageCarousel from "../components/ImageCarousel";
import SectionHeader from "../components/SectionHeader";
import SectionHeroSplit from "../components/SectionHeroSplit";
import SectionHeroSplitLeft from "../components/SectionHeroSplitLeft";
import ServicesSection from "../components/ServicesSection";
import StepsSection from "../components/SectionSteps";
import FAQSection from "../components/SectionFaqs";
import InventoryAgentSection from "../components/InventaroryAgentSection";
import HelpdeskVideoSection from "../components/HelpDeskVideoSection";

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
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? "#e7e7e7b5"
                            : "#0d1117",
                    transition: "background-color .3s ease",
                }}
            ></Box>
        </Box>
    );
};

export default Welcome;
