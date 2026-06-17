import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  currentLang: "ar" | "en";
  toggleLang: () => void;
  label: string;
}

export default function LanguageSelector(props: LanguageSelectorProps) {
  const { currentLang, toggleLang, label } = props;

  return (
    <button
      id="lang-selector-btn"
      onClick={toggleLang}
      className="relative group overflow-hidden flex items-center gap-2.5 px-4 py-2 bg-aseeb-dark/80 backdrop-blur-md border border-aseeb-gold/40 text-aseeb-gold hover:border-aseeb-gold text-sm font-semibold rounded-full shadow-lg transition-all duration-300 animate-float active:scale-95"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      {/* Decorative rotating backglow */}
      <span className="absolute inset-0 bg-gradient-to-r from-aseeb-red/20 to-aseeb-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <Globe 
        id="lang-globe-icon"
        className="w-4 h-4 text-aseeb-gold group-hover:rotate-180 transition-transform duration-700 ease-in-out" 
      />
      
      <span id="lang-label" className="font-sans tracking-wide">
        {label}
      </span>
      
      {/* Pulsing indicator dots */}
      <span className="flex h-1.5 w-1.5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aseeb-gold opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-aseeb-gold"></span>
      </span>
    </button>
  );
}
