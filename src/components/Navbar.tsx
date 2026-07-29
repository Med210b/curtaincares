import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LOGO_URL, CONTACT_INFO } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";
import { useLanguage } from "@/src/context/LanguageContext";
import { LanguageSwitcherSimple } from "@/src/components/LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { t, language } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.prices'), href: "#prices" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.gallery'), href: "#gallery" },
    { name: t('nav.faq'), href: "#faq" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-gold/10 py-1 md:py-1.5"
          : "bg-white py-2 border-b border-gold/10 shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
            <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
              "relative transition-all duration-500 group",
              isScrolled ? "h-12 md:h-16 w-32 md:w-48 lg:h-20 lg:w-64" : "h-16 md:h-24 w-40 md:w-64 lg:h-32 lg:w-[400px]"
            )}
          >
            <img
              src={LOGO_URL}
              alt="Curtaincares Logo"
              className="h-full w-full object-contain transition-all duration-500 relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <nav className={`hidden lg:flex items-center ${language === 'ar' ? 'space-x-reverse space-x-6' : 'space-x-6'} flex-nowrap whitespace-nowrap`}>
          {navLinks.map((link, i) => {
            const href = isHomePage ? link.href : `/${link.href}`;
            return (
              <motion.a
                key={link.name}
                href={href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="text-sm font-medium transition-colors relative group text-gold hover:text-gold-soft"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            );
          })}
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <LanguageSwitcherSimple />
            <motion.a
              href={isHomePage ? "#contact" : "/#contact"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2 rounded-button text-xs font-bold shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 gold-gradient text-white hover:shadow-gold/30"
            >
              {t('nav.book_now')}
            </motion.a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4 space-x-reverse">
          <LanguageSwitcherSimple />
          <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="p-2 rounded-full transition-colors bg-gold/10 text-gold">
            <Phone size={20} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gold"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-brown/95 backdrop-blur-xl flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-cream"
            >
              <X size={32} />
            </button>

            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-12 h-20 w-48 md:h-28 md:w-72"
              >
                <img
                  src={LOGO_URL}
                  alt="Curtaincares Logo"
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </Link>

            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, i) => {
                const href = isHomePage ? link.href : `/${link.href}`;
                return (
                  <motion.a
                    key={link.name}
                    href={href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-cream text-2xl font-serif hover:text-gold-soft transition-colors"
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 gold-gradient text-white px-10 py-4 rounded-button text-lg font-medium shadow-2xl"
              >
                {t('nav.book_now')}
              </motion.a>
              
              <div className="pt-8">
                <LanguageSwitcherSimple light />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

