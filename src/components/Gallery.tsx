import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/src/context/LanguageContext";

const getProjectsData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      slug: "the-royal-suite",
      title: isAr ? "الجناح الملكي" : "The Royal Suite",
      location: isAr ? "بنتهاوس داون تاون" : "Downtown Penthouse",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/mohsgqlqnxoq3svjqe9p.png",
      size: "large"
    },
    {
      slug: "silk-masterpiece",
      title: isAr ? "تحفة الحرير" : "Silk Masterpiece",
      location: isAr ? "فيلا نخلة جميرا" : "Palm Jumeirah Villa",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/fmixiewetau1ujp1pgxk.png",
      size: "small"
    },
    {
      slug: "velvet-revitalization",
      title: isAr ? "تنشيط المخمل" : "Velvet Revitalization",
      location: isAr ? "إقامة تلال الإمارات" : "Emirates Hills Residence",
      img: "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785237065/ktcgwqm1xs9wdb5ilimu.png",
      size: "small"
    }
  ];
};

export default function Gallery() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const projects = getProjectsData(language);

  return (
    <section id="gallery" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-end mb-16 ${isAr ? 'flex-row-reverse' : ''}`}>
          <FadeIn direction={isAr ? "left" : "right"} className={isAr ? 'text-right' : 'text-left'}>
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">
              {isAr ? "معرض الأعمال" : "Portfolio"}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-espresso leading-tight">
              {isAr ? (
                <>معرض <span className="gold-text-gradient">الستائر</span></>
              ) : (
                <>Curtain <span className="gold-text-gradient">Gallery</span></>
              )}
            </h2>
          </FadeIn>
          <Link to="/projects">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="text-espresso font-medium border-b-2 border-gold pb-1 hidden md:block"
            >
              {isAr ? "عرض جميع المشاريع" : "View All Projects"}
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project, i) => (
            <FadeIn
              key={project.title}
              direction="none"
              delay={i * 0.2}
              className={project.size === "large" ? "md:col-span-2 group relative overflow-hidden rounded-premium h-[300px] md:h-auto" : "group relative overflow-hidden rounded-premium h-[300px] md:h-auto"}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-brown/90 via-dark-brown/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className={`absolute bottom-0 left-0 p-8 w-full flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div>
                  <p className="text-gold-soft text-sm uppercase tracking-widest mb-2">{project.location}</p>
                  <h3 className="text-white text-2xl font-serif">{project.title}</h3>
                </div>
                <Link 
                  to={`/project/${project.slug}`}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-white group-hover:gold-gradient transition-all"
                >
                  <ArrowUpRight size={24} className={isAr ? '-scale-x-100' : ''} />
                </Link>
              </div>
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine pointer-events-none" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

