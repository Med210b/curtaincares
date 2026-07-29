import { motion } from "motion/react";
import { 
  Wind, 
  Layers, 
  Trash2, 
  Zap, 
  Sofa, 
  Grid, 
  Sun, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Umbrella,
  Tent,
  Droplets
} from "lucide-react";
import { CONTACT_INFO } from "@/src/lib/constants";
import { useLanguage } from "@/src/context/LanguageContext";

const getServicesData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      title: isAr ? "تنظيف الستائر" : "Curtain Cleaning",
      desc: isAr ? "تنظيف بيئي عميق لجميع أنواع الأقمشة الفاخرة. تضمن عمليتنا أن تكون ستائرك نظيفة تماماً وصحية دون الإضرار بالألياف الرقيقة." : "Deep ecological cleaning for all types of luxury fabrics. Our process ensures that your drapes are not only visually pristine but also hygienically clean without damaging delicate fibers.",
      icon: Wind,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277218/tvecfzs7xvooeh5gq3zk.png",
      delay: 0.1
    },
    {
      title: isAr ? "تنظيف الستائر بالبخار" : "Curtain Steam Cleaning",
      desc: isAr ? "التعقيم باستخدام تقنية البخار المتميزة عالية الضغط. تعمل هذه الطريقة الصديقة للبيئة على إزالة المواد المسببة للحساسية وعث الغبار والبكتيريا." : "Sanitization using high-pressure premium steam technology. This eco-friendly method effectively removes allergens, dust mites, and bacteria while refreshing the fabric's appearance.",
      icon: Zap,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277221/hwut74rkp7h8rzhmw7yz.png",
      delay: 0.2
    },
    {
      title: isAr ? "الإزالة والتركيب" : "Removal & Installation",
      desc: isAr ? "فك الستائر بعناية وإعادة تركيبها باحترافية ودقة. يتولى فريق الخبراء لدينا كل شيء من فحص المسارات إلى المحاذاة المثالية للثنيات." : "Careful unhanging and precise professional re-installation. Our expert team handles everything from track inspection to perfect pleat alignment, ensuring a white-glove experience.",
      icon: Layers,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277221/wffq8ujoxtkrcphj0gr5.png",
      delay: 0.3
    },
    {
      title: isAr ? "تنظيف الستائر المعدنية" : "Blind Cleaning",
      desc: isAr ? "معالجة دقيقة للستائر الرومانية والفينيسية والأسطوانية. نستخدم تقنيات متخصصة لتنظيف كل شريحة أو طية دون التأثير على الآلية." : "Delicate treatment for Roman, Venetian, and roller blinds. We use specialized techniques to clean each slat or fold without affecting the mechanism or fabric integrity.",
      icon: Grid,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277219/rtqfjgm1hb0jaxvyvt9k.png",
      delay: 0.4
    },
    {
      title: isAr ? "تنظيف الكنبات" : "Sofa Cleaning",
      desc: isAr ? "تجديد المفروشات الفاخرة للأثاث المصمم. استخراج عميق ومعالجات خاصة بالأقمشة تعيد حيوية الألوان والراحة لمقاعدك المميزة." : "Luxury upholstery rejuvenation for designer furniture. Deep extraction and fabric-specific treatments that restore color vibrancy and comfort to your premium seating.",
      icon: Sofa,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277224/jsgkjvbiarn2mufqbk2n.png",
      delay: 0.5
    },
    {
      title: isAr ? "تنظيف السجاد" : "Carpet Cleaning",
      desc: isAr ? "استخراج عميق للألياف لسجاد الصوف والحرير الفاخر. نزيل الشوائب والبقع العميقة مع الحفاظ على اللمعان الطبيعي والنعومة." : "Deep fiber extraction for premium wool and silk carpets. We remove deep-seated grit and stains while maintaining the natural luster and softness of your high-end floor coverings.",
      icon: Sun,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277222/som9yw4fsnblcwvmedxs.png",
      delay: 0.6
    },
    {
      title: isAr ? "تنظيف المراتب" : "Mattress Cleaning",
      desc: isAr ? "تنظيف عميق مضاد للحساسية لبيئة نوم أكثر صحة. تعقيم بمستوى طبي يستهدف عث الغبار والبكتيريا لسطح نوم منعش حقاً." : "Anti-allergen deep cleaning for a healthier sleep environment. Medical-grade sanitization that targets dust mites and bacteria for a truly refreshed sleep surface.",
      icon: Trash2,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277223/h9vbze9tx5ikrt9yoqk4.png",
      delay: 0.7
    },
    {
      title: isAr ? "العناية بالأقمشة الفاخرة" : "Luxury Fabric Care",
      desc: isAr ? "معالجة متخصصة للحرير والمخمل والألياف الحساسة. نحن نتفهم الاحتياجات الفريدة للمنسوجات الراقية ونقدم عناية مخصصة تطيل عمرها." : "Specialized treatment for silk, velvet, and delicate fibers. We understand the unique needs of high-end textiles and provide bespoke care that extends their lifespan and beauty.",
      icon: ShieldCheck,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277221/z9vfbjtkkosolr8awily.png",
      delay: 0.8
    },
    {
      title: isAr ? "تنظيف الأرجوحة" : "Swing Cleaning",
      desc: isAr ? "أعد أرجوحتك الخارجية إلى حالتها الأنظف والأكثر راحة. يزيل تنظيفنا العميق سنوات من التعرض للعوامل الخارجية والغبار والبقع." : "Restore your outdoor swing to its cleanest, most comfortable self. Our deep cleaning removes years of outdoor exposure, dust, and organic stains.",
      icon: Umbrella,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277223/ajx28nsvmdhv0fhlrs91.png",
      delay: 0.9
    },
    {
      title: isAr ? "تنظيف كراسي الاسترخاء" : "Sun Lounger",
      desc: isAr ? "استعد نضارة كراسي الاسترخاء بإزالة الغبار والبقع وتراكم العرق. علاجات متخصصة تجدد الأقمشة والأسطح الشبكية." : "Restore sun lounger freshness by removing dust, stains & sweat buildup. Specialized treatments that rejuvenate both fabric and mesh surfaces.",
      icon: Sparkles,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785277222/cpfyhzxycimemxbrdosx.png",
      delay: 1.0
    },
    {
      title: isAr ? "تنظيف الكبائن الفاخرة" : "Premium Cabana Cleaning",
      desc: isAr ? "عناية بمستوى المنتجعات لملاذك الخاص في الحديقة أو أماكن حمامات السباحة التجارية. نحافظ على الكبائن نظيفة وصحية." : "Resort-quality care for your private backyard paradise or commercial poolside venues. We keep your cabanas pristine, hygienic, and ready for relaxation.",
      icon: Tent,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785280987/xtmdo9eakjcp5ldkqkpg.png",
      delay: 1.1
    },
    {
      title: isAr ? "تنظيف خارجي عميق" : "OutdoorCare Deep Cleaning",
      desc: isAr ? "يعيد وسائد الفناء والمعدات الخارجية إلى حالتها الأصلية. نزيل الأوساخ العميقة والعفن باستخدام مذيبات صديقة للبيئة." : "Restores patio cushions and gear to pristine condition. We remove deep-set dirt, mold, and environmental stains using eco-friendly solvents that protect weather-resistant fabrics.",
      icon: Droplets,
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785280984/bn98rqxuaapcg1zjiuaa.png",
      delay: 1.2
    }
  ];
};

export default function Services() {
  const { t, language } = useLanguage();
  const services = getServicesData(language);
  const isAr = language === 'ar';

  return (
    <section id="services" className="py-24 bg-beige/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold font-medium uppercase tracking-[0.3em] text-sm block mb-4"
          >
            {isAr ? "التميز في كل خيط" : "Excellence in Every Fiber"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-espresso"
          >
            {isAr ? (
              <>
                خدماتنا <span className="gold-text-gradient">المتميزة</span>
              </>
            ) : (
              <>
                Our Premium <span className="gold-text-gradient">Services</span>
              </>
            )}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: service.delay,
                duration: 0.5
              }}
              viewport={{ once: true }}
              className={`group relative flex flex-col h-full bg-white/70 backdrop-blur-md rounded-premium border border-gold/10 hover:border-gold/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-gold/10 overflow-hidden ${isAr ? 'text-right' : 'text-left'}`}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
                <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} w-10 h-10 rounded-xl gold-gradient flex items-center justify-center text-white shadow-lg`}>
                  <service.icon size={20} />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-espresso mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-espresso/70 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                <motion.a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: isAr ? -5 : 5 }}
                  className={`inline-flex items-center text-gold font-bold uppercase tracking-widest text-[10px] group/btn ${isAr ? 'flex-row-reverse' : ''}`}
                >
                  {isAr ? 'احجز الخدمة' : 'Book Service'} 
                  <ArrowRight className={`${isAr ? 'mr-2 rotate-180' : 'ml-2'} transition-transform group-hover/btn:translate-x-1`} size={12} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
