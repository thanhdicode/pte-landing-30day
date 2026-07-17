import { motion } from "framer-motion";
import { ArrowRight, Send, ShieldCheck, Gift, Users } from "lucide-react";
import { useState } from "react";
import { siteConfig, pricing } from "../data/course-content";
import { useToast } from "../hooks/use-toast";

export default function FooterCTA() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    target: "50+",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Thiếu thông tin",
        description: "Vui lòng nhập đầy đủ họ tên và số điện thoại liên hệ.",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Đăng ký thành công! 🎉",
        description: "Cô Thuỷ đã nhận được thông tin và sẽ liên hệ tư vấn trực tiếp cho bạn qua Zalo/SĐT trong vòng 24h.",
      });
      setFormData({ name: "", phone: "", target: "50+", message: "" });
    }, 1000);
  };

  return (
    <section id="enroll" className="py-24 bg-slate-50 border-t border-slate-200/50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-primary text-xs font-bold mb-5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Nhận tư vấn miễn phí
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Bứt Phá Điểm Số PTE Ngay Hôm Nay
          </h2>
          <p className="text-slate-650 text-base max-w-xl mx-auto">
            Để lại thông tin, cô Thuỷ sẽ trực tiếp liên hệ, kiểm tra trình độ và tư vấn lộ trình học phù hợp nhất cho bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start max-w-5xl mx-auto">

          {/* ── Left: Consultation Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />
              <span>Thông tin đăng ký tư vấn</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-600 uppercase mb-2">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-250 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-600 uppercase mb-2">Số điện thoại (có Zalo) *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Ví dụ: 0357930867"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-250 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="target" className="block text-xs font-bold text-slate-600 uppercase mb-2">Mục tiêu PTE cần đạt</label>
                  <select
                    id="target"
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-250 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 text-sm cursor-pointer"
                  >
                    <option value="24+">Target 24+ (Visa 462 / Du học nghề)</option>
                    <option value="50+">Target 50+ (Đại học / Tốt nghiệp)</option>
                    <option value="65+">Target 65+ (Thạc sĩ / Định cư)</option>
                    <option value="79+">Target 79+ (Cộng tối đa điểm định cư)</option>
                    <option value="Khác">Chưa xác định mục tiêu</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-600 uppercase mb-2">Chia sẻ thêm về khó khăn của bạn (nếu có)</label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Ví dụ: Mình mất gốc phát âm hoàn toàn, cần thi gấp trước tháng 10..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-250 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 text-sm sm:text-base mt-2 gap-2 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
              >
                <span>{isSubmitting ? "Đang gửi thông tin..." : "Gửi yêu cầu tư vấn miễn phí"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* ── Right: Pricing and Course Highlights ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Price information card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-3">Học phí & Ưu đãi</h4>

              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-400">Học phí trọn khóa đồng hành:</span>
                <div className="flex items-baseline gap-2.5 mt-1">
                  <span className="text-3xl font-extrabold text-slate-900">{pricing.currentPrice}</span>
                  <span className="text-sm line-through text-slate-450">{pricing.originalPrice}</span>
                </div>
                <p className="text-xs font-bold text-emerald-600 mt-1">Tiết kiệm {pricing.savings} học phí</p>
              </div>

              <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-4.5">
                <div className="flex items-center gap-2 mb-2 text-amber-800 font-bold text-xs uppercase">
                  <Gift className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{pricing.giftTitle}</span>
                </div>
                <p className="text-slate-650 text-xs leading-relaxed">{pricing.giftDesc}</p>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-3">Đặc quyền học viên</h4>

              <div className="space-y-4">
                {[
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-primary shrink-0" />,
                    title: "Cam kết học thuật đến khi đạt mục tiêu",
                    desc: "Học viên được chữa bài, định hướng sát sao đến khi thi đạt."
                  },
                  {
                    icon: <Users className="w-5 h-5 text-primary shrink-0" />,
                    title: "Chữa bài chi tiết hàng ngày",
                    desc: "Cô Thuỷ chấm điểm trực tiếp, sửa từng lỗi phát âm qua Zalo."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    {item.icon}
                    <div>
                      <h5 className="font-extrabold text-xs text-slate-800">{item.title}</h5>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
