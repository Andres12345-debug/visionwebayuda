import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

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
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "/logo192.png",
  ogUrl,
}: SEOProps) {
  const { t } = useTranslation();
  const defaultTitle = title || t("seo.homeTitle");
  const defaultDescription = description || t("seo.homeDescription");
  const defaultKeywords = keywords || t("seo.keywords");
  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta property="og:title" content={ogTitle || defaultTitle} />
      <meta property="og:description" content={ogDescription || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || defaultTitle} />
      <meta name="twitter:description" content={ogDescription || defaultDescription} />
    </Helmet>
  );
}
