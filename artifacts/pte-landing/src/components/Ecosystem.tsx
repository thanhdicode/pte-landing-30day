import { motion } from "framer-motion";
import { Video, BookOpen, Cpu, MessageSquare, HeartHandshake, ShieldAlert } from "lucide-react";

const benefits = [
  {
    icon: <Video className="w-6 h-6 text-primary" />,
    title: "30+ Video bài giảng lý thuyết",
    desc: "Đóng gói toàn bộ kiến thức cốt lõi, templates ăn điểm và phương pháp làm bài ngắn gọn. Học viên chủ động học trên hệ thống Skool mọi lúc, mọi nơi.",
    colSpan: "lg:col-span-2",
    badge: "HỆ THỐNG SKOOL"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Web luyện đề tủ chi tiết",
    desc: "Website PTE Talents độc quyền phân tích cặn kẽ đáp án, giải thích nghĩa và chỉ rõ bẫy đề thi thật của Pearson.",
    colSpan: "lg:col-span-1",
    badge: "PTE TALENTS WEB"
  },
  {
    icon: <Cpu className="w-6 h-6 text-amber-600" />,
    title: "Chấm điểm AI giả lập thi thật",
    desc: "Luyện đề trên APEUni với thuật toán chấm điểm Pearson AI sát thực tế nhất. Kiểm tra chính xác điểm số từng kỹ năng trước khi thi thật.",
    colSpan: "lg:col-span-1",
    badge: "MÔ PHỎNG AI"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Chữa bài 1 kèm 1 mỗi ngày",
    desc: "Nộp bài tập nói (Read Aloud, Repeat Sentence) và viết (Essay, SWT) hàng ngày. Cô Thuỷ trực tiếp sửa phát âm, ngắt câu và chỉnh lỗi ngữ pháp chi tiết qua Zalo.",
    colSpan: "lg:col-span-2",
    badge: "ĐỒNG HÀNH CHUYÊN MÔN"
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-primary" />,
    title: "Hỗ trợ học thuật 24/7",
    desc: "Đội ngũ trợ giảng chuyên môn cao túc trực giải đáp tức thì bất kỳ thắc mắc nào của học viên trong suốt quá trình ôn luyện.",
    colSpan: "lg:col-span-3",
    badge: "CAM KẾT ĐẦU RA"
  }
];

export default function Ecosystem() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-primary text-xs font-bold mb-5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Phương pháp & Công cụ hỗ trợ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Hệ Sinh Thái Học Tập Toàn Diện
          </h2>
          <p className="text-slate-650 text-base sm:text-lg">
            Học viên không chỉ nhận bài giảng, mà được cung cấp toàn bộ công cụ thực hành và quy trình sửa lỗi liên tục để tối ưu hóa điểm số.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow transition-shadow duration-300 flex flex-col justify-between ${b.colSpan}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm shrink-0">
                    {b.icon}
                  </span>
                  <span className="text-[9px] font-bold tracking-wider px-2.5 py-1 bg-white border border-slate-200/50 rounded-lg text-slate-550 uppercase">
                    {b.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
