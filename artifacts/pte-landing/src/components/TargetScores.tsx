import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const outcomes = [
  "Xây dựng nền tảng phát âm và phản xạ tiếng Anh",
  "Hiểu rõ cách Pearson cho điểm và học đúng trọng tâm",
  "Nắm chắc các dạng bài trọng tâm và chiến lược tăng điểm",
  "Biết tự học, tự luyện và tự chữa bài",
  "Thành thạo website PTE Talents và APEUni",
  "Tự tin chinh phục mục tiêu PTE 24+ | 50+ | 65+ | 79+"
];

const targets = [
  { score: "24+", desc: "Dành cho Visa Work & Holiday, định cư tay nghề thấp" },
  { score: "50+", desc: "Dành cho Đại học, Visa 485, định cư Úc (tương đương IELTS 6.0)" },
  { score: "65+", desc: "Dành cho Thạc sĩ, định cư Úc cộng 10 điểm (tương đương IELTS 7.0)" },
  { score: "79+", desc: "Cộng tối đa 20 điểm định cư Úc (tương đương IELTS 8.0)" }
];

export default function TargetScores() {
  return (
    <section id="results" className="py-24 bg-slate-900 text-white relative overflow-hidden cyber-grid-bg cyber-scanlines">
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/50 pointer-events-none" style={{boxShadow: '0 0 20px hsl(330 100% 65% / 0.3)' }} />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-400/50 pointer-events-none" style={{boxShadow: '0 0 20px hsl(180 100% 60% / 0.3)' }} />

      {/* Background decoration */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold mb-6" style={{ textShadow: '0 0 30px hsl(330 100% 65% / 0.4)' }}>Mục tiêu của bạn là gì?</h2>
            <p className="text-slate-400 text-lg mb-10">
              Dù điểm đích của bạn ở đâu, khóa học đều trang bị chiến lược và lộ trình cá nhân hóa để đưa bạn đến đó nhanh nhất.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targets.map((target, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl transition-all neon-border-cyan cyber-corner relative hover:neon-border hover:bg-slate-800">
                  <div className="text-3xl font-extrabold text-primary font-heading mb-2">
                    <span style={{ textShadow: '0 0 20px hsl(330 100% 65% / 0.8)' }}>PTE {target.score}</span>
                  </div>
                  <p className="text-sm text-slate-300">{target.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative neon-border cyber-corner"
          >
            <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground font-bold py-2 px-6 rounded-full transform rotate-3 shadow-xl" style={{ boxShadow: '0 0 20px hsl(42 100% 60% / 0.5)' }}>
              Thành quả sau 30 ngày
            </div>
            
            <h3 className="text-3xl font-bold mb-8">Bạn sẽ đạt được gì?</h3>
            
            <div className="space-y-5">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" style={{ filter: 'drop-shadow(0 0 6px hsl(330 100% 65% / 0.7))' }} />
                  </div>
                  <span className="font-medium text-lg text-slate-700">{outcome}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}