import { Box } from "@mui/material";
import ImageCarousel from "../components/ImageCarousel";
import { ProductCollage } from "../components/ProductCollage";
import { ImageTextSection } from "../components/ImageTextSection";
import SectionHeader from "../components/SectionHeader";
import SectionHeroSplit from "../components/SectionHeroSplit";
import SectionHeroSplitLeft from "../components/SectionHeroSplitLeft";
import ServicesSection from "../components/ServicesSection";

const Welcome = () => {


    return (
        <Box>
            <SectionHeader />
            <ImageCarousel />
            <SectionHeroSplit/>
            <SectionHeroSplitLeft />
            <ServicesSection/>
            <ImageTextSection />            
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
