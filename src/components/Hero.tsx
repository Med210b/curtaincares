import { motion, useScroll, useTransform } from "motion/react";
import { IMAGES } from "@/src/lib/constants";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.hero}
          alt="Luxury Villa Interior"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark-brown/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-b from-dark-brown/70 via-transparent to-cream" />
      </motion.div>

      {/* Gold Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 w-full pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={language === 'ar' ? 'text-right' : 'text-left'}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center space-x-2 ${language === 'ar' ? 'space-x-reverse' : ''} px-4 py-1.5 glass rounded-full mb-6 border-gold/30`}
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-gold-soft">
              {language === 'ar' ? 'عناية داخلية متميزة' : 'Premium Interior Care'}
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight mb-6">
            {language === 'ar' ? (
              <>
                <span className="gold-text-gradient gold-shine">عناية فاخرة</span> بالستائر <br /> 
                <span className="text-2xl md:text-4xl block mt-2 opacity-90">للمنازل الراقية</span>
              </>
            ) : (
              <>
                Luxury <span className="gold-text-gradient gold-shine">Curtain Care</span> <br /> 
                <span className="text-2xl md:text-4xl block mt-2 opacity-90">For Elegant Homes</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-white font-sans max-w-xl mb-10 leading-relaxed mx-0">
            {t('hero.subtitle')}
          </p>

          <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 ${language === 'ar' ? 'sm:space-x-reverse sm:space-x-4 md:space-x-6' : 'sm:space-x-4 md:space-x-6'}`}>
            <a 
              href="/#contact"
              className="w-full sm:w-auto gold-gradient text-white px-8 md:px-10 py-4 md:py-5 rounded-button font-medium text-base md:text-lg shadow-[0_0_25px_rgba(197,163,106,0.6)] hover:shadow-[0_0_40px_rgba(197,163,106,0.8)] transition-all flex items-center justify-center group"
            >
              {t('hero.book_service')}
              <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} transition-transform group-hover:translate-x-1`} size={20} />
            </a>
            <a 
              href="/#services"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-button font-medium text-base md:text-lg text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center group"
            >
              <Play className={`${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'} fill-white group-hover:fill-gold group-hover:text-gold transition-colors`} size={18} />
              {language === 'ar' ? 'استكشف خدماتنا' : 'Explore Services'}
            </a>
          </div>
        </motion.div>

        {/* 3D Floating Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: language === 'ar' ? -20 : 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`hidden lg:block perspective-1000 max-w-md ${language === 'ar' ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="glass p-4 rounded-premium relative overflow-hidden group"
          >
            <div className="aspect-3/4 rounded-2xl overflow-hidden relative">
              <img
                src={IMAGES.hotel}
                alt="3D Curtain Texture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
              
              {/* Overlay Glass Elements */}
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/20">
                <div className={`flex items-center justify-between mb-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-white font-serif text-xl tracking-wide">
                    {language === 'ar' ? 'عناية بنخبة الأقمشة' : 'Elite Fabric Care'}
                  </span>
                  <div className={`flex ${language === 'ar' ? 'space-x-reverse -space-x-2' : '-space-x-2'}`}>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-gold bg-espresso flex items-center justify-center text-[10px] text-gold font-bold">
                        ★
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className={`h-full gold-gradient ${language === 'ar' ? 'float-right' : 'float-left'}`} 
                  />
                </div>
                <p className={`text-white/60 text-xs mt-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'ضمان إزالة الغبار والمواد المسببة للحساسية بنسبة 99.9٪' : '99.9% Dust & Allergen Removal Guaranteed'}
                </p>
              </div>
            </div>

            {/* Shine effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-espresso/50 text-xs uppercase tracking-widest mb-4">
          {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
        </span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-espresso/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
