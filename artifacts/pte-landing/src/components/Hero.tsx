import { ArrowRight, Play, CheckCircle2, Star, Target, CalendarDays, Mic, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";
import pteLogo from '@assets/pte-logo.png';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary/5 via-accent/30 to-background">
      <div className="absolute inset-0 cyber-grid-bg -z-10 opacity-60" />
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent -z-10 pointer-events-none"
        initial={{ top: '-2px' }}
        animate={{ top: '110%' }}
        transition={{ duration: 2.5, delay: 0.5, ease: 'linear' }}
      />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/10 text-primary font-medium text-sm">
              <Star className="w-4 h-4 fill-primary" />
              <span>Khóa học được học viên yêu thích nhất</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1]">
              Từ <span className="text-primary relative inline-block">
                mất gốc
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span> <br />
              đến chinh phục<br />
              mục tiêu <span className="glitch-text text-primary" data-text="PTE!">PTE!</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Khóa đồng hành 30 ngày cùng chuyên gia, giúp bạn bứt phá điểm số PTE 24+ | 50+ | 65+ | 79+ một cách nhanh nhất, tiết kiệm thời gian nhất.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
              <a
                href="#enroll"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(255,77,166,0.3)] hover:shadow-[0_8px_30px_rgb(255,77,166,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group neon-border"
              >
                Đăng ký ngay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#roadmap"
                className="w-full sm:w-auto px-8 py-4 bg-white text-foreground border-2 border-muted hover:border-primary/30 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 group"
              >
                <Play className="w-5 h-5 text-primary" />
                Lộ trình 30 ngày
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-border w-full">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-accent flex items-center justify-center text-xs font-bold text-primary">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=ffd1dc`} alt="Student" className="w-full h-full rounded-full" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-xs font-bold text-white">
                  500+
                </div>
              </div>
              <div className="text-sm font-medium">
                <div className="text-foreground">Hơn 500+ học viên</div>
                <div className="text-muted-foreground">đã đạt target thành công!</div>
              </div>
            </div>
          </motion.div>

          {/* Right column — decorative card composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px]">
              {/* Main card */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary via-pink-400 to-secondary p-1 shadow-2xl neon-border">
                <div className="rounded-[2.3rem] bg-white p-10 flex flex-col items-center gap-6">
                  <img src={pteLogo} alt="PTE Talents" className="w-32 h-32 object-contain drop-shadow-md" />

                  <div className="text-center">
                    <h2 className="text-2xl font-extrabold text-foreground leading-tight">
                      Cô Nguyễn Thị Thuỷ
                    </h2>
                    <p className="text-primary font-semibold text-sm mt-1">Chuyên gia PTE Talents</p>
                  </div>

                  <div className="w-full grid grid-cols-3 gap-3">
                    {[
                      { icon: <Award className="w-5 h-5" />, value: "10 năm", label: "Giảng dạy" },
                      { icon: <BookOpen className="w-5 h-5" />, value: "5 năm", label: "PTE" },
                      { icon: <Mic className="w-5 h-5" />, value: "500+", label: "Học viên" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 bg-accent/40 rounded-2xl py-3 px-2">
                        <span className="text-primary">{item.icon}</span>
                        <span className="font-extrabold text-foreground text-sm">{item.value}</span>
                        <span className="text-muted-foreground text-xs">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-full bg-primary/5 border border-primary/15 rounded-2xl px-5 py-4 text-center">
                    <p className="text-primary font-bold text-sm italic">
                      "Hiểu đúng là chìa khoá để chinh phục PTE thật nhanh."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-primary/10"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Target</div>
                  <div className="font-extrabold text-lg text-primary">24+ đến 79+</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-primary/10"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Chỉ sau</div>
                  <div className="font-extrabold text-lg">30 Ngày</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
