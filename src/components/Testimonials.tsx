import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/src/context/LanguageContext";

const getReviewsData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      name: isAr ? "سارة المكتوم" : "Sarah Al-Maktoum",
      role: isAr ? "صاحبة فيلا" : "Villa Owner",
      text: isAr 
        ? "كانت الدقة والعناية التي أولوها لستائرنا الحريرية استثنائية. حقاً خدمة فاخرة للمنازل الراقية."
        : "The precision and care they took with our silk curtains was exceptional. Truly a luxury service for premium homes.",
      stars: 5
    },
    {
      name: isAr ? "جيمس هارينغتون" : "James Harrington",
      role: isAr ? "مدير فندق" : "Hotel Manager",
      text: isAr
        ? "نحن نثق في كيرتن كيرز لجميع أجنحة الضيوف لدينا. تقنية البخار الخاصة بهم هي الأحدث والنتائج مثالية."
        : "We trust Curtaincares with all our guest suites. Their steam technology is state-of-the-art and results are perfect.",
      stars: 5
    },
    {
      name: isAr ? "إيلينا روسي" : "Elena Rossi",
      role: isAr ? "مصممة ديكور" : "Interior Designer",
      text: isAr
        ? "كمصممة، أوصي بالأفضل فقط. اهتمامهم بالتفاصيل وتقنية التعليق لا مثيل لها."
        : "As a designer, I only recommend the best. Their attention to detail and hanging technique is unparalleled.",
      stars: 5
    }
  ];
};

export default function Testimonials() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const reviews = getReviewsData(language);

  return (
    <section className="py-24 bg-beige/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <Quote className="text-gold mx-auto mb-6 opacity-40" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-espresso leading-tight">
            {isAr ? (
              <>تجارب <span className="gold-text-gradient">العملاء</span></>
            ) : (
              <>Client <span className="gold-text-gradient">Experiences</span></>
            )}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <FadeIn
              key={review.name}
              delay={i * 0.2}
              className="glass p-8 md:p-10 rounded-premium border-gold/10 flex flex-col items-center text-center group hover:bg-white/40 transition-colors h-full"
            >
              <div className={`flex space-x-1 mb-6 ${isAr ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-espresso italic mb-8 leading-relaxed font-sans">
                "{review.text}"
              </p>
              <div>
                <h4 className="text-xl font-serif text-espresso">{review.name}</h4>
                <p className="text-gold text-xs uppercase tracking-widest font-bold mt-1">{review.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
