import { ArrowRight, Play, Zap, Users, Clock, Award, Mic, BookOpen, Phone, MessageCircle, Copy, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import teacherNoBg from '@assets/teacher-nobg.png';
import { useState } from "react";

const PHONE = "0357930867";

const scores = [
  { value: "24+", label: "Beginner", glow: "hsl(185 100% 55%)" },
  { value: "50+", label: "Intermediate", glow: "hsl(330 100% 65%)" },
  { value: "65+", label: "Upper-Int", glow: "hsl(263 70% 65%)" },
  { value: "79+", label: "Advanced", glow: "hsl(42 100% 60%)" },
];

// Ambient floating particles for a subtle, eye-catching hero
const particles = [
  { left: "12%", top: "30%", size: 6, color: "hsl(330 100% 65%)", dur: 7, delay: 0 },
  { left: "22%", top: "72%", size: 4, color: "hsl(180 100% 60%)", dur: 9, delay: 1.5 },
  { left: "44%", top: "18%", size: 5, color: "hsl(330 100% 65%)", dur: 8, delay: 0.8 },
  { left: "58%", top: "82%", size: 4, color: "hsl(180 100% 60%)", dur: 10, delay: 2 },
  { left: "77%", top: "34%", size: 6, color: "hsl(330 100% 65%)", dur: 7.5, delay: 1 },
  { left: "88%", top: "62%", size: 4, color: "hsl(263 70% 65%)", dur: 9.5, delay: 0.4 },
  { left: "34%", top: "88%", size: 5, color: "hsl(330 100% 65%)", dur: 8.5, delay: 2.5 },
  { left: "67%", top: "14%", size: 4, color: "hsl(180 100% 60%)", dur: 11, delay: 1.8 },
];

export default function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#120A2E]">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />

      {/* Radial glow blobs — gentle breathing */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 10, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating neon particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
            animate={{ y: [0, -26, 0], opacity: [0, 0.7, 0] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Scanline sweep */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent pointer-events-none z-10"
        initial={{ top: "-2px" }}
        animate={{ top: "110%" }}
        transition={{ duration: 3, delay: 0.8, ease: "linear" }}
      />

      {/* HUD corner brackets */}
      <div className="absolute top-24 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/60"
        style={{ boxShadow: "0 0 12px hsl(330 100% 65% / 0.4)" }} />
      <div className="absolute top-24 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400/50"
        style={{ boxShadow: "0 0 12px hsl(180 100% 60% / 0.3)" }} />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-400/40" />

      {/* ── Top neon line ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-cyan-400 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-center">

          {/* ══ LEFT — course title block ══ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-7"
          >
            {/* ── Main title ── */}
            <div className="flex flex-col gap-1">
              {/* Row 1: Rocket + label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="flex items-center gap-3 mb-1"
              >
                <span className="text-4xl drop-shadow-[0_0_16px_hsl(330,100%,65%)]">🚀</span>
                <span className="text-slate-400 text-sm font-bold tracking-[0.25em] uppercase">
                  KHÓA ĐỒNG HÀNH
                </span>
              </motion.div>

              {/* Row 2: "30 NGÀY" — huge accent */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="relative"
              >
                <motion.h1
                  className="text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-black leading-none tracking-tight text-white"
                  animate={{
                    textShadow: [
                      "0 0 60px hsl(330 100% 65% / 0.45)",
                      "0 0 90px hsl(330 100% 65% / 0.8)",
                      "0 0 60px hsl(330 100% 65% / 0.45)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  30 <span className="text-primary">NGÀY</span>
                </motion.h1>
                {/* HUD underline */}
                <div className="h-[3px] w-3/4 mt-1 bg-gradient-to-r from-primary via-primary/60 to-transparent"
                  style={{ boxShadow: "0 0 10px hsl(330 100% 65% / 0.6)" }} />
              </motion.div>

              {/* Row 3: "CHINH PHỤC MỤC TIÊU PTE" */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-1"
              >
                <h2 className="text-[1.75rem] lg:text-[2.4rem] xl:text-[2.9rem] font-extrabold leading-[1.15] tracking-tight flex flex-wrap items-baseline gap-x-3.5">
                  <span className="text-white/95">CHINH PHỤC MỤC TIÊU</span>
                  <span className="relative inline-block">
                    <motion.span
                      className="font-black text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(100deg, hsl(180 100% 62%), hsl(330 100% 68%), hsl(330 100% 78%), hsl(180 100% 62%))",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        filter: "drop-shadow(0 0 22px hsl(330 100% 65% / 0.55))",
                      }}
                      animate={{ backgroundPosition: ["0% center", "200% center"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                      PTE
                    </motion.span>
                    {/* neon underline accent */}
                    <motion.span
                      className="absolute -bottom-1.5 left-0 h-[3px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, hsl(180 100% 60%), hsl(330 100% 65%))",
                        boxShadow: "0 0 10px hsl(330 100% 65% / 0.75)",
                      }}
                      initial={{ scaleX: 0, originX: 0, width: "100%" }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
                    />
                  </span>
                </h2>
              </motion.div>

              {/* Row 4: Score badges */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-wrap gap-3 mt-2"
              >
                {scores.map((s, i) => (
                  <motion.div
                    key={s.value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className="flex flex-col items-center px-4 py-2 rounded-2xl bg-slate-900/60 border border-white/10 cursor-default"
                  >
                    <span className="text-2xl font-black" style={{ color: s.glow }}>
                      {s.value}
                    </span>
                    <span className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider">{s.label}</span>
                  </motion.div>
                ))}

                {/* Separator */}
                <div className="flex items-center px-2">
                  <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
                </div>

                {/* "TỪ CON SỐ 0" chip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.95 }}
                  className="flex flex-col items-center justify-center px-5 py-2 rounded-2xl border border-primary/40 bg-primary/5 relative"
                  style={{ boxShadow: "0 0 20px hsl(330 100% 65% / 0.25)" }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Xuất phát</span>
                  <span className="text-xl font-black text-primary"
                    style={{ textShadow: "0 0 16px hsl(330 100% 65% / 0.8)" }}>
                    CON SỐ 0
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* ── Tagline ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-xl border-l-2 border-primary/40 pl-4"
            >
              Lộ trình 30 ngày bám sát từng học viên — từ người chưa biết gì
              đến tự tin chinh phục chứng chỉ PTE cho{" "}
              <span className="text-white font-semibold">visa · định cư · tốt nghiệp</span>.
            </motion.p>

            {/* ── CTA buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative">
                <button
                  onClick={() => setPopupOpen(v => !v)}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-lg text-white overflow-hidden transition-all hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, hsl(330 100% 55%), hsl(330 100% 70%))",
                    boxShadow: "0 0 0 1px hsl(330 100% 65% / 0.5), 0 8px 32px hsl(330 100% 65% / 0.4)",
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Tư vấn miễn phí
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>

                {/* Phone popup */}
                <AnimatePresence>
                  {popupOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-[calc(100%+10px)] z-50 rounded-2xl p-4 w-64"
                      style={{
                        background: "hsl(222 47% 7%)",
                        border: "1px solid hsl(330 100% 65% / 0.35)",
                        boxShadow: "0 0 40px hsl(330 100% 65% / 0.2), 0 16px 32px rgba(0,0,0,0.5)",
                      }}
                    >
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
                        <button onClick={copyPhone} className="ml-auto text-slate-400 hover:text-white transition-colors">
                          {copied ? <CheckCheck className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex gap-2">
                        <a href={`tel:${PHONE}`}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold text-white"
                          style={{ background: "hsl(330 100% 60% / 0.25)", border: "1px solid hsl(330 100% 65% / 0.4)" }}>
                          <Phone className="w-3.5 h-3.5" /> Gọi ngay
                        </a>
                        <a href={`https://zalo.me/${PHONE}`} target="_blank" rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold text-cyan-300"
                          style={{ background: "hsl(180 100% 60% / 0.1)", border: "1px solid hsl(180 100% 60% / 0.35)" }}>
                          <MessageCircle className="w-3.5 h-3.5" /> Zalo
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-slate-300 border border-slate-600 hover:border-primary/50 hover:text-white transition-all"
              >
                <Play className="w-4 h-4 text-primary" />
                Xem lộ trình 30 ngày
              </a>
            </motion.div>

            {/* ── Social proof ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-5 pt-4 border-t border-slate-800"
            >
              <div className="flex gap-5 text-sm">
                <div>
                  <span className="text-white font-bold">500+</span>
                  <span className="text-slate-500 ml-1">học viên</span>
                </div>
                <div className="w-px bg-slate-700" />
                <div>
                  <span className="text-white font-bold">⭐ 4.9</span>
                  <span className="text-slate-500 ml-1">đánh giá</span>
                </div>
                <div className="w-px bg-slate-700" />
                <div>
                  <span className="text-white font-bold">30</span>
                  <span className="text-slate-500 ml-1">ngày</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — HUD card ══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-cyan-400/15 blur-xl pointer-events-none" />

              {/* HUD card */}
              <div
                className="relative rounded-[2rem] bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 overflow-hidden"
                style={{ boxShadow: "0 0 0 1px hsl(330 100% 65% / 0.15), 0 24px 64px hsl(0 0% 0% / 0.6)" }}
              >
                {/* Top HUD bar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-slate-700/60 bg-slate-800/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"
                      style={{ boxShadow: "0 0 8px hsl(330 100% 65%)" }} />
                    <span className="text-slate-400 text-xs font-mono tracking-wider">PTE_TALENTS.PROFILE</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col items-center gap-0">
                  {/* Teacher portrait — full-width, no padding on sides */}
                  <div className="relative w-full overflow-hidden" style={{ height: "240px" }}>
                    {/* Pink neon glow behind */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-primary/30 blur-3xl pointer-events-none" />
                    <img
                      src={teacherNoBg}
                      alt="Cô Nguyễn Thị Thuỷ"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom"
                      style={{ filter: "drop-shadow(0 0 24px hsl(330 100% 65% / 0.5))" }}
                    />
                    {/* Fade-to-card at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
                  </div>

                  {/* Name — overlapping photo bottom */}
                  <div className="text-center px-8 pb-2 -mt-1">
                    <p className="text-slate-500 text-xs font-mono tracking-widest uppercase mb-1">Giảng viên khoá học</p>
                    <h3
                      className="text-2xl font-extrabold text-white"
                      style={{ textShadow: "0 0 24px hsl(330 100% 65% / 0.4)" }}
                    >
                      Cô Nguyễn Thị Thuỷ
                    </h3>
                    <p className="text-primary text-sm font-semibold mt-1">Chuyên gia PTE Talents</p>
                  </div>

                  {/* Stats HUD grid */}
                  <div className="w-full grid grid-cols-3 gap-3">
                    {[
                      { icon: <Award className="w-4 h-4" />, value: "10 NĂM", label: "Giảng dạy" },
                      { icon: <BookOpen className="w-4 h-4" />, value: "4 NĂM", label: "PTE" },
                      { icon: <Mic className="w-4 h-4" />, value: "500+", label: "Học viên" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-slate-800/60 border border-slate-700/50"
                      >
                        <span className="text-primary">{item.icon}</span>
                        <span className="text-white font-black text-sm font-mono">{item.value}</span>
                        <span className="text-slate-500 text-[10px] uppercase tracking-wider">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quote terminal */}
                  <div className="w-full bg-slate-800/60 rounded-xl border border-slate-700/50 p-4">
                    <div className="flex items-center gap-2 mb-2 opacity-60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">quote.exe</span>
                    </div>
                    <p className="text-slate-300 text-sm italic leading-relaxed font-medium">
                      "Hiểu đúng là chìa khoá để chinh phục điểm PTE thật nhanh."
                    </p>
                  </div>

                  {/* Progress bar decoration */}
                  <div className="w-full space-y-2">
                    {[
                      { label: "Speaking & Writing", pct: 92 },
                      { label: "Reading & Listening", pct: 88 },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                          <span className="font-mono">{bar.label}</span>
                          <span className="text-primary font-bold">{bar.pct}%</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${bar.pct}%` }}
                            transition={{ duration: 1.2, delay: 1 }}
                            style={{ boxShadow: "0 0 8px hsl(330 100% 65% / 0.6)" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom HUD status bar */}
                <div className="px-6 py-2.5 border-t border-slate-700/60 bg-slate-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                    <Users className="w-3 h-3 text-primary" />
                    <span>ĐANG TUYỂN SINH</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>30 NGÀY / KHOÁ</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-slate-900 border border-primary/30 px-4 py-2.5 rounded-2xl flex items-center gap-2.5"
                style={{ boxShadow: "0 0 20px hsl(330 100% 65% / 0.25)" }}
              >
                <span className="text-lg">🎯</span>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Target</div>
                  <div className="text-sm font-black text-primary"
                    style={{ textShadow: "0 0 10px hsl(330 100% 65% / 0.7)" }}>
                    24+ → 79+
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 bg-slate-900 border border-yellow-400/30 px-4 py-2.5 rounded-2xl flex items-center gap-2.5"
                style={{ boxShadow: "0 0 20px hsl(42 100% 60% / 0.2)" }}
              >
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Kết quả</div>
                  <div className="text-sm font-black text-yellow-400">Chỉ 30 ngày</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
