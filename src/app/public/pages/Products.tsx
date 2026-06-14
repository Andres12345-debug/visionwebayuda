import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import SEO from "../../shared/SEO";
import ProductsSection from "../components/componentsProducts/ProductsSection";
import WhyChooseUs from "../components/componentsProducts/WhyChooseUs";
import Testimonials from "../components/componentsProducts/Testimonials";
import ClientsSection from "../components/componentsProducts/ClientsSection";
import MetricsSection from "../components/componentsProducts/MetricsSection";

const Products = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <SEO
                title={t("seo.productsTitle")}
                description={t("seo.productsDescription")}
                keywords={t("seo.keywords")}
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
