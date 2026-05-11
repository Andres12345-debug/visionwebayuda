import { Box } from "@mui/material";
import SEO from "../../shared/SEO";
import ProductsSection from "../components/componentsProducts/ProductsSection";
import WhyChooseUs from "../components/componentsProducts/WhyChooseUs";
import Testimonials from "../components/componentsProducts/Testimonials";
import ClientsSection from "../components/componentsProducts/ClientsSection";
import MetricsSection from "../components/componentsProducts/MetricsSection";

const Products = () => {


    return (
        <Box>
            <SEO
                title="Productos - Soluciones GPLI | VisionWeb System"
                description="Descubre nuestra suite de soluciones GPLI: inventario, logística, reportes, comercial y soporte. Gestión empresarial integral con tecnología profesional."
                keywords="productos GPLI, soluciones empresariales, software inventario, gestión logística, reportes TI, software comercial, soporte técnico"
                ogUrl="/productos"
            />
            <ProductsSection />
            <WhyChooseUs />
            <ClientsSection />
            <Testimonials />
            <MetricsSection />
        </Box>
    );
};
export default Products;
