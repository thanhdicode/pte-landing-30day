import { motion, AnimatePresence } from "framer-motion";
import pteLogo from '@assets/pte-logo-clean.png';
import { Menu, X, Phone, Copy, CheckCheck, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { siteConfig, navLinks } from "../data/course-content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    navigator.clipboard.writeText(siteConfig.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none">
        
        {/* Floating Capsule Container (Transforms smoothly on scroll) */}
        <div
          className={`flex items-center justify-between transition-all duration-350 ease-out pointer-events-auto ${
            isScrolled || mobileOpen
              ? "w-[92%] max-w-5xl mt-4 px-6 py-2.5 bg-white/85 backdrop-blur-lg border border-slate-200/60 rounded-3xl shadow-md"
              : "w-full max-w-[1360px] px-8 py-6 bg-transparent border-b border-transparent"
          }`}
        >
          
          {/* Logo sizing adjusts dynamically */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={pteLogo}
              alt="PTE Talents Logo"
              className={`w-auto transition-all duration-350 ease-out ${
                isScrolled ? "h-9 md:h-11" : "h-11 md:h-14"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold transition-colors relative group text-slate-700 hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Consultation Button / Action */}
          <div className="hidden md:flex items-center gap-4 relative" ref={popupRef}>
            <motion.button
              onClick={() => setPopupOpen(v => !v)}
              className="px-5 py-2.5 bg-primary hover:bg-primary/95 text-white font-black text-[11px] rounded-full shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap cursor-pointer uppercase tracking-wider"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Tư vấn miễn phí
            </motion.button>

            {/* Contact details popup */}
            <AnimatePresence>
              {popupOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-[calc(100%+10px)] right-0 z-50 bg-white border border-slate-200/80 rounded-2xl p-4 w-64 shadow-xl text-left"
                >
                  <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-2 font-bold uppercase">LIÊN HỆ TRỰC TIẾP</p>

                  <div className="flex items-center gap-2 mb-3 py-1.5 px-3 bg-slate-50 rounded-xl border border-slate-100">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-base font-extrabold text-slate-800 tracking-wider">
                      {siteConfig.phoneFormatted}
                    </span>
                    <button onClick={copyPhone} className="ml-auto text-slate-400 hover:text-slate-600 transition-colors cursor-pointer" title="Sao chép">
                      {copied
                        ? <CheckCheck className="w-4 h-4 text-emerald-500" />
                        : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary/95 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" /> Gọi ngay
                    </a>
                    <a
                      href={siteConfig.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-100 text-slate-800 rounded-full text-xs font-bold hover:bg-slate-200 transition-all border border-slate-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-primary" /> Zalo
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-200/80 md:hidden"
          >
            <nav className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-bold text-slate-700 hover:text-primary border-b border-slate-100 last:border-0 transition-colors text-left"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm text-center shadow-sm hover:bg-primary/95 transition-all"
              >
                Nhận tư vấn miễn phí qua Zalo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
