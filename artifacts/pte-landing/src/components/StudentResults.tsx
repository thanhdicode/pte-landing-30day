import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, TrendingUp, ArrowRight, CheckCircle2, GraduationCap, ShieldCheck, FileText, MessageSquare, Video, Users, ChevronDown } from "lucide-react";

// Featured testimonial (uploaded — Griffith University, Úc)
import heroScore from "@assets/image_1783658727180.png";
// Student story cards (real posts / messages)
import zayStory from "@assets/result-zaykaiz-story.png";
import quynhScore from "@assets/result-quynh-score.png";
import quyNguyenChat from "@assets/result-quynguyen-chat.png";
// Before / after score results
import zayBefore from "@assets/result-zaykaiz-before.png";
import zayAfter from "@assets/result-zaykaiz-after.png";
import vtBefore from "@assets/result-vanthuyet-before.jpg";
import vtAfter from "@assets/result-vanthuyet-after.jpg";
import dinhngoc from "@assets/result-dinhngoc.jpg";
import tanphuong from "@assets/result-tanphuong.jpg";
import thanhbinh from "@assets/result-thanhbinh.png";
import huutung from "@assets/result-huutung.png";
import collageEmg from "@assets/result-collage-emg.png";
// Feedback (Zalo & Facebook)
import fbGiahung from "@assets/feedback-giahung.png";
import fbTrieu from "@assets/feedback-trieu.png";
import fbNhi from "@assets/feedback-nhi.png";
import fbRecommend from "@assets/feedback-recommend.png";
import fbAim from "@assets/feedback-aim1thang.png";
import fbPass from "@assets/feedback-pass460.png";
import fbGioithieu from "@assets/feedback-gioithieu.png";
import fbTuanminh from "@assets/feedback-tuanminh.png";
import fbWfd from "@assets/feedback-wfd.png";
import fb1 from "@assets/feedback-1.png";
import fb2 from "@assets/feedback-2.png";
import fb3 from "@assets/feedback-3.png";
import fb4 from "@assets/feedback-4.png";
import fb5 from "@assets/feedback-5.png";
import fb6 from "@assets/feedback-6.png";
// Live class atmosphere (Zalo)
import class1 from "@assets/class-1.png";
import class2 from "@assets/class-2.png";
import class3 from "@assets/class-3.png";
import class4 from "@assets/class-4.png";
import class5 from "@assets/class-5.png";
// Videos + posters
import video1 from "@assets/result-video-1.mp4";
import video2 from "@assets/result-video-2.mp4";
import video3 from "@assets/result-video-3.mp4";
import poster1 from "@assets/result-video-1-poster.jpg";
import poster2 from "@assets/result-video-2-poster.jpg";
import poster3 from "@assets/result-video-3-poster.jpg";

const heroSkills = [
  { skill: "Listening", val: "52" },
  { skill: "Reading", val: "55" },
  { skill: "Speaking", val: "54" },
  { skill: "Writing", val: "57" },
];

const stories = [
  {
    name: "Sang Đông",
    meta: "FB: Zay Kaiz",
    chip: "23 → 44 điểm",
    thumb: zayStory,
    quote:
      "Bản thân mình không giỏi ngoại ngữ, bắt đầu từ con số 0, lại vừa đi làm cả ngày. Vỏn vẹn 3 tháng cày + 3 tháng ôn + 1 tháng nhảy vọt — kiên trì rồi một ngày hoa sẽ nở.",
  },
  {
    name: "Như Quỳnh",
    meta: "Overall 53",
    chip: "Speaking 60",
    thumb: quynhScore,
    quote:
      "Phần mình sợ nhất là RA trong Speaking, cứ nghĩ thi thật sẽ run lắm. Vậy mà mình đạt 60 điểm Speaking — phần cao nhất, con số mình không dám nghĩ tới!",
  },
  {
    name: "Quý Nguyễn",
    meta: "Lớp Phát âm",
    chip: "Vượt mong đợi",
    thumb: quyNguyenChat,
    quote:
      "Mình từng bầm dập, mất tự tin với PTE suốt 1 năm vì mãi không qua được RA. Học lớp Phát âm của cô Thuỷ như được tập nói, tập đọc lại từ đầu. Kết quả vượt xa mong đợi!",
  },
];

const videos = [
  { src: video1, poster: poster1, name: "Học viên Nguyễn Văn Hải", score: "PTE 50+", case: "Mất gốc cấp tốc" },
  { src: video2, poster: poster2, name: "Học viên Trần Thị Hồng", score: "PTE 65+", case: "Cần nộp hồ sơ định cư" },
  { src: video3, poster: poster3, name: "Học viên Lê Hoàng Nam", score: "PTE 79+", case: "Đạt học bổng toàn phần" },
];

const beforeAfter = [
  { name: "Zay Kaiz", before: zayBefore, after: zayAfter, from: "23", to: "44" },
  { name: "Văn Thuyết Vũ", before: vtBefore, after: vtAfter, from: "23", to: "38" },
];

const scoreCards = [
  { name: "Đinh Ngọc Hồ", img: dinhngoc, label: "11 → 33 điểm" },
  { name: "Tấn Phương Nguyễn", img: tanphuong, label: "Đạt 42 điểm" },
  { name: "Thanh Bình Trần", img: thanhbinh, label: "Speaking 47 → 58" },
  { name: "Hữu Tùng Trịnh", img: huutung, label: "Đạt 68 điểm" },
];

const feedback = [
  fbGiahung, fbTrieu, fbNhi, fbRecommend, fbAim, fbPass,
  fb1, fb2, fb3, fbGioithieu, fb4, fb5, fbTuanminh, fb6, fbWfd,
];
const classShots = [class1, class2, class3, class4, class5];

function ProofImg({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full object-contain bg-slate-50 border border-slate-100 ${className}`}
    />
  );
}

interface StoryCardProps {
  story: {
    name: string;
    meta: string;
    chip: string;
    thumb: string;
    quote: string;
  };
  index: number;
}

function StoryCard({ story, index }: StoryCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-slate-800 text-sm">{story.name}</span>
            <span className="text-[10px] text-slate-400 font-semibold mt-0.5">{story.meta}</span>
          </div>
          <span className="text-[10px] font-black text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-150">{story.chip}</span>
        </div>
        <Quote className="w-6 h-6 text-primary/10 mb-2" />
        <p className="text-xs sm:text-sm text-slate-650 italic leading-relaxed text-left">{story.quote}</p>
      </div>
      {story.thumb && (
        <div className="mt-4 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center">
          <img src={story.thumb} alt={story.name} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}

export default function StudentResults() {
  const [activeTab, setActiveTab] = useState<"scores" | "chats" | "videos" | "atmosphere">("scores");
  const [expandChats, setExpandChats] = useState(false);

  const tabItems = [
    { id: "scores" as const, label: "Bảng điểm thực tế", icon: <FileText className="w-4 h-4" /> },
    { id: "chats" as const, label: "Nhận xét Zalo/FB", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "videos" as const, label: "Video chia sẻ", icon: <Video className="w-4 h-4" /> },
    { id: "atmosphere" as const, label: "Tương tác lớp học", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <section id="results" className="py-24 bg-slate-50 border-t border-slate-100 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-primary text-xs font-bold mb-5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Minh chứng chất lượng đào tạo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900">
            Kết Quả Đồng Hành Từ Học Viên
          </h2>
          <p className="text-slate-650 text-base max-w-2xl mx-auto">
            Học viên thật, bảng điểm thật và các cuộc hội thoại báo điểm chân thực. Chúng tôi tin rằng kết quả của người học là thước đo năng lực giảng dạy uy tín nhất.
          </p>
        </motion.div>

        {/* Tab switcher (Prep.vn/Edmicro style) */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap md:flex-nowrap gap-1.5 p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer relative ${
                    isActive ? "text-primary" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeResultsPill"
                      className="absolute inset-0 bg-blue-50/80 border border-blue-100/50 rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {/* ══ TAB 1: SCORES (BẢNG ĐIỂM) ══ */}
            {activeTab === "scores" && (
              <div className="space-y-12">
                {/* Featured case study (Griffith University) */}
                <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative flex items-center justify-center p-8 bg-slate-50/50">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md max-w-[280px] bg-white">
                        <img src={heroScore} alt="Kết quả PTE học viên tại Griffith University" loading="lazy" className="w-full block" />
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-primary border border-blue-100 uppercase">
                          HV TIÊU BIỂU · OUTCOME
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-semibold">
                          <GraduationCap className="w-3.5 h-3.5" /> Griffith University · Úc
                        </span>
                      </div>
                      <Quote className="w-8 h-8 mb-3 text-primary/10" />
                      <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-semibold mb-6">
                        “Vừa đi làm vừa ôn thi ở tuổi không còn trẻ, mình từng kẹt mãi ở 48-52 điểm, thiếu chuẩn nộp hồ sơ PR. Nhờ sự kèm cặp tận tâm của cô Thuỷ, mình đã bứt phá đạt kết quả vượt mong đợi — tất cả các kỹ năng đều trên 50!”
                      </p>
                      <div className="grid grid-cols-4 gap-2 mb-6">
                        {heroSkills.map((s) => (
                          <div key={s.skill} className="rounded-xl px-2 py-2 text-center bg-slate-50 border border-slate-200/60">
                            <div className="text-lg font-black text-slate-800">{s.val}</div>
                            <div className="text-[9px] text-slate-500 tracking-wider uppercase mt-0.5 font-bold">{s.skill}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Mọi kỹ năng &gt; 50đ
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-primary border border-blue-200">
                          <ShieldCheck className="w-3.5 h-3.5" /> Đạt chuẩn nộp hồ sơ PR Úc
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before/After panel & Individual cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {beforeAfter.map((r, i) => (
                    <div key={r.name} className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                        <span className="font-extrabold text-slate-800 text-base">{r.name}</span>
                        <span className="inline-flex items-center gap-1 text-xs font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
                          <TrendingUp className="w-3.5 h-3.5" /> Tăng vọt: {r.from} → {r.to}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <figure className="text-center">
                          <div className="rounded-xl overflow-hidden border border-slate-150 shadow-inner bg-slate-50">
                            <img src={r.before} alt="Trước" className="w-full h-36 object-contain" />
                          </div>
                          <figcaption className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-wide">Điểm đầu vào · {r.from}đ</figcaption>
                        </figure>
                        <figure className="text-center">
                          <div className="rounded-xl overflow-hidden border border-slate-150 shadow-inner bg-slate-50">
                            <img src={r.after} alt="Sau" className="w-full h-36 object-contain" />
                          </div>
                          <figcaption className="text-[10px] text-emerald-600 font-bold mt-2 uppercase tracking-wide">Kết quả thi thật · {r.to}đ</figcaption>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Grid scorecards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {scoreCards.map((c) => (
                    <div key={c.name} className="rounded-2xl p-4 bg-white border border-slate-200 shadow-sm flex flex-col">
                      <div className="rounded-xl overflow-hidden border border-slate-100 mb-3 bg-slate-50 flex items-center justify-center" style={{ height: "180px" }}>
                        <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="mt-auto pl-1">
                        <span className="font-extrabold text-slate-800 text-sm block">{c.name}</span>
                        <span className="text-xs font-bold text-primary block mt-0.5">{c.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Batch EMG Collage */}
                <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                    <span className="w-1.5 h-3.5 bg-primary rounded-full" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">HÌNH ẢNH BẢNG ĐIỂM HỌC VIÊN TẬP THỂ TẠI EMG</span>
                  </div>
                  <div className="rounded-xl overflow-hidden bg-slate-50 max-h-[500px] flex items-center justify-center border border-slate-100">
                    <img src={collageEmg} alt="Học viên EMG" className="w-full object-contain object-top" />
                  </div>
                </div>
              </div>
            )}

            {/* ══ TAB 2: CHATS (TIN NHẮN ZALO) ══ */}
            {activeTab === "chats" && (
              <div className="space-y-8">
                {/* Student Story Quote Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  {stories.map((s, i) => (
                    <StoryCard key={s.name} story={s} index={i} />
                  ))}
                </div>

                {/* Expandable chat screenshot gallery (UX improvement!) */}
                <div className="relative">
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      expandChats ? "max-h-[3000px]" : "max-h-[600px]"
                    }`}
                  >
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                      {feedback.map((src, i) => (
                        <div key={i} className="mb-5 rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm break-inside-avoid">
                          <img src={src} alt={`Zalo feedback ${i}`} className="w-full rounded-xl block" />
                        </div>
                      ))}
                    </div>

                    {/* Gradient overlay when collapsed */}
                    {!expandChats && (
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />
                    )}
                  </div>

                  {/* Show more button */}
                  <div className="flex justify-center mt-6 relative z-10">
                    <button
                      type="button"
                      onClick={() => setExpandChats(!expandChats)}
                      className="btn-secondary py-3 px-8 text-sm gap-2 border border-slate-250 hover:bg-slate-50 flex items-center font-bold"
                    >
                      <span>{expandChats ? "Thu gọn bớt tin nhắn" : "Xem tất cả tin nhắn Zalo báo điểm"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandChats ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ══ TAB 3: VIDEOS ══ */}
            {activeTab === "videos" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((v, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                    <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="text-[10px] font-mono text-slate-500 tracking-wider font-bold">HV_VIDEO_0{i + 1}.MP4</span>
                    </div>
                    <div className="relative aspect-[9/16] bg-slate-900 flex items-center">
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        preload="none"
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 border-t border-slate-100 bg-white">
                      <div className="font-extrabold text-sm text-slate-800">{v.name}</div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">{v.score}</span>
                        <span className="text-[10px] text-slate-400 font-semibold">{v.case}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ══ TAB 4: ATMOSPHERE (HOẠT ĐỘNG LỚP HỌC) ══ */}
            {activeTab === "atmosphere" && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classShots.map((src, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2.5 shadow-sm">
                      <div className="rounded-xl overflow-hidden bg-slate-50 h-80 flex items-center justify-center">
                        <img src={src} alt={`Class atmosphere ${i}`} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 text-center block mt-3 uppercase tracking-wider">
                        Tương tác bài giảng lớp Zalo Cô Thủy #{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl p-10 bg-gradient-to-br from-primary via-primary/95 to-blue-900 text-white shadow-lg mt-16 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

          <h4 className="text-xl md:text-2xl font-extrabold mb-2 text-white">Bạn sẽ là câu chuyện thành công tiếp theo?</h4>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto mb-6">Đồng hành sát sao từng ngày, kiểm soát chặt chẽ tiến độ để đảm bảo học viên cán đích.</p>

          <a
            href="#enroll"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary hover:bg-slate-50 font-bold rounded-full text-sm sm:text-base shadow-md transition-all cursor-pointer hover:scale-102"
          >
            <span>Đăng ký nhận tư vấn ngay</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
