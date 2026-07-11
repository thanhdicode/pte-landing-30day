import { motion } from "framer-motion";
import type { ReactNode } from "react";
import teacherNoBg from '@assets/teacher-formal-nobg.png';

// ── 2-color accent system ──
const PINK = "#D4537E";
const PINK_TEXT = "#ED93B1";
const GOLD = "#FAC775";
const GRAY = "#a99cc0";

// Inline emphasis helpers
const W = ({ children }: { children: ReactNode }) => (
  <span className="font-bold text-white not-italic">{children}</span>
);
const P = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold" style={{ color: PINK_TEXT }}>{children}</span>
);
const G = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold" style={{ color: GOLD }}>{children}</span>
);

const bullets: { tone: "pink" | "gold"; text: ReactNode }[] = [
  {
    tone: "pink",
    text: (
      <>
        Sau nhiều năm đứng lớp, điều cô Thuỷ nhận ra: phần lớn học viên chưa đạt mục tiêu{" "}
        <W>không phải vì thiếu cố gắng</W> — mà vì chưa có <P>lộ trình học đúng</P> và{" "}
        <P>phương pháp luyện tập hiệu quả</P>.
      </>
    ),
  },
  {
    tone: "gold",
    text: (
      <>
        Giai đoạn 1 của khoá học chính là <G>phương pháp phát âm và độ trôi chảy chuẩn</G> mà cô đã
        kiểm chứng trong kỳ thi thật.
      </>
    ),
  },
  {
    tone: "pink",
    text: (
      <>
        Từ trải nghiệm đồng hành cùng học viên ở đủ mọi trình độ, cô xây dựng hệ thống học{" "}
        <W>PTE Talents</W> — lộ trình rõ ràng, video bài giảng, website luyện tập, bộ đề trọng điểm và
        quá trình <P>chữa bài chi tiết</P>.
      </>
    ),
  },
  {
    tone: "pink",
    text: (
      <>
        Cô không dạy chỉ để học viên đạt điểm — mà để các em <W>hiểu cách Pearson chấm điểm</W>, có{" "}
        <W>phương pháp bền vững</W> và <P>tự cải thiện được cả sau khoá học</P>.
      </>
    ),
  },
];

export default function TeacherIntro() {
  return (
    <section id="about" className="py-24 bg-[#120A2E] relative overflow-hidden cyber-scanlines">
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 pointer-events-none"
        style={{ borderColor: "rgba(212,83,126,0.4)", boxShadow: "0 0 16px rgba(212,83,126,0.2)" }} />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 pointer-events-none"
        style={{ borderColor: "rgba(212,83,126,0.4)", boxShadow: "0 0 16px rgba(212,83,126,0.2)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: portrait card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="absolute top-8 -left-8 w-full h-full rounded-[2rem] -z-10"
              style={{ background: "rgba(212,83,126,0.05)", border: "1px solid rgba(212,83,126,0.10)" }} />
            <div className="absolute -bottom-8 right-8 w-full h-full rounded-[2rem] -z-10"
              style={{ border: "1px solid rgba(237,147,177,0.18)" }} />

            <div className="relative w-full max-w-sm bg-slate-900/80 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-primary/20 cyber-corner neon-border overflow-hidden">
              {/* Portrait — black-blazer photo */}
              <div className="relative w-full overflow-hidden" style={{ height: "300px" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-32 blur-3xl pointer-events-none"
                  style={{ background: "rgba(212,83,126,0.30)" }} />
                <img
                  src={teacherNoBg}
                  alt="Cô Nguyễn Thị Thuỷ"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom"
                  style={{ filter: "drop-shadow(0 0 24px rgba(212,83,126,0.5))" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
              </div>

              {/* Education badges only */}
              <div className="px-8 pb-8 pt-3 flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ color: PINK_TEXT, background: "rgba(212,83,126,0.10)", border: "1px solid rgba(212,83,126,0.28)" }}>
                  🎓 Đại Học Hà Nội
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ color: PINK_TEXT, background: "rgba(212,83,126,0.10)", border: "1px solid rgba(212,83,126,0.28)" }}>
                  📖 Chuyên ngành Ngôn Ngữ Anh
                </span>
                <p className="text-[11px] italic mt-0.5" style={{ color: GRAY }}>(Tiền thân Đại Học Ngoại Ngữ Hà Nội)</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: text content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* ── Headline block ── */}
            <div className="mb-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div className="h-[1px] w-8 rounded-full"
                  style={{ background: PINK, boxShadow: "0 0 6px rgba(212,83,126,0.8)" }}
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase" style={{ color: PINK_TEXT }}>Giáo viên &amp; Chuyên gia PTE</span>
                <motion.div className="h-[1px] flex-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, rgba(212,83,126,0.4), transparent)" }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} />
              </div>

              {/* "CÔ" label */}
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-mono font-black text-slate-500 text-sm select-none" style={{ letterSpacing: "0.3em" }}>
                  CÔ
                </span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>

              {/* Main name */}
              <h2 className="font-heading font-black leading-[0.95] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className="block text-5xl lg:text-6xl text-white tracking-tight"
                  style={{ textShadow: "0 0 40px rgba(212,83,126,0.2)" }}>
                  NGUYỄN
                </span>
                <motion.span
                  className="block text-6xl lg:text-7xl tracking-tight"
                  style={{
                    backgroundImage: `linear-gradient(100deg, ${PINK_TEXT}, ${PINK}, ${PINK_TEXT})`,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 24px rgba(212,83,126,0.5))",
                  }}
                  animate={{ backgroundPosition: ["0% center", "200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  THUỶ
                </motion.span>
              </h2>

              {/* Bottom rule (pink → gold) */}
              <div className="mt-4 h-[2px] rounded-full w-3/4"
                style={{ background: `linear-gradient(90deg, ${PINK}, ${PINK_TEXT}, transparent)`, boxShadow: "0 0 8px rgba(212,83,126,0.4)" }} />
            </div>

            {/* ── Bullets ── */}
            <div className="space-y-6">
              {bullets.map(({ tone, text }, i) => {
                const dc = tone === "gold" ? GOLD : PINK_TEXT;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    {/* Diamond + connector */}
                    <div className="flex flex-col items-center shrink-0 pt-1.5">
                      <span className="text-sm leading-none" style={{ color: dc, textShadow: `0 0 10px ${dc}` }}>◆</span>
                      {i < bullets.length - 1 && (
                        <motion.div className="w-px flex-1 mt-1 rounded-full"
                          style={{ background: `linear-gradient(180deg, ${dc}55, transparent)` }}
                          initial={{ scaleY: 0, originY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <p className="leading-[1.85] text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: GRAY }}>
                      {text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
