import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Calendar, MapPin, Ruler } from "lucide-react";
import { IMAGES } from "@/src/lib/constants";
import FadeIn from "@/src/components/FadeIn";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollProgress from "@/src/components/ScrollProgress";
import { SEO } from "@/src/components/SEO";
import { useLanguage } from "@/src/context/LanguageContext";

const getProjectsData = (lang: string): Record<string, any> => {
  const isAr = lang === 'ar';
  return {
    "the-royal-suite": {
      slug: "the-royal-suite",
      title: isAr ? "الجناح الملكي" : "The Royal Suite",
      location: isAr ? "بنتهاوس داون تاون" : "Downtown Penthouse",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/mohsgqlqnxoq3svjqe9p.png",
      description: isAr 
        ? "ترميم شامل للستائر الحريرية الممتدة من الأرض حتى السقف في بنتهاوس بمساحة 5000 قدم مربع. تضمن المشروع تنظيفاً متخصصاً بالموجات فوق الصوتية والتشطيب بالبخار الدقيق لاستعادة اللمعان الطبيعي للنسيج."
        : "A comprehensive restoration of floor-to-ceiling silk drapes in a 5,000 sq. ft. penthouse. The project involved specialized ultrasonic cleaning and delicate steam finishing to restore the natural luster of the fabric.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "مايو 2024" : "May 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "داون تاون دبي" : "Downtown Dubai", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "450 متر مربع" : "450 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "تعقيم عميق للألياف",
        "معالجة الحماية من الأشعة فوق البنفسجية",
        "إزالة يدوية للتجاعيد",
        "تشحيم الأجهزة والمسارات"
      ] : [
        "Deep fiber sanitization",
        "UV protection treatment",
        "Manual crease removal",
        "Hardware lubrication"
      ]
    },
    "silk-masterpiece": {
      slug: "silk-masterpiece",
      title: isAr ? "تحفة الحرير" : "Silk Masterpiece",
      location: isAr ? "فيلا نخلة جميرا" : "Palm Jumeirah Villa",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/fmixiewetau1ujp1pgxk.png",
      description: isAr
        ? "عملية تنظيف معقدة للستائر الحريرية المنسوجة يدوياً. استخدم فريقنا محاليل متوازنة الحموضة لضمان الحفاظ على الأصباغ الرقيقة والسلامة الهيكلية للمواد الراقية."
        : "An intricate cleaning process for hand-woven silk curtains. Our team used pH-balanced solutions to ensure the preservation of delicate dyes and structural integrity of the high-end materials.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "مارس 2024" : "March 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "نخلة جميرا" : "Palm Jumeirah", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "320 متر مربع" : "320 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "تنظيف متوازن الحموضة",
        "معالجة مضادة للكهرباء الساكنة",
        "قفل الحفاظ على اللون",
        "مذيبات صديقة للبيئة"
      ] : [
        "pH-balanced cleaning",
        "Anti-static treatment",
        "Color preservation lock",
        "Eco-friendly solvents"
      ]
    },
    "velvet-revitalization": {
      slug: "velvet-revitalization",
      title: isAr ? "تنشيط المخمل" : "Velvet Revitalization",
      location: isAr ? "إقامة تلال الإمارات" : "Emirates Hills Residence",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/ktcgwqm1xs9wdb5ilimu.png",
      description: isAr
        ? "استعادة ستائر المخمل الثقيلة في قصر كلاسيكي بتلال الإمارات. ركز المشروع على إزالة المواد المسببة للحساسية العميقة مع إحياء ملمس وكثافة المخمل."
        : "Restoring the heavy velvet drapes of a classic Emirates Hills estate. The focus was on removing deeply embedded allergens while reviving the plush texture and deep pile of the velvet.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "يونيو 2024" : "June 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "تلال الإمارات" : "Emirates Hills", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "600 متر مربع" : "600 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "استعادة وبر البخار",
        "كنس بفلتر HEPA",
        "إزالة البقع العضوية",
        "معادل الفورمالديهايد"
      ] : [
        "Steam pile restoration",
        "HEPA vacuuming",
        "Organic stain removal",
        "Formaldehyde neutralizer"
      ]
    },
    "majestic-manor": {
      slug: "majestic-manor",
      title: isAr ? "القصر المهيب" : "Majestic Manor",
      location: isAr ? "عقارات جميرا للجولف" : "Jumeirah Golf Estates",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238355/znm5xalwppibhtjis8nv.png",
      description: isAr
        ? "تجديد كامل للمنسوجات لقصر فخم. قمنا بتنفيذ عملية تنظيف متعددة المراحل لمختلف الأقمشة التي تتراوح من الكتان الثقيل إلى الدانتيل الرقيق."
        : "Complete textile overhaul for a grand manor. We implemented a multi-stage cleaning process for diverse fabrics ranging from heavy linen to delicate lace.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "يوليو 2024" : "July 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "عقارات جميرا للجولف" : "Jumeirah Golf Estates", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "850 متر مربع" : "850 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "شد ألياف الكتان",
        "تثبيت الدانتيل",
        "تحييد الروائح",
        "إعادة ضبط الستائر المخصصة"
      ] : [
        "Linen fiber tightening",
        "Lace stabilization",
        "Odor neutralization",
        "Custom drape resetting"
      ]
    },
    "modern-minimalist": {
      slug: "modern-minimalist",
      title: isAr ? "الحداثة البسيطة" : "Modern Minimalist",
      location: isAr ? "دبي هيلز استيت" : "Dubai Hills Estate",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238335/qvyhwfcow41xuzgc5npj.png",
      description: isAr
        ? "تنظيف وحماية الستائر الشفافة الآلية في فيلا معاصرة. تطلب المشروع التعامل الدقيق مع أنظمة المحركات المدمجة والأقمشة الشفافة الرقيقة."
        : "Cleaning and protecting automated sheer curtains in a contemporary villa. The project required careful handling of integrated motor systems and delicate sheer fabrics.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "أغسطس 2024" : "August 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "دبي هيلز" : "Dubai Hills", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "400 متر مربع" : "400 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "تنظيف المسارات الآلية",
        "تبييض القماش الشفاف",
        "معالجة مضادة للغبار",
        "محاذاة دقيقة"
      ] : [
        "Motorized track cleaning",
        "Sheer fabric whitening",
        "Anti-dust treatment",
        "Precision alignment"
      ]
    },
    "classic-elegance": {
      slug: "classic-elegance",
      title: isAr ? "الأناقة الكلاسيكية" : "Classic Elegance",
      location: isAr ? "البراري" : "Al Barari",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/jzsnlhjcedbnr0wnauru.png",
      description: isAr
        ? "تنظيف وقائي لمنسوجات عتيقة وستائر بروكيد ثقيلة. استخدم خبراؤنا طرقاً آمنة للتراث لإزالة غبار العقود دون الإخلال بالنسيج."
        : "Preservation cleaning for vintage tapestry and heavy brocade curtains. Our specialists used heritage-safe methods to remove decades of dust without disturbing the weave.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "سبتمبر 2024" : "September 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "البراري" : "Al Barari", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "520 متر مربع" : "520 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "عناية بالنسيج التراثي",
        "إحياء لمعان البروكيد",
        "استخراج الغبار يدوياً",
        "تعزيز الألياف"
      ] : [
        "Heritage weave care",
        "Brocade luster revival",
        "Manual dust extraction",
        "Fiber reinforcement"
      ]
    },
    "skyline-sanctuary": {
      slug: "skyline-sanctuary",
      title: isAr ? "ملاذ الأفق" : "Skyline Sanctuary",
      location: isAr ? "الخليج التجاري" : "Business Bay",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/mndggqkm2vvldjvi2nyy.png",
      description: isAr
        ? "تنظيف عميق لستائر التعتيم (بلاك أوت) في جناح تنفيذي ببرج شاهق. ركز المشروع على إزالة السخام الصناعي وفحص البطانة الحرارية."
        : "Deep cleaning of blackout drapes in a high-rise executive suite. Focused on industrial-grade soot removal and thermal lining inspection.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "أكتوبر 2024" : "October 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "الخليج التجاري" : "Business Bay", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "280 متر مربع" : "280 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "إزالة السخام والضباب الدخاني",
        "إصلاح البطانة الحرارية",
        "عناية بطلاء التعتيم",
        "تسليم سريع"
      ] : [
        "Soot & smog removal",
        "Thermal lining repair",
        "Blackout coating care",
        "Rapid turnaround"
      ]
    },
    "coastal-retreat": {
      slug: "coastal-retreat",
      title: isAr ? "الملاذ الساحلي" : "Coastal Retreat",
      location: isAr ? "بلوواترز" : "Blue Waters",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/jaljv656ixn76xflxsys.png",
      description: isAr
        ? "معالجة هواء البحر المالح للستائر الفاخرة في سكن واجهته بحرية. استخدمت علاجات متخصصة لتحييد الترسبات المعدنية ومنع تيبس القماش."
        : "Salt-air remediation for luxury curtains in a waterfront residence. Specialized treatments were used to neutralize mineral deposits and prevent fabric stiffening.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "نوفمبر 2024" : "November 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "بلوواترز" : "Blue Waters", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "350 متر مربع" : "350 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "إزالة ترسبات الملح",
        "حماية من الرطوبة",
        "تحييد المعادن",
        "تعزيز سطوع الألوان"
      ] : [
        "Salt deposit removal",
        "Humidity protection",
        "Mineral neutralizing",
        "Color brightness boost"
      ]
    },
    "heritage-haven": {
      slug: "heritage-haven",
      title: isAr ? "ملاذ التراث" : "Heritage Haven",
      location: isAr ? "جميرا" : "Jumeirah",
      image: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/q0fkrivsspzk0gspamwo.png",
      description: isAr
        ? "ترميم ستائر مطرزة حسب الطلب في منزل تقليدي بجميرا. تم فحص كل غرزة وتنظيفها يدوياً للحفاظ على الفن المعقد."
        : "Restoring custom-embroidered curtains in a traditional Jumeirah home. Every stitch was inspected and hand-cleaned to preserve the intricate artistry.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "ديسمبر 2024" : "December 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "جميرا" : "Jumeirah", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "420 متر مربع" : "420 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "حماية التطريز",
        "إحياء خيوط الحرير",
        "كي يدوي دقيق",
        "تشطيب مخصص"
      ] : [
        "Embroidery protection",
        "Silk thread revival",
        "Delicate hand-pressing",
        "Bespoke finishing"
      ]
    },
    "emirates-hills-penthouse": {
      slug: "emirates-hills-penthouse",
      title: isAr ? "بنتهاوس تلال الإمارات" : "The Emirates Hills Penthouse",
      location: isAr ? "تلال الإمارات" : "Emirates Hills",
      image: IMAGES.hero,
      description: isAr
        ? "ترميم كامل لستائر الحرير العتيقة في بنتهاوس بمساحة 12000 قدم مربع، باستخدام التنظيف بالموجات فوق الصوتية ومذيبات متخصصة متعادلة الحموضة."
        : "A complete restoration of vintage silk drapes across a 12,000 sq. ft. penthouse, utilizing ultrasonic cleaning and specialized pH-neutral solvents.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "مارس 2024" : "March 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "تلال الإمارات" : "Emirates Hills", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "1100 متر مربع" : "1,100 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "عناية بالألياف بالموجات فوق الصوتية",
        "تعقيم متعادل الحموضة",
        "ترميم ألياف الحرير",
        "معالجة مضادة للأشعة فوق البنفسجية"
      ] : [
        "Ultrasonic fiber care",
        "pH-neutral sanitation",
        "Silk fiber restoration",
        "Anti-uv treatment"
      ]
    },
    "boutique-hotel-lobby": {
      slug: "boutique-hotel-lobby",
      title: isAr ? "ردهة فندق بوتيك فاخر" : "Luxury Boutique Hotel Lobby",
      location: isAr ? "منطقة داون تاون" : "Downtown District",
      image: IMAGES.hotel,
      description: isAr
        ? "تنشيط في الموقع لستائر المخمل في المناطق عالية الحركة. عمل فريقنا طوال الليل لضمان عدم توقف العمليات لنزلاء الفندق."
        : "On-site revitalization of high-traffic velvet curtains. Our team worked overnight to ensure zero operational downtime for the hotel guests.",
      details: [
        { label: isAr ? "تاريخ الانتهاء" : "Completion", value: isAr ? "يناير 2024" : "January 2024", icon: Calendar },
        { label: isAr ? "الموقع" : "Location", value: isAr ? "الخليج التجاري" : "Business Bay", icon: MapPin },
        { label: isAr ? "المساحة" : "Area", value: isAr ? "450 متر مربع" : "450 sq. m", icon: Ruler },
      ],
      features: isAr ? [
        "تنظيف بدرجة تجارية",
        "خدمة ليلية سريعة",
        "استعادة وبر المخمل",
        "تحييد الروائح"
      ] : [
        "Commercial grade cleaning",
        "Rapid overnight service",
        "Velvet pile restoration",
        "Odor neutralization"
      ]
    }
  };
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const projectsData = getProjectsData(language);
  const project = projectsData[slug || ""];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <SEO title={isAr ? "المشروع غير موجود" : "Project Not Found"} />
        <div className="text-center">
          <h1 className="text-4xl font-serif text-espresso mb-4">
            {isAr ? "المشروع غير موجود" : "Project Not Found"}
          </h1>
          <Link to="/" className={`text-gold hover:underline flex items-center justify-center gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
            {isAr ? <ArrowLeft size={20} className="rotate-180" /> : <ArrowLeft size={20} />} 
            {isAr ? "العودة للرئيسية" : "Back to Home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title={project.title}
        description={project.description}
        ogImage={project.image}
      />
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction={isAr ? "left" : "right"} className="mb-12">
            <Link to="/projects" className={`inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all ${isAr ? 'flex-row-reverse' : ''}`}>
              {isAr ? <ArrowLeft size={16} className="rotate-180" /> : <ArrowLeft size={16} />} 
              {isAr ? "العودة للمشاريع" : "Back to Projects"}
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction={isAr ? "left" : "right"} className="relative aspect-[4/5] rounded-premium overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
            </FadeIn>

            <FadeIn
              direction={isAr ? "right" : "left"}
              delay={0.2}
              className={`space-y-12 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <div>
                <span className="text-gold uppercase tracking-widest text-sm font-bold block mb-4">
                  {project.location}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-espresso mb-8 leading-tight">
                  {project.title}
                </h1>
                <p className={`text-lg md:text-xl text-espresso/70 leading-relaxed font-sans italic ${isAr ? 'border-r-4 border-l-0 pr-4 md:pr-6 pl-0' : 'border-l-4 border-r-0 pl-4 md:pl-6'} border-gold`}>
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8 bg-espresso/5 rounded-premium border border-gold/10">
                {project.details.map((detail: any, i: number) => (
                  <div key={i} className="text-center space-y-2">
                    <detail.icon className="mx-auto text-gold" size={24} />
                    <div className="text-[10px] uppercase tracking-wider text-espresso/40 font-bold">
                      {detail.label}
                    </div>
                    <div className="text-sm font-serif text-espresso">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-espresso">
                  {isAr ? "أبرز مميزات المشروع" : "Project Highlights"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, i: number) => (
                    <div key={i} className={`flex items-center gap-3 p-4 bg-gold/5 rounded-2xl border border-gold/10 ${isAr ? 'flex-row-reverse' : ''}`}>
                      <CheckCircle2 className="text-gold shrink-0" size={20} />
                      <span className="text-espresso/80 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="/#contact"
                  className="w-full sm:w-auto inline-block gold-gradient px-12 py-5 rounded-full text-white text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-gold/20 text-center"
                >
                  {isAr ? "استفسر عن هذه الخدمة" : "Inquire About This Service"}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  );
}
