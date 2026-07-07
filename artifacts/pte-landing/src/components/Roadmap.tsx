import { motion } from "framer-motion";
import { Check } from "lucide-react";

const phases = [
  {
    day: "NGÀY 1–10",
    title: "Xây dựng nền tảng phát âm & phản xạ",
    objective: "Xây dựng nền tảng phát âm chuẩn, hình thành phản xạ tiếng Anh.",
    highlights: [
      "50 câu Read Aloud trọng điểm với video khẩu hình, audio và transcript",
      "Học IPA tinh gọn, khẩu hình và ngữ điệu",
      "Khắc phục lỗi phát âm phổ biến (âm cuối, nối âm, trọng âm, ngữ điệu)",
      "Rèn kỹ thuật lấy hơi, shadowing 10 ngày",
      "Làm quen đặt/điều chỉnh micro thi PTE"
    ],
    result: "Phát âm rõ ràng, biết tự đọc IPA, không còn sợ đọc tiếng Anh, sẵn sàng học PTE Speaking."
  },
  {
    day: "NGÀY 11–15",
    title: "Hiểu PTE & Xây dựng chiến lược",
    objective: "Hiểu toàn diện về kỳ thi PTE, cơ chế tính điểm Pearson.",
    highlights: [
      "PTE là gì? Vì sao ngày càng nhiều người lựa chọn PTE?",
      "Cấu trúc bài thi và format từng kỹ năng",
      "Cách Pearson tính điểm — AI chấm vs Human Check",
      "Chiến lược học theo mục tiêu: PTE 24+ | 50+ | 65+ | 79+",
      "Hướng dẫn sử dụng: Website PTE Talents, APEUni, Skool Community"
    ],
    result: "Hiểu rõ PTE, biết dạng bài nào cần ưu tiên, hình thành phương pháp tự học."
  },
  {
    day: "NGÀY 16–26",
    title: "Làm chủ dạng bài & Thực hành bộ tủ",
    objective: "Học các dạng bài nhiều điểm, nắm tips, templates, luyện bộ tủ.",
    highlights: [
      "Dạng bài trọng tâm ảnh hưởng lớn đến Overall và từng kỹ năng",
      "Tips, templates và từ khóa ăn điểm",
      "Luyện bộ tủ từ dễ đến khó trên website PTE Talents",
      "Chấm điểm trên APEUni, gửi bài cho cô chữa",
      "Rèn phản xạ làm bài, quản lý thời gian"
    ],
    result: "Biết làm bài trọng tâm, tự học bộ tủ, tự nhận diện và sửa lỗi."
  },
  {
    day: "NGÀY 27–30",
    title: "Tối ưu điểm số & Sẵn sàng thi",
    objective: "Đánh giá năng lực, tối ưu chiến lược, chuẩn bị trước ngày thi.",
    highlights: [
      "Bài thi thử mô phỏng chuẩn Pearson",
      "Review chi tiết từng kỹ năng",
      "Chiến lược làm bài cá nhân theo mục tiêu",
      "Lưu ý quan trọng: đặt micro, tâm lý phòng thi, lỗi hay gặp"
    ],
    result: "Tự tin bước vào kỳ thi, có chiến lược rõ ràng, tiếp tục tự học sau khóa."
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#120A2E] cyber-grid-bg relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Lộ trình <span className="text-primary">30 Ngày Đồng Hành</span></h2>
          <p className="text-lg text-muted-foreground">
            Thiết kế tinh gọn, thực chiến. Mỗi ngày bạn đều biết chính xác mình cần học gì, làm gì. Không lan man.
          </p>
        </div>

        <div className="relative border-l-2 border-primary/60 ml-4 md:ml-0 md:space-y-16">
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px]" style={{ boxShadow: '0 0 8px hsl(330 100% 65% / 0.5)' }} />
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-8 md:pl-12 pb-12 md:pb-0"
            >
              {/* Timeline marker */}
              <div 
                className="absolute left-[-22px] top-1 w-10 h-10 bg-slate-900 border-4 border-primary rounded-full flex items-center justify-center shadow-lg"
                style={{ boxShadow: '0 0 10px hsl(330 100% 65% / 0.8)' }}
              >
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>

              <div className="bg-slate-900/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 neon-border cyber-corner relative">
                <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 text-primary font-bold text-sm rounded-full mb-4">
                  GIAI ĐOẠN {idx + 1} • {phase.day}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">{phase.title}</h3>
                <p className="text-slate-300 font-medium mb-6">{phase.objective}</p>

                <div className="space-y-3 mb-8">
                  {phase.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex gap-3 text-slate-400">
                      <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 p-4 md:p-6 rounded-2xl border border-primary/30 flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-primary mb-1">Thành quả đạt được:</div>
                    <p className="text-slate-200 font-medium text-sm md:text-base leading-snug">{phase.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}