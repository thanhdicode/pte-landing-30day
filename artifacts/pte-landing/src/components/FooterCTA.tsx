import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FooterCTA() {
  return (
    <section id="enroll" className="py-32 relative overflow-hidden bg-primary text-white text-center cyber-grid-bg">
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-white/50 pointer-events-none" style={{boxShadow: '0 0 20px hsl(0 0% 100% / 0.3)' }} />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-secondary/50 pointer-events-none" style={{boxShadow: '0 0 20px hsl(42 100% 60% / 0.3)' }} />

      {/* Abstract background graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[150%] bg-white/10 rounded-full blur-3xl transform -rotate-45" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[150%] bg-secondary/20 rounded-full blur-3xl transform rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-sm mb-8">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span>Khai giảng hàng tuần — Số lượng giới hạn</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight font-heading">
            Sẵn sàng bứt phá<br />
            <span className="text-secondary">PTE trong 30 ngày?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Đừng để tiếng Anh là rào cản ngăn bạn đến với ước mơ. Cô Thuỷ đã sẵn sàng đồng hành cùng bạn.
          </p>

          <a 
            href="https://ptetalents.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-full font-extrabold text-xl shadow-2xl hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all duration-300 group"
          >
            <span className="glitch-text" data-text="Đăng ký qua PTE Talents">Đăng ký qua PTE Talents</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          
          <p className="mt-8 text-white/60 text-sm">
            Bấm vào nút trên để chuyển đến trang đăng ký chính thức của PTE Talents.
          </p>
        </motion.div>
      </div>
    </section>
  );
}