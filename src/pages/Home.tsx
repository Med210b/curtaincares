import { lazy, Suspense } from "react";
import Hero from "@/src/components/Hero";
import { SEO } from "@/src/components/SEO";
import { useLanguage } from "@/src/context/LanguageContext";

// Lazy load non-critical sections
const About = lazy(() => import("@/src/components/About"));
const Services = lazy(() => import("@/src/components/Services"));
const Pricing = lazy(() => import("@/src/components/Pricing"));
const HowItWorks = lazy(() => import("@/src/components/HowItWorks"));
const Gallery = lazy(() => import("@/src/components/Gallery"));
const Testimonials = lazy(() => import("@/src/components/Testimonials"));
const FAQ = lazy(() => import("@/src/components/FAQ"));
const Contact = lazy(() => import("@/src/components/Contact"));

export default function Home() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <SEO 
        title={isAr ? "تنظيف وصيانة الستائر المتميزة" : "Expert Curtain Cleaning & Maintenance"}
        description={isAr 
          ? "خدمات تنظيف وإصلاح وتركيب الستائر المتميزة في دبي. ثق في كيرتن كير للصيانة الاحترافية لستائر منزلك."
          : "Premium curtain cleaning, repair, and installation services in Dubai. Trust Curtain Care for professional maintenance of your home's curtains."
        }
      />
      <Hero />
      <Suspense fallback={<div className="h-96 bg-cream" />}>
        <About />
        <Services />
        <Pricing />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  );
}
