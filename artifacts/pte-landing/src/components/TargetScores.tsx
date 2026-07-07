import { motion, animate } from "framer-motion";
import { CheckCircle2, Zap, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const outcomes = [
  "Xây dựng nền tảng phát âm và phản xạ tiếng Anh",
  "Hiểu rõ cách Pearson cho điểm và học đúng trọng tâm",
  "Nắm chắc các dạng bài trọng tâm và chiến lược tăng điểm",
  "Biết tự học, tự luyện và tự chữa bài",
  "Thành thạo website PTE Talents và APEUni",
  "Tự tin chinh phục mục tiêu PTE 24+ | 50+ | 65+ | 79+",
];

const targets = [
  { score: "24+", label: "BEGINNER",   color: "hsl(185 100% 55%)", glow: "hsl(185 100% 55% / 0.5)", border: "hsl(185 100% 55% / 0.3)", desc: "Visa Work & Holiday, định cư tay nghề thấp" },
  { score: "50+", label: "INTERMEDIATE", color: "hsl(330 100% 65%)", glow: "hsl(330 100% 65% / 0.5)", border: "hsl(330 100% 65% / 0.3)", desc: "Đại học, Visa 485, định cư Úc (IELTS 6.0)" },
  { score: "65+", label: "UPPER-INT",  color: "hsl(263 70% 70%)",  glow: "hsl(263 70% 65% / 0.5)",  border: "hsl(263 70% 65% / 0.3)",  desc: "Thạc sĩ, định cư Úc cộng 10 điểm (IELTS 7.0)" },
  { score: "79+", label: "ADVANCED",   color: "hsl(42 100% 62%)",  glow: "hsl(42 100% 62% / 0.5)",  border: "hsl(42 100% 62% / 0.3)",  desc: "Cộng tối đa 20 điểm định cư Úc (IELTS 8.0)" },
];

/* ── Animated counter ── */
function AnimatedScore({ score }: { score: string }) {
  const num = parseInt(score);
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
    const ctrl = animate(0, num, { duration: 1.4, ease: "easeOut", onUpdate: v => setVal(Math.round(v)) });
    return ctrl.stop;
  }, [started, num]);

  return <span ref={ref}>{val}+</span>;
}

/* ── Score card ── */
function ScoreCard({ target, idx }: { target: typeof targets[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-5 cursor-default overflow-hidden"
      style={{
        background: "hsl(222 47% 8%)",
        border: `1px solid ${hovered ? target.color : target.border}`,
        boxShadow: hovered ? `0 0 28px ${target.glow}, inset 0 0 20px ${target.glow.replace("0.5", "0.07")}` : "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Corner bracket */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r pointer-events-none"
        style={{ borderColor: target.color, opacity: 0.5 }} />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l pointer-events-none"
        style={{ borderColor: target.color, opacity: 0.5 }} />

      <div className="flex items-start justify-between mb-1">
        <motion.div
          className="text-4xl font-extrabold font-mono leading-none"
          style={{ color: target.color, textShadow: `0 0 20px ${target.glow}` }}
          animate={{ textShadow: [`0 0 12px ${target.glow}`, `0 0 28px ${target.color}`, `0 0 12px ${target.glow}`] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
        >
          <AnimatedScore score={target.score} />
        </motion.div>
        <span className="text-[10px] font-mono tracking-widest mt-1 px-2 py-0.5 rounded-full"
          style={{ color: target.color, background: `${target.glow.replace("0.5", "0.12")}`, border: `1px solid ${target.border}` }}>
          {target.label}
        </span>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">{target.desc}</p>
    </motion.div>
  );
}

export default function TargetScores() {
  return (
    <section id="results" className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />

      {/* Animated glow blobs */}
      <motion.div className="absolute top-[-10%] right-[-5%] rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: "hsl(330 100% 65% / 0.1)", filter: "blur(100px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="absolute bottom-[-10%] left-[-5%] rounded-full pointer-events-none"
        style={{ width: 400, height: 400, background: "hsl(180 100% 60% / 0.08)", filter: "blur(80px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }} />

      {/* Scanline sweep */}
      <motion.div className="absolute left-0 right-0 h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(330 100% 65% / 0.5), hsl(180 100% 60% / 0.5), transparent)" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />

      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(330 100% 65%), hsl(180 100% 60%), transparent)", boxShadow: "0 0 16px hsl(330 100% 65% / 0.6)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-slate-600 text-xs font-mono tracking-widest">▶ RESULT.SYSTEM</span>
            <motion.span className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{ boxShadow: "0 0 8px hsl(330 100% 65%)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            <motion.span
              style={{
                background: "linear-gradient(90deg, hsl(330 100% 65%), hsl(180 100% 65%), hsl(330 100% 65%))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px hsl(330 100% 65% / 0.5))",
                display: "inline-block",
              }}
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Thành quả sau 30 ngày
            </motion.span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Dù điểm đích của bạn ở đâu, khoá học trang bị chiến lược cá nhân hóa để đưa bạn đến đó nhanh nhất.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Score targets ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Target className="w-4 h-4 text-primary" style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 65%))" }} />
              <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Mục tiêu điểm số</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targets.map((t, i) => <ScoreCard key={i} target={t} idx={i} />)}
            </div>
          </div>

          {/* ── Right: Outcomes ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "hsl(222 47% 7%)",
              border: "1px solid hsl(330 100% 65% / 0.25)",
              boxShadow: "0 0 40px hsl(330 100% 65% / 0.1)",
            }}
          >
            {/* Top bar */}
            <div className="px-6 pt-5 pb-4 border-b border-slate-800 flex items-center gap-3">
              <div className="flex gap-1.5">
                {["hsl(330 100% 65%)", "hsl(42 100% 62%)", "hsl(142 70% 55%)"].map((c, i) => (
                  <motion.div key={i} className="w-2.5 h-2.5 rounded-full"
                    style={{ background: c, boxShadow: `0 0 6px ${c}` }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} />
                ))}
              </div>
              <span className="text-xs font-mono text-slate-500 tracking-wider">OUTCOMES.EXE</span>
              <motion.div className="ml-auto flex items-center gap-1.5"
                animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-semibold text-primary">Bạn sẽ đạt được</span>
              </motion.div>
            </div>

            <div className="p-6 space-y-4">
              {outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-3 items-start group"
                >
                  <motion.div
                    className="mt-0.5 shrink-0"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.35 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary"
                      style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 65% / 0.8))" }} />
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      className="h-[1px] mb-2 rounded-full"
                      style={{ background: "linear-gradient(90deg, hsl(330 100% 65% / 0.4), transparent)" }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    />
                    <span className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {outcome}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom neon line */}
            <div className="h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(180 100% 60% / 0.6), hsl(330 100% 65% / 0.6), transparent)" }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
