import { Box } from "@mui/material";
import ImageCarousel from "../components/ImageCarousel";
import { ProductCollage } from "../components/ProductCollage";
import { ImageTextSection } from "../components/ImageTextSection";
import SectionHeader from "../components/SectionHeader";
import SectionHeroSplit from "../components/SectionHeroSplit";
import SectionHeroSplitLeft from "../components/SectionHeroSplitLeft";
import ServicesSection from "../components/ServicesSection";
import StepsSection from "../components/SectionSteps";
import FinalCTA from "../components/finalCta";
import BenefitsStrip from "../components/BenefistStrip";
import FAQSection from "../components/SectionFaqs";
import FullServiceSection from "../components/FullServiceSection";

const Welcome = () => {


    return (
        <Box>
            <SectionHeader />
            <ServicesSection/>
            <FullServiceSection/>
            <SectionHeroSplit/>
            <SectionHeroSplitLeft />            
            <ImageTextSection />-
            <StepsSection/>   
            <FinalCTA />       
            <BenefitsStrip /> 
            <FAQSection/>
            <ImageCarousel />
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
