import { motion } from "framer-motion";

/* ── Custom illustrated SVG icons ── */
const IconLostFoundation = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Open book */}
    <rect x="10" y="24" width="27" height="34" rx="3" fill="#FF4DA6" opacity="0.15" stroke="#FF4DA6" strokeWidth="1.5"/>
    <rect x="43" y="24" width="27" height="34" rx="3" fill="#FF4DA6" opacity="0.15" stroke="#FF4DA6" strokeWidth="1.5"/>
    <line x1="40" y1="24" x2="40" y2="58" stroke="#FF4DA6" strokeWidth="2" strokeDasharray="3 2"/>
    {/* Lines on pages */}
    <line x1="16" y1="33" x2="31" y2="33" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="16" y1="39" x2="28" y2="39" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="16" y1="45" x2="31" y2="45" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <line x1="49" y1="33" x2="64" y2="33" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <line x1="49" y1="39" x2="60" y2="39" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
    <line x1="49" y1="45" x2="64" y2="45" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.15"/>
    {/* Crack / broken signal */}
    <polyline points="49,28 55,38 51,38 57,48" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
    {/* Question mark floating */}
    <text x="56" y="20" fontSize="14" fill="#FF4DA6" fontWeight="bold" opacity="0.8">?</text>
    <circle cx="68" cy="28" r="2" fill="#FF4DA6" opacity="0.5"/>
    <circle cx="14" cy="18" r="1.5" fill="#FF4DA6" opacity="0.4"/>
  </svg>
);

const IconUrgent = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Clock face */}
    <circle cx="40" cy="40" r="22" stroke="#FF4DA6" strokeWidth="2" fill="#FF4DA6" fillOpacity="0.08"/>
    <circle cx="40" cy="40" r="2.5" fill="#FF4DA6"/>
    {/* Clock hands — showing urgency (almost 12) */}
    <line x1="40" y1="40" x2="40" y2="23" stroke="#FF4DA6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="40" y1="40" x2="50" y2="35" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round"/>
    {/* Tick marks */}
    <line x1="40" y1="19" x2="40" y2="22" stroke="#FF4DA6" strokeWidth="1.5" opacity="0.5"/>
    <line x1="40" y1="58" x2="40" y2="61" stroke="#FF4DA6" strokeWidth="1.5" opacity="0.5"/>
    <line x1="19" y1="40" x2="22" y2="40" stroke="#FF4DA6" strokeWidth="1.5" opacity="0.5"/>
    <line x1="58" y1="40" x2="61" y2="40" stroke="#FF4DA6" strokeWidth="1.5" opacity="0.5"/>
    {/* Lightning bolts — urgency */}
    <polyline points="62,18 57,28 62,28 56,40" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15" cy="22" r="2" fill="#FCD34D" opacity="0.6"/>
    <circle cx="12" cy="52" r="1.5" fill="#FF4DA6" opacity="0.4"/>
  </svg>
);

const IconStuck = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Axes */}
    <line x1="14" y1="62" x2="66" y2="62" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <line x1="14" y1="62" x2="14" y2="18" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* Y-axis ticks */}
    <line x1="11" y1="48" x2="14" y2="48" stroke="#FF4DA6" strokeWidth="1" opacity="0.4"/>
    <line x1="11" y1="35" x2="14" y2="35" stroke="#FF4DA6" strokeWidth="1" opacity="0.4"/>
    <line x1="11" y1="22" x2="14" y2="22" stroke="#FF4DA6" strokeWidth="1" opacity="0.4"/>
    {/* Flat line — stuck */}
    <polyline points="18,30 30,28 40,27 52,28 62,27" stroke="#FF4DA6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" strokeDasharray="4 2"/>
    {/* Expected rising line (faded dream) */}
    <polyline points="18,52 28,44 38,36 48,28 58,20" stroke="#FF4DA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" strokeDasharray="3 3"/>
    {/* Wall blocking the rise */}
    <rect x="46" y="20" width="5" height="42" rx="1" fill="#FF4DA6" opacity="0.25" stroke="#FF4DA6" strokeWidth="1"/>
    {/* Arrow hitting wall */}
    <polyline points="28,44 38,36 45,30" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polygon points="47,29 42,28 44,33" fill="#FF4DA6"/>
    {/* Sad dot */}
    <circle cx="38" cy="27" r="3" fill="#FF4DA6" opacity="0.9"/>
  </svg>
);

const IconConfused = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Maze-like paths */}
    <rect x="12" y="12" width="56" height="56" rx="4" stroke="#FF4DA6" strokeWidth="1.5" fill="none" opacity="0.2"/>
    {/* Maze walls */}
    <polyline points="12,30 32,30 32,20" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="44,12 44,30 56,30 56,44" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="12,50 28,50 28,68" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="44,56 44,68" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="56,56 68,56 68,44" stroke="#FF4DA6" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    {/* Dashed confused path */}
    <polyline points="22,22 22,40 38,40 38,58 60,58" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" opacity="0.8"/>
    {/* Start dot */}
    <circle cx="22" cy="22" r="3.5" fill="#FF4DA6"/>
    {/* End / exit star */}
    <circle cx="64" cy="20" r="6" fill="#FCD34D" opacity="0.15" stroke="#FCD34D" strokeWidth="1.5"/>
    <text x="61" y="24" fontSize="10" fill="#FCD34D">★</text>
  </svg>
);

const personas = [
  {
    id: "lost",
    illustration: <IconLostFoundation />,
    badge: "Mất gốc tiếng Anh",
    badgeColor: "from-pink-500/20 to-rose-500/10 border-pink-500/30 text-pink-400",
    glowColor: "hsl(330 100% 65%)",
    title: "Bỏ tiếng Anh đã lâu,\nmọi thứ mờ nhạt dần",
    desc: "Phát âm sai, không có phản xạ nghe nói. Bạn sợ giao tiếp nhưng buộc phải có chứng chỉ PTE để tiến lên con đường tiếp theo.",
    tags: ["Phát âm sai", "Mất phản xạ", "Thiếu nền tảng"],
  },
  {
    id: "urgent",
    illustration: <IconUrgent />,
    badge: "Cần điểm gấp",
    badgeColor: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-400",
    glowColor: "hsl(42 100% 60%)",
    title: "Deadline nộp hồ sơ\nđang đến rất gần",
    desc: "Visa, định cư, hay tốt nghiệp — bạn không có thời gian mày mò. Cần phương pháp học đúng trọng tâm để ra điểm nhanh nhất có thể.",
    tags: ["Hết hạn nộp hồ sơ", "Cần điểm ngay", "Visa / Định cư"],
  },
  {
    id: "stuck",
    illustration: <IconStuck />,
    badge: "Điểm giậm chân tại chỗ",
    badgeColor: "from-orange-500/20 to-red-500/10 border-orange-500/30 text-orange-400",
    glowColor: "hsl(25 100% 60%)",
    title: "Học mãi mà điểm\nkhông chịu nhích",
    desc: "Đã tự ôn hoặc học nhiều nơi nhưng điểm cứ dậm chân. Không biết mình sai ở đâu — cần người chỉ ra lỗi sai và cách khắc phục.",
    tags: ["Điểm bình nguyên", "Không biết sai ở đâu", "Cần mentor"],
  },
  {
    id: "confused",
    illustration: <IconConfused />,
    badge: "Mông lung phương pháp",
    badgeColor: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-400",
    glowColor: "hsl(180 100% 55%)",
    title: "Không hiểu AI Pearson\nchấm điểm ra sao",
    desc: "Học lan man, tốn tiền, tốn thời gian mà không biết đúng hướng. Cần một lộ trình rõ ràng từng ngày, từng bước cụ thể.",
    tags: ["AI scoring", "Không có lộ trình", "Học lan man"],
  },
];

export default function WhoIsThisFor() {
  return (
    <section id="who" className="py-24 bg-[#25101B] relative overflow-hidden cyber-scanlines">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-48 h-48 border-t-2 border-r-2 border-primary/30 pointer-events-none"
        style={{ boxShadow: '0 0 20px hsl(330 100% 65% / 0.15)' }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-b-2 border-l-2 border-cyan-400/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Đối tượng phù hợp
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ textShadow: '0 0 40px hsl(330 100% 65% / 0.35)' }}
          >
            Khóa học này{" "}
            <span className="text-primary glitch-text" data-text="dành cho ai?">dành cho ai?</span>
          </h2>
          <p className="text-lg text-slate-400">
            Nếu bạn đang ở trong một trong những tình trạng dưới đây,<br className="hidden md:block" />
            khoá đồng hành 30 ngày chính là giải pháp được thiết kế riêng cho bạn.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {personas.map((persona, idx) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-7 overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{
                boxShadow: '0 0 0 1px hsl(0 0% 100% / 0.04), 0 4px 24px hsl(0 0% 0% / 0.4)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 0 1px ${persona.glowColor}40, 0 0 32px ${persona.glowColor}20, 0 8px 40px hsl(0 0% 0% / 0.5)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 0 1px hsl(0 0% 100% / 0.04), 0 4px 24px hsl(0 0% 0% / 0.4)';
              }}
            >
              {/* Gradient glow blob */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
                style={{ background: persona.glowColor + '22' }}
              />

              {/* Cyber corner bracket (top-left) */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl pointer-events-none" />
              {/* Cyber corner bracket (bottom-right) */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-3xl pointer-events-none" />

              <div className="flex gap-6 items-start relative z-10">
                {/* Illustrated icon */}
                <div
                  className="shrink-0 w-24 h-24 rounded-2xl bg-slate-800/80 border border-slate-700/60 p-3 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300"
                  style={{ boxShadow: `0 0 0 1px hsl(0 0% 100% / 0.04)` }}
                >
                  {persona.illustration}
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-gradient-to-r text-xs font-bold uppercase tracking-wider mb-3 ${persona.badgeColor}`}>
                    <span className="w-1 h-1 rounded-full bg-current opacity-80" />
                    {persona.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white leading-snug mb-2 whitespace-pre-line">
                    {persona.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {persona.desc}
                  </p>
                </div>
              </div>

              {/* Tags row */}
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-slate-700/50 relative z-10">
                {persona.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-medium group-hover:border-slate-600 transition-colors"
                  >
                    # {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            Bạn thấy mình trong những trường hợp trên?{" "}
            <a href="#roadmap" className="text-primary font-semibold hover:underline underline-offset-2">
              Xem lộ trình 30 ngày →
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
