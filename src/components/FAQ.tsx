import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/src/context/LanguageContext";

const getFaqsData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      question: isAr ? "كم مرة يجب تنظيف الستائر الفاخرة؟" : "How often should luxury curtains be cleaned?",
      answer: isAr 
        ? "بالنسبة للأقمشة الفاخرة مثل الحرير والمخمل، نوصي بالتنظيف الاحترافي كل 12-18 شهراً. قد تتطلب المناطق ذات الحركة المرورية العالية أو المنازل التي بها حيوانات أليفة/حساسية خدمة كل 6-9 أشهر للحفاظ على جودة الهواء وسلامة الأنسجة."
        : "For premium fabrics like silk and velvet, we recommend professional cleaning every 12-18 months. High-traffic areas or homes with pets/allergies might require service every 6-9 months to maintain air quality and fabric integrity."
    },
    {
      question: isAr ? "هل تقومون بتنظيف الستائر في الموقع أم خارجه؟" : "Do you clean curtains on-site or off-site?",
      answer: isAr
        ? "نحن نقدم كليهما. للصيانة القياسية، يعد تنشيط البخار في الموقع فعالاً للغاية. للترميم العميق أو الأقمشة الأثرية الرقيقة، نقدم خدمة الإزالة والتنظيف في منشأتنا المتخصصة مع تجفيف متحكم في المناخ."
        : "We offer both. For standard maintenance, our on-site steam revitalization is highly effective. For deep restoration or delicate antique fabrics, we provide white-glove removal and cleaning at our specialized facility with climate-controlled drying."
    },
    {
      question: isAr ? "هل يمكنك إزالة البقع الصعبة من الحرير الرقيق؟" : "Can you remove tough stains from delicate silk?",
      answer: isAr
        ? "نعم، يتخصص الحرفيون لدينا في معالجة البقع باستخدام محاليل متعادلة الحموضة مملوكة لنا. وبينما لا يمكننا ضمان الإزالة بنسبة 100٪ لتلف الألياف الدائم، إلا أن لدينا نسبة نجاح 95٪ مع البقع العضوية والجوية الشائعة."
        : "Yes, our master craftsmen specialize in spot-treatment using proprietary pH-neutral solutions. While we cannot guarantee 100% removal of permanent fiber damage, we have a 95% success rate with common organic and atmospheric stains."
    },
    {
      question: isAr ? "ما هو الوقت المستغرق للتنظيف خارج الموقع؟" : "What is your turnaround time for off-site cleaning?",
      answer: isAr
        ? "الوقت القياسي هو 48-72 ساعة. نقدم أيضاً خدمة أولوية خلال 24 ساعة للطلبات العاجلة، والتي تشمل الإزالة السريعة والتنظيف وإعادة التركيب."
        : "Standard turnaround is 48-72 hours. We also offer a priority 24-hour service for urgent requests, which includes express removal, cleaning, and re-installation."
    },
    {
      question: isAr ? "هل عملية التنظيف الخاصة بكم آمنة للحيوانات الأليفة والأطفال؟" : "Is your cleaning process safe for pets and children?",
      answer: isAr
        ? "بالتأكيد. نحن نستخدم حصرياً عوامل تنظيف صديقة للبيئة وغير سامة ومضادة للحساسية وآمنة لجميع أفراد عائلتك. تزيل عمليتنا أيضاً بفعالية مسببات الحساسية وعث الغبار ووبر الحيوانات الأليفة."
        : "Absolutely. We exclusively use eco-friendly, non-toxic, and hypoallergenic cleaning agents that are safe for your entire family. Our process also effectively removes allergens, dust mites, and pet dander."
    }
  ];
};

export default function FAQ() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const faqs = getFaqsData(language);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <HelpCircle className="mx-auto text-gold mb-4" size={40} />
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">
            {isAr ? "معلومات" : "Information"}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-6 leading-tight">
            {isAr ? (
              <>الأسئلة <span className="gold-text-gradient">الشائعة</span></>
            ) : (
              <>Frequently Asked <span className="gold-text-gradient">Questions</span></>
            )}
          </h2>
          <p className="text-espresso/60">
            {isAr 
              ? "كل ما تحتاج لمعرفته حول الحفاظ على مجموعتك الداخلية الفاخرة."
              : "Everything you need to know about preserving your luxury interior collection."
            }
          </p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="bg-white rounded-2xl border border-gold/10 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={`w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 group transition-colors hover:bg-espresso/5 ${isAr ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className={`text-base sm:text-lg font-serif transition-colors ${activeIndex === i ? "text-gold" : "text-espresso"}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center transition-all ${activeIndex === i ? "bg-gold text-white rotate-180" : "bg-gold/10 text-gold"}`}>
                  {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className={`px-6 pb-6 text-espresso/60 leading-relaxed border-t border-gold/5 pt-4 font-sans ${isAr ? 'text-right' : 'text-left'}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          ))}
        </div>

        <FadeIn
          className="mt-16 p-8 rounded-3xl bg-espresso text-center"
        >
          <p className="text-cream/80 mb-6">
            {isAr ? "هل لا تزال لديك أسئلة حول أقمشة معينة؟" : "Still have questions about your specific fabrics?"}
          </p>
          <a 
            href="/#contact" 
            className="inline-block gold-gradient px-8 py-4 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            {isAr ? "اسأل خبراءنا" : "Ask Our Experts"}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
