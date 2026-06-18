import { Phone, MessageSquare, Code, Cpu, Award, Zap, Building, Heart, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Translation, servicesList } from "../types";


interface IconCodeCompanyProps {
  t: Translation;
  currentLang: "ar" | "en";
}

export default function IconCodeCompany(props: IconCodeCompanyProps) {
  const { t, currentLang } = props;
  const isRtl = currentLang === "ar";

  const companyStats = [
    { value: "2023", labelAr: "عام التأسيس", labelEn: "Founded Year" },
    { value: "100+", labelAr: "عملاء سعداء", labelEn: "Happy Clients" },
    { value: "4+", labelAr: "دول ننشط بها", labelEn: "Active Countries" },
    { value: "150+", labelAr: "أنظمة برمجية", labelEn: "Built Platforms" }
  ];

  return (
    <section 
      id="icon-code-section" 
      className="relative w-full pt-28 pb-32 overflow-hidden bg-[#120e0d] text-[#fdfaf4]"
    >
      {/* Absolute high-tech glowing backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[30%] rounded-full bg-aseeb-red/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-aseeb-gold/10 blur-[130px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} 
      />

      <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
        
        {/* =======================================================
            HEADER: COMPANY LOGO WITH SPINNING BLINKING COMPONENT
            ======================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          
          <div className="inline-flex items-center gap-2 bg-[#fdfaf4]/5 border border-[#fdfaf4]/10 px-4 py-2 rounded-full text-aseeb-gold text-xs font-bold font-sans tracking-wider mb-6">
            <Cpu className="w-4 h-4 text-aseeb-gold animate-bounce" />
            <span>{currentLang === "ar" ? "الشريك التقني والمطور لـ عسيب" : "The Technical Engineering Partner"}</span>
          </div>

          {/* Interactive Company Name + Pointing glowing Emoji "icon code ☝️" */}
          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3f4f6] to-aseeb-gold uppercase">
              {currentLang === "ar" ? "آيكون كود" : "icon code"}
            </h2>

            {/* Glowing, spinning, blinking pointing hand emoji */}
            <motion.div
              id="company-glowing-emoji"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1, 1.2, 1]
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 15, ease: "linear" },
                scale: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
              }}
              className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-aseeb-dark border border-aseeb-gold text-3xl shadow-[0_0_15px_rgba(229,169,59,0.4)] cursor-pointer select-none animate-blink"
            >
              ☝️
              <div className="absolute -inset-1 rounded-xl border border-aseeb-gold/40 border-dashed animate-spin-slow pointer-events-none" />
            </motion.div>
          </div>

          <p className="mt-6 text-lg md:text-xl text-neutral-400 font-medium font-sans">
            {t.iconCodeTagline}
          </p>
          <div className="w-24 h-1 bg-aseeb-gold rounded-full mt-4" />
          <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
            {t.iconCodeDesc}
          </p>
        </div>

        {/* =======================================================
            FOUNDERS / DEVELOPERS SHOWCASE IN BRIEF (YOUSSEF & OMAR)
            ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
          
          {/* DEVELOPER 1: Eng. Youssef Mohamed El Sayed (Photos holding the book) */}
          <div 
            id="developer-card-youssef" 
            className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 hover:border-aseeb-gold/30 transition-all duration-300 relative group overflow-hidden"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {/* Background Sadu Accent */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-aseeb-gold via-aseeb-red to-aseeb-gold opacity-60" />
            
            {/* Contact Icon Area */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 md:w-44 md:h-44 flex items-center justify-center">
                <motion.div
                  id="youssef-spin-ring"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-aseeb-gold/60 pointer-events-none"
                />
                <div className="absolute -inset-2 rounded-full bg-aseeb-gold/30 blur-xl animate-blink pointer-events-none" />
                <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden border-2 border-aseeb-gold shadow-[0_0_25px_rgba(229,169,59,0.55)] animate-float bg-neutral-900 flex flex-col items-center justify-center gap-2 px-3">
                  <Code className="w-8 h-8 text-aseeb-gold" />
                  <span className="text-[10px] text-center text-aseeb-gold font-bold font-sans leading-tight whitespace-pre-line">
                    {currentLang === "ar" ? "للتواصل مع\nفريق ICON Code" : "Contact\nICON Code Team"}
                  </span>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold font-mono tracking-widest text-aseeb-gold uppercase">
                  {currentLang === "ar" ? "للتواصل مع فريق ICON Code" : "Contact ICON Code Team"}
                </span>
                <h3 className="text-2xl font-black text-white font-sans">
                  {currentLang === "ar" ? "فريق ICON Code" : "ICON Code Team"}
                </h3>
                <p className="text-sm text-neutral-400 font-sans leading-relaxed pt-2">
                  {currentLang === "ar" 
                    ? "تواصل معنا مباشرةً عبر الاتصال أو واتساب للاستفسار عن خدماتنا البرمجية واحتياجاتك التقنية." 
                    : "Reach out directly via call or WhatsApp to inquire about our technical services and software solutions."}
                </p>
              </div>

              {/* Developer contact actions: Dials, WhatsApp (Pulsing & Moving simple actions) */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {/* Dial action */}
                <a
                  id="youssef-dial-btn"
                  href="tel:+201094555299"
                  className="relative flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-aseeb-red hover:bg-[#a61e1e] rounded-xl transition-all duration-300 shadow-lg active:scale-95 animate-float"
                  title="+201094555299"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{currentLang === "ar" ? "اتصال تلفوني" : "Call Phone"}</span>
                </a>

                {/* WhatsApp Chat action */}
                <a
                  id="youssef-whatsapp-btn"
                  href="https://wa.me/201094555299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-emerald-400 bg-neutral-900 border border-emerald-500/30 hover:border-emerald-500 rounded-xl transition-all duration-300 shadow-lg active:scale-95 animate-blink"
                  title="Direct WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{currentLang === "ar" ? "دردشة واتساب" : "WhatsApp"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* DEVELOPER 2: Eng. Omar Mohamed El Sayed (Sea behind him photo) */}
          <div 
            id="developer-card-omar" 
            className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 hover:border-aseeb-red/30 transition-all duration-300 relative group overflow-hidden"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {/* Background Sadu Accent */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-aseeb-red via-aseeb-gold to-aseeb-red opacity-60" />

            {/* Contact Icon Area */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 md:w-44 md:h-44 flex items-center justify-center">
                <motion.div
                  id="omar-spin-ring"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#0284c7]/60 pointer-events-none"
                />
                <div className="absolute -inset-2 rounded-full bg-[#0284c7]/30 blur-xl animate-blink pointer-events-none" />
                <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden border-2 border-[#0284c7] shadow-[0_0_25px_rgba(2,132,199,0.55)] animate-float bg-neutral-900 flex flex-col items-center justify-center gap-2 px-3">
                  <Cpu className="w-8 h-8 text-[#0284c7]" />
                  <span className="text-[10px] text-center text-[#0284c7] font-bold font-sans leading-tight whitespace-pre-line">
                    {currentLang === "ar" ? "للتواصل مع\nفريق ICON Code" : "Contact\nICON Code Team"}
                  </span>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold font-mono tracking-widest text-[#0284c7] uppercase">
                  {currentLang === "ar" ? "للتواصل مع فريق ICON Code" : "Contact ICON Code Team"}
                </span>
                <h3 className="text-2xl font-black text-white font-sans">
                  {currentLang === "ar" ? "فريق ICON Code" : "ICON Code Team"}
                </h3>
                <p className="text-sm text-neutral-400 font-sans leading-relaxed pt-2">
                  {currentLang === "ar" 
                    ? "تواصل معنا مباشرةً عبر الاتصال أو واتساب للاستفسار عن خدماتنا البرمجية واحتياجاتك التقنية." 
                    : "Reach out directly via call or WhatsApp to inquire about our technical services and software solutions."}
                </p>
              </div>

              {/* Developer contact actions with blinking/glowing buttons and minor simple motion */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {/* Dial action */}
                <a
                  id="omar-dial-btn"
                  href="tel:+201102293350"
                  className="relative flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-aseeb-red hover:bg-[#a61e1e] rounded-xl transition-all duration-300 shadow-lg active:scale-95 animate-float"
                  title="+201102293350"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{currentLang === "ar" ? "اتصال تلفوني" : "Call Phone"}</span>
                </a>

                {/* WhatsApp Chat action */}
                <a
                  id="omar-whatsapp-btn"
                  href="https://wa.me/201102293350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-emerald-400 bg-neutral-900 border border-emerald-500/30 hover:border-emerald-500 rounded-xl transition-all duration-300 shadow-lg active:scale-95 animate-blink"
                  title="Direct WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{currentLang === "ar" ? "دردشة واتساب" : "WhatsApp"}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* =======================================================
            SERVICES: SPECIALIZATIONS SHOWCASE IN BRIEF (EMOJIS)
            ======================================================= */}
        <div className="mb-28">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-16">
            <span className="text-aseeb-gold text-sm font-black tracking-widest uppercase block font-sans">
              ✦ {currentLang === "ar" ? "مصفوفة خدماتنا الاحترافية" : "Our Technical Specialities Suite"} ✦
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans">
              {t.servicesTitle}
            </h3>
            <div className="w-16 h-1 bg-aseeb-gold mx-auto rounded-full" />
            <p className="text-sm text-neutral-400 font-sans">
              {currentLang === "ar" 
                ? "نحن لا نكتفي ببرمجة الكود، بل نصمم الهوية والأنظمة والبرمجيات المتكاملة بعقول احترافية غاية في الدقة." 
                : "We do not just compile code; we blueprint complex enterprise platforms, high-performance web shops & cashier portals."}
            </p>
          </div>

          {/* Grid Specialties */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, idx) => (
              <div 
                key={idx}
                id={`srv-card-${idx}`}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:bg-neutral-800/30 hover:border-aseeb-gold/25 transition-all duration-300 flex flex-col justify-between group h-full relative"
                dir={isRtl ? "rtl" : "ltr"}
              >
                {/* Floating Micro-glowing star corner */}
                <div className="absolute top-4 left-4 text-xs font-black animate-ping opacity-25 text-aseeb-gold group-hover:opacity-100 transition-opacity">
                  ✦
                </div>

                <div className="space-y-4">
                  {/* Floating specialty Emoji */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-800/80 text-2xl border border-neutral-700/50 group-hover:bg-gradient-to-tr group-hover:from-aseeb-red/40 group-hover:to-aseeb-gold/40 group-hover:border-aseeb-gold/30 transition-all duration-300 shadow-md">
                    {service.emoji}
                  </div>
                  
                  <h4 className="text-lg font-bold text-[#fffbeb] group-hover:text-aseeb-gold transition-colors font-sans">
                    {currentLang === "ar" ? service.titleAr : service.titleEn}
                  </h4>
                  
                  <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
                    {currentLang === "ar" ? service.descAr : service.descEn}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-[11px] font-bold text-neutral-500 font-sans">
                  <span className="flex items-center gap-1 text-aseeb-gold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-aseeb-gold/75" />
                    {currentLang === "ar" ? "خدمة نشطة" : "Active Service"}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-aseeb-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            PREVIOUS PROJECTS: GEOGRAPHIES WITH SPINNING FLAGS
            ======================================================= */}
        <div className="p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 relative overflow-hidden">
          
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-aseeb-gold/5 opacity-5 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" dir={isRtl ? "rtl" : "ltr"}>
            
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 bg-aseeb-gold/15 border border-aseeb-gold/30 px-3 py-1 rounded-full text-aseeb-gold text-[10px] font-bold uppercase tracking-wider font-sans">
                <Building className="w-3.5 h-3.5 text-aseeb-gold" />
                {currentLang === "ar" ? "التوسع الجغرافي" : "Geographic Mastery"}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-sans">
                {t.historyTitle}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
                {t.historyDesc}
              </p>
            </div>

            {/* Countries with animated/rotating flag designs */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Country 1: Egypt 🇪🇬 */}
              <div id="c-egypt" className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow hover:border-aseeb-gold/20 hover:scale-[1.02] transition-all flex items-center gap-4">
                {/* Rotating flag holder */}
                <motion.div
                  id="flag-egypt-holder"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                  className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-3xl shadow-inner select-none pointer-events-none"
                >
                  🇪🇬
                </motion.div>
                <div className="font-sans">
                  <h4 className="font-bold text-white text-base">
                    {currentLang === "ar" ? "مصر" : "Egypt"}
                  </h4>
                  <p className="text-[10px] md:text-xs text-neutral-400 mt-0.5 leading-snug">
                    {currentLang === "ar" ? "٤٥+ نظام كاشير وموقع إلكتروني" : "45+ POS cashier units engineered"}
                  </p>
                </div>
              </div>

              {/* Country 2: Saudi Arabia 🇸🇦 */}
              <div id="c-saudi" className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow hover:border-aseeb-red/20 hover:scale-[1.02] transition-all flex items-center gap-4">
                {/* Rotating flag holder */}
                <div
                  id="flag-saudi-holder"
                  className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-3xl shadow-inner select-none pointer-events-none"
                >
                  🇸🇦
                </div>
                <div className="font-sans">
                  <h4 className="font-bold text-aseeb-gold text-base">
                    {currentLang === "ar" ? "السعودية" : "Saudi Arabia"}
                  </h4>
                  <p className="text-[10px] md:text-xs text-neutral-400 mt-0.5 leading-snug">
                    {currentLang === "ar" ? "تصاميم مطاعم ومنافذ كبرى بالرياض" : "Riyadh restaurant portals and logistics"}
                  </p>
                </div>
              </div>

              {/* Country 3: UAE 🇦🇪 */}
              <div id="c-uae" className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow hover:border-[#0284c7]/20 hover:scale-[1.02] transition-all flex items-center gap-4">
                {/* Rotating flag holder */}
                <motion.div
                  id="flag-uae-holder"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                  className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-3xl shadow-inner select-none pointer-events-none"
                >
                  🇦🇪
                </motion.div>
                <div className="font-sans">
                  <h4 className="font-bold text-white text-base">
                    {currentLang === "ar" ? "الإمارات" : "UAE"}
                  </h4>
                  <p className="text-[10px] md:text-xs text-neutral-400 mt-0.5 leading-snug">
                    {currentLang === "ar" ? "متاجر إلكترونية وتقنيات دبي الرقمية" : "Dubai digital shops & apparel platforms"}
                  </p>
                </div>
              </div>

              {/* Country 4: Greece 🇬🇷 */}
              <div id="c-greece" className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow hover:border-[#1d4ed8]/20 hover:scale-[1.02] transition-all flex items-center gap-4">
                {/* Rotating flag holder */}
                <motion.div
                  id="flag-greece-holder"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-3xl shadow-inner select-none pointer-events-none"
                >
                  🇬🇷
                </motion.div>
                <div className="font-sans">
                  <h4 className="font-bold text-white text-base">
                    {currentLang === "ar" ? "اليونان" : "Greece"}
                  </h4>
                  <p className="text-[10px] md:text-xs text-neutral-400 mt-0.5 leading-snug">
                    {currentLang === "ar" ? "مشاريع برمجية وأنظمة رقمية باليونان" : "Software projects & digital systems in Greece"}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            NUMERIC STATS COUNTERS PANEL
            ======================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {companyStats.map((stat, idx) => (
            <div 
              key={idx}
              id={`stat-box-${idx}`}
              className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-900 shadow-xl text-center flex flex-col justify-center font-sans relative group"
            >
              <div className="absolute top-1 right-2 animate-pulse text-xs text-neutral-600 select-none">
                ■
              </div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-aseeb-gold tracking-tight glow-text-gold">
                {stat.value}
              </h4>
              <p className="text-xs text-neutral-400 font-bold mt-1.5 font-sans">
                {currentLang === "ar" ? stat.labelAr : stat.labelEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
