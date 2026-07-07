import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, Shield, Star } from "lucide-react";

const urgencyItems = [
  { icon: <Clock className="w-4 h-4" />, text: "Khai giảng hàng tuần" },
  { icon: <Shield className="w-4 h-4" />, text: "Cam kết đầu ra" },
  { icon: <Star className="w-4 h-4" />, text: "Hơn 500+ học viên" },
];

export default function FooterCTA() {
  return (
    <section id="enroll" className="py-32 relative overflow-hidden bg-slate-950 text-white text-center cyber-scanlines">

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-50 pointer-events-none" />

      {/* Neon blobs */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "hsl(330 100% 65% / 0.18)", filter: "blur(90px)" }} />
      <div className="absolute bottom-[-10%] left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "hsl(180 100% 60% / 0.12)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-10%] right-[5%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "hsl(330 100% 65% / 0.12)", filter: "blur(70px)" }} />

      {/* Scanline top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(330 100% 65%), hsl(180 100% 60%), hsl(330 100% 65%), transparent)", boxShadow: "0 0 20px hsl(330 100% 65% / 0.8)" }} />

      {/* Corner HUD brackets */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-primary/60 pointer-events-none" style={{ boxShadow: "0 0 12px hsl(330 100% 65% / 0.4)" }} />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" style={{ boxShadow: "0 0 12px hsl(180 100% 60% / 0.4)" }} />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none" style={{ boxShadow: "0 0 12px hsl(180 100% 60% / 0.4)" }} />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-primary/60 pointer-events-none" style={{ boxShadow: "0 0 12px hsl(330 100% 65% / 0.4)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* System tag */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-slate-500 text-xs font-mono tracking-widest">▶ SYSTEM.ENROLL</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ boxShadow: "0 0 8px hsl(330 100% 65%)" }} />
          <span className="text-slate-500 text-xs font-mono tracking-widest">SỐ LƯỢNG GIỚI HẠN</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 mb-10"
          style={{ background: "hsl(330 100% 65% / 0.1)", boxShadow: "0 0 20px hsl(330 100% 65% / 0.2)" }}
        >
          <Zap className="w-4 h-4 text-primary" style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 65%))" }} />
          <span className="text-primary font-semibold text-sm tracking-wide">Khai giảng hàng tuần — Đăng ký ngay hôm nay</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white block" style={{ textShadow: "0 0 40px rgba(255,255,255,0.2)" }}>
              Sẵn sàng
            </span>
            <span
              className="block glitch-text"
              data-text="BỨT PHÁ PTE"
              style={{
                background: "linear-gradient(90deg, hsl(330 100% 65%), hsl(300 100% 70%), hsl(330 100% 65%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "none",
                filter: "drop-shadow(0 0 20px hsl(330 100% 65% / 0.7))",
              }}
            >
              BỨT PHÁ PTE
            </span>
            <span className="text-white block" style={{ textShadow: "0 0 40px rgba(255,255,255,0.2)" }}>
              trong{" "}
              <span style={{
                background: "linear-gradient(90deg, #00FFFF, #7dd3fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 16px hsl(180 100% 60% / 0.8))",
              }}>30 ngày?</span>
            </span>
          </h2>

          {/* Emotional sub-copy */}
          <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Đừng để tiếng Anh là rào cản ngăn bạn đến với ước mơ —
          </p>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "hsl(330 100% 75%)", textShadow: "0 0 20px hsl(330 100% 65% / 0.4)" }}>
            visa, định cư, tốt nghiệp đang chờ bạn phía trước.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://ptetalents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-extrabold text-lg transition-all duration-300 group relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(330 100% 65%), hsl(310 100% 60%))",
              color: "#fff",
              boxShadow: "0 0 40px hsl(330 100% 65% / 0.6), 0 0 80px hsl(330 100% 65% / 0.3)",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px hsl(330 100% 65% / 0.9), 0 0 120px hsl(330 100% 65% / 0.4)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px hsl(330 100% 65% / 0.6), 0 0 80px hsl(330 100% 65% / 0.3)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <Zap className="w-5 h-5" style={{ filter: "drop-shadow(0 0 6px #fff)" }} />
            <span className="glitch-text" data-text="ĐĂNG KÝ NGAY — MIỄN PHÍ TƯ VẤN">
              ĐĂNG KÝ NGAY — MIỄN PHÍ TƯ VẤN
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>

          <a
            href="https://ptetalents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300"
            style={{
              border: "1.5px solid hsl(180 100% 60% / 0.5)",
              color: "hsl(180 100% 70%)",
              background: "hsl(180 100% 60% / 0.06)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(180 100% 60% / 0.9)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px hsl(180 100% 60% / 0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(180 100% 60% / 0.5)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Xem lộ trình chi tiết →
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {urgencyItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-primary" style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 65%))" }}>
                {item.icon}
              </span>
              <span className="text-slate-400 text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-slate-600 text-xs font-mono tracking-wider"
        >
          ▶ Cô Thuỷ đã sẵn sàng đồng hành — bạn chỉ cần bước đầu tiên.
        </motion.p>

      </div>
    </section>
  );
}
