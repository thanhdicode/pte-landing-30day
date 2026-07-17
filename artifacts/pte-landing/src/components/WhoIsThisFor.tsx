import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { personas } from "../data/course-content";

// Render **bold** segments as bold slate-900 text.
function renderRich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-slate-900 font-bold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/* ── Custom illustrated SVG icons with themed colors ── */
const IconLostFoundation = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Open book */}
    <rect x="10" y="24" width="27" height="34" rx="3" fill="#1E40AF" fillOpacity="0.1" stroke="#1E40AF" strokeWidth="1.5"/>
    <rect x="43" y="24" width="27" height="34" rx="3" fill="#1E40AF" fillOpacity="0.1" stroke="#1E40AF" strokeWidth="1.5"/>
    <line x1="40" y1="24" x2="40" y2="58" stroke="#1E40AF" strokeWidth="2" strokeDasharray="3 2"/>
    {/* Lines on pages */}
    <line x1="16" y1="33" x2="31" y2="33" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="16" y1="39" x2="28" y2="39" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="16" y1="45" x2="31" y2="45" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <line x1="49" y1="33" x2="64" y2="33" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <line x1="49" y1="39" x2="60" y2="39" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
    <line x1="49" y1="45" x2="64" y2="45" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.15"/>
    {/* Crack / broken signal */}
    <polyline points="49,28 55,38 51,38 57,48" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
    {/* Question mark floating */}
    <text x="56" y="20" fontSize="14" fill="#D97706" fontWeight="bold" opacity="0.8">?</text>
    <circle cx="68" cy="28" r="2" fill="#1E40AF" opacity="0.5"/>
    <circle cx="14" cy="18" r="1.5" fill="#1E40AF" opacity="0.4"/>
  </svg>
);

const IconUrgent = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Clock face */}
    <circle cx="40" cy="40" r="22" stroke="#1E40AF" strokeWidth="2" fill="#1E40AF" fillOpacity="0.06"/>
    <circle cx="40" cy="40" r="2.5" fill="#1E40AF"/>
    {/* Clock hands */}
    <line x1="40" y1="40" x2="40" y2="23" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="40" y1="40" x2="50" y2="35" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round"/>
    {/* Tick marks */}
    <line x1="40" y1="19" x2="40" y2="22" stroke="#1E40AF" strokeWidth="1.5" opacity="0.5"/>
    <line x1="40" y1="58" x2="40" y2="61" stroke="#1E40AF" strokeWidth="1.5" opacity="0.5"/>
    <line x1="19" y1="40" x2="22" y2="40" stroke="#1E40AF" strokeWidth="1.5" opacity="0.5"/>
    <line x1="58" y1="40" x2="61" y2="40" stroke="#1E40AF" strokeWidth="1.5" opacity="0.5"/>
    {/* Lightning bolts */}
    <polyline points="62,18 57,28 62,28 56,40" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15" cy="22" r="2" fill="#D97706" opacity="0.6"/>
    <circle cx="12" cy="52" r="1.5" fill="#1E40AF" opacity="0.4"/>
  </svg>
);

const IconStuck = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Axes */}
    <line x1="14" y1="62" x2="66" y2="62" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <line x1="14" y1="62" x2="14" y2="18" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* Y-axis ticks */}
    <line x1="11" y1="48" x2="14" y2="48" stroke="#1E40AF" strokeWidth="1" opacity="0.4"/>
    <line x1="11" y1="35" x2="14" y2="35" stroke="#1E40AF" strokeWidth="1" opacity="0.4"/>
    <line x1="11" y1="22" x2="14" y2="22" stroke="#1E40AF" strokeWidth="1" opacity="0.4"/>
    {/* Flat line — stuck */}
    <polyline points="18,30 30,28 40,27 52,28 62,27" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" strokeDasharray="4 2"/>
    {/* Expected rising line */}
    <polyline points="18,52 28,44 38,36 48,28 58,20" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" strokeDasharray="3 3"/>
    {/* Wall blocking the rise */}
    <rect x="46" y="20" width="5" height="42" rx="1" fill="#1E40AF" fillOpacity="0.2" stroke="#1E40AF" strokeWidth="1"/>
    {/* Arrow hitting wall */}
    <polyline points="28,44 38,36 45,30" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polygon points="47,29 42,28 44,33" fill="#1E40AF"/>
    {/* Sad dot */}
    <circle cx="38" cy="27" r="3" fill="#D97706" opacity="0.9"/>
  </svg>
);

const IconConfused = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Maze-like paths */}
    <rect x="12" y="12" width="56" height="56" rx="4" stroke="#1E40AF" strokeWidth="1.5" fill="none" opacity="0.2"/>
    {/* Maze walls */}
    <polyline points="12,30 32,30 32,20" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="44,12 44,30 56,30 56,44" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="12,50 28,50 28,68" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="44,56 44,68" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <polyline points="56,56 68,56 68,44" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    {/* Dashed confused path */}
    <polyline points="22,22 22,40 38,40 38,58 60,58" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" opacity="0.85"/>
    {/* Start dot */}
    <circle cx="22" cy="22" r="3.5" fill="#1E40AF"/>
    {/* End / exit star */}
    <circle cx="64" cy="20" r="6" fill="#D97706" fillOpacity="0.15" stroke="#D97706" strokeWidth="1.5"/>
    <text x="61" y="24" fontSize="10" fill="#D97706">★</text>
  </svg>
);

const illustrationsMap: Record<string, ReactNode> = {
  lost: <IconLostFoundation />,
  urgent: <IconUrgent />,
  stuck: <IconStuck />,
  confused: <IconConfused />,
};

// Map color choices for tags/badges
const colorThemesMap: Record<string, { badge: string; text: string; bg: string }> = {
  blue: {
    badge: "bg-blue-50 border-blue-200 text-blue-700",
    text: "text-blue-800",
    bg: "bg-blue-50/50"
  },
  amber: {
    badge: "bg-amber-50 border-amber-200 text-amber-800",
    text: "text-amber-800",
    bg: "bg-amber-50/50"
  },
  rose: {
    badge: "bg-rose-50 border-rose-200 text-rose-800",
    text: "text-rose-800",
    bg: "bg-rose-50/50"
  },
  emerald: {
    badge: "bg-emerald-50 border-emerald-200 text-emerald-800",
    text: "text-emerald-800",
    bg: "bg-emerald-50/50"
  }
};

export default function WhoIsThisFor() {
  return (
    <section id="who" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-primary text-xs font-bold mb-5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Đối tượng đào tạo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Khóa học này dành cho ai?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Học viên ôn thi PTE thường xuất phát từ một trong 4 tình huống thực tế dưới đây. <br className="hidden md:block" />
            Lịch trình 30 ngày đồng hành của cô Thuỷ được tối ưu để giải quyết triệt để từng vấn đề.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {personas.map((persona, idx) => {
            const theme = colorThemesMap[persona.colorTheme] || colorThemesMap.blue;
            return (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-slate-50/50 hover:bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow transition-all duration-300 cursor-default"
              >
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  {/* Illustrated icon container */}
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-100 p-3.5 flex items-center justify-center shadow-sm">
                    {illustrationsMap[persona.id]}
                  </div>

                  {/* Text contents */}
                  <div className="flex-1 min-w-0">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider mb-3 ${theme.badge}`}>
                      <span className="w-1 h-1 rounded-full bg-current" />
                      {persona.badge}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug mb-2">
                      {persona.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {renderRich(persona.desc)}
                    </p>
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-slate-200/60">
                  {persona.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white border border-slate-200/50 text-slate-500 text-xs font-semibold group-hover:border-slate-300 transition-colors duration-200"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4 mt-12"
        >
          <p className="text-slate-600 text-sm sm:text-base text-center max-w-xl">
            Nếu bạn thấy bản thân mình nằm trong các khó khăn trên, hãy xem chi tiết lịch trình 30 ngày.
          </p>
          <a
            href="#roadmap"
            onClick={(e) => {
              const target = document.getElementById("roadmap");
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-primary gap-2 text-sm sm:text-base"
          >
            <span>Tìm hiểu lộ trình học</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
