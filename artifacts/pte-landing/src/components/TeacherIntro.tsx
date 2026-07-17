import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, GraduationCap, Trophy, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { teacherProfile } from "../data/course-content";

// Import teacher photos for the profile slideshow
import imgFormal from "@assets/teacher-formal-nobg.png";
import imgCyber from "@assets/teacher-hero-cyber.png";
import imgWelcome from "@assets/teacher-welcome-formal-nobg.png";
import imgNobg from "@assets/teacher-nobg.png";

const introSlides = [
  { src: imgFormal, label: "Hồ sơ Học thuật chuyên nghiệp" },
  { src: imgCyber, label: "Chuyên gia luyện thi PTE" },
  { src: imgWelcome, label: "Đồng hành sửa lỗi 1-1 hàng ngày" },
  { src: imgNobg, label: "Giúp 500+ học viên đạt mục tiêu" },
];

export default function TeacherIntro() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto transition slideshow images every 6s
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % introSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % introSlides.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + introSlides.length) % introSlides.length);
  };

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      
      {/* Editorial background hairline guides */}
      <div className="absolute inset-y-0 left-[8%] border-l border-slate-200/25 pointer-events-none z-0" />
      <div className="absolute inset-y-0 right-[8%] border-r border-slate-200/25 pointer-events-none z-0" />

      <div className="max-w-[1360px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: Profile Slideshow & Stats Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background design accents */}
            <div className="absolute top-6 -left-6 w-full h-full max-w-sm rounded-[2rem] bg-slate-50 border border-slate-200/40 -z-10" />
            <div className="absolute -bottom-6 right-6 w-full h-full max-w-sm rounded-[2rem] border border-slate-200/40 -z-10" />

            <div className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-md border border-slate-250 overflow-hidden group">
              
              {/* Slideshow image container */}
              <div className="relative w-full bg-slate-50 overflow-hidden pt-6 flex items-end justify-center" style={{ height: "320px" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slideIndex}
                    src={introSlides[slideIndex].src}
                    alt="Cô Nguyễn Thị Thuỷ"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 h-[92%] w-auto object-contain object-bottom"
                  />
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                
                {/* Custom Arrows on Hover */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 bottom-4 w-7 h-7 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 bottom-4 w-7 h-7 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Progress Indicators */}
                <div className="absolute top-4 right-4 flex gap-1 bg-slate-950/10 px-2 py-1 rounded-full">
                  {introSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSlideIndex(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                        slideIndex === idx ? "bg-primary w-2.5" : "bg-slate-350 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                {/* Dynamic label inside picture */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-xs border border-slate-200/50 rounded-lg px-2.5 py-1 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  {introSlides[slideIndex].label}
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6 flex flex-col gap-5 text-left bg-white">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    Cô Nguyễn Thị Thuỷ
                  </h3>
                  <p className="text-xs font-bold text-primary tracking-wide uppercase mt-1">{teacherProfile.title}</p>
                </div>

                {/* Score highlight badge */}
                <div className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 bg-amber-50 border border-amber-200/50">
                  <span className="text-xs font-bold tracking-wider text-amber-800 uppercase flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-600" />
                    {teacherProfile.speakingTitle}
                  </span>
                  <span className="text-2xl font-black text-amber-700">{teacherProfile.speakingScore}</span>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  {teacherProfile.stats.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 py-3 px-1 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-slate-800 font-extrabold text-sm">{item.value}</span>
                      <span className="text-[8px] uppercase tracking-wider text-center text-slate-400 font-black">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Education list */}
                <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
                  {teacherProfile.education.map((edu, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-650 font-semibold leading-relaxed">
                      <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{edu.school} ({edu.detail})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Widescreen Prominent Biography ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-left"
          >
            {/* Biography Header */}
            <div>
              <span className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">HỒ SƠ GIẢNG VIÊN ĐỒNG HÀNH</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 leading-none tracking-tight">
                Cô Nguyễn Thị Thuỷ
              </h2>
              <div className="mt-4 h-1 rounded-full w-20 bg-primary" />
            </div>

            {/* Academic Credential Summary Box */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 mt-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-150 shadow-sm text-primary shrink-0">
                <Award className="w-5 h-5" />
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                Đạt điểm số tuyệt đối <span className="text-amber-600 font-bold">90/90 Speaking</span> chuẩn Pearson PTE — kiểm chứng năng lực phát âm thực tế vượt bậc.
              </p>
            </div>

            {/* Teaching philosophy bullet points (Sized up for readability) */}
            <div className="flex flex-col gap-5 mt-2">
              {teacherProfile.bullets.map((bullet, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-1 border ${
                    bullet.tone === "secondary"
                      ? "bg-amber-50 border-amber-200 text-amber-700"
                      : "bg-blue-50 border-blue-200 text-primary"
                  }`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Premium, elegant quotation box */}
            <div className="mt-4 p-6 rounded-3xl bg-slate-50 border border-slate-200/60 shadow-sm relative">
              <span className="text-6xl text-primary/10 font-serif absolute top-2 left-4 select-none">“</span>
              <p className="text-slate-800 italic font-bold text-base sm:text-lg relative z-10 pl-6 leading-relaxed">
                {teacherProfile.quote}
              </p>
              <p className="text-right text-xs font-black text-slate-400 mt-3 uppercase tracking-wider">— GIẢNG VIÊN NGUYỄN THỊ THUỶ</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
