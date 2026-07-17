import { motion, animate } from "framer-motion";
import { CheckCircle2, Zap, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { targets, outcomes } from "../data/course-content";

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
    const ctrl = animate(0, num, { duration: 1.2, ease: "easeOut", onUpdate: v => setVal(Math.round(v)) });
    return ctrl.stop;
  }, [started, num]);

  return <span ref={ref}>{val}+</span>;
}

// Map color classes for Target Score Cards
const scoreThemesMap: Record<string, { text: string; bg: string; border: string; hoverBorder: string }> = {
  blue: {
    text: "text-blue-600",
    bg: "bg-blue-50/50",
    border: "border-blue-100",
    hoverBorder: "group-hover:border-blue-300"
  },
  emerald: {
    text: "text-emerald-600",
    bg: "bg-emerald-50/50",
    border: "border-emerald-100",
    hoverBorder: "group-hover:border-emerald-300"
  },
  purple: {
    text: "text-purple-600",
    bg: "bg-purple-50/50",
    border: "border-purple-100",
    hoverBorder: "group-hover:border-purple-300"
  },
  amber: {
    text: "text-amber-600",
    bg: "bg-amber-50/50",
    border: "border-amber-100",
    hoverBorder: "group-hover:border-amber-300"
  }
};

/* ── Score card ── */
function ScoreCard({ target, idx }: { target: typeof targets[0]; idx: number }) {
  const theme = scoreThemesMap[target.colorTheme] || scoreThemesMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative rounded-2xl p-5 bg-white border border-slate-200/80 hover:shadow-sm transition-all duration-200 cursor-default"
    >
      <div className="flex items-start justify-between mb-2">
        <div className={`text-3xl font-extrabold font-mono leading-none ${theme.text}`}>
          <AnimatedScore score={target.score} />
        </div>
        <span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full border ${theme.bg} ${theme.border} ${theme.text}`}>
          {target.label}
        </span>
      </div>
      <p className="text-slate-650 text-xs leading-relaxed">{target.desc}</p>
    </motion.div>
  );
}

export default function TargetScores() {
  return (
    <section id="targets" className="py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-primary text-xs font-bold mb-5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Đầu ra cam kết
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900">
            Thành Quả Sau 30 Ngày
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Bất kể đích đến của bạn là gì, khóa học cung cấp chiến thuật tương ứng để giúp bạn đạt mục tiêu trong thời gian ngắn nhất.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Score targets grid ── */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">Mục tiêu điểm số</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targets.map((t, i) => <ScoreCard key={i} target={t} idx={i} />)}
            </div>
          </div>

          {/* ── Right: Outcomes list card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl shadow-sm overflow-hidden"
          >
            {/* Top bar */}
            <div className="px-6 py-4.5 bg-white border-b border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 tracking-wider">KẾT QUẢ ĐẠT ĐƯỢC CHÍNH</span>
              <div className="flex items-center gap-1.5 text-primary">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-extrabold uppercase tracking-wide">Quyền lợi học viên</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex gap-3 items-start group"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-650 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
                      {outcome}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
