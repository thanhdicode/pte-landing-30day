import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Heart, Quote } from "lucide-react";
import teacherNoBg from '@assets/teacher-nobg.png';

export default function TeacherIntro() {
  const stats = [
    { icon: <GraduationCap className="w-6 h-6 text-primary" />, value: "Đại Học Hà Nội", label: "Chuyên ngành Ngôn Ngữ Anh" },
    { icon: <BookOpen className="w-6 h-6 text-primary" />, value: "10 Năm", label: "Kinh nghiệm giảng dạy" },
    { icon: <Award className="w-6 h-6 text-primary" />, value: "4 Năm", label: "Chuyên luyện thi PTE" },
    { icon: <Heart className="w-6 h-6 text-primary" />, value: "Tận tâm", label: "Đồng hành sát sao" },
  ];

  return (
    <section id="about" className="py-24 bg-[#120A2E] relative overflow-hidden cyber-scanlines">
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-primary/40 pointer-events-none"
        style={{ boxShadow: "0 0 16px hsl(330 100% 65% / 0.2)" }} />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-cyan-400/40 pointer-events-none"
        style={{ boxShadow: "0 0 16px hsl(180 100% 60% / 0.2)" }} />

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
            <div className="absolute top-8 -left-8 w-full h-full bg-primary/5 rounded-[2rem] -z-10 border border-primary/10" />
            <div className="absolute -bottom-8 right-8 w-full h-full border border-cyan-400/20 rounded-[2rem] -z-10" />

            <div className="relative w-full max-w-sm bg-slate-900/80 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-primary/20 cyber-corner neon-border overflow-hidden">
              {/* Teacher portrait — full-width top */}
              <div className="relative w-full overflow-hidden" style={{ height: "280px" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-primary/30 blur-3xl pointer-events-none" />
                <img
                  src={teacherNoBg}
                  alt="Cô Nguyễn Thị Thuỷ"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom"
                  style={{ filter: "drop-shadow(0 0 24px hsl(330 100% 65% / 0.5))" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
              </div>

              {/* Info below photo */}
              <div className="px-8 pb-8">
                <div className="text-center mb-6 -mt-1">
                  <h3 className="text-2xl font-extrabold text-white"
                    style={{ textShadow: "0 0 20px hsl(330 100% 65% / 0.4)" }}>
                    Nguyễn Thị Thuỷ
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">Giáo viên & Chuyên gia PTE Talents</p>
                  <div className="mt-2 flex flex-col items-center gap-1.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-primary text-xs font-medium whitespace-nowrap">Đại Học Hà Nội</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-400/10 border border-cyan-400/25 rounded-full">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                      <span className="text-cyan-200 text-xs font-medium whitespace-nowrap">Chuyên ngành Ngôn Ngữ Anh</span>
                    </div>
                    <p className="text-[11px] text-slate-400 italic mt-0.5">(Tiền Thân Đại Học Ngoại Ngữ Hà Nội)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { value: "10+", label: "Năm giảng dạy" },
                    { value: "4+", label: "Năm chuyên PTE" },
                    { value: "500+", label: "Học viên" },
                    { value: "4 kỹ năng", label: "PTE toàn diện" },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-800/60 rounded-xl p-3 text-center border border-primary/15 hover:border-primary/40 transition-all">
                      <div className="text-xl font-extrabold text-primary"
                        style={{ textShadow: "0 0 10px hsl(330 100% 65% / 0.6)" }}>
                        {item.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-2xl p-4 border border-primary/15">
                  <Quote className="w-5 h-5 text-primary/60 mb-2" />
                  <p className="text-sm text-slate-300 font-medium italic leading-relaxed">
                    "Hiểu đúng là chìa khoá để chinh phục điểm PTE thật nhanh."
                  </p>
                </div>
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
                <motion.div className="h-[1px] w-8 rounded-full bg-primary"
                  style={{ boxShadow: "0 0 6px hsl(330 100% 65%)" }}
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-[11px] font-mono tracking-[0.25em] text-primary uppercase">Giáo viên &amp; Chuyên gia PTE</span>
                <motion.div className="h-[1px] flex-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, hsl(330 100% 65% / 0.4), transparent)" }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} />
              </div>

              {/* "CÔ" label */}
              <div className="flex items-baseline gap-3 mb-1">
                <span
                  className="font-mono font-black tracking-[0.3em] text-slate-500 text-sm select-none"
                  style={{ letterSpacing: "0.3em" }}
                >
                  CÔ
                </span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>

              {/* Main name */}
              <h2 className="font-heading font-black leading-[0.95] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className="block text-5xl lg:text-6xl text-white tracking-tight"
                  style={{ textShadow: "0 0 40px hsl(330 100% 65% / 0.2)" }}>
                  NGUYỄN
                </span>
                <motion.span
                  className="block text-6xl lg:text-7xl tracking-tight"
                  style={{
                    background: "linear-gradient(100deg, hsl(330 100% 68%), hsl(300 100% 72%), hsl(330 100% 60%))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 24px hsl(330 100% 65% / 0.5))",
                  }}
                  animate={{ backgroundPosition: ["0% center", "200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  THUỶ
                </motion.span>
              </h2>

              {/* Bottom rule */}
              <div className="mt-4 h-[2px] rounded-full w-3/4"
                style={{ background: "linear-gradient(90deg, hsl(330 100% 65%), hsl(180 100% 60%), transparent)", boxShadow: "0 0 8px hsl(330 100% 65% / 0.4)" }} />
            </div>

            {/* ── Paragraphs ── */}
            <div className="space-y-6 mb-10">
              {[
                {
                  text: (
                    <>
                      Với hơn <mark className="bg-transparent font-bold text-white not-italic">10 năm giảng dạy tiếng Anh</mark> và hơn{" "}
                      <mark className="bg-transparent font-bold text-white not-italic">4 năm nghiên cứu chuyên sâu về PTE</mark>, cô Thuỷ nhận ra rằng
                      nhiều học viên chưa đạt mục tiêu không phải vì thiếu cố gắng, mà vì chưa có{" "}
                      <span style={{ color: "hsl(330 100% 70%)", fontWeight: 600 }}>lộ trình học đúng</span> và{" "}
                      <span style={{ color: "hsl(330 100% 70%)", fontWeight: 600 }}>phương pháp luyện tập hiệu quả</span>.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Từ trải nghiệm đồng hành cùng học viên ở nhiều trình độ, cô xây dựng hệ thống học{" "}
                      <mark className="bg-transparent font-bold text-white not-italic">PTE Talents</mark> nhằm giúp người học đi từ mất gốc đến tự học được
                      thông qua lộ trình rõ ràng, video bài giảng, website luyện tập, bộ đề trọng điểm và quá trình{" "}
                      <span style={{ color: "hsl(330 100% 70%)", fontWeight: 600 }}>chữa bài chi tiết</span>.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Khóa học không chỉ hướng đến điểm số PTE mong muốn, mà còn trang bị cho học viên{" "}
                      <mark className="bg-transparent font-bold text-white not-italic">phương pháp học bền vững</mark>: hiểu cách Pearson chấm điểm, biết học
                      đúng trọng tâm, tự luyện với PTE Talents và APEUni, tự nhận diện lỗi sai, tự cải thiện điểm số
                      và tiếp tục nâng cao tiếng Anh sau khóa học.
                    </>
                  ),
                },
              ].map(({ text }, i) => {
                const color = "hsl(330 100% 65%)";
                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-4"
                >
                  {/* Marker + vertical line */}
                  <div className="flex flex-col items-center shrink-0 pt-0.5">
                    <span className="text-sm leading-none"
                      style={{ color, textShadow: `0 0 10px ${color}` }}>
                      ◆
                    </span>
                    {i < 2 && (
                      <motion.div className="w-px flex-1 mt-1 rounded-full"
                        style={{ background: `linear-gradient(180deg, ${color}50, transparent)` }}
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <p className="text-slate-400 leading-[1.85] text-lg"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {text}
                  </p>
                </motion.div>
                );
              })}
            </div>

            {/* ── Stats grid ── */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex gap-3 p-4 rounded-2xl bg-slate-900/60 border border-primary/10 transition-all hover:border-primary/35 group"
                >
                  <div className="shrink-0 w-10 h-10 bg-slate-800/80 border border-primary/15 rounded-xl flex items-center justify-center group-hover:border-primary/40 transition-all"
                    style={{ boxShadow: "0 0 10px hsl(330 100% 65% / 0.1)" }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-base leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{stat.value}</div>
                    <div className="text-sm text-slate-500 mt-0.5 leading-tight">{stat.label}</div>
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
