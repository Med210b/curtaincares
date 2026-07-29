import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { IMAGES } from "@/src/lib/constants";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const getProjectsData = (lang: string) => {
  const isAr = lang === 'ar';
  return [
    {
      slug: "emirates-hills-penthouse",
      title: isAr ? "بنتهاوس تلال الإمارات" : "The Emirates Hills Penthouse",
      client: isAr ? "مجموعة خاصة" : "Private Collection",
      category: isAr ? "ترميم كامل" : "Full Restoration",
      date: isAr ? "مارس 2024" : "March 2024",
      location: isAr ? "دبي، الإمارات العربية المتحدة" : "Dubai, UAE",
      image: IMAGES.hero,
      description: isAr 
        ? "ترميم كامل لستائر الحرير العتيقة في بنتهاوس بمساحة 12,000 قدم مربع، باستخدام التنظيف بالموجات فوق الصوتية ومذيبات متخصصة متعادلة الحموضة."
        : "A complete restoration of vintage silk drapes across a 12,000 sq. ft. penthouse, utilizing ultrasonic cleaning and specialized pH-neutral solvents."
    },
    {
      slug: "boutique-hotel-lobby",
      title: isAr ? "ردهة فندق بوتيك فاخر" : "Luxury Boutique Hotel Lobby",
      client: isAr ? "ذا جراند ريغال" : "The Grand Regal",
      category: isAr ? "صيانة تجارية" : "Commercial Maintenance",
      date: isAr ? "يناير 2024" : "January 2024",
      location: isAr ? "منطقة داون تاون" : "Downtown District",
      image: IMAGES.hotel,
      description: isAr
        ? "تنشيط في الموقع لستائر المخمل في المناطق عالية الحركة. عمل فريقنا طوال الليل لضمان عدم توقف العمليات لنزلاء الفندق."
        : "On-site revitalization of high-traffic velvet curtains. Our team worked overnight to ensure zero operational downtime for the hotel guests."
    }
  ];
};

export default function Projects() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const projects = getProjectsData(language);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 ${isAr ? 'md:flex-row-reverse' : ''}`}>
          <div className={isAr ? 'text-right' : 'text-left'}>
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">
              {isAr ? "دراسات الحالة" : "Case Studies"}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-espresso leading-tight">
              {isAr ? (
                <>مشاريع <span className="gold-text-gradient">مميزة</span></>
              ) : (
                <>Featured <span className="gold-text-gradient">Projects</span></>
              )}
            </h2>
          </div>
          <p className={`text-espresso/60 max-w-md ${isAr ? 'text-right' : 'text-left'}`}>
            {isAr 
              ? "اطلع على ما وراء الكواليس في مشاريع الترميم الأكثر تحدياً وتميزاً في جميع أنحاء المنطقة."
              : "Go behind the scenes of our most challenging and rewarding restoration projects across the region."
            }
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center p-6 rounded-premium hover:bg-cream/50 transition-colors duration-500 ${isAr ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="w-full lg:w-1/2 group relative overflow-hidden rounded-premium aspect-video shadow-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              <div className={`w-full lg:w-1/2 space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
                <div className={`flex flex-wrap gap-4 items-center text-xs uppercase tracking-widest font-bold ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gold">{project.category}</span>
                  <span className="w-1 h-1 bg-gold/30 rounded-full" />
                  <span className="text-espresso/40">{project.client}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-espresso leading-tight">{project.title}</h3>
                
                <p className="text-espresso/70 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className={`grid grid-cols-2 gap-6 pt-4 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center space-x-3 text-espresso/50 ${isAr ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <Calendar size={18} className="text-gold" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                  <div className={`flex items-center space-x-3 text-espresso/50 ${isAr ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <MapPin size={18} className="text-gold" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                <Link to={`/project/${project.slug}`}>
                  <motion.button
                    whileHover={{ x: isAr ? -10 : 10 }}
                    className={`flex items-center space-x-3 text-gold font-bold uppercase tracking-widest text-xs pt-4 group ${isAr ? 'flex-row-reverse space-x-reverse' : ''}`}
                  >
                    <span>{isAr ? "عرض التفاصيل" : "View Details"}</span>
                    <ExternalLink size={14} className={`group-hover:rotate-12 transition-transform ${isAr ? '-scale-x-100' : ''}`} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
