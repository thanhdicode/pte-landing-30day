import { ArrowRight, MessageCircle, Star, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks, pricing } from "../data/course-content";

// Import teacher photos for the slideshow
import teacher1 from "@assets/teacher-hero-cyber.png";
import teacher2 from "@assets/teacher-formal-nobg.png";
import teacher3 from "@assets/teacher-welcome-formal-nobg.png";
import teacher4 from "@assets/teacher-welcome-cyber-nobg.png";
import teacher5 from "@assets/teacher-nobg.png";
import teacher6 from "@assets/teacher-clean-crop.png";

const teacherImages = [
  { src: teacher1, alt: "Cô Nguyễn Thị Thuỷ — Sáng lập PTE Talents", label: "Sáng lập PTE Talents" },
  { src: teacher2, alt: "Cô Nguyễn Thị Thuỷ — Giảng viên chuyên môn", label: "Chuyên gia PTE" },
  { src: teacher3, alt: "Cô Nguyễn Thị Thuỷ — Speaking 90/90", label: "Speaking 90/90" },
  { src: teacher4, alt: "Cô Nguyễn Thị Thuỷ — Đồng hành 1-1", label: "Đồng hành 1-1 hàng ngày" },
  { src: teacher5, alt: "Cô Nguyễn Thị Thuỷ — Lớp học Zalo sửa bài", label: "Lớp học Zalo thực chiến" },
  { src: teacher6, alt: "Cô Nguyễn Thị Thuỷ — Cam kết lộ trình", label: "Cam kết tiến bộ 30 ngày" },
];

const targetDetails: Record<string, { ielts: string; purpose: string; highlight: string }> = {
  "24+": { ielts: "4.0 - 4.5", purpose: "Phù hợp cho Visa Lao động kết hợp (Úc 462), định cư diện lao động tay nghề thấp.", highlight: "Cần xây nền phát âm cơ bản & phản xạ nghe nói cốt lõi." },
  "50+": { ielts: "6.0", purpose: "Đủ điều kiện xét tốt nghiệp Đại học, nộp hồ sơ du học nghề, Visa tốt nghiệp 485.", highlight: "Học sâu 3 dạng bài trọng tâm để tối ưu điểm số nhanh nhất." },
  "65+": { ielts: "7.0", purpose: "Yêu cầu cho học Thạc sĩ nước ngoài, cộng 10 điểm hồ sơ định cư Úc/New Zealand.", highlight: "Luyện đề tủ chuyên sâu + tối ưu hóa thời gian làm bài." },
  "79+": { ielts: "8.0", purpose: "Cộng tối đa 20 điểm hồ sơ định cư, xin học bổng toàn phần tại Úc/Anh/Mỹ.", highlight: "Khắc phục triệt để lỗi phát âm & tối ưu điểm chéo từ AI." },
};

export default function Hero() {
  const [activeTarget, setActiveTarget] = useState<string>("50+");
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto transition images every 5s
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % teacherImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % teacherImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + teacherImages.length) % teacherImages.length);
  };

  return (
    <section className="relative min-h-[94dvh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-slate-50/40 to-white">
      
      {/* ══ Background Editorial Hairlines (Prevents plain sides) ══ */}
      <div className="absolute inset-y-0 left-[8%] border-l border-slate-200/25 pointer-events-none z-0" />
      <div className="absolute inset-y-0 right-[8%] border-r border-slate-200/25 pointer-events-none z-0" />
      <div className="absolute inset-y-0 left-[50%] border-l border-slate-200/10 pointer-events-none z-0 hidden lg:block" />

      {/* Floating typography markers on the sides */}
      <div className="absolute left-[2.5%] top-[35%] -rotate-90 origin-left text-[9px] tracking-[0.3em] font-mono text-slate-350 uppercase select-none pointer-events-none hidden xl:block">
        PTE 30-DAY INTENSIVE TRAINING
      </div>
      <div className="absolute right-[2.5%] bottom-[35%] rotate-90 origin-right text-[9px] tracking-[0.3em] font-mono text-slate-350 uppercase select-none pointer-events-none hidden xl:block">
        PEARSON CURRICULUM ALIGNED
      </div>

      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none bg-blue-100/25 z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none bg-amber-100/15 z-0" />

      {/* Main container — widened to max-w-[1360px] to occupy more screen real estate */}
      <div className="max-w-[1360px] mx-auto px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

          {/* ══ LEFT — Content Block ══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            {/* Title block */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                {navLinks[0].label === "Về Cô Thuỷ" ? "KHOÁ ĐỒNG HÀNH 30 NGÀY" : "PTE TALENTS"}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
                30 Ngày Chinh Phục <br className="hidden sm:inline" />
                Mục Tiêu <span className="text-gradient">PTE</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-650 max-w-xl">
              Lộ trình đồng hành cá nhân hóa giúp bạn lấy lại nền tảng phát âm chuẩn xác, làm chủ Pearson AI để đạt điểm số mong muốn trong thời gian ngắn nhất.
            </p>

            {/* Interactive Target Selector (Prep.vn Style) */}
            <div className="w-full max-w-xl bg-white border border-slate-200/80 rounded-2xl p-5 text-left shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                CHỌN TARGET ĐỂ XEM LỘ TRÌNH PHÙ HỢP:
              </span>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {Object.keys(targetDetails).map((target) => {
                  const isActive = activeTarget === target;
                  return (
                    <button
                      key={target}
                      type="button"
                      onClick={() => setActiveTarget(target)}
                      className={`py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer relative ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/50"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeHeroPill"
                          className="absolute inset-0 bg-primary rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      PTE {target}
                    </button>
                  );
                })}
              </div>

              {/* Target info container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTarget}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-2"
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-xs font-bold text-slate-700">Tương đương:</span>
                    <span className="text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      IELTS {targetDetails[activeTarget].ielts}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {targetDetails[activeTarget].purpose}
                  </p>
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-100 mt-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{targetDetails[activeTarget].highlight}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-4 w-full sm:w-auto items-center lg:items-start">
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-x-6 gap-y-4 w-full sm:w-auto">
                <a
                  href="#enroll"
                  className="btn-primary gap-2.5 px-8 py-4 text-base w-full sm:w-auto hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Nhận tư vấn lộ trình</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex flex-col text-xs text-slate-500 text-left">
                  <span>
                    Ưu đãi tháng này: <span className="font-bold text-slate-800 text-sm">{pricing.currentPrice}</span> (Giá gốc: <span className="line-through">{pricing.originalPrice}</span>)
                  </span>
                  <span>
                    Tiết kiệm ngay <span className="text-emerald-600 font-semibold">{pricing.savings}</span>
                  </span>
                </div>
              </div>

              {/* Gift bonus */}
              <div className="flex items-start gap-2 max-w-xl text-slate-600 text-xs text-left bg-amber-50 border border-amber-200/60 rounded-xl p-3 mt-1">
                <span className="text-amber-500 font-bold shrink-0">🎁 Quà tặng:</span>
                <span>{pricing.giftDesc}</span>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500 w-full max-w-xl">
              <span className="flex items-center gap-1">
                <span className="font-bold text-slate-800">500+</span> học viên ôn luyện
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800">4.9</span> đánh giá chất lượng
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Hỗ trợ chuyên môn 1-1 qua Zalo
              </span>
            </div>
          </motion.div>

          {/* ══ RIGHT — Teacher Slideshow Card (Transitions every 4-6s) ══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative w-full max-w-[370px] mx-auto lg:mx-0 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Shadow decorative layers */}
            <div className="absolute top-4 -left-4 w-full h-full rounded-[2rem] bg-slate-100/90 -z-10" />
            <div className="absolute -bottom-4 right-4 w-full h-full rounded-[2rem] border border-slate-200/60 -z-10" />

            {/* Main Image Slider Frame */}
            <div className="relative w-full h-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden bg-slate-100 shadow-md border border-slate-250 flex items-end group">
              
              {/* Slideshow image container */}
              <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImgIndex}
                    src={teacherImages[currentImgIndex].src}
                    alt={teacherImages[currentImgIndex].alt}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Arrows (Visible on hover) */}
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Glassmorphic Active Tag (Credential info display) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/85 backdrop-blur-md border border-slate-200/60 rounded-xl px-3 py-2 flex items-center justify-between shadow-sm">
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">GIẢNG VIÊN ĐỒNG HÀNH</span>
                  <span className="text-xs font-black text-slate-800 mt-0.5">Cô Nguyễn Thị Thuỷ</span>
                </div>
                <span className="text-[10px] font-bold text-primary bg-blue-50 border border-blue-100/50 px-2.5 py-1 rounded-lg">
                  {teacherImages[currentImgIndex].label}
                </span>
              </div>

              {/* Slide Progress Dots */}
              <div className="absolute top-4 right-4 flex gap-1 bg-slate-950/20 backdrop-blur-xs px-2 py-1.5 rounded-full">
                {teacherImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                      currentImgIndex === idx ? "bg-white w-3" : "bg-white/55 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
