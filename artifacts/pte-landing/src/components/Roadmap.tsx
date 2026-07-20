import { useState, useRef, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Check,
  Sparkles,
  Target,
  ChevronDown,
  CheckCircle2,
  Trophy,
  Video,
  RotateCcw,
  PenLine,
} from "lucide-react";
import { roadmapPhases, finalResults } from "../data/course-content";

interface PhaseItem {
  text: string;
  sub?: string[];
}

interface PhaseGroup {
  heading?: string;
  cols?: number;
  items: PhaseItem[];
}

interface SkillType {
  label: string;
  hot?: boolean;
}

interface SkillCategory {
  icon: string;
  name: string;
  types: SkillType[];
}

interface SkillGrid {
  heading: string;
  categories: SkillCategory[];
  note: string;
}

interface PronunciationLesson {
  no: string;
  title: string;
  tag?: string;
}

interface PronunciationSection {
  part: string;
  lessons: PronunciationLesson[];
}

interface PronunciationModuleItem {
  id: string;
  title: string;
  name: string;
  badge: string;
  description: string;
  lessons?: PronunciationLesson[];
  sections?: PronunciationSection[];
}

interface Phase {
  day: string;
  title: string;
  objective: string;
  skillGrid?: SkillGrid;
  note?: string;
  groups: PhaseGroup[];
  details?: PhaseItem[];
  detailsDefaultOpen?: boolean;
  results: string[];
  resultMilestone?: string;
  pronunciationModules?: PronunciationModuleItem[];
}

function renderRich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-slate-900 font-extrabold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function PronunciationModuleViewer({ modules }: { modules: PronunciationModuleItem[] }) {
  const [activeTab, setActiveTab] = useState<string>(modules[0]?.id || "mod-1");
  const currentMod = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <div className="mt-6 pt-6 border-t border-slate-200/80 bg-blue-50/40 -mx-6 md:-mx-8 p-6 md:p-8 rounded-b-3xl">
      <div className="flex items-center gap-2 mb-3">
        <Video className="w-4 h-4 text-primary shrink-0" />
        <h4 className="text-xs md:text-sm font-black text-slate-800 uppercase tracking-wider">
          KHUNG CHƯƠNG TRÌNH 44+ BÀI HỌC PHÁT ÂM CHI TIẾT
        </h4>
      </div>
      <p className="text-xs text-slate-600 mb-5 leading-relaxed">
        Học viên được truy cập toàn bộ hệ thống video bài giảng trực quan, phân tích khẩu hình chuẩn và làm bài tập tương tác:
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {modules.map((mod) => {
          const isActive = mod.id === activeTab;
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => setActiveTab(mod.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-sm ring-2 ring-primary/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>{mod.title}: {mod.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isActive ? "bg-white/20 text-white font-extrabold" : "bg-slate-100 text-slate-500 font-medium"
                }`}
              >
                {mod.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Module Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMod.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-4 md:p-5 shadow-sm space-y-4"
        >
          <div className="border-b border-slate-100 pb-3">
            <div className="flex items-center justify-between gap-2">
              <h5 className="font-extrabold text-sm text-slate-900">
                {currentMod.title} – {currentMod.name}
              </h5>
              <span className="text-[11px] font-bold text-primary bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                {currentMod.badge}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{currentMod.description}</p>
          </div>

          {/* Simple Lessons list */}
          {currentMod.lessons && (
            <div className="grid sm:grid-cols-2 gap-2.5">
              {currentMod.lessons.map((lesson, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 bg-slate-50/80 hover:bg-blue-50/50 border border-slate-200/50 rounded-xl transition-colors text-xs"
                >
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-blue-100/70 text-primary font-black flex items-center justify-center text-[11px]">
                    {lesson.no}
                  </span>
                  <span className="text-slate-800 font-medium leading-snug flex-1">{lesson.title}</span>
                  {lesson.tag && (
                    <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md border border-amber-200/60">
                      {lesson.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Categorized Sections (Module 3) */}
          {currentMod.sections && (
            <div className="space-y-4">
              {currentMod.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-xs font-black text-slate-700 uppercase tracking-wide">
                      {sec.part}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {sec.lessons.map((lesson, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-center gap-2.5 p-2.5 bg-slate-50/80 hover:bg-blue-50/50 border border-slate-200/50 rounded-xl transition-colors text-xs"
                      >
                        <span className="shrink-0 min-w-6 h-6 px-1 rounded-md bg-blue-100/70 text-primary font-black flex items-center justify-center text-[10px]">
                          {lesson.no}
                        </span>
                        <span className="text-slate-800 font-medium leading-snug flex-1">{lesson.title}</span>
                        {lesson.tag && (
                          <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-md border border-amber-200/60">
                            {lesson.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PhaseCard({ phase, idx }: { phase: Phase; idx: number }) {
  const [isOpen, setIsOpen] = useState(idx === 0); // Open the first stage by default to keep clean view

  return (
    <div className="relative pl-14 md:pl-16 pb-12 last:pb-4 text-left">
      
      {/* Timeline Circle Marker — Animates border and scale on scroll */}
      <motion.div
        initial={{ scale: 0.85, borderColor: "#cbd5e1" }}
        whileInView={{ scale: 1, borderColor: "#1E40AF" }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.45 }}
        className="absolute left-0 top-2 w-10 h-10 bg-white border-4 rounded-full flex items-center justify-center shadow-sm z-10"
      >
        <span className="text-primary font-black text-sm">{idx + 1}</span>
      </motion.div>

      {/* Main Card Container */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow transition-shadow duration-300 relative">
        
        {/* Phase Meta Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-block px-4 py-1 bg-blue-50 border border-blue-200 text-primary font-bold text-xs rounded-full uppercase tracking-wider">
            GIAI ĐOẠN {idx + 1} · {phase.day}
          </div>
          {phase.resultMilestone && (
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 uppercase">
              <Trophy className="w-3.5 h-3.5" />
              <span>{phase.resultMilestone}</span>
            </div>
          )}
        </div>

        {/* Phase Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">{phase.title}</h3>

        {/* Phase Objective Box */}
        <div className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/50">
          <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="leading-snug text-xs sm:text-sm">
            <span className="text-slate-800 font-bold">Mục tiêu cốt lõi: </span>
            <span className="text-slate-650 font-medium">{phase.objective}</span>
          </p>
        </div>

        {/* Dynamic Accordion Trigger Button */}
        <div className="mt-5 pt-1 flex justify-start">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-primary hover:bg-blue-100/70 border border-blue-100 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>{isOpen ? "Thu gọn chi tiết lộ trình" : "Xem chi tiết lộ trình học & kết quả"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Expandable detailed content wrapper (Framer Motion height animation) */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-6">
                
                {/* 2-Column Grid inside open card to structure the details */}
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Column 1: Curriculum Group (Bài học & Thực hành) */}
                  <div className="space-y-5 text-left">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                      <span className="w-1.5 h-3.5 bg-primary rounded-full" />
                      <span className="text-xs font-black text-slate-500 uppercase tracking-wider">BÀI HỌC & THỰC HÀNH</span>
                    </div>

                    {phase.groups.map((group, gIdx) => (
                      <div key={gIdx} className="space-y-3">
                        {group.heading && (
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                            {group.heading}
                          </h5>
                        )}
                        <ul className="list-none space-y-2.5">
                          {group.items.map((item, iIdx) => (
                            <li key={iIdx} className="space-y-1">
                              <div className="flex gap-2.5 text-slate-650 text-xs sm:text-sm">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-slate-650 leading-relaxed">{renderRich(item.text)}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Additional bullets */}
                    {phase.details && phase.details.length > 0 && (
                      <div className="pt-2">
                        <ul className="list-none space-y-2">
                          {phase.details.map((d, dIdx) => (
                            <li key={dIdx} className="flex gap-2 text-slate-500 text-xs leading-relaxed">
                              <span className="text-primary shrink-0 mt-0.5">▪</span>
                              <span>{renderRich(d.text)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Column 2: Question types & Expected Outcomes */}
                  <div className="space-y-6 text-left">
                    
                    {/* Question types focused in Pearson AI */}
                    {phase.skillGrid && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                          <span className="w-1.5 h-3.5 bg-primary rounded-full" />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-wider">PHẦN THI TRỌNG TÂM (PEARSON AI)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {phase.skillGrid.categories.map((cat, cIdx) => (
                            <div key={cIdx} className="bg-slate-50 border border-slate-200/50 rounded-xl p-3">
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">{cat.name}</span>
                              <div className="flex flex-wrap gap-1">
                                {cat.types.map((t, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className={`inline-block px-2 py-0.5 rounded-md text-[9px] font-bold ${
                                      t.hot
                                        ? "bg-amber-50 border border-amber-200 text-amber-800"
                                        : "bg-white border border-slate-200 text-slate-500"
                                    }`}
                                  >
                                    {t.label} {t.hot && "🔥"}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Outcomes Block */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <div className="flex items-center gap-2 mb-3.5 border-b border-slate-200/50 pb-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <div className="font-bold text-xs text-primary uppercase tracking-wider">
                          KẾT QUẢ ĐẠT ĐƯỢC SAU GIAI ĐOẠN {idx + 1}
                        </div>
                      </div>
                      <ul className="list-none space-y-2.5">
                        {phase.results.map((r, rIdx) => (
                          <li key={rIdx} className="flex gap-2.5 text-slate-650 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

                {/* Pronunciation Module Viewer for Phase 1 */}
                {phase.pronunciationModules && phase.pronunciationModules.length > 0 && (
                  <PronunciationModuleViewer modules={phase.pronunciationModules} />
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default function Roadmap() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll timeline progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  // Map progress to scaleY drawing transition
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="roadmap" className="py-24 bg-slate-50 relative border-t border-slate-100">
      
      {/* Editorial background hairline guides */}
      <div className="absolute inset-y-0 left-[8%] border-l border-slate-200/25 pointer-events-none z-0" />
      <div className="absolute inset-y-0 right-[8%] border-r border-slate-200/25 pointer-events-none z-0" />

      <div className="max-w-[1360px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 bg-blue-50 border border-blue-200 text-primary font-bold text-xs tracking-wider rounded-full mb-5 uppercase">
            Chương trình đào tạo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900">
            Lộ Trình 30 Ngày Đồng Hành
          </h2>
          <p className="text-base sm:text-lg text-slate-650">
            Học tập tinh gọn, loại bỏ rườm rà. Bạn sẽ luôn biết rõ mỗi ngày cần học gì, luyện đề mục nào để hướng thẳng tới mục tiêu điểm của mình.
          </p>
        </div>

        {/* Study medium formats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-slate-200" />
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              PHƯƠNG PHÁP ĐÀO TẠO HYBRID
            </span>
            <span className="h-px w-8 bg-slate-200" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Video className="w-5 h-5" />,
                title: "Bài giảng video lý thuyết",
                desc: "Học cốt lõi chiến thuật, chủ động xem lại không giới hạn thời gian.",
              },
              {
                icon: <RotateCcw className="w-5 h-5" />,
                title: "Thực hành đề tủ Web",
                desc: "Luyện giải chi tiết kho đề tủ PTE trúng tỷ lệ cực cao.",
              },
              {
                icon: <PenLine className="w-5 h-5" />,
                title: "Chữa bài 1-1 hàng ngày",
                desc: "Ghi âm, nộp bài viết để được cô Thuỷ trực tiếp sửa phát âm, lỗi sai.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-2 bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-primary mb-1 border border-blue-100">
                  {item.icon}
                </span>
                <span className="text-slate-800 font-extrabold text-sm">{item.title}</span>
                <span className="text-slate-500 text-xs leading-snug">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Timeline block with scroll progress line (Prep.vn/Antigravity style) */}
        <div className="max-w-4xl mx-auto relative md:space-y-12 px-4" ref={timelineRef}>
          
          {/* Background Grey Track Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-200/70 rounded-full" />
          
          {/* Active Animated Primary Blue Scroll Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-primary rounded-full origin-top"
          />

          {(roadmapPhases as Phase[]).map((phase, idx) => (
            <PhaseCard key={idx} phase={phase} idx={idx} />
          ))}
        </div>

        {/* Final outcome banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary via-primary/95 to-blue-900 text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 text-left">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white font-bold text-xs tracking-wider rounded-full mb-3.5 uppercase">
                  <Trophy className="w-4 h-4 text-amber-300" /> KẾT QUẢ ĐẠT ĐƯỢC
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Thành Quả Toàn Diện Sau 30 Ngày
                </h3>
              </div>
              <ul className="list-none grid md:grid-cols-2 gap-4">
                {finalResults.map((r: string, rIdx: number) => (
                  <li
                    key={rIdx}
                    className="flex gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <span className="text-white text-xs sm:text-sm font-semibold">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
