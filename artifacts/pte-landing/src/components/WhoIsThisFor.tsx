import { motion } from "framer-motion";
import { AlertCircle, Search, Clock, Compass } from "lucide-react";

const personas = [
  {
    icon: <Compass className="w-8 h-8 text-white" />,
    title: "Người mất gốc tiếng Anh",
    desc: "Bỏ tiếng Anh đã lâu, phát âm sai, không có phản xạ nghe nói. Bạn sợ giao tiếp nhưng bắt buộc phải có chứng chỉ PTE.",
    color: "bg-blue-500"
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Cần điểm PTE gấp",
    desc: "Sắp hết hạn nộp hồ sơ visa, định cư hoặc tốt nghiệp. Cần phương pháp học \"trúng tủ\", học đúng trọng tâm để ra điểm nhanh nhất.",
    color: "bg-primary"
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-white" />,
    title: "Học mãi không lên điểm",
    desc: "Đã từng tự ôn hoặc học nhiều nơi nhưng điểm mãi dậm chân tại chỗ. Không biết mình sai ở đâu, cần người chỉ dẫn chi tiết.",
    color: "bg-orange-500"
  },
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "Mông lung về phương pháp",
    desc: "Không hiểu cách AI của Pearson chấm điểm, học lan man tốn thời gian. Cần một lộ trình rõ ràng, từng bước một mỗi ngày.",
    color: "bg-emerald-500"
  }
];

export default function WhoIsThisFor() {
  return (
    <section id="who" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Khóa học này <span className="text-primary">dành cho ai?</span></h2>
          <p className="text-lg text-muted-foreground">
            Nếu bạn đang ở trong một trong những tình trạng dưới đây, khoá đồng hành 30 ngày chính là giải pháp được thiết kế riêng cho bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:neon-border hover:-translate-y-2 transition-all duration-300 group cyber-corner relative"
            >
              <div className={`w-16 h-16 rounded-2xl ${persona.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{ boxShadow: '0 0 16px currentColor' }}>
                {persona.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{persona.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {persona.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}