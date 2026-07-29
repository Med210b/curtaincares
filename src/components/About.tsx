import { motion } from "motion/react";
import { IMAGES } from "@/src/lib/constants";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();
  
  const stats = [
    { label: t('about.experience'), value: "15+" },
    { label: language === 'ar' ? "مشاريع فاخرة" : "Luxury Projects", value: "500+" },
    { label: language === 'ar' ? "حرفيون خبراء" : "Expert Artisans", value: "25+" },
    { label: language === 'ar' ? "ولاء العملاء" : "Client Retention", value: "98%" },
  ];

  const features = language === 'ar' ? [
    "تقنية تنظيف متقدمة بالموجات فوق الصوتية",
    "حرفيون معتمدون وخبراء في الأقمشة",
    "حلول صديقة للبيئة محايدة الحموضة",
    "خدمة التركيب والإزالة الراقية"
  ] : [
    "Advanced Ultrasonic Cleaning Technology",
    "Certified Master Craftsmen & Fabric Experts",
    "Eco-Friendly PH-Neutral Solutions",
    "White-Glove Installation & Removal Service"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-premium overflow-hidden aspect-[4/5]">
              <img
                src={IMAGES.hotel}
                alt="Luxury Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className={`absolute -bottom-6 ${language === 'ar' ? '-left-6' : '-right-6'} w-2/3 aspect-square bg-gold rounded-premium -z-0 opacity-10 animate-pulse`} />
            <div className={`absolute -top-6 ${language === 'ar' ? '-right-6' : '-left-6'} w-1/3 aspect-square border border-gold rounded-premium -z-0`} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`absolute -bottom-8 ${language === 'ar' ? '-right-8' : '-left-8'} glass-dark p-8 rounded-premium z-20 hidden md:block`}
            >
              <p className="text-gold text-4xl font-serif mb-1">15+</p>
              <p className="text-white/70 text-sm uppercase tracking-widest">
                {language === 'ar' ? 'سنوات من التميز' : 'Years of Excellence'}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">
              {language === 'ar' ? 'تراثنا' : 'Our Heritage'}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-espresso mb-8 leading-tight">
              {language === 'ar' ? (
                <>
                  نصنع أناقة <span className="gold-text-gradient">خالدة</span> لمنزلك
                </>
              ) : (
                <>
                  Crafting <span className="gold-text-gradient">Timeless</span> Elegance for Your Home
                </>
              )}
            </h2>
            <p className="text-espresso/70 text-lg mb-8 leading-relaxed">
              {t('about.p1')}
            </p>

            <div className="space-y-4 mb-10">
              {features.map((item, i) => (
                <div key={i} className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-espresso font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gold/10 pt-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-serif text-espresso">{stat.value}</p>
                  <p className="text-xs text-espresso/40 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
