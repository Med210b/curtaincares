import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";
import { CONTACT_INFO } from "@/src/lib/constants";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: isAr ? "تنظيف الستائر" : "Curtain Cleaning",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorType, setErrorType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: isAr ? "تنظيف الستائر" : "Curtain Cleaning",
          message: ""
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
        setErrorType(data.errorType || "general");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(isAr ? "خطأ في الشبكة. يرجى التحقق من اتصالك." : "Network error. Please check your connection.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-start ${isAr ? 'text-right' : 'text-left'}`}>
          <FadeIn direction={isAr ? "left" : "right"}>
            <span className="text-gold uppercase tracking-[0.3em] text-sm block mb-4">
              {isAr ? "تواصل معنا" : "Get In Touch"}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-espresso mb-8 leading-tight">
              {isAr ? (
                <>
                  جاهز <br /><span className="gold-text-gradient">للتحول؟</span>
                </>
              ) : (
                <>
                  Ready for <br /><span className="gold-text-gradient">Transformation?</span>
                </>
              )}
            </h2>
            
            <p className="text-espresso/70 text-lg mb-12 max-w-md leading-relaxed mx-0">
              {isAr ? "جرب قمة العناية بالأقمشة. فريق الكونسيرج لدينا جاهز لمساعدتك بخطة تنظيف مخصصة لمنزلك أو عملك." : "Experience the pinnacle of fabric care. Our concierge team is ready to assist you with a personalized cleaning plan for your home or business."}
            </p>

            <div className="space-y-8">
              <div className={`flex items-center ${isAr ? 'space-x-reverse space-x-6' : 'space-x-6'} group`}>
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gold uppercase tracking-widest font-bold">
                    {isAr ? "اتصل بنا" : "Call Us"}
                  </p>
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-xl font-serif text-espresso hover:text-gold transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>
              <div className={`flex items-center ${isAr ? 'space-x-reverse space-x-6' : 'space-x-6'} group`}>
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-gold uppercase tracking-widest font-bold">
                    {isAr ? "واتساب" : "WhatsApp"}
                  </p>
                  <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xl font-serif text-espresso hover:text-gold transition-colors">{CONTACT_INFO.whatsapp}</a>
                </div>
              </div>
              <div className={`flex items-center ${isAr ? 'space-x-reverse space-x-6' : 'space-x-6'} group`}>
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gold uppercase tracking-widest font-bold">
                    {isAr ? "الموقع" : "Location"}
                  </p>
                  <p className="text-lg font-serif text-espresso leading-tight">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction={isAr ? "right" : "left"}
            className="glass p-6 md:p-10 lg:p-16 rounded-premium border-gold/10 relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-6 relative z-10 py-10"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-500 mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-serif text-espresso">
                    {isAr ? 'شكراً لك!' : 'Thank You!'}
                  </h3>
                  <p className="text-espresso/70 text-lg leading-relaxed max-w-sm mx-auto">
                    {isAr ? "مرحباً بك في عائلة كيرتن كيرز. لقد استلمنا طلبك وسيتصل بك الكونسيرج قريباً لمناقشة متطلباتك." : "Welcome to the Curtain Care family. We've received your request and our concierge will contact you shortly to discuss your requirements."}
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-gold font-bold uppercase tracking-widest text-xs hover:underline pt-4"
                  >
                    {isAr ? 'إرسال طلب آخر' : 'Send Another Request'}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-inherit">
                      <label className="text-xs uppercase tracking-widest font-bold text-espresso/60 block px-1">
                        {isAr ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={isAr ? "جون دو" : "John Doe"}
                        className={`w-full bg-espresso/5 border border-gold/20 rounded-xl px-6 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-espresso/20 ${isAr ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                    <div className="space-y-2 text-inherit">
                      <label className="text-xs uppercase tracking-widest font-bold text-espresso/60 block px-1">
                        {isAr ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971..."
                        className={`w-full bg-espresso/5 border border-gold/20 rounded-xl px-6 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-espresso/20 ${isAr ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 text-inherit">
                    <label className="text-xs uppercase tracking-widest font-bold text-espresso/60 block px-1">
                      {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-espresso/5 border border-gold/20 rounded-xl px-6 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-espresso/20 ${isAr ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  <div className="space-y-2 text-inherit">
                    <label className="text-xs uppercase tracking-widest font-bold text-espresso/60 block px-1">
                      {isAr ? 'الخدمة المطلوبة' : 'Service Required'}
                    </label>
                    <div className="relative">
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full bg-espresso/5 border border-gold/20 rounded-xl px-6 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all appearance-none text-espresso ${isAr ? 'text-right pr-6 pl-12' : 'text-left'}`}
                      >
                        {isAr ? (
                          <>
                            <option>تنظيف الستائر</option>
                            <option>التعقيم بالبخار</option>
                            <option>الكنب والمفروشات</option>
                            <option>الإزالة والتركيب</option>
                            <option>تنظيف الكبائن الفاخرة</option>
                            <option>تنظيف خارجي عميق</option>
                          </>
                        ) : (
                          <>
                            <option>Curtain Cleaning</option>
                            <option>Steam Sanitization</option>
                            <option>Sofa & Upholstery</option>
                            <option>Removal & Installation</option>
                            <option>Premium Cabana Cleaning</option>
                            <option>OutdoorCare Deep Cleaning</option>
                          </>
                        )}
                      </select>
                      <div className={`absolute ${isAr ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 pointer-events-none text-gold`}>
                        <CheckCircle2 size={16} className="opacity-50" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-inherit">
                    <label className="text-xs uppercase tracking-widest font-bold text-espresso/60 block px-1">
                      {isAr ? 'رسالتك' : 'Your Message'}
                    </label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={isAr ? "أخبرنا عن متطلباتك..." : "Tell us about your requirements..."}
                      className={`w-full bg-espresso/5 border border-gold/20 rounded-xl px-6 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-espresso/20 ${isAr ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  
                  {status === "error" && (
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center space-y-3">
                      <div className="space-y-1">
                        <p className="text-red-600 text-sm font-bold">
                          {isAr ? "تعذر إرسال الرسالة عبر البريد الإلكتروني." : "Message could not be sent via email."}
                        </p>
                        <p className="text-espresso/70 text-xs leading-relaxed">{errorMessage}</p>
                      </div>
                      
                      {errorType === "smtp_auth_disabled" && (
                        <div className={`text-[10px] text-espresso/60 space-y-2 ${isAr ? 'text-right' : 'text-left'} bg-white/50 p-3 rounded-lg border border-red-500/10`}>
                          <p className="font-bold text-red-600">
                            {isAr ? "مطلوب إجراء من المسؤول:" : "Admin Action Required:"}
                          </p>
                          <ol className={`list-decimal ${isAr ? 'mr-4 ml-0' : 'ml-4'} space-y-1`}>
                            <li>Go to <b>Microsoft 365 Admin Center</b>.</li>
                            <li>Users {">"} Active users {">"} Select your account.</li>
                            <li>Click <b>Mail</b> tab {">"} <b>Manage email apps</b>.</li>
                            <li>Check <b>Authenticated SMTP</b> and Save.</li>
                          </ol>
                        </div>
                      )}

                      <div className="pt-2 border-t border-red-500/10">
                        <a 
                          href={CONTACT_INFO.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`gold-gradient text-white py-2 px-4 rounded-lg font-bold uppercase tracking-widest text-[10px] flex items-center justify-center hover:shadow-lg transition-all ${isAr ? 'flex-row-reverse' : ''}`}
                        >
                          {isAr ? "تواصل عبر واتساب الآن" : "Contact via WhatsApp Now"}
                          <MessageSquare size={12} className={isAr ? "mr-2" : "ml-2"} />
                        </a>
                      </div>
                    </div>
                  )}

                  <button 
                    disabled={status === "loading"}
                    className={`w-full gold-gradient text-white py-5 rounded-button font-bold text-lg shadow-xl shadow-gold/20 hover:shadow-gold/40 transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed ${isAr ? 'flex-row-reverse' : ''}`}
                  >
                    {status === "loading" ? (isAr ? "جاري المعالجة..." : "Processing...") : (isAr ? "اطلب معاودة الاتصال" : "Request a Callback")}
                    <Send size={18} className={`${isAr ? 'mr-2 -rotate-90' : 'ml-2'} transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
            {/* Background Texture */}
            <div className={`absolute top-0 ${isAr ? 'left-0 -ml-32' : 'right-0 -mr-32'} w-64 h-64 bg-gold/5 rounded-full -mt-32 blur-3xl pointer-events-none`} />
            <div className={`absolute bottom-0 ${isAr ? 'right-0 -mr-32' : 'left-0 -ml-32'} w-64 h-64 bg-gold/5 rounded-full -mb-32 blur-3xl pointer-events-none`} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
