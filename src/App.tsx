import { useState, useEffect } from "react";
import { Wifi, WifiOff, Share2, Sparkles, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { arTranslations, enTranslations, Translation } from "./types";
import LanguageSelector from "./components/LanguageSelector";
import FloatingFABs from "./components/FloatingFABs";
import AseebRestaurant from "./components/AseebRestaurant";
import IconCodeCompany from "./components/IconCodeCompany";
import aseebLogo from "./assets/images/aseeb_3d_logo_icon_1781704137308.jpg";

export default function App() {
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar");
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [showStatusAlert, setShowStatusAlert] = useState<boolean>(false);

  const t: Translation = currentLang === "ar" ? arTranslations : enTranslations;

  // React onLine listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowStatusAlert(true);
      const timer = setTimeout(() => setShowStatusAlert(false), 5000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowStatusAlert(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: t.appName,
        text: t.tagline,
        url: window.location.href,
      }).catch((error) => console.log("Successful share omitted", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(currentLang === "ar" ? "تم نسخ رابط الموقع بنجاح! 🔗" : "Website URL copied successfully! 🔗");
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col justify-between selection:bg-aseeb-red selection:text-white"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      
      {/* =======================================================
          A. NAVIGATION HEADER
          ======================================================= */}
      <header className="sticky top-0 z-40 bg-aseeb-dark/95 backdrop-blur-md border-b border-aseeb-gold/15 py-4">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
          
          {/* Header Brand */}
          <a
            href="#"
            className="flex items-center gap-2 md:gap-3 group"
          >
            <div 
              style={{ perspective: 1000 }}
              className="relative w-11 h-11 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  y: [0, -3, 0],
                  filter: [
                    "drop-shadow(0 0 2px rgba(229, 169, 59, 0.4))",
                    "drop-shadow(0 0 12px rgba(229, 169, 59, 0.9))",
                    "drop-shadow(0 0 2px rgba(229, 169, 59, 0.4))"
                  ]
                }}
                transition={{
                  rotateY: { repeat: Infinity, duration: 6, ease: "linear" },
                  y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                  filter: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="w-9 h-9 rounded-full border border-aseeb-gold/60 overflow-hidden bg-aseeb-dark shadow-[0_0_12px_rgba(229,169,59,0.25)] flex items-center justify-center"
              >
                <img 
                  src={aseebLogo} 
                  alt="Aseeb 3D Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="text-right">
              <span className="block text-sm font-black text-white tracking-tight font-sans">
                {currentLang === "ar" ? "مطعم عسيب" : "Aseeb Restaurant"}
              </span>
              <span className="block text-[9px] text-aseeb-gold/75 font-mono uppercase font-bold tracking-wider">
                {currentLang === "ar" ? "تأسس ٢٠٢٣" : "EST. 2023"}
              </span>
            </div>
          </a>

          {/* Quick Section anchors */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wide text-neutral-400 font-sans">
            <a 
              href="#aseeb-restaurant-section" 
              className="hover:text-aseeb-gold transition-colors duration-200"
            >
              🍲 {t.menu}
            </a>
            <a 
              href="#icon-code-section" 
              className="hover:text-aseeb-gold transition-colors duration-200"
            >
              💻 {t.developersHub}
            </a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            
            {/* Share button */}
            <button
              id="share-btn"
              onClick={handleShare}
              className="p-2 border border-stone-800 hover:border-aseeb-gold/30 hover:bg-stone-900 rounded-full text-neutral-400 hover:text-aseeb-gold transition-all duration-200 active:scale-95"
              title={currentLang === "ar" ? "مشاركة الموقع" : "Share URL"}
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Language Switch Selector */}
            <LanguageSelector
              currentLang={currentLang}
              toggleLang={toggleLanguage}
              label={t.langSwitched}
            />
          </div>

        </div>
      </header>

      {/* =======================================================
          B. PERSISTENT LIVE NETWORKING OFFLINE AWARENESS BAR
          ======================================================= */}
      <AnimatePresence>
        {(!isOnline || showStatusAlert) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`sticky top-[73px] z-30 w-full text-center py-2 px-4 shadow-lg text-xs font-bold leading-relaxed flex items-center justify-center gap-2 font-sans ${
              isOnline 
                ? "bg-emerald-600 text-white" 
                : "bg-[#c22929] text-white animate-pulse"
            }`}
          >
            {isOnline ? (
              <>
                <Wifi className="w-4 h-4 text-white animate-spin" />
                <span>{t.onlineMode}</span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-white animate-bounce" />
                <span>{t.offlineMode}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =======================================================
          C. MAIN CONTENT SECTIONS
          ======================================================= */}
      <main className="flex-grow">
        
        {/* Section 1: Aseeb Traditional Royal Restaurant */}
        <AseebRestaurant t={t} currentLang={currentLang} />

        {/* Brand visual transition Sadu element */}
        <div className="w-full h-2 bg-gradient-to-r from-aseeb-red via-aseeb-gold to-aseeb-red" />

        {/* Section 2: ICON Code Technology Dev House */}
        <IconCodeCompany t={t} currentLang={currentLang} />

      </main>

      {/* =======================================================
          D. BRAND GLOBAL FOOTER
          ======================================================= */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-500 text-sm font-sans relative">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-900 pb-8 mb-8" dir={currentLang === "ar" ? "rtl" : "ltr"}>
            <div className="text-center md:text-right space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-extrabold text-[#fffbeb] tracking-wide font-sans">
                  {currentLang === "ar" ? "مطعم عسيب" : "Aseeb Restaurant"}
                </span>
                <span className="text-aseeb-gold">❆</span>
                <span className="font-bold text-aseeb-gold">
                  {currentLang === "ar" ? "بوابة آيكون كود" : "ICON Code Gate"}
                </span>
              </div>
              <p className="text-xs text-neutral-600 font-sans">
                {currentLang === "ar" 
                  ? "الموقع الرسمي المطور بأرقى التقنيات البرمجية ذات الشفرة المصدرية غير القابلة للاختراق." 
                  : "The official high-performance platform engineered on state-of-the-art secure software systems."}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold">
              <a href="#aseeb-restaurant-section" className="hover:text-aseeb-gold">{t.home}</a>
              <span>•</span>
              <a href="#aseeb-menu-section" className="hover:text-aseeb-gold">{t.menu}</a>
              <span>•</span>
              <a href="#icon-code-section" className="hover:text-aseeb-gold">{t.developersHub}</a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6" dir={currentLang === "ar" ? "rtl" : "ltr"}>
            {/* Founders, Engineers, Year, Numbers */}
            <div className="text-center md:text-right space-y-2 max-w-xl">
              <p className="text-xs text-neutral-400 font-sans">
                {t.developedBy}{" "}
                <span className="font-black text-[#fffbeb]">
                  {currentLang === "ar" ? "آيكون كود ☝️" : "ICON Code ☝️"}
                </span>{" "}
                {currentLang === "ar" ? "- تأسست عام ٢٠٢٣ بقوة وإصرار." : "- Established with ambition in 2023."}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-xs text-neutral-500">
                <span className="font-medium">
                  👨‍💻 {currentLang === "ar" ? "تأسيس م. يوسف محمد السيد محمد" : "Founded by Eng. Youssef Mohamed"}
                </span>
                <span>•</span>
                <span className="font-medium">
                  👨‍💻 {currentLang === "ar" ? "تأسيس م. عمر محمد السيد محمد" : "Founded by Eng. Omar Mohamed"}
                </span>
              </div>
            </div>

            {/* Copyright, Licensing, Sadu symbol */}
            <div className="text-center lg:text-left space-y-1">
              <p className="text-xs text-neutral-500 font-mono">
                &copy; {new Date().getFullYear()} {currentLang === "ar" ? "آيكون كود برمجيات وبناء أنظمة كاشير" : "ICON Code Systems Ltd"}.
              </p>
              <div className="flex items-center justify-center lg:justify-end gap-1.5 text-[10px] text-neutral-600 font-bold uppercase font-mono">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-aseeb-red animate-pulse" />
                <span>in Cairo, Riyadh & UAE</span>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* =======================================================
          E. PERSISTENT FLOATING ACTIONS (Call & Whatsapp)
          ======================================================= */}
      <FloatingFABs currentLang={currentLang} />

    </div>
  );
}
