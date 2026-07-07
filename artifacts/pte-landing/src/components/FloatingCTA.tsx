import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import PaymentModal from "./PaymentModal";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white cursor-pointer group overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(330 100% 60%), hsl(310 100% 55%))",
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            {/* Pulse glow */}
            <motion.span
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{ boxShadow: ["0 0 16px hsl(330 100% 65% / 0.5)", "0 0 36px hsl(330 100% 65% / 0.9)", "0 0 16px hsl(330 100% 65% / 0.5)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Shimmer */}
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2 }}
            />
            <span className="relative z-10 whitespace-nowrap">Đăng ký ngay</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && <PaymentModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
