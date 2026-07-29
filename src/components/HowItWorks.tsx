import { motion } from "motion/react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/src/context/LanguageContext";

const getStepsData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      number: "01",
      title: isAr ? "حجز موعد" : "Book Appointment",
      desc: isAr ? "حدد وقتاً مناسباً من خلال الكونسيرج المتميز لدينا." : "Schedule a convenient time through our premium concierge."
    },
    {
      number: "02",
      title: isAr ? "فحص احترافي" : "Professional Inspection",
      desc: isAr ? "خبراؤنا يقيمون أنواع الأقمشة ومتطلبات التنظيف." : "Our experts assess fabric types and cleaning requirements."
    },
    {
      number: "03",
      title: isAr ? "تنظيف عميق للأقمشة" : "Deep Fabric Cleaning",
      desc: isAr ? "معالجة بتقنية متقدمة لنتائج مثالية." : "Advanced technology treatment for pristine results."
    },
    {
      number: "04",
      title: isAr ? "تشطيب عالي الجودة" : "Quality Finishing",
      desc: isAr ? "بخار وترميم يدوي لكل التفاصيل." : "Hand-finished steam and restoration for every detail."
    },
    {
      number: "05",
      title: isAr ? "التسليم والتركيب" : "Delivery & Installation",
      desc: isAr ? "تعليق مثالي وتنسيق نهائي للغرفة من قبل خبرائنا." : "Perfect hanging and final room styling by our masters."
    }
  ];
};

export default function HowItWorks() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const steps = getStepsData(language);

  return (
    <section className="py-24 bg-dark-brown text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-20 gap-8 ${isAr ? 'md:flex-row-reverse' : ''}`}>
          <FadeIn direction={isAr ? "left" : "right"} className={`max-w-xl ${isAr ? 'text-right' : 'text-left'}`}>
            <span className="text-gold uppercase tracking-[0.3em] text-sm block mb-4">
              {isAr ? "العملية" : "The Process"}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              {isAr ? (
                <>
                  كيف نصنع <br />
                  <span className="gold-text-gradient">المثالية</span>
                </>
              ) : (
                <>
                  How We Create <br />
                  <span className="gold-text-gradient">Perfection</span>
                </>
              )}
            </h2>
          </FadeIn>
          <FadeIn direction={isAr ? "right" : "left"} className={`text-cream/80 max-w-sm mb-4 ${isAr ? 'text-right' : 'text-left'}`}>
            {isAr 
              ? "رحلة دقيقة من اللمسة الأولى إلى التركيب النهائي، مما يضمن بقاء تصميماتك الداخلية الفاخرة خالدة."
              : "A meticulous journey from the first touch to the final installation, ensuring your luxury interiors stay timeless."
            }
          </FadeIn>
        </div>

        <div className="relative">
          <div className={`absolute top-0 bottom-0 ${isAr ? 'right-8 md:right-1/2' : 'left-8 md:left-1/2'} w-0.5 bg-white/5 lg:hidden block`} />
          <div className="absolute top-8 left-0 w-full h-0.5 bg-white/5 hidden lg:block" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute top-0 bottom-0 ${isAr ? 'right-8 md:right-1/2' : 'left-8 md:left-1/2'} w-0.5 gold-gradient lg:hidden block`}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute top-8 ${isAr ? 'right-0' : 'left-0'} h-0.5 gold-gradient hidden lg:block`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8 md:gap-x-12 lg:gap-8">
            {steps.map((step, i) => (
              <FadeIn
                key={step.number}
                delay={i * 0.2}
                className={`relative z-10 flex flex-col items-center lg:items-start ${isAr ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}
              >
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center text-white text-2xl font-serif mb-8 shadow-[0_0_20px_rgba(197,163,106,0.4)] border-4 border-dark-brown">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gold-soft">{step.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
