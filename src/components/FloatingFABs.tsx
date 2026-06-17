import { useState, useRef, useEffect } from "react";
import { Phone, MessageSquare, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingFABsProps {
  currentLang: "ar" | "en";
}

export default function FloatingFABs(props: FloatingFABsProps) {
  const { currentLang } = props;
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const callRef = useRef<HTMLDivElement>(null);

  // Close the popups when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (whatsappRef.current && !whatsappRef.current.contains(event.target as Node)) {
        setIsWhatsappOpen(false);
      }
      if (callRef.current && !callRef.current.contains(event.target as Node)) {
        setIsCallOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const labels = {
    ar: {
      call: "قنوات الاتصال الهاتفي المباشر",
      whatsapp: "تواصل معنا عبر واتساب مباشر",
      whatsappTitle: "قنوات عسيب على واتساب",
      callTitle: "خيارات الاتصال الهاتفي",
      support1: "الإدارة وقسم الحجوزات",
      support2: "الطلبات والمبيعات والمطبخ",
      callSupport1: "الرقم الموحد لعسيب",
      callSupport2: "الجوال وقسم الحجوزات",
      primaryNum: "+966 55 400 3213",
      secondaryNum: "+966 59 424 6666",
      unifiedNum: "920028226",
      unifiedNumDisplay: "920028226"
    },
    en: {
      call: "Direct Call Channels",
      whatsapp: "Direct WhatsApp Channels",
      whatsappTitle: "Aseeb WhatsApp Channels",
      callTitle: "Aseeb Phone Channels",
      support1: "Management & Bookings",
      support2: "Orders, Sales & Kitchen",
      callSupport1: "Aseeb Unified Landline",
      callSupport2: "Mobile & Reservations",
      primaryNum: "+966 55 400 3213",
      secondaryNum: "+966 59 424 6666",
      unifiedNum: "920028226",
      unifiedNumDisplay: "920028226"
    }
  };

  const text = labels[currentLang];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none flex justify-between px-6 max-w-[1920px] mx-auto">
      {/* LEFT FAB: WhatsApp (Green Glowing & Spinning with Department Selection Popup) */}
      <div className="pointer-events-auto relative" ref={whatsappRef}>
        <button
          id="fab-whatsapp"
          onClick={() => {
            setIsWhatsappOpen(!isWhatsappOpen);
            setIsCallOpen(false);
          }}
          className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-transform duration-300 active:scale-95 cursor-pointer"
          title={text.whatsapp}
        >
          {/* External Spinning & Blinking Border */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-400 border-dashed animate-spin-slow opacity-80" />
          <div className="absolute -inset-1.5 rounded-full border border-emerald-400/60 animate-blink" />
          
          {/* Pulse Inner Wave */}
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
          
          {/* Standard Icon - spins on toggle */}
          <motion.div
            id="fab-whatsapp-icon-container"
            animate={{ rotate: isWhatsappOpen ? 135 : [0, 15, -15, 0] }}
            transition={{
              repeat: isWhatsappOpen ? 0 : Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
            className="z-10"
          >
            <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
          </motion.div>

          {/* Tooltip (only when menu is closed) */}
          {!isWhatsappOpen && (
            <span className="absolute bottom-18 left-0 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom-left bg-aseeb-dark text-emerald-400 text-xs px-3 py-1.5 rounded-lg border border-emerald-500/30 whitespace-nowrap shadow-xl font-sans">
              💬 {text.whatsapp}
            </span>
          )}
        </button>

        {/* Floating Menu Popover */}
        <AnimatePresence>
          {isWhatsappOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-18 md:bottom-20 left-0 w-72 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 text-white rounded-2xl border border-emerald-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden z-50 pointer-events-auto"
            >
              {/* Menu Header */}
              <div className="px-4 py-3 border-b border-white/5 bg-emerald-950/40 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {text.whatsappTitle}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">24/7 Chat</span>
              </div>

              {/* Menu Options */}
              <div className="p-3 space-y-2">
                {/* Option 1: Management */}
                <a
                  href="https://wa.me/966554003213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/60 hover:bg-emerald-900/30 border border-white/5 hover:border-emerald-500/30 transition-all group/item text-right"
                  onClick={() => setIsWhatsappOpen(false)}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                      {text.support1}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono mt-0.5" dir="ltr">
                      {text.primaryNum}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>

                {/* Option 2: Orders & Sales */}
                <a
                  href="https://wa.me/966594246666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/60 hover:bg-emerald-900/30 border border-white/5 hover:border-emerald-500/30 transition-all group/item text-right"
                  onClick={() => setIsWhatsappOpen(false)}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                      {text.support2}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono mt-0.5" dir="ltr">
                      {text.secondaryNum}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RIGHT FAB: Call (Red-Gold Glowing, Spinning & Blinking with Department Selection Popup) */}
      <div className="pointer-events-auto relative" ref={callRef}>
        <button
          id="fab-call"
          onClick={() => {
            setIsCallOpen(!isCallOpen);
            setIsWhatsappOpen(false);
          }}
          className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-aseeb-red to-aseeb-gold rounded-full text-white shadow-[0_0_15px_rgba(229,169,59,0.5)] transition-transform duration-300 active:scale-95 cursor-pointer"
          title={text.call}
        >
          {/* External Spinning & Blinking Border */}
          <div className="absolute inset-0 rounded-full border-2 border-aseeb-gold border-dotted animate-spin-reverse opacity-90" />
          <div className="absolute -inset-1.5 rounded-full border border-aseeb-gold/50 animate-blink" />
          
          {/* Pulse Inner Wave */}
          <div className="absolute inset-0 rounded-full bg-aseeb-gold animate-ping opacity-25" />
          
          {/* Standard Icon - spins slightly on toggle */}
          <motion.div
            id="fab-call-icon-container"
            animate={{ rotate: isCallOpen ? 135 : 0, scale: isCallOpen ? 1 : [1, 1.1, 1] }}
            transition={{
              repeat: isCallOpen ? 0 : Infinity,
              duration: isCallOpen ? 0.3 : 2,
              ease: "easeInOut"
            }}
            className="z-10"
          >
            <Phone className="w-6 h-6 md:w-7 md:h-7" />
          </motion.div>

          {/* Tooltip (only when menu is closed) */}
          {!isCallOpen && (
            <span className="absolute bottom-18 right-0 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom-right bg-aseeb-dark text-aseeb-gold text-xs px-3 py-1.5 rounded-lg border border-aseeb-gold/35 whitespace-nowrap shadow-xl font-sans">
              📞 {text.call}
            </span>
          )}
        </button>

        {/* Floating Menu Popover (Gold/Red themed) */}
        <AnimatePresence>
          {isCallOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-18 md:bottom-20 right-0 w-72 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 text-white rounded-2xl border border-aseeb-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden z-50 pointer-events-auto"
            >
              {/* Menu Header */}
              <div className="px-4 py-3 border-b border-white/5 bg-amber-950/30 flex items-center justify-between">
                <span className="text-xs font-bold text-aseeb-gold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-aseeb-gold animate-pulse" />
                  {text.callTitle}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">{currentLang === "ar" ? "اتصال مباشر" : "Direct Dial"}</span>
              </div>

              {/* Menu Options */}
              <div className="p-3 space-y-2">
                {/* Option 1: Unified Number (920028226) */}
                <a
                  href={`tel:${text.unifiedNum}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/60 hover:bg-amber-950/20 border border-white/5 hover:border-aseeb-gold/30 transition-all group/item text-right"
                  onClick={() => setIsCallOpen(false)}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white group-hover/item:text-aseeb-gold transition-colors">
                      {text.callSupport1}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono mt-0.5" dir="ltr">
                      {text.unifiedNumDisplay}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-aseeb-gold/10 text-aseeb-gold flex items-center justify-center group-hover/item:bg-gradient-to-tr group-hover/item:from-aseeb-red group-hover/item:to-aseeb-gold group-hover/item:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>

                {/* Option 2: Mobile / Reservations (0554003213) */}
                <a
                  href={`tel:${text.primaryNum.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/60 hover:bg-amber-950/20 border border-white/5 hover:border-aseeb-gold/30 transition-all group/item text-right"
                  onClick={() => setIsCallOpen(false)}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white group-hover/item:text-aseeb-gold transition-colors">
                      {text.callSupport2}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono mt-0.5" dir="ltr">
                      {text.primaryNum}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-aseeb-gold/10 text-aseeb-gold flex items-center justify-center group-hover/item:bg-gradient-to-tr group-hover/item:from-aseeb-red group-hover/item:to-aseeb-gold group-hover/item:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
