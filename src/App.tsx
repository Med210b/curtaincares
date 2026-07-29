import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/src/context/LanguageContext";
import Navbar from "@/src/components/Navbar";
import ScrollProgress from "@/src/components/ScrollProgress";
import Footer from "@/src/components/Footer";
import Loading from "@/src/components/Loading";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import { SEO } from "@/src/components/SEO";

// Lazy load pages
const Home = lazy(() => import("@/src/pages/Home"));
const ProjectDetail = lazy(() => import("@/src/pages/ProjectDetail"));
const LegalPage = lazy(() => import("@/src/pages/LegalPage"));
const AllProjects = lazy(() => import("@/src/pages/AllProjects"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const PrivacyContent = ({ lang }: { lang: string }) => {
  const isAr = lang === 'ar';
  return isAr ? (
    <>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">1. جمع البيانات</h2>
        <p>نحن نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تطلب خدمة، أو تشترك في نشرتنا الإخبارية، أو تتصل بفريق الكونسيرج لدينا. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وعنوان الخدمة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">2. استخدام المعلومات</h2>
        <p>نستخدم المعلومات التي نجمعها لتقديم خدماتنا وصيانتها وتحسينها، ولمعالجة معاملاتك، وللتواصل معك بشأن طلباتك والعروض الترويجية.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">3. أمن البيانات</h2>
        <p>نحن ننفذ مجموعة متنوعة من الإجراءات الأمنية للحفاظ على سلامة معلوماتك الشخصية عندما تضع طلباً أو تدخل أو ترسل أو تصل إلى معلوماتك الشخصية.</p>
      </section>
    </>
  ) : (
    <>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">1. Data Collection</h2>
        <p>We collect information that you provide directly to us, such as when you request a service, sign up for our newsletter, or contact our concierge team. This may include your name, email address, phone number, and service address.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">2. Use of Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your orders and promotional offers.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">3. Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
      </section>
    </>
  );
};

const TermsContent = ({ lang }: { lang: string }) => {
  const isAr = lang === 'ar';
  return isAr ? (
    <>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">1. قبول الشروط</h2>
        <p>من خلال الوصول إلى خدمات كيرتن كيرز واستخدامها، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">2. ضمان الخدمة</h2>
        <p>بينما نستخدم أجود أنواع مواد وطرق التنظيف، فإننا لسنا مسؤولين عن الأضرار الموجودة مسبقاً، أو تدهور القماش بسبب العمر/ضوء الشمس، أو عيوب المصنع.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">3. سياسة الإلغاء</h2>
        <p>قد تخضع عمليات الإلغاء التي تتم قبل أقل من 24 ساعة من الموعد المحدد لرسوم خدمة.</p>
      </section>
    </>
  ) : (
    <>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing and using Curtaincares services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">2. Service Guarantee</h2>
        <p>While we use the highest quality cleaning agents and methods, we are not responsible for pre-existing damage, fabric degradation due to age/sunlight, or manufacturers' defects.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">3. Cancellation Policy</h2>
        <p>Cancellations made less than 24 hours before a scheduled appointment may be subject to a service fee.</p>
      </section>
    </>
  );
};

const CookieContent = ({ lang }: { lang: string }) => {
  const isAr = lang === 'ar';
  return isAr ? (
    <>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">ما هي ملفات تعريف الارتباط؟</h2>
        <p>ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا الإلكتروني. تساعدنا في تزويدك بتجربة أفضل وتحليل كيفية استخدام موقعنا.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
        <ul className={`list-disc ${isAr ? 'pr-6 pl-0' : 'pl-6'} space-y-2 text-espresso/70`}>
          <li><strong>الملفات الضرورية:</strong> مطلوبة لعمل الموقع بشكل صحيح.</li>
          <li><strong>الملفات التحليلية:</strong> تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا.</li>
          <li><strong>الملفات الوظيفية:</strong> تسمح للموقع بتذكر الاختيارات التي تقوم بها.</li>
        </ul>
      </section>
    </>
  ) : (
    <>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">What are cookies?</h2>
        <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and analyze how our site is used.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-espresso mt-8 mb-4">Types of cookies we use</h2>
        <ul className="list-disc pl-6 space-y-2 text-espresso/70">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li><strong>Functional Cookies:</strong> Allow the website to remember choices you make.</li>
        </ul>
      </section>
    </>
  );
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const isAr = language === 'ar';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-gold selection:text-white">
      <AnimatePresence>
        {isLoading && <Loading key="loader" />}
      </AnimatePresence>

      <ScrollProgress />
      <SEO />
      <Navbar />
      <ScrollToTop />
      
      <main>
        <Suspense fallback={<div className="min-h-screen bg-cream" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/privacy" element={<LegalPage title={isAr ? "سياسة الخصوصية" : "Privacy Policy"} content={<PrivacyContent lang={language} />} />} />
            <Route path="/terms" element={<LegalPage title={isAr ? "شروط الخدمة" : "Terms of Service"} content={<TermsContent lang={language} />} />} />
            <Route path="/cookies" element={<LegalPage title={isAr ? "إعدادات ملفات تعريف الارتباط" : "Cookie Settings"} content={<CookieContent lang={language} />} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

