import { Link, useLocation } from "react-router-dom";
import { LOGO_URL, NAV_LINKS, CONTACT_INFO } from "@/src/lib/constants";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-dark-brown text-cream pt-16 md:pt-24 pb-12 border-t border-gold/10">
      <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-20 ${isAr ? 'text-right' : 'text-left'}`}>
        <div className="space-y-6 md:space-y-8">
          <p className="text-cream/80 leading-relaxed font-sans max-w-xs pt-2">
            {isAr 
              ? "مدعوم من Waschsalon Laundry. إعادة تعريف العناية الفاخرة بالمساحات الداخلية مع تكنولوجيا متميزة وحرفية متقنة."
              : "Powered by Waschsalon Laundry. Redefining luxury interior care with premium technology and master craftsmanship."
            }
          </p>
          <div className={`flex ${isAr ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:gold-gradient transition-all border-white/10" aria-label="Social Link">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif text-gold-soft mb-4 md:mb-8">{t('footer.footerLinks')}</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => {
              const href = isHomePage ? link.href : `/${link.href}`;
              return (
                <li key={link.name}>
                  <a href={href} className={`text-cream/70 hover:text-gold transition-colors flex items-center group py-1 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <span className={`w-1 h-1 bg-gold rounded-full ${isAr ? 'ml-3' : 'mr-3'} opacity-0 transition-opacity group-hover:opacity-100 shrink-0`} />
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif text-gold-soft mb-4 md:mb-8">{t('footer.servicesTitle')}</h4>
          <ul className="space-y-3">
            {(isAr 
              ? ["تنظيف الستائر", "التعقيم بالبخار", "الإزالة والتركيب", "العناية بالأقمشة", "تنظيف الكنب"]
              : ["Curtain Cleaning", "Steam Sanitization", "Removal & Install", "Fabric Care", "Sofa Cleaning"]
            ).map(service => (
              <li key={service}>
                <a href={isHomePage ? "#services" : "/#services"} className="text-cream/70 hover:text-gold transition-colors py-1 inline-block">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif text-gold-soft mb-4 md:mb-8">{t('footer.getInTouch')}</h4>
          <div className="pt-2 space-y-4">
             <div className={`flex items-start text-cream/60 text-sm ${isAr ? 'flex-row-reverse' : ''}`}>
                <Phone size={16} className={`${isAr ? 'ml-3' : 'mr-3'} text-gold mt-1 shrink-0`} />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-gold transition-colors">{CONTACT_INFO.phone}</a>
             </div>
             <div className={`flex items-start text-cream/60 text-sm ${isAr ? 'flex-row-reverse' : ''}`}>
                <Mail size={16} className={`${isAr ? 'ml-3' : 'mr-3'} text-gold mt-1 shrink-0`} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="break-all hover:text-gold transition-colors">{CONTACT_INFO.email}</a>
             </div>
             <div className={`flex items-start text-cream/60 text-sm ${isAr ? 'flex-row-reverse' : ''}`}>
                <MapPin size={16} className={`${isAr ? 'ml-3' : 'mr-3'} text-gold mt-1 shrink-0`} />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
             </div>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 ${isAr ? 'md:flex-row-reverse' : ''}`}>
        <p className="text-cream/30 text-[10px] sm:text-xs text-center md:text-left order-2 md:order-1">
          © {new Date().getFullYear()} {isAr ? "كيرتن كيرز من Waschsalon Laundry. جميع الحقوق محفوظة." : "Curtaincares by Waschsalon Laundry. All rights reserved."}
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-8 text-cream/30 text-[10px] sm:text-xs order-1 md:order-2">
          <Link to="/privacy" className="hover:text-gold transition-colors">{t('footer.privacy')}</Link>
          <Link to="/terms" className="hover:text-gold transition-colors">{t('footer.terms')}</Link>
          <Link to="/cookies" className="hover:text-gold transition-colors">{t('footer.cookies')}</Link>
        </div>
      </div>
    </footer>
  );
}
