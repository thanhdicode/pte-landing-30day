import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "../data/course-content";

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden mb-4">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm sm:text-base pr-4">{faq.question}</span>
        <span className={`p-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary bg-blue-50 border-blue-100" : ""}`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-0 border-t border-slate-100/80 text-slate-655 text-sm sm:text-base leading-relaxed">
              <p className="mt-4">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Open first by default

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-primary text-xs font-bold mb-5 tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Hỏi đáp thắc mắc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Giải Đáp Thắc Mắc Thường Gặp
          </h2>
          <p className="text-slate-600 text-base max-w-lg mx-auto">
            Tổng hợp và giải đáp các câu hỏi học viên thường băn khoăn trước khi đăng ký khóa đồng hành.
          </p>
        </div>

        {/* Accordion list */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
