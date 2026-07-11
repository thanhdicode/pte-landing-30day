import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Target,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  CornerDownRight,
  CheckCircle2,
  Trophy,
  Video,
  RotateCcw,
  PenLine,
} from "lucide-react";

const GOLD = "#FAC775"; // value / achievement only

type PhaseItem = { text: string; sub?: string[] };
type PhaseGroup = { heading?: string; cols?: number; items: PhaseItem[] };
type Phase = {
  day: string;
  title: string;
  objective: string;
  note?: string;
  groups: PhaseGroup[];
  details?: PhaseItem[];
  results: string[];
  resultMilestone?: string;
};

// Render **bold** segments as white emphasis; everything else stays body gray.
function renderRich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-white font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

const phases: Phase[] = [
  {
    day: "NGÀY 1–10",
    title: "Xây dựng nền tảng phát âm & phản xạ",
    objective:
      "Xây nền phát âm chuẩn và độ trôi chảy — tiền đề vững chắc để chinh phục PTE Speaking.",
    groups: [
      {
        items: [
          {
            text: "**Hơn 50 câu Read Aloud trọng điểm** — mỗi câu có video khẩu hình chậm, audio chuẩn đi thi, transcript và hướng dẫn ngắt nhịp.",
          },
          {
            text: "Học **IPA tinh gọn** — khắc phục 4 lỗi phát âm phổ biến của người Việt: âm cuối, nối âm, trọng âm, ngữ điệu.",
          },
          {
            text: "**Luyện nghe & shadowing 10 ngày liên tục** — hình thành phản xạ nhìn từ là đọc đúng, nói tự nhiên.",
          },
          {
            text: "**Ghi âm, nộp bài và nhận chữa bài** từ team cô Thuỷ.",
          },
        ],
      },
    ],
    details: [
      { text: "Rèn kỹ thuật lấy hơi và điều tiết hơi thở để duy trì độ trôi chảy theo tiêu chí Pearson." },
      { text: "Làm quen cách đặt và điều chỉnh micro trong bài thi PTE." },
    ],
    results: [
      "Đọc được phiên âm IPA và tự sửa lỗi phát âm của chính mình.",
      "Không còn sợ mở miệng đọc tiếng Anh — nhìn từ là đọc đúng.",
      "Sẵn sàng bước vào luyện các dạng bài Speaking.",
    ],
    resultMilestone: "Nền tảng tương đương band 24–36",
  },
  {
    day: "NGÀY 11–15",
    title: "Hiểu PTE & xây dựng chiến lược học đúng",
    objective:
      "Hiểu toàn diện kỳ thi PTE, cơ chế tính điểm của Pearson và phương pháp học để tối ưu điểm số.",
    note:
      "Vì sao học phát âm trước, chiến lược sau? Nền tảng phát âm cần thời gian \"ngấm\" nhất — đi trước 10 ngày giúp bạn có phản xạ sẵn trước khi vào luyện đề thực chiến.",
    groups: [
      {
        heading: "Nội dung chính",
        items: [
          { text: "Ôn tổng quan format đề thi, cấu trúc từng kỹ năng & những hiểu lầm phổ biến về PTE." },
          { text: "Hiểu rõ cách Pearson tính điểm và điểm chấm chéo giữa các kỹ năng." },
          { text: "Nhận diện các dạng bài trọng tâm chiếm nhiều điểm." },
          { text: "Biết dạng nào được AI chấm hoàn toàn, dạng nào có Human Check ở tiêu chí Content — để biết dạng nào \"ăn điểm\" được bằng template, dạng nào cần viết thật." },
          {
            text: "Xây dựng chiến lược học theo mục tiêu:",
            sub: ["PTE 24 → 50+", "PTE 50 → 65+", "PTE 65 → 79+"],
          },
        ],
      },
    ],
    details: [
      {
        text: "Làm quen hệ sinh thái học tập (sang giai đoạn 3 mới học thực chiến):",
        sub: [
          "APEUni: bộ đề tủ cập nhật tỉ lệ trúng cao, giả lập phòng thi, chấm điểm chuẩn sát đề thi thật.",
          "Web PTE Talents: chuyên \"mổ xẻ\" và chữa chi tiết toàn bộ đề tủ trọng tâm.",
          "Skool Community: nơi học khoá \"30 Ngày Đồng Hành\", cung cấp template, mẹo làm bài và hỗ trợ 1-1 từ cô Thuỷ & trợ giảng.",
        ],
      },
      { text: "Hướng dẫn gửi bài, nhận bài chữa và theo dõi tiến độ." },
      { text: "Xây dựng phương pháp ôn luyện chủ động." },
    ],
    results: [
      "Không còn học lan man — biết nên học gì trước, học gì sau cho đúng mục tiêu của mình.",
      "Nhìn một dạng bài là biết nó đáng đầu tư bao nhiêu thời gian.",
      "Thành thạo bộ 3 công cụ học – luyện – hỏi đáp, và tự theo dõi được tiến độ của chính mình.",
    ],
    resultMilestone: "Chỉ 5 ngày — nhưng tiết kiệm hàng tháng học sai trọng tâm",
  },
  {
    day: "NGÀY 16–26",
    title: "Làm chủ dạng bài ăn điểm & thực hành bộ tủ",
    objective:
      "Tập trung học các dạng bài nhiều điểm, nắm chắc tips, templates và biết cách luyện bộ tủ hiệu quả trên website PTE Talents.",
    groups: [
      {
        heading: "Nội dung chính",
        items: [
          { text: "Học các dạng bài trọng tâm, có ảnh hưởng lớn đến điểm Overall và từng kỹ năng." },
          { text: "Nắm chắc cách làm bài, tips, templates và từ khóa ăn điểm của từng dạng." },
          { text: "Thực hành bộ tủ theo từng dạng bài, từ dễ đến khó." },
          { text: "Biết cách học với website PTE Talents: đọc lời giải, phân tích đáp án, ghi nhớ từ khóa và lỗi thường gặp." },
          { text: "Luyện tập trên APEUni để chấm điểm, theo dõi tiến bộ và điều chỉnh chiến lược." },
          { text: "Gửi bài lên cộng đồng để cô giáo chữa, phân tích lỗi sai và hướng dẫn tối ưu điểm số." },
          { text: "Rèn phản xạ làm bài, quản lý thời gian và xử lý đề thi thực tế." },
        ],
      },
    ],
    results: [
      "Biết cách làm các dạng bài trọng tâm và nhiều điểm.",
      "Sử dụng được tips, templates và chiến lược làm bài đúng cách.",
      "Biết cách tự học bộ tủ trên website PTE Talents.",
      "Biết cách luyện trên APEUni và đọc kết quả chấm điểm.",
      "Tự nhận diện lỗi sai, sửa lỗi và cải thiện điểm số theo từng dạng bài.",
      "Sẵn sàng bước vào giai đoạn Mock Test và bứt phá mục tiêu.",
    ],
  },
  {
    day: "NGÀY 27–30",
    title: "Tối ưu điểm số & sẵn sàng thi thật",
    objective:
      "Đánh giá toàn diện năng lực, tối ưu chiến lược làm bài và chuẩn bị tốt nhất trước ngày thi.",
    groups: [
      {
        heading: "Nội dung chính",
        items: [
          { text: "Thực hiện bài thi thử mô phỏng theo chuẩn Pearson." },
          { text: "Được review chi tiết từng kỹ năng và từng dạng bài." },
          { text: "Xác định điểm mạnh, điểm yếu và các lỗi còn tồn tại." },
          {
            text: "Xây dựng chiến lược làm bài cá nhân theo mục tiêu:",
            sub: ["PTE 24+", "PTE 50+", "PTE 65+", "PTE 79+"],
          },
          { text: "Tối ưu chiến lược phân bổ thời gian cho từng phần thi." },
          {
            text: "Hướng dẫn những lưu ý quan trọng trước ngày thi:",
            sub: ["Đặt và điều chỉnh micro.", "Quản lý tâm lý phòng thi.", "Các lỗi thường gặp khiến mất điểm."],
          },
          { text: "Hoàn thiện phương pháp tự học và tiếp tục nâng điểm sau khóa học." },
        ],
      },
    ],
    results: [
      "Hiểu rõ trình độ hiện tại và khả năng đạt mục tiêu điểm số.",
      "Biết cần tập trung cải thiện dạng bài nào trước ngày thi.",
      "Có chiến lược làm bài phù hợp với mục tiêu PTE của bản thân.",
      "Tự tin bước vào kỳ thi thật với tâm lý và chiến lược rõ ràng.",
      "Có thể tiếp tục tự học, tự luyện và nâng điểm ngay cả sau khi kết thúc khóa học.",
    ],
  },
];

const finalResults = [
  "Xây dựng nền tảng phát âm và phản xạ tiếng Anh.",
  "Hiểu rõ cách Pearson cho điểm và biết cách học đúng trọng tâm.",
  "Nắm chắc các dạng bài trọng tâm và chiến lược tăng điểm.",
  "Biết cách tự học, tự luyện và tự chữa bài.",
  "Thành thạo việc sử dụng website PTE Talents và APEUni để tiếp tục nâng điểm.",
  "Tự tin chinh phục mục tiêu PTE 24+ | 50+ | 65+ | 79+.",
];

function PhaseCard({ phase, idx }: { phase: Phase; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="relative pl-8 md:pl-12 pb-12 md:pb-0"
    >
      {/* Timeline marker */}
      <div
        className="absolute left-[-22px] top-1 w-10 h-10 bg-slate-900 border-4 border-primary rounded-full flex items-center justify-center shadow-lg"
        style={{ boxShadow: "0 0 10px hsl(330 100% 65% / 0.8)" }}
      >
        <span className="text-primary font-extrabold text-sm">{idx + 1}</span>
      </div>

      <div className="bg-slate-900/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 neon-border cyber-corner relative">
        <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 text-primary font-bold text-sm rounded-full mb-4">
          GIAI ĐOẠN {idx + 1} · {phase.day}
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">{phase.title}</h3>

        {/* Objective */}
        <div className="flex gap-3 mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="leading-snug">
            <span className="text-primary font-bold">Mục tiêu: </span>
            <span className="text-slate-300 font-medium">{phase.objective}</span>
          </p>
        </div>

        {/* Optional italic note under the objective */}
        {phase.note && (
          <div className="flex gap-2.5 -mt-3 mb-6 pl-1">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-primary/70" />
            <p className="text-slate-400 italic text-sm leading-relaxed">{phase.note}</p>
          </div>
        )}

        {/* Content groups */}
        {phase.groups.map((group, gIdx) => (
          <div key={gIdx} className="mb-6">
            {group.heading && (
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-1.5 h-4 bg-primary rounded-full"
                  style={{ boxShadow: "0 0 6px hsl(330 100% 65% / 0.8)" }}
                />
                <h4 className="text-primary font-bold text-sm uppercase tracking-wide">
                  {group.heading}
                </h4>
              </div>
            )}
            <ul
              className={
                group.cols === 2
                  ? "list-none grid sm:grid-cols-2 gap-x-6 gap-y-2.5"
                  : "list-none space-y-2.5"
              }
            >
              {group.items.map((item, iIdx) => (
                <li key={iIdx}>
                  <div className="flex gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{renderRich(item.text)}</span>
                  </div>
                  {item.sub && (
                    <ul className="list-none ml-8 mt-2 space-y-1.5">
                      {item.sub.map((s, sIdx) => (
                        <li key={sIdx} className="flex gap-2 text-slate-400 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Expandable details */}
        {phase.details && phase.details.length > 0 && (
          <div className="-mt-2 mb-6">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={`phase-details-${idx}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              {open ? "Thu gọn" : "Xem chi tiết"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <motion.ul
                id={`phase-details-${idx}`}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="list-none space-y-1.5 mt-3"
              >
                {phase.details.map((d, dIdx) => (
                  <li key={dIdx}>
                    <div className="flex gap-2 text-slate-400 text-sm">
                      <CornerDownRight className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                      <span>{renderRich(d.text)}</span>
                    </div>
                    {d.sub && (
                      <ul className="list-none ml-6 mt-1.5 space-y-1.5">
                        {d.sub.map((s, sIdx) => (
                          <li key={sIdx} className="flex gap-2 text-slate-500 text-sm">
                            <ChevronRight className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                            <span>{renderRich(s)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        )}

        {/* Results */}
        <div className="bg-primary/10 p-5 md:p-6 rounded-2xl border border-primary/30 mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <div className="font-bold text-sm text-primary uppercase tracking-wide">
              Thành quả sau giai đoạn {idx + 1}
            </div>
          </div>
          <ul className="list-none space-y-2">
            {phase.results.map((r, rIdx) => (
              <li key={rIdx} className="flex gap-3 text-slate-200 text-sm md:text-base">
                <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          {phase.resultMilestone && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-primary/20">
              <Target className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
              <span className="font-bold text-sm md:text-base" style={{ color: GOLD }}>
                {phase.resultMilestone}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#120A2E] cyber-grid-bg relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-bold text-xs tracking-wider rounded-full mb-5 uppercase">
            Khoá đồng hành 30 ngày
          </div>
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Lộ trình <span className="text-primary">30 Ngày Đồng Hành</span>
          </h2>
          <p className="text-lg text-slate-300">
            Từ mất gốc đến chinh phục mục tiêu PTE{" "}
            <span className="text-cyan-300 font-semibold">24+ · 50+ · 65+ · 79+</span>. Thiết kế
            tinh gọn, thực chiến — mỗi ngày bạn đều biết chính xác cần học gì, làm gì. Không lan man.
          </p>
        </div>

        {/* ── Cách học — định dạng khoá video ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/60" />
            <span className="text-cyan-300 text-xs font-bold uppercase tracking-widest">
              Cách học qua video
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Video className="w-5 h-5" />,
                title: "Bài giảng video",
                desc: "Học theo lộ trình, chủ động mọi lúc mọi nơi.",
              },
              {
                icon: <RotateCcw className="w-5 h-5" />,
                title: "Xem lại không giới hạn",
                desc: "Học theo tốc độ của bạn, ôn lại bao nhiêu lần tuỳ thích.",
              },
              {
                icon: <PenLine className="w-5 h-5" />,
                title: "Chữa bài & đồng hành 1-1",
                desc: "Nộp bài, nhận phản hồi trực tiếp từ team cô Thuỷ.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-2 bg-slate-900/70 border border-primary/20 rounded-2xl p-5 neon-border"
              >
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 text-primary mb-1"
                  style={{ boxShadow: "0 0 16px hsl(330 100% 65% / 0.25)" }}
                >
                  {item.icon}
                </span>
                <span className="text-white font-bold">{item.title}</span>
                <span className="text-slate-400 text-sm leading-snug">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative border-l-2 border-primary/60 ml-4 md:ml-0 md:space-y-16">
          <div
            className="absolute top-0 bottom-0 left-[-2px] w-[2px]"
            style={{ boxShadow: "0 0 8px hsl(330 100% 65% / 0.5)" }}
          />
          {phases.map((phase, idx) => (
            <PhaseCard key={idx} phase={phase} idx={idx} />
          ))}
        </div>

        {/* Final 30-day outcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-br from-primary/15 via-slate-900/80 to-cyan-400/10 border-2 border-primary/40 rounded-3xl p-8 md:p-10 relative neon-border cyber-corner overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 border border-primary/40 text-primary font-bold text-xs tracking-wider rounded-full mb-4 uppercase">
                  <Trophy className="w-4 h-4" /> Kết quả
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  Thành quả sau <span className="text-primary">30 ngày</span>
                </h3>
              </div>
              <ul className="list-none grid md:grid-cols-2 gap-4">
                {finalResults.map((r, rIdx) => (
                  <li
                    key={rIdx}
                    className="flex gap-3 bg-slate-900/60 border border-primary/20 rounded-xl p-4"
                  >
                    <CheckCircle2
                      className="w-6 h-6 text-cyan-400 shrink-0"
                      style={{ filter: "drop-shadow(0 0 4px hsl(180 100% 60% / 0.6))" }}
                    />
                    <span className="text-slate-200 font-medium">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
