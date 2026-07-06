import { motion, AnimatePresence } from "framer-motion";
import pteLogo from '@assets/pte-logo.png';
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "Về Cô Thuỷ" },
  { href: "#who", label: "Dành cho ai?" },
  { href: "#roadmap", label: "Lộ trình 30 Ngày" },
  { href: "#results", label: "Thành quả" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#enroll"
              className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all neon-border"
            >
              Đăng ký học
            </a>
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
                href="#enroll"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm text-center neon-border transition-all"
              >
                Đăng ký học
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
