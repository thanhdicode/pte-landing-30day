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
          isScrolled || mobileOpen ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={pteLogo} alt="PTE Talents" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#enroll"
              className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              Đăng ký học
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
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
            className="fixed top-[68px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-t border-primary/10 md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-semibold text-foreground/80 hover:text-primary border-b border-gray-100 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#enroll"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm text-center shadow-md shadow-primary/20 hover:shadow-lg transition-all"
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
