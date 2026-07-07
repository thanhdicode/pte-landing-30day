import { motion, AnimatePresence } from "framer-motion";
import pteLogo from '@assets/pte-logo-clean.png';
import { Menu, X, Phone, Copy, CheckCheck, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const PHONE = "0357930867";

const navLinks = [
  { href: "#about", label: "Về Cô Thuỷ" },
  { href: "#who", label: "Dành cho ai?" },
  { href: "#roadmap", label: "Lộ trình 30 Ngày" },
  { href: "#results", label: "Thành quả" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!popupOpen) return;
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popupOpen]);

  const copyPhone = () => {
    navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileOpen
            ? "bg-slate-950/90 backdrop-blur-md py-3 border-b border-primary/20"
            : "bg-transparent py-5"
        }`}
        style={isScrolled || mobileOpen ? { boxShadow: '0 1px 0 0 hsl(330 100% 65% / 0.15), 0 4px 24px hsl(330 100% 65% / 0.08)' } : {}}
      >
        {/* Scrolled: top neon line */}
        {(isScrolled || mobileOpen) && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-cyan-400 opacity-60 pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={pteLogo} alt="PTE Talents" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative group ${
                  isScrolled ? "text-slate-300 hover:text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"
                  style={{ boxShadow: '0 0 6px hsl(330 100% 65% / 0.8)' }} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 relative" ref={popupRef}>
            <motion.button
              onClick={() => setPopupOpen(v => !v)}
              className="relative px-5 py-2 rounded-full font-bold text-xs text-white whitespace-nowrap overflow-hidden cursor-pointer"
              style={{
                background: "linear-gradient(135deg, hsl(330 100% 60%), hsl(310 100% 55%))",
                letterSpacing: "0.03em",
              }}
              animate={{
                boxShadow: [
                  "0 0 8px hsl(330 100% 65% / 0.4)",
                  "0 0 18px hsl(330 100% 65% / 0.75)",
                  "0 0 8px hsl(330 100% 65% / 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Tư vấn miễn phí
            </motion.button>

            {/* Phone popup */}
            <AnimatePresence>
              {popupOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-[calc(100%+10px)] right-0 z-50 rounded-2xl p-4 w-64"
                  style={{
                    background: "hsl(222 47% 7%)",
                    border: "1px solid hsl(330 100% 65% / 0.35)",
                    boxShadow: "0 0 40px hsl(330 100% 65% / 0.2), 0 16px 32px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Top neon line */}
                  <div className="absolute top-0 left-4 right-4 h-[1.5px] rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(330 100% 65%), hsl(180 100% 60%), transparent)" }} />

                  <p className="text-xs text-slate-500 font-mono tracking-widest mb-2">LIÊN HỆ TƯ VẤN</p>

                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0"
                      style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 65%))" }} />
                    <span className="text-lg font-extrabold text-white tracking-wider"
                      style={{ textShadow: "0 0 14px hsl(330 100% 65% / 0.5)" }}>
                      {PHONE}
                    </span>
                    <button onClick={copyPhone} className="ml-auto text-slate-400 hover:text-white transition-colors" title="Sao chép">
                      {copied
                        ? <CheckCheck className="w-4 h-4 text-green-400" />
                        : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`tel:${PHONE}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold text-white transition-all"
                      style={{ background: "hsl(330 100% 60% / 0.25)", border: "1px solid hsl(330 100% 65% / 0.4)" }}
                    >
                      <Phone className="w-3.5 h-3.5" /> Gọi ngay
                    </a>
                    <a
                      href={`https://zalo.me/${PHONE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold text-cyan-300 transition-all"
                      style={{ background: "hsl(180 100% 60% / 0.1)", border: "1px solid hsl(180 100% 60% / 0.35)" }}
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Zalo
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-slate-300 hover:text-primary" : "text-foreground hover:text-primary"}`}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md shadow-lg border-t border-primary/20 md:hidden cyber-grid-bg"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-semibold text-slate-300 hover:text-primary border-b border-primary/10 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://zalo.me/0357930867"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm text-center neon-border transition-all"
              >
                Đăng ký ngay · Tư vấn miễn phí
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
