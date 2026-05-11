import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
};

export default function SEO({
  title = "VisionWeb System - Soluciones TIC Profesionales",
  description = "Centraliza, organiza y controla el soporte técnico y los activos tecnológicos de tu empresa con VisionWeb. Mesa de ayuda, inventario TI y gestión de infraestructura.",
  keywords = "mesa de ayuda, soporte técnico, gestión de activos TI, inventario tecnológico, help desk profesional, VisionWeb, gestión de infraestructura",
  ogTitle,
  ogDescription,
  ogImage = "/logo192.png",
  ogUrl,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
    </Helmet>
  );
}
