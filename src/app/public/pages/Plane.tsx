import { Box } from "@mui/material";
import SEO from "../../shared/SEO";
import PlanesPage from "../components/componentsPlane/PlanesPage";

const Plane = () => {
    return (
        <Box>
            <SEO
                title="Planes de Gestión IT | VisionWeb System"
                description="Conoce nuestros planes de gestión de infraestructura TI. Soporte técnico profesional, inventario automatizado y monitoreo 24/7 para tu empresa."
                keywords="planes gestión TI, soporte técnico profesional, monitoreo 24/7, inventario automatizado, gestión infraestructura, planes VisionWeb"
                ogUrl="/plan-de-gestion-it"
            />
            <PlanesPage />
        </Box>
    );
};

export default Plane;