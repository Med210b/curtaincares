import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
          language === 'en' 
            ? 'gold-gradient text-white shadow-sm' 
            : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
          language === 'ar' 
            ? 'gold-gradient text-white shadow-sm' 
            : 'text-white/60 hover:text-white'
        }`}
      >
        AR
      </button>
    </div>
  );
};

export const LanguageSwitcherSimple = ({ light = false }: { light?: boolean }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all ${
        light 
          ? 'border-white/20 text-white hover:bg-white/10' 
          : 'border-espresso/10 text-espresso hover:bg-espresso/5'
      }`}
    >
      <Globe size={14} className={language === 'ar' ? 'ml-2' : 'mr-2'} />
      <span className="text-[10px] font-bold uppercase tracking-wider">
        {language === 'en' ? 'Arabic' : 'English'}
      </span>
    </button>
  );
};
