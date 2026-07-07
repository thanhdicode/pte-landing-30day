import { motion, useAnimationControls, animate, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Clock, Shield, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PaymentModal from "./PaymentModal";

/* ── Floating particle ── */
function Particle({ x, y, size, color, duration, delay }: {
  x: number; y: number; size: number; color: string; duration: number; delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color,
               boxShadow: `0 0 ${size * 3}px ${color}`, opacity: 0 }}
      animate={{ y: [-20, 20, -20], opacity: [0, 0.8, 0], scale: [0.6, 1.2, 0.6] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Typewriter ── */
function Typewriter({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span ref={ref} className={className} style={style}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ borderRight: "3px solid currentColor", marginLeft: 2 }}
      />
    </span>
  );
}

/* ── Animated counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const controls = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: v => setVal(Math.round(v)) });
    return controls.stop;
  }, [started, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 5 + 2,
  color: i % 2 === 0 ? "hsl(330 100% 65%)" : "hsl(180 100% 60%)",
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

const urgencyItems = [
  { icon: <Clock className="w-4 h-4" />, text: "Khai giảng hàng tuần" },
  { icon: <Shield className="w-4 h-4" />, text: "Cam kết đầu ra" },
  { icon: <Star className="w-4 h-4" />, text: "Hơn 500+ học viên" },
];

export default function FooterCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <AnimatePresence>{modalOpen && <PaymentModal onClose={() => setModalOpen(false)} />}</AnimatePresence>
    <section id="enroll" className="py-32 relative overflow-hidden bg-slate-950 text-white text-center cyber-scanlines">

      {/* Floating particles */}
      {particles.map(p => <Particle key={p.id} {...p} />)}

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-50 pointer-events-none" />

      {/* Neon blobs — animated */}
      <motion.div
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{ width: 700, height: 400, background: "hsl(330 100% 65% / 0.18)", filter: "blur(90px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[5%] rounded-full pointer-events-none"
        style={{ width: 300, height: 300, background: "hsl(180 100% 60% / 0.14)", filter: "blur(70px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[5%] rounded-full pointer-events-none"
        style={{ width: 300, height: 300, background: "hsl(330 100% 65% / 0.12)", filter: "blur(70px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Animated scanline sweep */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(330 100% 65% / 0.8), hsl(180 100% 60% / 0.8), transparent)" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(330 100% 65%), hsl(180 100% 60%), hsl(330 100% 65%), transparent)", boxShadow: "0 0 20px hsl(330 100% 65% / 0.8)" }} />

      {/* Corner brackets */}
      {[
        "top-6 left-6 border-t-2 border-l-2 border-primary/60",
        "top-6 right-6 border-t-2 border-r-2 border-cyan-400/60",
        "bottom-6 left-6 border-b-2 border-l-2 border-cyan-400/60",
        "bottom-6 right-6 border-b-2 border-r-2 border-primary/60",
      ].map((cls, i) => (
        <motion.div key={i} className={`absolute w-16 h-16 pointer-events-none ${cls}`}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} />
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* System tag */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="text-slate-500 text-xs font-mono tracking-widest">▶ SYSTEM.ENROLL</span>
          <motion.span
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ opacity: [1, 0, 1], scale: [1, 1.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{ boxShadow: "0 0 8px hsl(330 100% 65%)" }}
          />
          <span className="text-slate-500 text-xs font-mono tracking-widest">SỐ LƯỢNG GIỚI HẠN</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 mb-10"
          style={{ background: "hsl(330 100% 65% / 0.1)", boxShadow: "0 0 20px hsl(330 100% 65% / 0.2)" }}
        >
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Zap className="w-4 h-4 text-primary" style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 65%))" }} />
          </motion.div>
          <span className="text-primary font-semibold text-sm tracking-wide">Khai giảng hàng tuần — Đăng ký ngay hôm nay</span>
        </motion.div>

        {/* Main heading — staggered lines */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white block mb-1"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.2)" }}
          >
            Sẵn sàng
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight block mb-1"
            style={{
              background: "linear-gradient(90deg, hsl(330 100% 65%), hsl(300 100% 72%), hsl(330 100% 65%))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 24px hsl(330 100% 65% / 0.7))",
            }}
          >
            <motion.span
              style={{ backgroundSize: "200% auto", display: "inline-block",
                background: "inherit", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              BỨT PHÁ PTE
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight block"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.2)" }}
          >
            trong{" "}
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ textShadow: ["0 0 16px hsl(180 100% 60% / 0.8)", "0 0 40px hsl(180 100% 60%)", "0 0 16px hsl(180 100% 60% / 0.8)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400"
            >
              30 ngày?
            </motion.span>
          </motion.div>
        </div>

        {/* Emotional copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed">
            Đừng để tiếng Anh là rào cản ngăn bạn đến với ước mơ —
          </p>
          <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed"
            style={{ color: "hsl(330 100% 78%)", textShadow: "0 0 20px hsl(330 100% 65% / 0.4)" }}>
            visa · định cư · tốt nghiệp đang chờ bạn phía trước.
          </p>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex justify-center gap-10 mb-12"
        >
          {[
            { to: 500, suffix: "+", label: "Học viên" },
            { to: 30,  suffix: " ngày", label: "Lộ trình" },
            { to: 4.9, suffix: "★", label: "Đánh giá", isFloat: true },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold text-primary"
                style={{ textShadow: "0 0 16px hsl(330 100% 65% / 0.7)" }}>
                {s.isFloat
                  ? <span>4.9★</span>
                  : <Counter to={s.to} suffix={s.suffix} />}
              </div>
              <div className="text-xs text-slate-500 mt-1 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-extrabold text-base whitespace-nowrap relative overflow-hidden group cursor-pointer"
            style={{
              background: "linear-gradient(135deg, hsl(330 100% 65%), hsl(310 100% 60%))",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
            animate={{ boxShadow: ["0 0 30px hsl(330 100% 65% / 0.5)", "0 0 60px hsl(330 100% 65% / 0.9)", "0 0 30px hsl(330 100% 65% / 0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            />
            <Zap className="w-5 h-5 relative z-10" style={{ filter: "drop-shadow(0 0 6px #fff)" }} />
            <span className="relative z-10">ĐĂNG KÝ NGAY — MIỄN PHÍ TƯ VẤN</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
          </motion.button>

          <motion.a
            href="#roadmap"
            className="inline-flex items-center gap-2 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300"
            style={{ border: "1.5px solid hsl(180 100% 60% / 0.5)", color: "hsl(180 100% 70%)", background: "hsl(180 100% 60% / 0.06)" }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 20px hsl(180 100% 60% / 0.4)", borderColor: "hsl(180 100% 60%)" }}
            whileTap={{ scale: 0.97 }}
          >
            Xem lộ trình chi tiết →
          </motion.a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {urgencyItems.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <span className="text-primary">{item.icon}</span>
              <span className="text-slate-400 text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-slate-600 text-xs font-mono tracking-wider"
        >
          ▶ Cô Thuỷ đã sẵn sàng đồng hành — bạn chỉ cần bước đầu tiên.
        </motion.p>
      </div>
    </section>
    </>
  );
}
