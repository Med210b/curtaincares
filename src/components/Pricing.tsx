import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import FadeIn from "./FadeIn";
import { CONTACT_INFO } from "@/src/lib/constants";
import { useLanguage } from "@/src/context/LanguageContext";

const getPlansData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      name: isAr ? "أساسي" : "Standard",
      price: isAr ? "99 درهم" : "99 AED",
      desc: isAr ? "عناية احترافية للستائر العادية" : "Professional care for standard drapes",
      features: isAr ? [
        "التنظيف الجاف والتعقيم",
        "إزالة الغبار والمواد المسببة للحساسية",
        "إصلاحات بسيطة للأقمشة",
        "كي قياسي",
        "تسليم خلال 48 ساعة"
      ] : [
        "Dry cleaning & sanitization",
        "Dust & allergen removal",
        "Minor fabric repairs",
        "Standard pressing",
        "48-hour turnaround"
      ],
      recommended: false
    },
    {
      name: isAr ? "مميز" : "Premium",
      price: isAr ? "199 درهم" : "199 AED",
      desc: isAr ? "عناية معززة للحرير والمخمل الرقيق" : "Enhanced care for delicate silk & velvet",
      features: isAr ? [
        "تنظيف عميق بالموجات فوق الصوتية",
        "تنشيط بالبخار",
        "معالجة الحفاظ على الألوان",
        "كي مفصل",
        "أولوية في التسليم",
        "طلاء حماية الأقمشة"
      ] : [
        "Ultrasonic deep cleaning",
        "Steam revitalization",
        "Color preservation treatment",
        "Bespoke pressing",
        "Priority turnaround",
        "Fabric protection coating"
      ],
      recommended: true
    },
    {
      name: isAr ? "عقارات" : "Estate",
      price: isAr ? "حسب الطلب" : "Custom",
      desc: isAr ? "عناية كاملة للمساحات الكبيرة" : "Complete interior care for large residences",
      features: isAr ? [
        "تقييم كامل للموقع",
        "فك وإعادة تركيب كاملة",
        "صيانة الأجهزة",
        "خياطة احترافية في الموقع",
        "خدمة كونسيرج مخصصة",
        "خطة صيانة سنوية"
      ] : [
        "Full site assessment",
        "Removal & re-installation",
        "Hardware maintenance",
        "On-site master tailoring",
        "Dedicated concierge",
        "Annual maintenance plan"
      ],
      recommended: false
    }
  ];
};

export default function Pricing() {
  const { t, language } = useLanguage();
  const plans = getPlansData(language);
  const isAr = language === 'ar';

  return (
    <section id="prices" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">
            {isAr ? "الاستثمار" : "Investment"}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-espresso mb-6">
            {isAr ? (
              <>
                باقات <span className="gold-text-gradient">الخدمة</span>
              </>
            ) : (
              <>
                Service <span className="gold-text-gradient">Packages</span>
              </>
            )}
          </h2>
          <p className="text-espresso/60 max-w-2xl mx-auto">
            {isAr ? "أسعار شفافة لجودة لا تضاهى. اختر مستوى العناية الذي يناسب مجموعتك." : "Transparent pricing for uncompromised quality. Choose the level of care that suits your collection."}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <FadeIn
              key={plan.name}
              delay={i * 0.1}
              className={`relative p-8 md:p-10 rounded-premium border transition-all duration-500 ${
                plan.recommended 
                  ? "bg-dark-brown text-cream border-gold shadow-2xl lg:scale-105 z-10" 
                  : "bg-espresso/5 text-espresso border-gold/10 hover:border-gold/30"
              } ${isAr ? 'text-right' : 'text-left'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">
                  {isAr ? "الأكثر طلباً" : "Most Requested"}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <p className={plan.recommended ? "text-gold-soft text-sm" : "text-espresso/40 text-sm"}>
                  {plan.desc}
                </p>
              </div>

              <div className={`mb-8 ${isAr ? 'flex flex-row-reverse justify-end items-baseline' : ''}`}>
                <span className="text-4xl font-serif">{plan.price}</span>
                {plan.price !== (isAr ? "حسب الطلب" : "Custom") && (
                  <span className={`text-sm opacity-60 ${isAr ? 'mr-2' : ''}`}>
                    {isAr ? " / لوحة" : " / panel"}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`flex items-start ${isAr ? 'space-x-reverse space-x-3' : 'space-x-3'} text-sm`}>
                    <Check className="text-gold mt-0.5 shrink-0" size={16} />
                    <span className={plan.recommended ? "text-cream/80" : "text-espresso/70"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs text-center transition-all ${
                  plan.recommended
                    ? "gold-gradient text-white shadow-lg shadow-gold/20"
                    : "bg-espresso text-white hover:bg-gold"
                }`}
              >
                {isAr ? `اختر ${plan.name}` : `Choose ${plan.name}`}
              </motion.a>

              <div className={`mt-6 flex items-center justify-center ${isAr ? 'space-x-reverse space-x-2' : 'space-x-2'} opacity-40 text-[10px] uppercase tracking-tighter`}>
                <Info size={12} />
                <span>{isAr ? "قد يختلف السعر بناءً على نوع القماش" : "Price may vary based on fabric type"}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
