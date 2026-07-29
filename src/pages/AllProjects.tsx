import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/src/lib/constants";
import FadeIn from "@/src/components/FadeIn";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollProgress from "@/src/components/ScrollProgress";
import { SEO } from "@/src/components/SEO";
import { useLanguage } from "@/src/context/LanguageContext";

const getProjectsData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      slug: "the-royal-suite",
      title: isAr ? "الجناح الملكي" : "The Royal Suite",
      location: isAr ? "بنتهاوس داون تاون" : "Downtown Penthouse",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/mohsgqlqnxoq3svjqe9p.png",
    },
    {
      slug: "silk-masterpiece",
      title: isAr ? "تحفة الحرير" : "Silk Masterpiece",
      location: isAr ? "فيلا نخلة جميرا" : "Palm Jumeirah Villa",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/fmixiewetau1ujp1pgxk.png",
    },
    {
      slug: "velvet-revitalization",
      title: isAr ? "تنشيط المخمل" : "Velvet Revitalization",
      location: isAr ? "إقامة تلال الإمارات" : "Emirates Hills Residence",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/ktcgwqm1xs9wdb5ilimu.png",
    },
    {
      slug: "majestic-manor",
      title: isAr ? "القصر المهيب" : "Majestic Manor",
      location: isAr ? "عقارات جميرا للجولف" : "Jumeirah Golf Estates",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238355/znm5xalwppibhtjis8nv.png",
    },
    {
      slug: "modern-minimalist",
      title: isAr ? "الحداثة البسيطة" : "Modern Minimalist",
      location: isAr ? "دبي هيلز استيت" : "Dubai Hills Estate",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238335/qvyhwfcow41xuzgc5npj.png",
    },
    {
      slug: "classic-elegance",
      title: isAr ? "الأناقة الكلاسيكية" : "Classic Elegance",
      location: isAr ? "البراري" : "Al Barari",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/jzsnlhjcedbnr0wnauru.png",
    },
    {
      slug: "skyline-sanctuary",
      title: isAr ? "ملاذ الأفق" : "Skyline Sanctuary",
      location: isAr ? "الخليج التجاري" : "Business Bay",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/mndggqkm2vvldjvi2nyy.png",
    },
    {
      slug: "coastal-retreat",
      title: isAr ? "الملاذ الساحلي" : "Coastal Retreat",
      location: isAr ? "بلوواترز" : "Blue Waters",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/jaljv656ixn76xflxsys.png",
    },
    {
      slug: "heritage-haven",
      title: isAr ? "ملاذ التراث" : "Heritage Haven",
      location: isAr ? "جميرا" : "Jumeirah",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785238334/q0fkrivsspzk0gspamwo.png",
    },
    {
      slug: "emirates-hills-penthouse",
      title: isAr ? "بنتهاوس تلال الإمارات" : "The Emirates Hills Penthouse",
      location: isAr ? "تلال الإمارات" : "Emirates Hills",
      img: IMAGES.hero,
    },
    {
      slug: "boutique-hotel-lobby",
      title: isAr ? "ردهة فندق بوتيك فاخر" : "Luxury Boutique Hotel Lobby",
      location: isAr ? "وسط المدينة" : "Downtown",
      img: IMAGES.hotel,
    }
  ];
};

export default function AllProjects() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const projects = getProjectsData(language);

  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title={isAr ? "معرض أعمالنا" : "Our Portfolio"}
        description={isAr ? "استكشف معرض أعمال كيرتن كيرز الكامل لمشاريع تنظيف وتركيب الستائر الفاخرة في أفخم الإقامات في دبي." : "Explore Curtain Care's complete portfolio of luxury curtain cleaning and installation projects across Dubai's most prestigious residences."}
      />
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <header className={`mb-16 ${isAr ? 'text-right' : 'text-left'}`}>
            <FadeIn direction={isAr ? "left" : "right"} className="mb-8">
              <Link to="/#gallery" className={`inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all ${isAr ? 'flex-row-reverse' : ''}`}>
                {isAr ? <ArrowLeft size={16} className="rotate-180" /> : <ArrowLeft size={16} />} 
                {isAr ? "العودة إلى المعرض" : "Back to Gallery"}
              </Link>
            </FadeIn>
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-serif text-espresso leading-tight">
                {isAr ? (
                  <>
                    معرض <span className="gold-text-gradient">أعمالنا</span> الكامل
                  </>
                ) : (
                  <>
                    Our Complete <span className="gold-text-gradient">Portfolio</span>
                  </>
                )}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-espresso/60 mt-4 max-w-2xl text-lg mx-0">
                {isAr ? "استكشف براعتنا الحرفية في أفخم الإقامات والبنتهاوس في دبي." : "Explore our master craftsmanship across Dubai's most prestigious residences and penthouses."}
              </p>
            </FadeIn>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <FadeIn
                key={project.slug}
                delay={i * 0.05}
                className={`group relative h-[350px] md:h-[450px] rounded-premium overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/90 via-dark-brown/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className={`flex justify-between items-end ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div>
                      <p className="text-gold-soft text-sm uppercase tracking-widest mb-2">{project.location}</p>
                      <h3 className="text-white text-2xl font-serif">{project.title}</h3>
                    </div>
                    <Link 
                      to={`/project/${project.slug}`}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-white group-hover:gold-gradient transition-all"
                    >
                      <ArrowUpRight size={24} className={isAr ? 'rotate-[-90deg]' : ''} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
