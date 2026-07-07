import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import PaymentModal from "./PaymentModal";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-0 z-40 flex items-center gap-2 pl-4 pr-3 py-3 rounded-l-full font-bold text-sm text-white cursor-pointer group"
            style={{
              background: "linear-gradient(135deg, hsl(330 100% 60%), hsl(310 100% 55%))",
            }}
            animate={{
              boxShadow: [
                "-4px 0 20px hsl(330 100% 65% / 0.4)",
                "-4px 0 36px hsl(330 100% 65% / 0.75)",
                "-4px 0 20px hsl(330 100% 65% / 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="absolute inset-0 rounded-l-full pointer-events-none overflow-hidden"
              aria-hidden
            >
              <motion.span
                className="absolute inset-0"
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.5 }}
              />
            </motion.span>
            <MessageCircle className="relative z-10 w-4 h-4 flex-shrink-0" />
            <span className="relative z-10 whitespace-nowrap">Tư vấn miễn phí</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && <PaymentModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
