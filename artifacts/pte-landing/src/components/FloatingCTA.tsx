import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://ptetalents.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white group"
          style={{
            background: "linear-gradient(135deg, hsl(330 100% 60%), hsl(310 100% 55%))",
            boxShadow: "0 0 20px hsl(330 100% 65% / 0.55), 0 4px 16px rgba(0,0,0,0.4)",
          }}
          whileHover={{ scale: 1.06, boxShadow: "0 0 36px hsl(330 100% 65% / 0.85), 0 6px 20px rgba(0,0,0,0.4)" }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Shimmer */}
          <motion.span
            className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
            aria-hidden
          >
            <motion.span
              className="absolute inset-0"
              style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2 }}
            />
          </motion.span>

          <span className="relative z-10">Đăng ký ngay</span>
          <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
