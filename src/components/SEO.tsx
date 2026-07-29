import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/src/context/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO = ({ 
  title, 
  description,
  canonical = "https://curtaincares.com",
  ogType = "website",
  ogImage = "https://curtaincares.com/og-image.jpg"
}: SEOProps) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const defaultDescription = isAr 
    ? "خدمات تنظيف وصيانة الستائر الاحترافية في دبي. عناية خبيرة لأناقة منزلك."
    : "Professional curtain cleaning and maintenance services in Dubai. Expert care for your home's elegance.";

  const siteTitle = isAr 
    ? "كيرتن كير | خدمات ستائر متميزة في دبي"
    : "Curtain Care | Premium Curtain Services in Dubai";

  const finalDescription = description || defaultDescription;
  const fullTitle = title ? `${title} | ${isAr ? 'كيرتن كير' : 'Curtain Care'}` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />
      <html lang={language} dir={isAr ? 'rtl' : 'ltr'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
