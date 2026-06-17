export interface Translation {
  // Common
  appName: string;
  tagline: string;
  langSwitched: string;
  offlineMode: string;
  onlineMode: string;
  callUs: string;
  whatsappMessage: string;
  developedBy: string;
  address: string;
  workingHours: string;
  workingHoursVal: string;
  
  // Restaurant Navigation/Tabs
  home: string;
  menu: string;
  ourStory: string;
  contact: string;
  developersHub: string;

  // Restaurant Hero & Story
  welcomeAseeb: string;
  welcomeDesc: string;
  aboutAseebTitle: string;
  aboutAseebDesc: string;
  exploreMenuBtn: string;
  
  // Food Menu Items
  famousDishes: string;
  famousDrinks: string;
  traditionalSaudiCuisine: string;
  dishesDesc: string;
  organicIngredients: string;
  
  // ICON Code Company
  iconCodeTitle: string;
  iconCodeTagline: string;
  iconCodeDesc: string;
  foundedIn: string;
  founderYoussef: string;
  founderOmar: string;
  callYoussef: string;
  callOmar: string;
  servicesTitle: string;

  // Previous Projects
  historyTitle: string;
  historyDesc: string;
  egyptProjects: string;
  saudiProjects: string;
  uaeProjects: string;
}

export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  price: number;
  image: string;
  tagAr: string;
  tagEn: string;
  badgeAr?: string;
  badgeEn?: string;
}

export interface DeveloperInfo {
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  phone: string;
  image: string;
  bookTitleAr?: string;
  bookTitleEn?: string;
}

export interface ServiceItem {
  icon: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  emoji: string;
}

export const servicesList: ServiceItem[] = [
  {
    icon: "Code",
    titleAr: "برمجة مواقع إلكترونية متكاملة",
    titleEn: "Web Development & Custom Platforms",
    descAr: "نطور مواقع عالية السرعة والأمان ومتوافقة مع جميع الأجهزة والهواتف بأقوى التقنيات.",
    descEn: "We develop high-performance, secure, and fully responsive websites using cutting-edge technologies.",
    emoji: "💻"
  },
  {
    icon: "ShoppingBag",
    titleAr: "متاجر إلكترونية احترافية",
    titleEn: "E-Commerce Stores",
    descAr: "حلول تجارة إلكترونية متكاملة مع بوابات دفع وسلال تسوّق ذكية لتحسين تجربة الشراء وجذب العملاء.",
    descEn: "Complete e-commerce suites with payment getaways and smart carts to boost transaction rates.",
    emoji: "🛍️"
  },
  {
    icon: "Tablet",
    titleAr: "أنظمة كاشير ونقاط البيع (POS)",
    titleEn: "Cashier & POS Systems",
    descAr: "تصميم وإعداد برمجيات الكاشير الذكية للمطاعم والمتاجر لمراقبة المبيعات والمخزون بدقة تامة.",
    descEn: "Smart cashier applications for food outlets and outlets to track real-time stocks and sales.",
    emoji: "📊"
  },
  {
    icon: "Layers",
    titleAr: "ملفات برمجية خاصة بالجرافيك ديزاين",
    titleEn: "Graphic Design Software Tools",
    descAr: "برمجة أدوات مخصصة لتسهيل عمليات التصميم الجرافيكي المتقدمة وأتمتة اللوحات الفنية.",
    descEn: "Custom modules and automation plugins designed specifically for advanced digital graphics.",
    emoji: "🎨"
  },
  {
    icon: "Video",
    titleAr: "مونتاج وصناعة الفيديو الاحترافية",
    titleEn: "Professional Video Editing",
    descAr: "تحرير وصناعة مقاطع فيديو دعائية وسينمائية بأعلى التقنيات البصرية والصوتية.",
    descEn: "High-end cinematic video assembly, commercials, and visual storytelling production.",
    emoji: "🎬"
  },
  {
    icon: "Camera",
    titleAr: "فوتوشوب وتصميم الهويات البصرية",
    titleEn: "Photoshop & Brand Identity Design",
    descAr: "تصميم لوجوهات احترافية وتعديل الصور بدقة فائقة وبناء المظهر العام للشركات الكبرى.",
    descEn: "Premium emblem design, intricate master photo edit, and comprehensive brand setups.",
    emoji: "🪄"
  },
  {
    icon: "Briefcase",
    titleAr: "تصميم واجهات وأنظمة GRC",
    titleEn: "GRC Architecture Design & Systems",
    descAr: "تصميم وتطوير برمجيات حوكمة الشركات وإدارة المخاطر والالتزام بالقوانين الرقمية العالمية.",
    descEn: "Governance, Risk, and Compliance enterprise program architectures built on strict safety.",
    emoji: "🏢"
  },
  {
    icon: "Shirt",
    titleAr: "تصميم ملابس وأزياء رقمية",
    titleEn: "Digital Clothing & Apparel Design",
    descAr: "تصاميم أزياء ثلاثية الأبعاد ونماذج ملابس جاهزة للمصانع والخطوط الإنتاجية المتطورة.",
    descEn: "3D digital fashion modeling and ready-to-manufacture technical apparel blueprints.",
    emoji: "👕"
  }
];

export const arTranslations: Translation = {
  appName: "مطعم عسيب",
  tagline: "أصالة المذاق في مطعم عسيب",
  langSwitched: "English",
  offlineMode: "أنت تتصفح بدون إنترنت - تم الحفظ مسبقاً بنجاح ✅",
  onlineMode: "أنت متصل بالإنترنت الآن 🟢",
  callUs: "اتصل بنا",
  whatsappMessage: "راسلنا على واتساب",
  developedBy: "صمم هذا الموقع وتأسس بواسطة فريق",
  address: "طريق الملك سلمان، الرياض، المملكة العربية السعودية",
  workingHours: "أوقات العمل",
  workingHoursVal: "من 12:00 ظهراً حتى 12:00 منتصف الليل",
  
  home: "الرئيسية",
  menu: "قائمة المأكولات",
  ourStory: "قصة عسيب",
  contact: "تواصل معنا",
  developersHub: "عالم المطورين (ICON Code)",

  welcomeAseeb: "مرحباً بكم في مطعم عسيب",
  welcomeDesc: "جرب المأكولات السعودية التقليدية الحقيقية والأجواء التراثية في مطعم عسيب مع الضيافة العربية الأصيلة. طعامنا يُصنع بحب ويُقدم بفخر.",
  aboutAseebTitle: "عبق التراث في قلب الرياض",
  aboutAseebDesc: "تأسس مطعم عسيب ليعيد صياغة المأكولات السعودية الكلاسيكية وتقديمها في أبهى حلة، في بيئة فريدة تحتفي بالتفاصيل الخشبية والجلسات التقليدية المطرزة بالسدو الأصيل وكتابة القصائد الشعرية على الجدران لربط الحاضر بالماضي العريق.",
  exploreMenuBtn: "تصفح القائمة الكاملة",

  famousDishes: "أشهر الأطباق السعودية الأصيلة",
  famousDrinks: "المشروبات والضيافة الأصيلة",
  traditionalSaudiCuisine: "أطباق سعودية أصيلة 🇸🇦",
  dishesDesc: "نخبة من ألذ الأطباق السعودية التي تُعد على أيدي طهاة محليين محترفين باستخدام لحوم طازجة وخلطات بهارات سرية متوارثة.",
  organicIngredients: "مكونات طبيعية وطازجة 100% يومياً",

  iconCodeTitle: "شركة آيكون كود برمجيات",
  iconCodeTagline: "ICON Code: لمستقبل برمجي مشرق",
  iconCodeDesc: "نحن شركة رائدة تأسست عام 2023 متخصصة في هندسة البرمجيات وتصميم هويات الشركات وتطوير المواقع والمتاجر الإلكترونية وتصميم أحدث الملابس وتطوير تصاميم GRC المعمارية.",
  foundedIn: "تأسست الشركة عام 2023 م",
  founderYoussef: "م. يوسف محمد السيد محمد",
  founderOmar: "م. عمر محمد السيد محمد",
  callYoussef: "اتصال بالمهندس يوسف",
  callOmar: "اتصال بالمهندس عمر",
  servicesTitle: "تخصصاتنا وخدماتنا المهنية",

  historyTitle: "سجل حافل من الإنجازات وسباقة أعمالنا",
  historyDesc: "قمنا بفخر بتنفيذ وتطوير مشاريع عملاقة وأنظمة كاشير ومواقع رائدة عبر دول الخليج والشرق الأوسط:",
  egyptProjects: "جمهورية مصر العربية 🇪🇬 - أكثر من 45 مشروعاً برمجياً وتجارة وبناء أنظمة كاشير ذكية.",
  saudiProjects: "المملكة العربية السعودية 🇸🇦 - تصميم وتطوير مواقع مطاعم كبرى وأنظمة لوجستية.",
  uaeProjects: "الإمارات العربية المتحدة 🇦🇪 - تطوير متاجر إلكترونية كبرى وتطبيقات أزياء رقمية وعقارية."
};

export const enTranslations: Translation = {
  appName: "Aseeb Restaurant",
  tagline: "The Authenticity of Royal Taste",
  langSwitched: "العربية",
  offlineMode: "You are browsing offline - Offline cache fully active ✅",
  onlineMode: "You are online 🟢",
  callUs: "Call Us",
  whatsappMessage: "Chat on WhatsApp",
  developedBy: "This website was engineered and crafted by",
  address: "King Salman Road, Riyadh, Kingdom of Saudi Arabia",
  workingHours: "Working Hours",
  workingHoursVal: "From 12:00 PM to 12:00 AM",
  
  home: "Home",
  menu: "Menu",
  ourStory: "Our Story",
  contact: "Contact us",
  developersHub: "Developer Hub (ICON Code)",

  welcomeAseeb: "Welcome to Aseeb Restaurant",
  welcomeDesc: "Experience the ultimate traditional Saudi cuisine and luxury ambience with authentic Arabian hospitality. Prepared with love, served with pride.",
  aboutAseebTitle: "Heritage Whispers in Riyadh",
  aboutAseebDesc: "Aseeb was established to redefine classic Saudi cuisine in a unique architectural environment that celebrates hand-carved wood doors, traditional Sadu seating, and beautiful poems scrolled across walls, fusing our proud history with modern elegance.",
  exploreMenuBtn: "Explore Our Full Menu",

  famousDishes: "Legendary Traditional Dishes",
  famousDrinks: "Signature Drinks & Hospitality",
  traditionalSaudiCuisine: "Pure Saudi Heritage 🇸🇦",
  dishesDesc: "A curated curation of the finest Saudi dishes prepared by master heritage chefs, using premium local fresh meats and inherited secret spices.",
  organicIngredients: "100% fresh, organic local ingredients everyday",

  iconCodeTitle: "ICON Code Systems",
  iconCodeTagline: "ICON Code: Engineering the Future",
  iconCodeDesc: "We are a pioneering software company founded in 2023, specializing in custom software engineering, website & web-shop designs, smart checkout POS models, digital clothing blueprint and GRC design systems.",
  foundedIn: "Founded in 2023 AD",
  founderYoussef: "Eng. Youssef Mohamed El Sayed",
  founderOmar: "Eng. Omar Mohamed El Sayed",
  callYoussef: "Call Eng. Youssef",
  callOmar: "Call Eng. Omar",
  servicesTitle: "Our Professional Services",

  historyTitle: "Our Proud Track Record & Core Portfolio",
  historyDesc: "We have proudly engineered premium custom sites, online stores, cashier structures, and business software across the Middle East:",
  egyptProjects: "Egypt 🇪🇬 - Built 45+ enterprise portals, e-stores, and smart cashier interfaces.",
  saudiProjects: "Saudi Arabia 🇸🇦 - Custom food tech setups, commercial networks, and high-performance apps.",
  uaeProjects: "United Arab Emirates 🇦🇪 - Fashion layouts, real estate solutions, and international systems."
};
