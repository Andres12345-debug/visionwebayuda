import { Box } from "@mui/material";
import ImageCarousel from "../components/ImageCarousel";
import { ProductCollage } from "../components/ProductCollage";
import { ImageTextSection } from "../components/ImageTextSection";
import SectionHeader from "../components/SectionHeader";
import SectionHeroSplit from "../components/SectionHeroSplit";

const Welcome = () => {


    return (
        <Box>
            <SectionHeader
                subtitle="NUEVO"
                title="Expertos en Implementación y Soporte de Mesa de Ayuda"
                description="Implementamos una Mesa de Servicios profesional que centraliza, organiza y controla todo el soporte técnico y los activos tecnológicos de tu empresa, permitiendo que el área TIC trabaje de forma estructurada, medible y eficiente"
            />
            <ImageCarousel />
            <ProductCollage />
            <ImageTextSection />
            <SectionHeroSplit
                image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                subtitle="PLATAFORMA INTELIGENTE"
                title="Gestiona tu mesa de ayuda como un pro"
                description="Controla tickets, usuarios, reportes y tiempos de respuesta desde una sola plataforma moderna."
                buttonText="Comenzar ahora"
                buttonLink="#"
            />
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
