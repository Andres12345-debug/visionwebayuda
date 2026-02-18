import { Box } from "@mui/material";
import ProductsSection from "../components/componentsProducts/ProductsSection";
import WhyChooseUs from "../components/componentsProducts/WhyChooseUs";
import Testimonials from "../components/componentsProducts/Testimonials";
import ClientsSection from "../components/componentsProducts/ClientsSection";
import MetricsSection from "../components/componentsProducts/MetricsSection";

const Products = () => {


    return (
        <Box>
            <ProductsSection />
            <WhyChooseUs />
            <ClientsSection />
            <Testimonials />
            <MetricsSection />
        </Box>
    );
};
export default Products;
