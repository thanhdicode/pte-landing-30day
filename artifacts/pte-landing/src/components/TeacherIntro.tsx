import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Heart, Quote } from "lucide-react";
import pteLogo from '@assets/pte-logo.png';

export default function TeacherIntro() {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      value: "Đại học Hà Nội",
      label: "Cử nhân Tiếng Anh"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      value: "10 Năm",
      label: "Kinh nghiệm giảng dạy"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      value: "5 Năm",
      label: "Chuyên luyện thi PTE"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      value: "Tận tâm",
      label: "Đồng hành sát sao"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden cyber-scanlines">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-primary/40 pointer-events-none"
        style={{ boxShadow: '0 0 16px hsl(330 100% 65% / 0.2)' }} />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-cyan-400/40 pointer-events-none"
        style={{ boxShadow: '0 0 16px hsl(180 100% 60% / 0.2)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column — credential card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Decorative background shapes */}
            <div className="absolute top-8 -left-8 w-full h-full bg-primary/5 rounded-[2rem] -z-10 border border-primary/10" />
            <div className="absolute -bottom-8 right-8 w-full h-full border border-cyan-400/20 rounded-[2rem] -z-10" />

            <div className="relative w-full max-w-sm bg-slate-900/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-2xl border border-primary/20 cyber-corner neon-border">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={pteLogo}
                  alt="PTE Talents"
                  className="w-24 h-24 object-contain drop-shadow-md"
                  style={{ filter: 'drop-shadow(0 0 12px hsl(330 100% 65% / 0.5))' }}
                />
              </div>

              {/* Name & title */}
              <div className="text-center mb-8">
                <h3
                  className="text-2xl font-extrabold text-white"
                  style={{ textShadow: '0 0 20px hsl(330 100% 65% / 0.4)' }}
                >
                  Nguyễn Thị Thuỷ
                </h3>
                <p className="text-primary font-semibold text-sm mt-1">Giáo viên & Chuyên gia PTE Talents</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-xs font-medium">Đại học Hà Nội (ĐH Ngoại ngữ)</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: "10+", label: "Năm giảng dạy" },
                  { value: "5+", label: "Năm chuyên PTE" },
                  { value: "500+", label: "Học viên" },
                  { value: "4 kỹ năng", label: "PTE toàn diện" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/60 rounded-xl p-3 text-center border border-primary/15 hover:border-primary/40 transition-all"
                  >
                    <div
                      className="text-xl font-extrabold text-primary"
                      style={{ textShadow: '0 0 10px hsl(330 100% 65% / 0.6)' }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/15">
                <Quote className="w-5 h-5 text-primary/60 mb-2" />
                <p className="text-sm text-slate-300 font-medium italic leading-relaxed">
                  "Hiểu đúng là chìa khoá để chinh phục điểm PTE thật nhanh."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column — text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
              <Heart className="w-4 h-4 fill-primary" />
              <span>Người đồng hành cùng bạn</span>
            </div>

            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-6 text-white"
              style={{ textShadow: '0 0 30px hsl(330 100% 65% / 0.3)' }}
            >
              Gặp gỡ <span className="text-primary">Cô Nguyễn Thị Thuỷ</span>
            </h2>

            <div className="prose prose-lg text-slate-400 mb-10">
              <p>
                Với hơn 10 năm kinh nghiệm giảng dạy tiếng Anh và 5 năm chuyên sâu nghiên cứu về PTE,
                cô Thuỷ hiểu rõ những khó khăn mà học viên Việt Nam thường gặp phải — từ việc phát âm sai,
                thiếu phản xạ, đến việc "mất gốc" tiếng Anh nhưng lại cần điểm gấp cho mục tiêu du học và định cư.
              </p>
              <p>
                Không chỉ là một giáo viên, cô Thuỷ là <strong className="text-slate-200">người đồng hành</strong> — hướng dẫn bạn từng bước,
                chỉ ra những lỗi sai nhỏ nhất, và giúp bạn lấy lại sự tự tin. Khóa học này không chỉ truyền đạt kiến thức,
                mà còn truyền cảm hứng để bạn yêu tiếng Anh hơn.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-900/60 border border-primary/15 transition-all hover:border-primary/40 hover:neon-border"
                >
                  <div className="shrink-0 w-12 h-12 bg-slate-800 border border-primary/20 rounded-xl flex items-center justify-center"
                    style={{ boxShadow: '0 0 10px hsl(330 100% 65% / 0.15)' }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
