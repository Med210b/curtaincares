import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollProgress from "@/src/components/ScrollProgress";
import { SEO } from "@/src/components/SEO";

import { useLanguage } from "@/src/context/LanguageContext";

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
}

export default function LegalPage({ title, content }: LegalPageProps) {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-cream">
      <SEO title={title} />
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-52 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-8 ${isAr ? 'text-right' : 'text-left'}`}
          >
            <Link to="/" className={`inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all ${isAr ? 'flex-row-reverse' : ''}`}>
              {isAr ? <ArrowLeft size={16} className="rotate-180" /> : <ArrowLeft size={16} />} 
              {isAr ? "العودة للرئيسية" : "Back to Home"}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`prose prose-espresso prose-gold max-w-none ${isAr ? 'text-right' : 'text-left'}`}
          >
            <h1 className="text-5xl font-serif text-espresso mb-12 border-b border-gold/20 pb-8 leading-tight">{title}</h1>
            <div className={`text-espresso/70 leading-relaxed space-y-8 font-sans ${isAr ? 'text-right' : 'text-left'}`}>
              {content}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
