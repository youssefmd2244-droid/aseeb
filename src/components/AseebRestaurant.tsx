import { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Sparkles, Utensils, Award, Heart, ZoomIn, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Translation, MenuItem } from "../types";

// Import generated images securely
import kabsaImg from "../assets/images/aseeb_kabsa_1781690349883.jpg";
import saleegImg from "../assets/images/aseeb_saleeg_1781690364872.jpg";
import sambousekImg from "../assets/images/aseeb_sambousek_1781690378035.jpg";
import heroImg from "../assets/images/aseeb_grand_entrance_1781704061889.jpg";
import interiorImg from "../assets/images/aseeb_luxury_interior_1781704085347.jpg";
import coffeeImg from "../assets/images/aseeb_saudi_coffee_dallah_1781704549491.jpg";
import hunainiImg from "../assets/images/aseeb_hunaini_dessert_1781704566076.jpg";
import teaImg from "../assets/images/aseeb_mint_basil_tea_1781704582760.jpg";

interface AseebRestaurantProps {
  t: Translation;
  currentLang: "ar" | "en";
}

export default function AseebRestaurant(props: AseebRestaurantProps) {
  const { t, currentLang } = props;
  const isRtl = currentLang === "ar";

  const [activeTab, setActiveTab] = useState<"dishes" | "drinks">("dishes");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);

  // Menu lists
  const menuItems: MenuItem[] = [
    {
      id: "dish1",
      nameAr: "كبسة العزيمة التراثية",
      nameEn: "Royal Al-Azeema Kabsa",
      descAr: "طبق الأرز السعودي العريق بقطع لحم الضأن الطازج المطهو ببطء والمزين باللوز المقرمش ومسحوق لومي الخلطة السرية.",
      descEn: "Traditional long-grain rice crown topped with succulent slow-cooked lamb, toasted sweet almonds, premium raisins, and heritage spices.",
      price: 0,
      image: kabsaImg,
      tagAr: "طبق رئيسي",
      tagEn: "Main Signature",
      badgeAr: "الأكثر مبيعاً 🔥",
      badgeEn: "Best Seller 🔥"
    },
    {
      id: "dish2",
      nameAr: "السليق السعودي التراثي الأصيل",
      nameEn: "Traditional Creamy Saleeg",
      descAr: "أرز بلدي مطبوخ بمرق اللحم الطازج والحليب الصافي الساخن، يُقدم مع نصف حبة دجاج مقرمشة ودقوس الطماطم والنعناع العبق.",
      descEn: "Velvety short-grain rice cooked in chicken essence, local full-cream milk, served with golden-roasted chicken and fresh spicy tomato puree.",
      price: 0,
      image: saleegImg,
      tagAr: "تراثي بلدي",
      tagEn: "Heritage Bowl",
      badgeAr: "موصى به 👌",
      badgeEn: "Recommended 👌"
    },
    {
      id: "dish3",
      nameAr: "سمبوسة عسيب باللحم",
      nameEn: "Aseeb Crispy Meat Sambousek",
      descAr: "رقائق الحشوة التراثية المقرمشة المحشوة يدوياً بقطع اللحم المفروم المتبل ومسحوق البهارات الشرقية الفاخرة.",
      descEn: "Crispy pastry pockets hand-crafted and loaded with seasoned minced beef, fresh green herbs, and aromatic spices.",
      price: 0,
      image: sambousekImg,
      tagAr: "مقبلات شعبية",
      tagEn: "Traditional App",
      badgeAr: "مقرمش ساخن ⚡",
      badgeEn: "Hot & Crispy ⚡"
    }
  ];

  const drinkItems: MenuItem[] = [
    {
      id: "drink1",
      nameAr: "دله قهوة سعودية شيوخية",
      nameEn: "Royal Saudi Coffee Dallah",
      descAr: "حبوب البن الخضراء الأصيلة المحمصة ببطء والمعطرة بقرون الهيل النيبالي الغني وشعيرات الزعفران الإيراني العضوي الأصيل.",
      descEn: "Sovereign traditional Saudi coffee brewed from blonde roasted beans, crushed green cardamoms, and aromatic, premium saffron threads.",
      price: 0,
      image: coffeeImg,
      tagAr: "ضيافة عسيب",
      tagEn: "Royal Hospitality",
      badgeAr: "تراث ملكي 🇸🇦",
      badgeEn: "Royal Saudi Heritage 🇸🇦"
    },
    {
      id: "drink2",
      nameAr: "طبق حنيني عسيب بالتمر",
      nameEn: "Warm Hunaini Date Sweet",
      descAr: "حلوى دافئة مصنوعة من خبز البر الأسمر وتمر خلاص العضوي والزبدة البلدية رقيقة القوام المتبلة بالهيل والزعفران.",
      descEn: "Comfort dessert made with organic Khلاص dates kneaded with whole wheat sour flour, local butter oil, and premium crushed cardamom.",
      price: 0,
      image: hunainiImg,
      tagAr: "حلوى تقليدية",
      tagEn: "Traditional Dessert",
      badgeAr: "حلوى الشتاء ❄️",
      badgeEn: "Winter Special ❄️"
    },
    {
      id: "drink3",
      nameAr: "شاي الحبق والنعناع المنعش",
      nameEn: "Signature City Mint & Basil Tea",
      descAr: "شاي أسود منتقى بعناية مضاف إليه أوراق النعناع البلدي الذكي الحبق العطري الطازج المزروع في بساتين المدينة المنورة.",
      descEn: "High-grade loose black tea infused with original Medina Habak basil leaves and organic mountain-mint leaves, sweet and refreshing.",
      price: 0,
      image: teaImg,
      tagAr: "مشروب منعش",
      tagEn: "Refresher",
      badgeAr: "منعش طبيعي 🌿",
      badgeEn: "Wild Organic 🌿"
    }
  ];

  const visibleItems = activeTab === "dishes" ? menuItems : drinkItems;

  return (
    <section id="aseeb-restaurant-section" className="relative w-full pt-20 pb-32 overflow-hidden bg-sand-50 text-[#120e0d]">
      
      {/* Visual background textures */}
      <div className="absolute inset-0 dotted-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-aseeb-dark/15 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
        
        {/* =======================================================
            1. CENTRAL HERO ROTATING & GLOWING BRAND BADGE LOGO
            ======================================================= */}
        <div className="flex flex-col items-center text-center justify-center pt-8 pb-12">
          
          {/* Main Logo Sphere */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center mb-6">
            
            {/* Spinning Sadu Outer Ring */}
            <motion.div
              id="aseeb-outer-ring"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-aseeb-red/80 shadow-[0_0_20px_rgba(194,41,41,0.3)]"
            />

            {/* Reverse Spinning Sadu Inner Ring with Blinking / Glow Accent */}
            <motion.div
              id="aseeb-inner-glowing-ring"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-4 rounded-full border-2 border-dotted border-aseeb-gold animate-blink"
            />

            {/* Glowing Golden Aura (Pulses) */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-aseeb-red/10 via-aseeb-gold/15 to-aseeb-red/10 animate-pulse-glow" />

            {/* The Centered Restaurant Name - "عسيب" - Spinning and Glowing */}
            <motion.div
              id="aseeb-core-name"
              animate={{
                scale: [1, 1.05, 0.98, 1.05, 1],
                rotate: [0, 5, -5, 5, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
              className="z-10 w-44 h-44 rounded-full bg-aseeb-dark text-white flex flex-col items-center justify-center p-3 border border-aseeb-gold shadow-[inset_0_0_20px_rgba(229,169,59,0.3),_0_0_25px_rgba(18,14,13,0.9)] cursor-pointer"
            >
              <h2 className="text-3xl md:text-4xl font-black text-aseeb-gold tracking-widest font-sans glow-text-gold">
                عسيب
              </h2>
              <p className="text-xs tracking-[0.25em] text-[#fdfaf4]/45 uppercase mt-1 font-mono font-bold">
                ASEEB
              </p>
              <div className="w-12 h-1 bg-aseeb-red my-1.5 rounded-full" />
              <p className="text-[10px] md:text-xs text-aseeb-gold/85 font-medium">
                {currentLang === "ar" ? "سعودي أصيل" : "Royal Saudi"}
              </p>
              
              {/* Micro pulsing star */}
              <Sparkles className="w-3.5 h-3.5 text-aseeb-gold animate-bounce mt-1" />
            </motion.div>
          </div>

          {/* Restaurant Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#1c140e] tracking-tight flex items-center justify-center gap-2">
              <span className="text-aseeb-red">❆</span> 
              {t.appName}
              <span className="text-aseeb-red">❆</span>
            </h1>
            <p className="text-lg md:text-xl text-aseeb-gold font-bold italic font-serif">
              “ {t.tagline} ”
            </p>
          </motion.div>

          {/* =======================================================
              2. CENTRAL CALL & WHATSAPP ROW DIRECT TO (+966920028226)
              ======================================================= */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 z-20">
            {/* Restaurant Central Call Button */}
            <a
              id="central-restaurant-call"
              href="tel:+966920028226"
              className="relative group overflow-hidden flex items-center gap-3 px-6 py-3.5 bg-aseeb-red hover:bg-[#a61e1e] text-white hover:text-[#fffbeb] font-bold text-base rounded-xl transition-all duration-300 shadow-lg glow-btn-gold hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* Rotating outer sparkle dot */}
              <div className="absolute -inset-1 rounded-xl border border-aseeb-gold/30 border-dashed animate-spin-slow opacity-60" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Spinning/pulsating central icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="bg-white/15 p-2 rounded-lg"
              >
                <Phone className="w-5 h-5 text-aseeb-gold animate-pulse" />
              </motion.div>
              
              <div className="text-right">
                <span className="block text-[10px] text-aseeb-gold/75 font-mono uppercase tracking-wider font-bold">
                  {currentLang === "ar" ? "رقم الاتصال الموحد" : "Unified Dial Line"}
                </span>
                <span className="block text-sm md:text-base font-mono font-extrabold tracking-wide">
                  920028226 (966+)
                </span>
              </div>
            </a>

            {/* Restaurant Central WhatsApp Button */}
            <a
              id="central-restaurant-whatsapp"
              href="https://wa.me/966554003213"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden flex items-center gap-3 px-6 py-3.5 bg-aseeb-dark hover:bg-neutral-900 border border-aseeb-gold/60 hover:border-aseeb-gold text-aseeb-gold font-bold text-base rounded-xl transition-all duration-300 shadow-lg glow-btn-gold hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="absolute inset-0 bg-aseeb-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Blinking, spinning icon holder */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-aseeb-gold/15 p-2 rounded-lg animate-blink"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" />
              </motion.div>
              
              <div className="text-left font-sans">
                <span className="block text-[10px] text-[#fdfaf4]/45 font-mono uppercase tracking-wider font-bold">
                  {currentLang === "ar" ? "راسلنا على واتساب" : "WhatsApp Inquiry"}
                </span>
                <span className="block text-sm md:text-base font-mono font-extrabold tracking-wide">
                  +966 55 400 3213
                </span>
              </div>
            </a>
          </div>

          <div className="mt-4 flex items-center gap-5 justify-center text-xs text-neutral-500 font-bold font-sans">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-aseeb-red" />
              {t.address}
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-aseeb-gold" />
              {t.workingHours}: {t.workingHoursVal}
            </span>
          </div>
        </div>

        {/* =======================================================
            3. TRADITIONAL STORY BLOCK - PICTURE IN PICTURE EFFECT
            ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-center">
          
          {/* Text Story Block */}
          <div className="lg:col-span-6 space-y-6" dir={isRtl ? "rtl" : "ltr"}>
            <div className="inline-flex items-center gap-2 bg-aseeb-red/10 border border-aseeb-red/20 px-3.5 py-1.5 rounded-full text-aseeb-red text-xs font-bold font-sans">
              <Award className="w-4 h-4" />
              {currentLang === "ar" ? "تراثنا فخرنا" : "Our Proud Legacy"}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#120e0d] font-sans">
              {t.aboutAseebTitle}
            </h2>
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-aseeb-red to-aseeb-gold rounded-full" />
            
            <p className="text-neutral-700 leading-relaxed text-base md:text-lg font-medium">
              {t.aboutAseebDesc}
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-aseeb-gold/25 text-[#120e0d] flex items-center justify-center font-bold text-xs mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-[#120e0d]">
                    {currentLang === "ar" ? "أبواب تراثية عتيقة ونقوش مذهبة" : "Ancient Wood-crafted Heritage Gates"}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    {currentLang === "ar" ? "نعتني بنقش النحاس البارز والأوتاد الدائرية الملونة المستوحاة من قصر المصمك وحصون المملكة العريقة." : "Meticulously preserving colorful circular brass studs and authentic designs from historic Saudi castles."}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-aseeb-red/25 text-[#120e0d] flex items-center justify-center font-bold text-xs mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-[#120e0d]">
                    {currentLang === "ar" ? "أجود أنواع اللحوم الطازجة والضيافة البلديّة" : "Sovereign Meat Curations & True Sadu Seating"}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    {currentLang === "ar" ? "ذبائح بلدية طازجة يومياً تُعد خصيصاً لتناسب مجالس العزيمة والضيافة الشيوخية بجمالها التراثي." : "Fresh locally sourced mutton daily, carved exclusively for prestigious assemblies and family banquets."}
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById("aseeb-menu-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-aseeb-dark text-aseeb-gold hover:bg-neutral-900 border border-aseeb-gold/30 hover:border-aseeb-gold rounded-xl text-sm font-bold shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                {t.exploreMenuBtn}
              </button>
            </div>
          </div>

          {/* Picture in Picture (Nested Image) Creative Pattern Graphic */}
          <div className="lg:col-span-6 flex justify-center py-6">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Decorative Sadu Frame Layer */}
              <div className="absolute -inset-4 rounded-3xl bg-[#120e0d] p-1 shadow-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-aseeb-red/5 dotted-pattern" />
                <div className="w-full h-full rounded-2xl border border-aseeb-gold/20" />
              </div>

              {/* MAIN HERO IMAGE OF ASEEB (Background inside our frame) */}
              <div className="relative h-80 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-[#120e0d]">
                <img
                  src={heroImg}
                  alt="Aseeb Traditional Door Interior decor"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark overlay with elegant Sadu border on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-aseeb-red via-aseeb-gold to-aseeb-red animate-pulse" />
                
                {/* Floating caption on the outer image */}
                <div className="absolute bottom-5 right-5 left-5 text-right font-sans" dir="rtl">
                  <span className="bg-aseeb-red text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {currentLang === "ar" ? "مدخل مطعم عسيب" : "Aseeb Entrance Gateway"}
                  </span>
                  <p className="text-white text-base font-extrabold mt-1 glow-text-gold">
                    {currentLang === "ar" ? "التصميم والباب الكلاسيكي العريق في مطعم عسيب" : "The Classic Wood-carved Portal of Aseeb Restaurant"}
                  </p>
                </div>
              </div>

              {/* =======================================================
                  PICTURE-IN-PICTURE (The nested hovering second picture)
                  ======================================================= */}
              <motion.div
                id="nested-pip-card"
                className="absolute -bottom-6 -left-6 md:-left-10 w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-aseeb-dark bg-aseeb-dark shadow-[0_15px_30px_rgba(0,0,0,0.6)] cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setZoomImg({ src: kabsaImg, title: currentLang === "ar" ? "كبسة العزيمة التراثية" : "Royal Al-Azeema Kabsa" })}
              >
                {/* Embedded Sadu Corner Flags */}
                <div className="absolute -top-1 -right-1 bg-aseeb-gold text-aseeb-dark text-[9px] font-black px-2 py-1 select-none z-20 rounded-bl-xl origin-top-right">
                  {currentLang === "ar" ? "اضغط للتكبير" : "Zoom"}
                </div>
                
                {/* Nested Image (The Al-Azeema Kabsa image inside the door scene image!) */}
                <img
                  src={kabsaImg}
                  alt="Aseeb Kabsa Plate Details"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-aseeb-dark via-transparent to-transparent opacity-95" />
                
                {/* Floating metadata */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[#fdfaf4]" dir="rtl">
                  <div className="flex items-center justify-between text-[10px] font-bold text-aseeb-gold">
                    <span>{currentLang === "ar" ? "ذوق الكرم" : "Authentic Lamb"}</span>
                    <ZoomIn className="w-3 h-3 text-aseeb-gold" />
                  </div>
                  <h4 className="text-xs font-black truncate max-w-[130px] w-full text-white mt-0.5">
                    {currentLang === "ar" ? "مكعبات اللحم المطهوة" : "Traditional Kabsa"}
                  </h4>
                </div>
              </motion.div>

              {/* Floating aesthetic ring behind PIP to highlight it */}
              <div className="absolute -left-12 -bottom-12 w-28 h-28 rounded-full border border-aseeb-gold/20 animate-spin-slow pointer-events-none" />
            </div>
          </div>

        </div>

        {/* =======================================================
            4. THE MENU TAB INTERACTIVE PORTFOLIO
            ======================================================= */}
        <div id="aseeb-menu-section" className="mt-28 relative pt-12 border-t border-aseeb-gold/15">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-12">
            <span className="text-aseeb-red text-sm font-black tracking-widest uppercase block font-sans">
              ✦ {currentLang === "ar" ? "قائمة الضيافة والمأكولات" : "Exclusive Heritage Menu"} ✦
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#120e0d] font-sans">
              {t.traditionalSaudiCuisine}
            </h3>
            <p className="text-sm md:text-base text-neutral-600 font-medium">
              {t.dishesDesc}
            </p>

            {/* Menu Tabs Nav */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <button
                onClick={() => setActiveTab("dishes")}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === "dishes"
                    ? "bg-aseeb-red border-aseeb-red text-white shadow-md"
                    : "bg-white border-neutral-200 text-neutral-700 hover:border-aseeb-red"
                }`}
              >
                🍲 {t.famousDishes}
              </button>
              <button
                onClick={() => setActiveTab("drinks")}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === "drinks"
                    ? "bg-aseeb-red border-aseeb-red text-white shadow-md"
                    : "bg-white border-neutral-200 text-neutral-700 hover:border-aseeb-red"
                }`}
              >
                ☕ {t.famousDrinks}
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl overflow-hidden flex flex-col group relative"
                >
                  {/* Badge floating */}
                  {item.badgeAr && (
                    <div className="absolute top-4 right-4 bg-aseeb-dark/90 backdrop-blur-md text-aseeb-gold border border-aseeb-gold/30 text-xs font-bold px-3 py-1 rounded-full z-10 font-sans shadow-lg animate-float">
                      {currentLang === "ar" ? item.badgeAr : item.badgeEn}
                    </div>
                  )}

                  {/* Food Picture Frame */}
                  <div className="relative h-52 md:h-56 overflow-hidden bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.nameAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay Lens */}
                    <div className="absolute inset-0 bg-aseeb-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setZoomImg({ src: item.image, title: currentLang === "ar" ? item.nameAr : item.nameEn })}
                        className="p-3 bg-white hover:bg-aseeb-gold rounded-full text-aseeb-dark transition-all duration-200 shadow-xl"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Sadu bar accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-aseeb-gold via-aseeb-red to-aseeb-gold" />
                    
                    {/* Tag label */}
                    <span className="absolute bottom-3 left-3 bg-white/95 text-neutral-800 text-[10px] font-black px-2.5 py-1 rounded shadow-md uppercase font-sans">
                      🏷️ {currentLang === "ar" ? item.tagAr : item.tagEn}
                    </span>

                    {/* "Order Now" Button overlaying the food/drink image */}
                    <a
                      href={`https://wa.me/966594246666?text=${encodeURIComponent(
                        currentLang === "ar"
                          ? `السلام عليكم مطعم عسيب، أرغب في طلب:\n*${item.nameAr}*\n\nصورة المنتج:\n${window.location.origin}${item.image}`
                          : `Hello Aseeb Restaurant, I would like to order:\n*${item.nameEn}*\n\nProduct Image:\n${window.location.origin}${item.image}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[11px] font-bold px-3 py-1.5 shadow-[0_4px_12px_rgba(16,185,129,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 border border-emerald-400/20"
                    >
                      <MessageSquare className="w-3 h-3 text-white fill-current" />
                      <span>{currentLang === "ar" ? "اطلب الآن" : "Order Now"}</span>
                    </a>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 flex-grow flex flex-col justify-between" dir={isRtl ? "rtl" : "ltr"}>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xl font-bold text-neutral-900 group-hover:text-aseeb-red transition-colors duration-300 font-sans">
                          {currentLang === "ar" ? item.nameAr : item.nameEn}
                        </h4>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed font-sans line-clamp-3">
                        {currentLang === "ar" ? item.descAr : item.descEn}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="text-xs font-bold text-aseeb-red hover:text-[#a61e1e] flex items-center gap-1 font-sans cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        {currentLang === "ar" ? "عرض تفاصيل المكونات" : "View ingredients details"}
                      </button>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 font-mono tracking-widest flex items-center gap-1">
                        <Heart className="w-3 h-3 text-aseeb-gold inline" /> {t.organicIngredients.slice(0, 15)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* =======================================================
          5. LOWER LEVEL INTERACTIVE DETAILS MODAL
          ======================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full border border-aseeb-gold/20 shadow-2xl"
              dir={isRtl ? "rtl" : "ltr"}
            >
              <div className="relative h-64 bg-neutral-100">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.nameAr}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-black/65 hover:bg-black rounded-full p-2 text-white transition-all w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>

              </div>
              <div className="p-6 space-y-4">
                <span className="text-[10px] text-aseeb-gold font-bold tracking-widest uppercase font-mono block">
                  ❆ {currentLang === "ar" ? selectedItem.tagAr : selectedItem.tagEn} ❆
                </span>
                <h3 className="text-2xl font-extrabold text-[#120e0d] font-sans">
                  {currentLang === "ar" ? selectedItem.nameAr : selectedItem.nameEn}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                  {currentLang === "ar" ? selectedItem.descAr : selectedItem.descEn}
                </p>

                <div className="bg-sand-100/50 p-4 rounded-xl space-y-2 border border-sand-200">
                  <h4 className="text-xs font-extrabold text-[#120e0d] uppercase tracking-wider font-sans">
                    ✨ {currentLang === "ar" ? "مميزات الطبخ والسر التراثي" : "Artisanal Method & Secret Notes"}
                  </h4>
                  <ul className="text-xs text-neutral-600 space-y-2 list-disc list-inside">
                    {currentLang === "ar" ? (
                      <>
                        <li>بهارات مستوردة يدوياً تُطحن يومياً في مطابخ مطعم عسيب التراثية الأصيلة.</li>
                        <li>لحوم بلدية تحت إشراف نخبة من أبناء الوطن الأوفياء طيلة ٢٤ ساعة.</li>
                        <li>جلسات تراثية فسيحة تسع لجميع أفراد الأسرة في بيئة هادئة ودافئة.</li>
                      </>
                    ) : (
                      <>
                        <li>Hand-imported spices roasted and ground daily inside our clean kitchens.</li>
                        <li>Authentic local mutton supervised under clean local specialists constantly.</li>
                        <li>Perfect temperature control to ensure tender, savory bites for assemblies.</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="flex gap-2.5">
                  <a
                    href="tel:+966920028226"
                    className="flex-1 py-3 bg-aseeb-red hover:bg-[#a61e1e] text-white text-xs font-bold rounded-xl text-center shadow-md transition-colors"
                  >
                    📞 {currentLang === "ar" ? "اطلب عبر الهاتف" : "Order by Call"}
                  </a>
                  <a
                    href={`https://wa.me/966594246666?text=${encodeURIComponent(
                      currentLang === "ar"
                        ? `السلام عليكم مطعم عسيب، أرغب في طلب:\n*${selectedItem.nameAr}*\n\nصورة المنتج:\n${window.location.origin}${selectedItem.image}`
                        : `Hello Aseeb Restaurant, I would like to order:\n*${selectedItem.nameEn}*\n\nProduct Image:\n${window.location.origin}${selectedItem.image}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-aseeb-dark hover:bg-neutral-800 text-aseeb-gold border border-aseeb-gold/30 text-xs font-bold rounded-xl text-center shadow-md transition-colors"
                  >
                    💬 {currentLang === "ar" ? "راسل للحجز" : "Book via WhatsApp"}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* IMAGE ZOOM MODAL */}
        {zoomImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setZoomImg(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full flex flex-col pointer-events-none"
            >
              <div className="relative pointer-events-auto">
                <img
                  src={zoomImg.src}
                  alt={zoomImg.title}
                  className="w-full h-auto max-h-[80vh] rounded-2xl object-contain border-2 border-aseeb-gold shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-[#fdfaf4] flex justify-between items-center text-sm font-sans" dir={currentLang === "ar" ? "rtl" : "ltr"}>
                  <span className="font-extrabold">{zoomImg.title}</span>
                  <span className="text-xs text-aseeb-gold font-bold font-mono">ASEEB RESTAURANT ❆</span>
                </div>
                <button
                  onClick={() => setZoomImg(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black rounded-full p-2.5 text-white transition-all w-10 h-10 flex items-center justify-center font-bold shadow-lg"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
