import { motion } from "framer-motion";
import { Quote, TrendingUp, ArrowRight, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/links";

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

const PINK = "hsl(330 100% 65%)";
const CYAN = "hsl(180 100% 60%)";

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
  { src: video1, poster: poster1 },
  { src: video2, poster: poster2 },
  { src: video3, poster: poster3 },
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

/* ── Small mono block header ── */
function BlockLabel({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-slate-500 text-[11px] font-mono tracking-widest">{tag}</span>
        <span className="h-px flex-1 max-w-[80px]" style={{ background: `linear-gradient(90deg, ${PINK}, transparent)` }} />
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h3>
      {subtitle && <p className="text-slate-400 text-sm mt-2 max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}

/* ── Result frame (letterboxed on black so no crop) ── */
function ProofImg({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full object-contain bg-black ${className}`}
    />
  );
}

/* ── Student story quote card ── */
function StoryCard({ story, index }: { story: (typeof stories)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 flex flex-col"
      style={{ background: "hsl(222 47% 7%)", border: "1px solid hsl(330 100% 65% / 0.22)" }}
    >
      <Quote className="w-7 h-7 mb-3" style={{ color: PINK, filter: "drop-shadow(0 0 8px hsl(330 100% 65% / 0.5))" }} />
      <p className="text-slate-100 leading-relaxed mb-5 flex-1">“{story.quote}”</p>
      <div className="rounded-xl overflow-hidden border border-white/10 mb-4">
        <img src={story.thumb} alt={`Minh chứng của ${story.name}`} loading="lazy" className="w-full max-h-56 object-contain bg-black" />
      </div>
      <div className="flex items-center justify-between gap-2 mt-auto">
        <div>
          <div className="font-bold text-white text-sm">{story.name}</div>
          <div className="text-[11px] text-slate-500">{story.meta}</div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold font-mono px-3 py-1 rounded-full whitespace-nowrap"
          style={{ color: CYAN, background: "hsl(180 100% 60% / 0.1)", border: "1px solid hsl(180 100% 60% / 0.3)" }}>
          {story.chip}
        </span>
      </div>
    </motion.div>
  );
}

export default function StudentResults() {
  return (
    <section id="results" className="py-28 bg-[#120A2E] text-white relative overflow-hidden cyber-grid-bg">
      {/* Glow blobs */}
      <motion.div className="absolute top-[5%] left-[-6%] rounded-full pointer-events-none"
        style={{ width: 460, height: 460, background: "hsl(330 100% 65% / 0.1)", filter: "blur(110px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="absolute bottom-[8%] right-[-6%] rounded-full pointer-events-none"
        style={{ width: 420, height: 420, background: "hsl(180 100% 60% / 0.08)", filter: "blur(90px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }} />

      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${PINK}, ${CYAN}, transparent)`, boxShadow: "0 0 16px hsl(330 100% 65% / 0.6)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-slate-400 text-xs font-mono tracking-widest">▶ PROOF.LOG</span>
            <motion.span className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{ boxShadow: "0 0 8px hsl(330 100% 65%)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            <motion.span
              style={{
                background: `linear-gradient(90deg, ${PINK}, ${CYAN}, ${PINK})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px hsl(330 100% 65% / 0.5))",
                display: "inline-block",
              }}
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Kết quả thật từ học viên
            </motion.span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Điểm số thật, feedback thật từ Zalo &amp; Facebook — không phải lời quảng cáo.
          </p>
        </motion.div>

        {/* ── Featured testimonial ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-16"
          style={{
            background: "hsl(222 47% 7%)",
            border: `1px solid ${PINK.replace(")", " / 0.3)")}`,
            boxShadow: "0 0 50px hsl(330 100% 65% / 0.12)",
          }}
        >
          {/* corner brackets */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l pointer-events-none z-10" style={{ borderColor: CYAN, opacity: 0.6 }} />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r pointer-events-none z-10" style={{ borderColor: PINK, opacity: 0.6 }} />

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: score screenshot */}
            <div className="relative flex items-center justify-center p-8 lg:p-10"
              style={{ background: "radial-gradient(circle at 50% 40%, hsl(330 100% 65% / 0.12), transparent 70%)" }}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-[320px]"
                style={{ boxShadow: "0 0 40px hsl(180 100% 60% / 0.18)" }}>
                <img src={heroScore} alt="Kết quả PTE học viên tại Griffith University, tất cả kỹ năng trên 50 điểm" loading="lazy" className="w-full block" />
              </div>
            </div>

            {/* Right: quote */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-mono tracking-widest px-2 py-0.5 rounded-full"
                  style={{ color: CYAN, background: "hsl(180 100% 60% / 0.1)", border: `1px solid ${CYAN.replace(")", " / 0.35)")}` }}>
                  EVIDENCE_01
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5" /> Griffith University · Úc
                </span>
              </div>

              <Quote className="w-9 h-9 mb-3" style={{ color: PINK, filter: "drop-shadow(0 0 10px hsl(330 100% 65% / 0.6))" }} />
              <p className="text-lg md:text-xl leading-relaxed text-slate-100 font-medium mb-6">
                “Vừa đi làm vừa ôn thi ở tuổi không còn trẻ, mình từng kẹt mãi ở 48-52 điểm, thiếu chuẩn PR.
                Nhờ khoá Speaking của cô Thuỷ, mình đạt kết quả vượt mong đợi — tất cả kỹ năng đều trên 50,
                đủ điều kiện nộp hồ sơ PR!”
              </p>

              {/* Score chips */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {heroSkills.map((s) => (
                  <div key={s.skill} className="rounded-xl px-2 py-2 text-center"
                    style={{ background: "hsl(222 47% 10%)", border: "1px solid hsl(330 100% 65% / 0.2)" }}>
                    <div className="text-xl font-extrabold font-mono" style={{ color: CYAN }}>{s.val}</div>
                    <div className="text-[9px] text-slate-500 tracking-wider uppercase mt-0.5">{s.skill}</div>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ color: "hsl(142 70% 70%)", background: "hsl(142 70% 45% / 0.12)", border: "1px solid hsl(142 70% 55% / 0.35)" }}>
                  <CheckCircle2 className="w-3.5 h-3.5" /> Tất cả kỹ năng &gt; 50
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ color: PINK, background: "hsl(330 100% 65% / 0.1)", border: `1px solid ${PINK.replace(")", " / 0.35)")}` }}>
                  <ShieldCheck className="w-3.5 h-3.5" /> Đủ điều kiện nộp hồ sơ PR
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Student stories ── */}
        <div className="mb-24">
          <BlockLabel tag="▶ STORY.LOG" title="Học viên kể lại hành trình" subtitle="Những chia sẻ thật, bằng chính lời của học viên đã đồng hành cùng cô Thuỷ." />
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <StoryCard key={s.name} story={s} index={i} />
            ))}
          </div>
        </div>

        {/* ── Videos ── */}
        <div className="mb-24">
          <BlockLabel tag="▶ VIDEO.FEED" title="Video minh chứng thật từ học viên" subtitle="Học viên tự quay, chia sẻ trực tiếp về hành trình và kết quả của mình." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${CYAN.replace(")", " / 0.3)")}`, background: "hsl(222 47% 6%)", boxShadow: "0 0 24px hsl(180 100% 60% / 0.1)" }}
              >
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
                  <span className="w-2 h-2 rounded-full" style={{ background: PINK, boxShadow: `0 0 6px ${PINK}` }} />
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">HV_0{i + 1}.MP4</span>
                </div>
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  preload="none"
                  playsInline
                  className="w-full aspect-[9/16] object-cover bg-black"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Before / after scores ── */}
        <div className="mb-24">
          <BlockLabel tag="▶ SCORE.DELTA" title="Điểm số trước &amp; sau khi học" subtitle="Kết quả thi thật của học viên — bằng chứng rõ ràng về mức tăng điểm." />

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {beforeAfter.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{ background: "hsl(222 47% 7%)", border: "1px solid hsl(330 100% 65% / 0.22)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-white">{r.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-extrabold font-mono px-3 py-1 rounded-full"
                    style={{ color: "hsl(142 70% 70%)", background: "hsl(142 70% 45% / 0.12)", border: "1px solid hsl(142 70% 55% / 0.3)" }}>
                    <TrendingUp className="w-4 h-4" /> {r.from} → {r.to}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <figure>
                    <ProofImg src={r.before} alt={`Điểm PTE ${r.name} trước khi học`} className="h-48 rounded-lg" />
                    <figcaption className="text-center text-[11px] text-slate-500 mt-2 tracking-wider uppercase">Trước · {r.from}</figcaption>
                  </figure>
                  <figure>
                    <ProofImg src={r.after} alt={`Điểm PTE ${r.name} sau khi học`} className="h-48 rounded-lg" />
                    <figcaption className="text-center text-[11px] font-semibold mt-2 tracking-wider uppercase" style={{ color: "hsl(142 70% 70%)" }}>Sau · {r.to}</figcaption>
                  </figure>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoreCards.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-4 flex flex-col"
                style={{ background: "hsl(222 47% 7%)", border: "1px solid hsl(180 100% 60% / 0.2)" }}
              >
                <ProofImg src={c.img} alt={`Kết quả PTE ${c.name}`} className="h-60 rounded-lg mb-3" />
                <div className="mt-auto">
                  <div className="font-semibold text-white text-sm">{c.name}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: CYAN }}>{c.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Collage: many students ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <BlockLabel tag="▶ BATCH.RESULTS" title="Hàng loạt học viên đạt điểm" subtitle="Không chỉ 1-2 trường hợp cá biệt — kết quả thật của nhiều học viên tại EMG Hồ Chí Minh." />
          <div className="rounded-2xl overflow-hidden p-4" style={{ background: "hsl(222 47% 7%)", border: "1px solid hsl(330 100% 65% / 0.2)" }}>
            <ProofImg src={collageEmg} alt="Bộ sưu tập điểm thi PTE của nhiều học viên" className="max-h-[620px] rounded-lg" />
          </div>
        </motion.div>

        {/* ── Feedback gallery ── */}
        <div className="mb-24">
          <BlockLabel tag="▶ INBOX.LOG" title="Học viên nhắn gì cho cô Thuỷ?" subtitle="Feedback thật từ Zalo &amp; Facebook của học viên." />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {feedback.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Feedback học viên số ${i + 1}`}
                loading="lazy"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="w-full mb-5 rounded-xl border border-white/10 break-inside-avoid"
                style={{ boxShadow: "0 0 20px rgba(0,0,0,0.4)" }}
              />
            ))}
          </div>
        </div>

        {/* ── Class atmosphere ── */}
        <div className="mb-20">
          <BlockLabel tag="▶ LIVE.CLASS" title="Không khí lớp học thật" subtitle="Bình luận trực tiếp của học viên ngay trong buổi học trên Zalo." />
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x -mx-1 px-1">
            {classShots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Không khí lớp học số ${i + 1}`}
                loading="lazy"
                className="h-[420px] w-auto rounded-xl border border-white/10 shrink-0 snap-start bg-black object-contain"
              />
            ))}
          </div>
        </div>

        {/* ── Closing CTA ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl px-6 py-12 relative overflow-hidden"
          style={{ background: "radial-gradient(circle at 50% 0%, hsl(330 100% 65% / 0.12), transparent 70%), hsl(222 47% 7%)", border: "1px solid hsl(330 100% 65% / 0.25)" }}
        >
          <p className="text-slate-300 text-lg mb-1">Và còn <span className="font-bold text-white">hàng trăm minh chứng khác</span> từ học viên.</p>
          <p className="text-slate-500 text-sm mb-7">Bạn sẽ là kết quả tiếp theo?</p>
          <motion.a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-extrabold text-base relative overflow-hidden group"
            style={{ background: `linear-gradient(135deg, ${PINK}, hsl(310 100% 60%))`, color: "#fff", letterSpacing: "0.04em" }}
            animate={{ boxShadow: ["0 0 20px hsl(330 100% 65% / 0.35)", "0 0 32px hsl(330 100% 65% / 0.5)", "0 0 20px hsl(330 100% 65% / 0.35)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }} />
            <span className="relative z-10">Đăng ký ngay</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
