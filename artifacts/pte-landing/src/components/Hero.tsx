import { ArrowRight, Play, Zap } from "lucide-react";
import { motion } from "framer-motion";
import teacherWelcome from '@assets/teacher-welcome-cyber-v2-nobg.png';
import { CHECKOUT_URL } from "@/lib/links";

// ── 2-color accent system ──
const PINK = "#D4537E";       // primary buttons / strong pink
const PINK_TEXT = "#ED93B1";  // pink text accents
const GOLD = "#FAC775";       // value / achievement only
const GRAY = "#a99cc0";       // regular body text
const MUTED = "#6e3a52";      // chevrons + neutral pill borders

// Score journey — CON SỐ 0 first → 79+ last
const journey = [
  { value: "CON SỐ 0", label: "Xuất phát", kind: "start" as const },
  { value: "24+", label: "Beginner", kind: "mid" as const },
  { value: "36+", label: "Elementary", kind: "mid" as const },
  { value: "50+", label: "Intermediate", kind: "mid" as const },
  { value: "65+", label: "Upper-Int", kind: "mid" as const },
  { value: "79+", label: "Advanced", kind: "end" as const },
];

// Ambient floating particles — pink & gold only
const particles = [
  { left: "12%", top: "30%", size: 6, color: PINK, dur: 7, delay: 0 },
  { left: "22%", top: "72%", size: 4, color: PINK_TEXT, dur: 9, delay: 1.5 },
  { left: "44%", top: "18%", size: 5, color: PINK_TEXT, dur: 8, delay: 0.8 },
  { left: "58%", top: "82%", size: 4, color: PINK, dur: 10, delay: 2 },
  { left: "77%", top: "34%", size: 6, color: PINK, dur: 7.5, delay: 1 },
  { left: "88%", top: "62%", size: 4, color: PINK_TEXT, dur: 9.5, delay: 0.4 },
  { left: "34%", top: "88%", size: 5, color: PINK, dur: 8.5, delay: 2.5 },
  { left: "67%", top: "14%", size: 4, color: PINK_TEXT, dur: 11, delay: 1.8 },
];

function JourneyPill({ p }: { p: (typeof journey)[number] }) {
  const isStart = p.kind === "start";
  const isEnd = p.kind === "end";
  const valColor = isStart ? PINK_TEXT : isEnd ? GOLD : "#ffffff";
  return (
    <div
      className="flex flex-col items-center px-3.5 py-1.5 rounded-xl border"
      style={{
        borderColor: isStart ? "rgba(212,83,126,0.4)" : isEnd ? "rgba(250,199,117,0.4)" : MUTED,
        background: isStart ? "rgba(212,83,126,0.10)" : isEnd ? "rgba(250,199,117,0.10)" : "transparent",
      }}
    >
      <span
        className="font-black leading-none whitespace-nowrap"
        style={{ color: valColor, fontSize: isStart ? "0.9rem" : "1.15rem", textShadow: isStart || isEnd ? `0 0 14px ${valColor}66` : "none" }}
      >
        {p.value}
      </span>
      <span className="text-[9px] font-semibold uppercase tracking-wider mt-1" style={{ color: GRAY }}>
        {p.label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#120A2E]">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />
      {/* Radial glow blobs — gentle breathing (pink + gold) */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(212,83,126,0.10)" }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(212,83,126,0.08)" }}
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
        className="absolute left-0 right-0 h-[2px] pointer-events-none z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${PINK}b3, transparent)` }}
        initial={{ top: "-2px" }}
        animate={{ top: "110%" }}
        transition={{ duration: 3, delay: 0.8, ease: "linear" }}
      />
      {/* HUD corner brackets (pink + gold) */}
      <div className="absolute top-24 left-6 w-12 h-12 border-t-2 border-l-2"
        style={{ borderColor: "rgba(212,83,126,0.6)", boxShadow: "0 0 12px rgba(212,83,126,0.4)" }} />
      <div className="absolute top-24 right-6 w-12 h-12 border-t-2 border-r-2"
        style={{ borderColor: "rgba(212,83,126,0.5)", boxShadow: "0 0 12px rgba(212,83,126,0.3)" }} />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2" style={{ borderColor: "rgba(212,83,126,0.4)" }} />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: "rgba(212,83,126,0.4)" }} />
      {/* ── Top neon line ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${PINK}, ${PINK_TEXT}, transparent)`, opacity: 0.75 }} />

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
              {/* Row 1: badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="flex items-center flex-wrap gap-3 mb-1"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="text-3xl" style={{ filter: "drop-shadow(0 0 16px rgba(212,83,126,0.7))" }}>🚀</span>
                  <span className="text-sm font-bold tracking-[0.25em] uppercase" style={{ color: PINK_TEXT }}>
                    KHOÁ ĐỒNG HÀNH
                  </span>
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                  style={{ color: GRAY, borderColor: "rgba(169,156,192,0.28)" }}
                >
                  🎥 Học qua video + Zoom hàng tuần
                </span>
              </motion.div>

              {/* Row 2: "30 NGÀY" */}
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
                      "0 0 60px rgba(212,83,126,0.45)",
                      "0 0 90px rgba(212,83,126,0.8)",
                      "0 0 60px rgba(212,83,126,0.45)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  30 <span className="font-thin text-primary-foreground">NGÀY</span>
                </motion.h1>
                {/* pink underline bar */}
                <div className="h-[3px] w-3/4 mt-1"
                  style={{ background: `linear-gradient(90deg, ${PINK}, ${PINK}99, transparent)`, boxShadow: "0 0 10px rgba(212,83,126,0.6)" }} />
              </motion.div>

              {/* Row 3: "CHINH PHỤC MỤC TIÊU PTE" — only PTE pink */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-1"
              >
                <h2 className="text-[1.75rem] lg:text-[2.4rem] xl:text-[2.9rem] font-extrabold leading-[1.15] tracking-tight flex flex-wrap items-baseline gap-x-3.5">
                  <span className="text-white/95">CHINH PHỤC MỤC TIÊU</span>
                  <span className="relative inline-block">
                    <span className="font-black" style={{ color: PINK_TEXT, filter: "drop-shadow(0 0 22px rgba(212,83,126,0.55))" }}>
                      PTE
                    </span>
                    <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full"
                      style={{ background: PINK, boxShadow: "0 0 10px rgba(212,83,126,0.75)" }} />
                  </span>
                </h2>
              </motion.div>

              {/* Row 4: score journey */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5 mt-3"
              >
                {journey.map((p, i) => (
                  <div key={p.value} className="flex items-center gap-x-1.5">
                    <JourneyPill p={p} />
                    {i < journey.length - 1 && (
                      <span className="text-lg font-bold select-none" style={{ color: MUTED }}>›</span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Subheadline (left pink border) ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-base lg:text-lg leading-relaxed max-w-xl border-l-2 pl-4"
              style={{ color: GRAY, borderColor: PINK }}
            >
              Từ mất gốc đến tự tin chinh phục mục tiêu PTE — cho{" "}
              <span className="text-white font-semibold">visa · định cư · du học · tốt nghiệp</span>.
            </motion.p>

            {/* ── Learning-method lines ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex flex-col gap-2 max-w-xl -mt-2"
            >
              <p className="text-sm lg:text-[15px] leading-relaxed" style={{ color: GRAY }}>
                🎥 <span className="text-white font-semibold">Học qua video theo lộ trình mỗi ngày</span>
                <span style={{ color: MUTED }}> · </span>
                📞 <span className="text-white font-semibold">1 buổi Zoom/tuần cùng cô Thuỷ</span>
                <span style={{ color: MUTED }}> · </span>
                ✍️ <span className="text-white font-semibold">Chữa bài 1-1</span>
              </p>
              <p className="text-sm lg:text-[15px] leading-relaxed" style={{ color: GRAY }}>
                📅 <span className="text-white font-semibold">Học 30 ngày — truy cập trọn 100 ngày.</span> Xem lại không giới hạn, ôn đến tận ngày thi.
              </p>
            </motion.div>

            {/* ── CTA block ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col gap-4"
            >
              {/* CTA row: button + price */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-3">
                <a
                  href={CHECKOUT_URL}
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-black text-base sm:text-lg text-white overflow-hidden transition-all hover:-translate-y-1 cursor-pointer w-full sm:w-auto"
                  style={{
                    background: `linear-gradient(135deg, ${PINK}, ${PINK_TEXT})`,
                    boxShadow: "0 0 0 1px rgba(212,83,126,0.5), 0 8px 32px rgba(212,83,126,0.4)",
                  }}
                >
                  <Zap className="w-5 h-5" />
                  <span>Đăng Ký Ngay</span>
                  <span className="font-extrabold whitespace-nowrap">– 5.999.000đ</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>

                <div className="flex flex-col gap-1">
                  <span className="text-sm" style={{ color: GRAY }}>
                    Giá gốc{" "}
                    <span className="line-through decoration-2" style={{ color: "rgba(169,156,192,0.55)", textDecorationColor: "rgba(212,83,126,0.7)" }}>10.500.000đ</span>
                  </span>
                  <span className="text-sm" style={{ color: GRAY }}>
                    Tiết kiệm <span className="text-white font-semibold">4.501.000đ (43%)</span>
                  </span>
                </div>
              </div>

              {/* Gift line (gold) */}
              <p className="flex items-start gap-1.5 text-sm font-medium" style={{ color: GOLD }}>
                <span className="shrink-0">🎁</span>
                <span>Đăng ký trong tháng 7 — tặng quyền truy cập web chữa bộ tủ PTE Talents (trị giá 500.000đ)</span>
              </p>

              {/* Secondary button */}
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border transition-all self-start hover:text-white"
                style={{ color: GRAY, borderColor: "rgba(169,156,192,0.35)" }}
              >
                <Play className="w-4 h-4" style={{ color: PINK_TEXT }} />
                Xem lộ trình 30 ngày
              </a>
            </motion.div>

            {/* ── Trust bar ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-white/10 text-sm"
            >
              <span>
                <span className="text-white font-bold">500+</span> <span style={{ color: GRAY }}>học viên</span>
              </span>
              <span style={{ color: MUTED }}>·</span>
              <span>
                ⭐ <span className="text-white font-bold">4.9</span> <span style={{ color: GRAY }}>đánh giá</span>
              </span>
              <span style={{ color: MUTED }}>·</span>
              <span style={{ color: GRAY }}>
                Hỗ trợ <span className="text-white font-bold">24/7</span> qua Zalo
              </span>
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — instructor profile card ══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Outer glow ring (pink → gold) */}
              <div className="absolute -inset-3 rounded-[2.5rem] blur-xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(212,83,126,0.20), transparent, rgba(237,147,177,0.15))" }} />

              {/* Card */}
              <div
                className="relative rounded-[2rem] bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(212,83,126,0.15), 0 24px 64px rgba(0,0,0,0.6)" }}
              >
                {/* Top row: GIẢNG VIÊN + target chip */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-slate-700/60 bg-slate-800/50">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: PINK_TEXT }}>
                    GIẢNG VIÊN
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ color: PINK_TEXT, background: "rgba(212,83,126,0.10)", border: "1px solid rgba(212,83,126,0.35)" }}>
                    🎯 24+ → 79+
                  </span>
                </div>

                {/* Portrait */}
                <div className="relative w-full overflow-hidden" style={{ height: "300px" }}>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-32 blur-3xl pointer-events-none"
                    style={{ background: "rgba(212,83,126,0.25)" }} />
                  <img
                    src={teacherWelcome}
                    alt="Cô Nguyễn Thị Thuỷ"
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                    style={{ filter: "drop-shadow(0 0 24px rgba(212,83,126,0.5))" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
                </div>

                {/* Body */}
                <div className="px-6 pb-6 pt-1 flex flex-col gap-4">
                  {/* Name */}
                  <div className="text-center">
                    <h3 className="text-2xl font-extrabold text-white" style={{ textShadow: "0 0 24px rgba(212,83,126,0.4)" }}>
                      Cô Nguyễn Thị Thuỷ
                    </h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: PINK_TEXT }}>Chuyên gia PTE Talents</p>
                  </div>

                  {/* Gold Speaking badge */}
                  <div className="flex items-center justify-between gap-3 rounded-xl px-4 py-3"
                    style={{ background: "rgba(250,199,117,0.10)", border: "1px solid rgba(250,199,117,0.35)" }}>
                    <span className="text-xs font-bold tracking-wider" style={{ color: GOLD }}>🏆 PTE SPEAKING</span>
                    <span className="text-2xl font-black" style={{ color: GOLD, textShadow: "0 0 16px rgba(250,199,117,0.5)" }}>90/90</span>
                  </div>

                  {/* Stats — white numbers, gray labels, no icons */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "10 NĂM", label: "Giảng dạy" },
                      { value: "4 NĂM", label: "PTE" },
                      { value: "500+", label: "Học viên" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                        <span className="text-white font-black text-sm font-mono">{item.value}</span>
                        <span className="text-[10px] uppercase tracking-wider text-center" style={{ color: GRAY }}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-4">
                    <span className="text-4xl leading-none block -mb-2" style={{ color: PINK_TEXT, fontFamily: "Georgia, serif" }}>“</span>
                    <p className="text-sm italic leading-relaxed font-medium text-slate-200" style={{ fontFamily: "Georgia, serif" }}>
                      Bạn không thiếu cố gắng — bạn chỉ thiếu lộ trình đúng.
                    </p>
                    <p className="text-right text-xs font-semibold mt-2" style={{ color: PINK_TEXT }}>— Cô Thuỷ</p>
                  </div>
                </div>

                {/* Footer — two boxes */}
                <div className="grid grid-cols-2 border-t border-slate-700/60">
                  <div className="px-6 py-3 text-center border-r border-slate-700/60">
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: GRAY }}>Lộ trình</div>
                    <div className="text-white font-bold text-sm mt-0.5">30 ngày</div>
                  </div>
                  <div className="px-6 py-3 text-center">
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: GRAY }}>Truy cập</div>
                    <div className="text-white font-bold text-sm mt-0.5">100 ngày</div>
                  </div>
                </div>
              </div>

              {/* Floating badge (gold) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[296px] -left-5 bg-slate-900 px-4 py-2.5 rounded-2xl flex items-center gap-2.5"
                style={{ border: "1px solid rgba(250,199,117,0.3)", boxShadow: "0 0 20px rgba(250,199,117,0.2)" }}
              >
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-[10px] font-mono uppercase" style={{ color: GRAY }}>Kết quả</div>
                  <div className="text-sm font-black" style={{ color: GOLD }}>Chỉ 30 ngày</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
