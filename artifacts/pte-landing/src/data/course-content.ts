// Centralized content data for PTE Talents Landing Page

export const siteConfig = {
  phone: "0357930867",
  phoneFormatted: "0357 930 867",
  zaloUrl: "https://zalo.me/0357930867",
  checkoutUrl: "https://landing-page-sync-nguyenthuyhanu9.replit.app/",
  email: "contact@ptetalents.edu.vn",
  address: "Hà Nội, Việt Nam"
};

export const navLinks = [
  { href: "#about", label: "Về Cô Thuỷ" },
  { href: "#who", label: "Dành cho ai?" },
  { href: "#roadmap", label: "Lộ trình 30 Ngày" },
  { href: "#results", label: "Thành quả" },
];

export const journey = [
  { value: "CON SỐ 0", label: "XUẤT PHÁT", kind: "start" as const },
  { value: "24+", label: "Beginner", kind: "mid" as const },
  { value: "36+", label: "Elementary", kind: "mid" as const },
  { value: "50+", label: "Intermediate", kind: "mid" as const },
  { value: "65+", label: "Upper-Int", kind: "mid" as const },
  { value: "79+", label: "Advanced", kind: "end" as const },
];

export const finalResults = [
  "Xây dựng nền tảng phát âm và phản xạ tiếng Anh.",
  "Hiểu rõ cách Pearson cho điểm và biết cách học đúng trọng tâm.",
  "Nắm chắc các dạng bài trọng tâm và chiến lược tăng điểm.",
  "Biết cách tự học, tự luyện và tự chữa bài.",
  "Thành thạo việc sử dụng website PTE Talents và APEUni để tiếp tục nâng điểm.",
  "Tự tin chinh phục mục tiêu PTE 24+ | 50+ | 65+ | 79+."
];

export const pricing = {
  currentPrice: "5.999.000đ",
  originalPrice: "10.500.000đ",
  savings: "4.501.000đ (43%)",
  giftTitle: "Ưu đãi đăng ký tháng này",
  giftDesc: "Tặng quyền truy cập độc quyền web chữa bộ tủ PTE Talents, dùng không giới hạn 90 ngày (trị giá 2.999.000đ)."
};

export const teacherProfile = {
  name: "NGUYỄN THỊ THUỶ",
  title: "Chuyên gia PTE Talents",
  speakingScore: "90/90",
  speakingTitle: "PTE SPEAKING",
  quote: "Bạn không thiếu cố gắng — bạn chỉ thiếu lộ trình đúng.",
  stats: [
    { value: "10 NĂM", label: "Giảng dạy" },
    { value: "4 NĂM", label: "PTE" },
    { value: "500+", label: "Học viên" },
  ],
  education: [
    { school: "Đại Học Hà Nội", detail: "Chuyên ngành Ngôn Ngữ Anh" },
    { school: "Đại Học Ngoại Ngữ Hà Nội", detail: "Tiền thân trường Đại Học Hà Nội" }
  ],
  bullets: [
    {
      tone: "primary" as const,
      text: "Sau nhiều năm đứng lớp, điều cô Thuỷ nhận ra: phần lớn học viên chưa đạt mục tiêu không phải vì thiếu cố gắng — mà vì chưa có lộ trình học đúng và phương pháp luyện tập hiệu quả."
    },
    {
      tone: "secondary" as const,
      text: "Giai đoạn 1 của khoá học tập trung vào phương pháp phát âm chuẩn xác và duy trì độ trôi chảy (fluency) tự nhiên — yếu tố then chốt đã được cô kiểm chứng trực tiếp trong kỳ thi thật Pearson."
    },
    {
      tone: "primary" as const,
      text: "Cô trực tiếp xây dựng hệ thống học tập PTE Talents, kết hợp giữa video bài giảng lý thuyết trực quan, website thực hành, bộ đề tủ trọng tâm và quy trình chữa bài chi tiết cho từng học viên."
    },
    {
      tone: "primary" as const,
      text: "Cô không dạy mẹo một cách rập khuôn, mà trang bị tư duy hiểu rõ cơ chế chấm điểm của AI Pearson để học viên có phương pháp ôn luyện bền vững và tự tin bứt phá mục tiêu."
    }
  ]
};

export const personas = [
  {
    id: "lost",
    badge: "Mất gốc tiếng Anh",
    title: "Mất nền tảng tiếng Anh",
    desc: "Bỏ tiếng Anh đã lâu, phát âm chưa chuẩn, thiếu phản xạ nghe nói. Bạn cần xây dựng lại nền tảng vững chắc trước khi chinh phục các dạng bài PTE phức tạp.",
    tags: ["Phát âm yếu", "Thiếu phản xạ", "Cần xây nền"],
    colorTheme: "blue"
  },
  {
    id: "urgent",
    badge: "Cần điểm gấp",
    title: "Cần đạt điểm trong thời gian ngắn",
    desc: "Deadline du học, nộp hồ sơ visa, định cư hoặc tốt nghiệp đang đến rất gần. Bạn cần một chiến thuật ôn luyện tập trung, bỏ qua các phần rườm rà không cần thiết.",
    tags: ["Deadline gần", "Cần tăng điểm", "Học đúng trọng tâm"],
    colorTheme: "amber"
  },
  {
    id: "stuck",
    badge: "Điểm giậm chân tại chỗ",
    title: "Điểm số chững lại, chưa bứt phá",
    desc: "Đã tự ôn luyện hoặc học ở nhiều trung tâm khác nhau, thậm chí đã thi thử/thi thật 1-2 lần nhưng vẫn thiếu vài điểm. Bạn cần tìm ra đúng lỗ hổng để tối ưu điểm số.",
    tags: ["Điểm chững", "Đã thi lại", "Cần chiến lược"],
    colorTheme: "rose"
  },
  {
    id: "confused",
    badge: "Mông lung phương pháp",
    title: "Chưa có phương pháp học đúng",
    desc: "Chưa hiểu rõ cơ chế chấm điểm chéo của Pearson AI, học lan man dàn trải tất cả các phần. Bạn cần một bộ template chuẩn hóa và quy trình chữa bài chi tiết.",
    tags: ["Pearson AI Scoring", "Học lan man", "Cần người chữa bài"],
    colorTheme: "emerald"
  }
];

export const outcomes = [
  "Xây dựng nền tảng phát âm chuẩn quốc tế và phản xạ nghe nói tự nhiên",
  "Hiểu rõ cơ chế chấm điểm của Pearson AI để học và làm bài đúng trọng tâm",
  "Nắm chắc các dạng bài cốt lõi (Read Aloud, WFD, Repeat Sentence) và chiến thuật tăng điểm",
  "Biết cách tự học, tự dùng website luyện tập và phân tích lỗi sai để sửa chữa",
  "Làm chủ toàn bộ các tính năng chữa bài trên hệ sinh thái PTE Talents và APEUni",
  "Tự tin bước vào phòng thi thật để chinh phục mục tiêu 24+ | 50+ | 65+ | 79+"
];

export const targets = [
  { score: "24+", label: "BEGINNER", desc: "Visa Work & Holiday (Úc 462), định cư diện lao động tay nghề", colorTheme: "blue" },
  { score: "50+", label: "INTERMEDIATE", desc: "Xét tuyển Đại học, Visa 485, du học/định cư cơ bản (tương đương IELTS 6.0)", colorTheme: "emerald" },
  { score: "65+", label: "UPPER-INT", desc: "Học thạc sĩ nước ngoài, cộng 10 điểm hồ sơ định cư Úc (tương đương IELTS 7.0)", colorTheme: "purple" },
  { score: "79+", label: "ADVANCED", desc: "Cộng tối đa 20 điểm định cư Úc/New Zealand, học bổng lớn (tương đương IELTS 8.0)", colorTheme: "amber" },
];

export const roadmapPhases = [
  {
    day: "NGÀY 1–10",
    title: "Xây dựng nền tảng phát âm & phản xạ",
    objective: "Luyện phát âm chuẩn IPA và độ trôi chảy (Oral Fluency) — nền tảng quan trọng nhất trong PTE Speaking.",
    groups: [
      {
        items: [
          { text: "**Hơn 50 câu Read Aloud trọng điểm** — tích hợp bài học video khẩu hình chi tiết, file âm thanh chuẩn và ngắt nhịp khoa học." },
          { text: "Học **IPA tinh gọn** — tập trung sửa triệt để 4 lỗi kinh điển: nuốt âm cuối, không nối âm, đặt sai trọng âm và ngữ điệu bằng phẳng." },
          { text: "**Luyện nghe & shadowing liên tục 10 ngày** — rèn luyện phản xạ phát âm tự nhiên, nhìn từ là bật ra âm chuẩn." },
          { text: "**Ghi âm và nộp bài tập hàng ngày** — nhận phản hồi chi tiết từ cô Thuỷ và đội ngũ học thuật." },
        ]
      }
    ],
    details: [
      { text: "Rèn luyện kỹ thuật thở sâu, lấy hơi từ bụng để kéo dài câu dài mà không bị đứt quãng hoặc mất fluency." },
      { text: "Hướng dẫn cài đặt, căn chỉnh khoảng cách micro phù hợp để lọc tiếng ồn và ghi âm tốt nhất." }
    ],
    pronunciationModules: [
      {
        id: "mod-1",
        title: "Module 1",
        name: "Tổng quan phát âm",
        badge: "8 bài học",
        description: "Định hướng & xây dựng tư duy phát âm chuẩn IPA, nhận diện âm vô thanh/hữu thanh và cách ghép âm đọc liền mạch.",
        lessons: [
          { no: "01", title: "Định hướng khóa học phát âm" },
          { no: "02", title: "Phiên âm IPA và cách tra phiên âm" },
          { no: "03", title: "Tổng quan 12 nguyên âm đơn" },
          { no: "04", title: "Tổng quan 8 nguyên âm đôi" },
          { no: "05", title: "Tổng quan 24 phụ âm" },
          { no: "06", title: "Âm vô thanh, âm hữu thanh" },
          { no: "07", title: "Cách tính âm tiết trong 1 từ" },
          { no: "08", title: "Cách đọc đủ – rõ – liền mạch các âm tiết" }
        ]
      },
      {
        id: "mod-2",
        title: "Module 2",
        name: "Nguyên âm IPA",
        badge: "12 bài học",
        description: "Luyện khẩu hình chuẩn từng cặp nguyên âm ngắn/dài dễ nhầm lẫn và nguyên âm đôi trong đề thi PTE.",
        lessons: [
          { no: "09", title: "Phân biệt /æ/ và /e/" },
          { no: "10", title: "Phân biệt /æ/, /ɑ:/ và /ʌ/" },
          { no: "11", title: "Phân biệt /ɒ/ và /ɔ:/" },
          { no: "12", title: "Phân biệt /ɪ/ và /i:/ (ee, ea)" },
          { no: "13", title: "Âm /u:/, /ju:/ (oo, ew, u)" },
          { no: "14", title: "Phân biệt /ʊ/ và /u:/" },
          { no: "15", title: "Âm /ə/ và /ɜ:/ (er, ir, ur)" },
          { no: "16", title: "Nguyên âm đôi /eɪ/ (ay, ai, a_e)" },
          { no: "17", title: "Âm /əʊ/ (o, oa, ow, o_e)" },
          { no: "18", title: "Âm /ɪə/ (ear, eer)" },
          { no: "19", title: "Âm /eə/ (air, are, eir)" },
          { no: "20", title: "Ôn tập nguyên âm – Mini Game", tag: "🎮 Game" }
        ]
      },
      {
        id: "mod-3",
        title: "Module 3",
        name: "Hệ thống Phụ âm",
        badge: "17 bài học",
        description: "Luyện âm cuối, âm chặn, hệ thống âm gió (/s/, /z/, /ʃ/, /tʃ/) và các phụ âm khó hay bị mất điểm.",
        sections: [
          {
            part: "Part 3A: Âm cuối & Âm chặn",
            lessons: [
              { no: "21", title: "Âm cuối (ending sounds)" },
              { no: "22", title: "Âm /t/ – đọc chuẩn" },
              { no: "22.1", title: "Âm /t/ – Nuốt âm" },
              { no: "23", title: "Âm /k/ – c, ck, x" },
              { no: "24", title: "Âm /p/ và /ps/" },
              { no: "25", title: "Âm chặn (stop sounds)" }
            ]
          },
          {
            part: "Part 3B: Âm gió & Âm bật hơi",
            lessons: [
              { no: "26", title: "Đọc âm /s/ (đặc biệt khi giữa từ)" },
              { no: "26.1", title: "Phân biệt /s/ và /z/" },
              { no: "27", title: "Âm /ʃ/ – sh, ti, ci" },
              { no: "28", title: "Âm /tʃ/ – ch, -ture" },
              { no: "29", title: "Âm /dʒ/ và /ʒ/ – j, ge, -sion" },
              { no: "30", title: "Phụ âm bật hơi s, sh, ch, f, v, th, ge" },
              { no: "31.1", title: "Các đuôi -age /ɪdʒ/" }
            ]
          },
          {
            part: "Part 3C: Các phụ âm khó & Sửa lỗi",
            lessons: [
              { no: "32", title: "Âm /θ/ và /ð/ – th" },
              { no: "33", title: "Âm th đi với phụ âm khác" },
              { no: "34", title: "Âm /l/ cuối từ – dark L" },
              { no: "35", title: "Phụ âm kép" },
              { no: "36", title: "Sửa âm r, cr, tr, str" },
              { no: "37", title: "Ôn tập phụ âm – Mini Game", tag: "🎮 Game" }
            ]
          }
        ]
      },
      {
        id: "mod-4",
        title: "Module 4",
        name: "Trọng âm & Ngữ điệu",
        badge: "8 bài học",
        description: "Bí quyết đọc đuôi -s/-ed, cụm âm chặn và nhịp điệu câu chuẩn tự nhiên giúp kéo điểm Oral Fluency.",
        lessons: [
          { no: "38", title: "Quy tắc đọc đuôi -s (/s/ – /z/ – /ɪz/)", tag: "🔥 Trọng tâm" },
          { no: "39", title: "Quy tắc đọc đuôi -ed (/t/ – /d/ – /ɪd/)", tag: "🔥 Trọng tâm" },
          { no: "40", title: "Cách đọc đuôi -se, -sed, -ze, -zed" },
          { no: "41", title: "Cách đọc đuôi -s, -ce, -x" },
          { no: "42", title: "Các đuôi -tion, -shion, -cion, -cient, -cian, -ciency" },
          { no: "43", title: "Cụm âm chặn + /s/ (/ts/, /ks/, /ps/)" },
          { no: "44", title: "Luyện tập câu với nhiều âm /s/" },
          { no: "Tài liệu", title: "Bảng đuôi từ thường gặp", tag: "📚 Tài liệu" }
        ]
      }
    ],
    results: [
      "Nắm vững bảng IPA, tự nhận diện và sửa lỗi phát âm của bản thân.",
      "Vượt qua nỗi sợ nói tiếng Anh, hình thành thói quen nói trôi chảy không ngập ngừng.",
      "Có đà phản xạ vững chắc để bước vào ôn luyện các dạng bài Speaking chính."
    ],
    resultMilestone: "Nền tảng vững vàng tương đương band 24–36"
  },
  {
    day: "NGÀY 11–15",
    title: "Giải mã cấu trúc đề PTE & Chiến lược mục tiêu",
    objective: "Chiến lược học đúng hướng giúp bạn tiết kiệm 80% thời gian ôn luyện. Việc học phát âm trước 10 ngày đảm bảo bạn có đủ 'chất liệu' phản xạ trước khi áp dụng chiến thuật phòng thi.",
    note: "Hiểu sâu sắc cách chấm điểm chéo (cross-scoring) của Pearson AI và lập kế hoạch ôn tập cá nhân hóa.",
    groups: [
      {
        heading: "Nội dung trọng tâm",
        items: [
          { text: "Phân tích toàn diện cấu trúc đề thi PTE thực tế và tháo gỡ các lầm tưởng phổ biến." },
          { text: "Bản đồ phân bổ điểm số chéo giữa các kỹ năng (Speaking chấm cho Listening, Writing chấm cho Reading...)" },
          { text: "Nhận diện nhóm câu hỏi 'siêu trọng tâm' chiếm hơn 70% tổng số điểm toàn bài thi." },
          { text: "Hiểu rõ cơ chế chấm content của AI để áp dụng template thông minh cho từng mục tiêu điểm." },
          { text: "Cá nhân hóa chiến lược ôn tập dựa trên target cụ thể: 24+, 50+, 65+ hay 79+." }
        ]
      }
    ],
    details: [
      {
        text: "Lập tài khoản và làm quen với bộ 3 công cụ độc quyền:",
        sub: [
          "**APEUni:** Nền tảng luyện đề giả lập thi thật với thuật toán chấm điểm AI sát thực tế nhất.",
          "**Web PTE Talents:** Kho giải đề chi tiết, dịch nghĩa, chỉ rõ bẫy và từ khóa cốt lõi.",
          "**Skool Community:** Group hỗ trợ 1-1, kho lưu trữ tài liệu, template độc quyền và cập nhật đề tủ hàng tuần."
        ]
      }
    ],
    results: [
      "Không còn học dàn trải, biết rõ cần dồn sức vào dạng bài nào cho mục tiêu cá nhân.",
      "Sở hữu lộ trình hành động chi tiết từng ngày.",
      "Sử dụng thuần thục các công cụ hỗ trợ luyện tập và hỏi đáp."
    ],
    resultMilestone: "Sở hữu bản đồ ôn luyện thông minh"
  },
  {
    day: "NGÀY 16–26",
    title: "Thực chiến đề tủ & Làm chủ các dạng câu hỏi",
    objective: "Học sâu phương pháp làm bài, thực hành trực tiếp trên kho đề tủ khổng lồ của cả 4 kỹ năng.",
    note: "Đây là giai đoạn thực chiến cốt lõi. Học viên sẽ đi qua từng kỹ năng, học đến đâu thực hành và chữa bài đến đó để khắc sâu kiến thức.",
    skillGrid: {
      heading: "Danh sách dạng bài thực chiến",
      categories: [
        {
          icon: "Speaking",
          name: "Speaking (Nói)",
          types: [
            { label: "Read Aloud", hot: true },
            { label: "Repeat Sentence", hot: true },
            { label: "Describe Image", hot: true },
            { label: "Retell Lecture", hot: true },
            { label: "Answer Short Question" }
          ]
        },
        {
          icon: "Writing",
          name: "Writing (Viết)",
          types: [
            { label: "Summarize Written Text", hot: true },
            { label: "Write Essay", hot: true }
          ]
        },
        {
          icon: "Reading",
          name: "Reading (Đọc)",
          types: [
            { label: "FIB (Fill in Blanks) Kéo thả", hot: true },
            { label: "FIB Chọn đáp án", hot: true },
            { label: "Re-order Paragraphs" }
          ]
        },
        {
          icon: "Listening",
          name: "Listening (Nghe)",
          types: [
            { label: "Write from Dictation (WFD)", hot: true },
            { label: "Summarize Spoken Text", hot: true },
            { label: "Fill in Blanks", hot: true },
            { label: "Highlight Incorrect Words" }
          ]
        }
      ],
      note: "🔥 = Dạng bài siêu trọng tâm, bắt buộc học sâu và áp dụng chính xác template."
    },
    groups: [
      {
        heading: "Quy trình thực chiến mỗi ngày",
        items: [
          { text: "Xem video bài giảng lý thuyết ngắn gọn → Nhận diện tips & áp dụng template chuẩn." },
          { text: "Thực hành giải đề tủ trên Web PTE Talents để hiểu logic đáp án và ghi nhớ cụm từ khóa." },
          { text: "Nộp bài ghi âm/bài viết lên hệ thống để cô Thuỷ trực tiếp chấm điểm, sửa phát âm và lỗi ngữ pháp." },
          { text: "Luyện tập củng cố trên APEUni để đo lường độ tiến bộ hàng ngày." }
        ]
      }
    ],
    details: [
      { text: "Xây dựng kỹ năng kiểm soát thời gian làm bài thi và rèn luyện phản xạ tập trung cao độ." }
    ],
    results: [
      "Thành thạo phương pháp giải của tất cả các dạng bài xuất hiện trong đề thi thật.",
      "Sở hữu bộ template độc quyền hoạt động tối ưu với thuật toán chấm điểm của Pearson AI.",
      "Khắc phục hoàn toàn các lỗi sai cố hữu nhờ quy trình chữa bài chi tiết."
    ],
    resultMilestone: "Sẵn sàng làm bài thi thử tổng hợp"
  },
  {
    day: "NGÀY 27–30",
    title: "Mock Test tổng duyệt & Tối ưu hóa điểm số",
    objective: "Tổng duyệt năng lực qua các bài thi thử đầy đủ, căn chỉnh chiến thuật phòng thi để bứt phá band điểm.",
    groups: [
      {
        heading: "Nội dung tổng kết",
        items: [
          { text: "Làm bài thi thử Mock Test (Full Test) giả lập 100% môi trường và áp lực thi thật." },
          { text: "Nhận bài chấm điểm, nhận xét và chữa chi tiết 1-1 trực tiếp từ cô Thuỷ để tìm ra lỗi sai cuối cùng." },
          { text: "Căn chỉnh chiến thuật phân bổ thời gian cho từng phần dựa trên thế mạnh thực tế của học viên." },
          { text: "Hướng dẫn tâm lý phòng thi, cách xử lý khi gặp sự cố micro hoặc mất tập trung." }
        ]
      }
    ],
    details: [
      { text: "Cung cấp cẩm nang và tài liệu tổng hợp tóm tắt toàn bộ công thức cốt lõi để ôn tập nhanh trước giờ thi." }
    ],
    results: [
      "Biết chính xác điểm số thực tế hiện tại và mức độ sẵn sàng cho kỳ thi thật.",
      "Tự tin 100% với chiến thuật làm bài rõ ràng, không bị động trước bất kỳ tình huống nào.",
      "Nắm vững phương pháp tự duy trì và nâng cao band điểm nếu cần ôn luyện thêm."
    ],
    resultMilestone: "Chinh phục kỳ thi thật với phong độ cao nhất"
  }
];

export const faqs = [
  {
    question: "Tôi bị mất gốc tiếng Anh hoàn toàn có thể học được khóa học này không?",
    answer: "Hoàn toàn học được. Khóa học được thiết kế bắt đầu từ con số 0. Trong 10 ngày đầu tiên, bạn sẽ được xây dựng lại từ đầu hệ thống phát âm IPA, phản xạ nghe nói và cách lấy hơi nói tự nhiên. Lộ trình đi từng bước nhỏ cùng sự chữa bài sát sao của cô Thuỷ và các trợ giảng sẽ giúp bạn lấy lại nền tảng cực kỳ nhanh chóng."
  },
  {
    question: "Khóa học này diễn ra dưới hình thức như thế nào?",
    answer: "Khóa học kết hợp phương pháp Hybrid thông minh: Bài giảng video lý thuyết ngắn gọn học trên Skool giúp bạn chủ động thời gian học mọi lúc mọi nơi; Kho đề tủ chữa chi tiết trên Web PTE Talents; Luyện tập chấm điểm AI trên APEUni; Và đặc biệt là quy trình nộp bài tập ghi âm/viết hàng ngày để cô Thuỷ trực tiếp chữa lỗi phát âm và chỉnh sửa lỗi sai 1-1 qua Zalo."
  },
  {
    question: "Học PTE so với IELTS thì cái nào dễ đạt điểm hơn?",
    answer: "PTE dễ đạt điểm mục tiêu hơn rất nhiều so với IELTS, đặc biệt là với các target như 50+ (tương đương IELTS 6.0) hoặc 65+ (tương đương IELTS 7.0). Lý do là vì bài thi PTE chấm hoàn toàn bằng máy (AI Pearson), các phần thi có cơ chế chấm điểm chéo bổ trợ lẫn nhau, và bạn có thể áp dụng các bộ template chuẩn hóa để đạt điểm tối đa ở phần Writing và Speaking mà không cần vốn từ vựng quá học thuật."
  },
  {
    question: "Tôi bận đi làm/đi học cả ngày, có theo kịp lịch trình 30 ngày không?",
    answer: "Lộ trình 30 ngày được thiết kế linh hoạt cho người bận rộn. Mỗi ngày bạn chỉ cần dành từ 1 đến 1.5 tiếng để xem bài giảng và thực hành. Bạn hoàn toàn có thể chủ động học vào buổi tối hoặc sáng sớm. Đội ngũ hỗ trợ học thuật sẽ luôn theo sát, nhắc nhở và đồng hành cùng bạn để đảm bảo không bị bỏ lại phía sau."
  },
  {
    question: "Khóa học có cam kết đầu ra không?",
    answer: "Khóa học cam kết hỗ trợ đồng hành và chữa bài cho học viên đến khi đạt mục tiêu điểm. Nếu sau 30 ngày thi thử Mock Test chưa đạt band mong muốn, học viên sẽ được cô Thuỷ phân tích cụ thể lỗ hổng kiến thức và thiết kế thêm bài tập bổ trợ để tiếp tục ôn tập miễn phí cho đến khi tự tin đi thi thật."
  }
];
