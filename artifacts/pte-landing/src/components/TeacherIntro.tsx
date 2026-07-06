import { motion } from "framer-motion";
import teacherPhoto from '@assets/teacher-photo.png';
import { Award, BookOpen, GraduationCap, Heart } from "lucide-react";

export default function TeacherIntro() {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      value: "Đại học Hà Nội",
      label: "Cử nhân Tiếng Anh"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      value: "10 Năm",
      label: "Kinh nghiệm giảng dạy"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      value: "5 Năm",
      label: "Chuyên luyện thi PTE"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      value: "Tận tâm",
      label: "Đồng hành sát sao"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10">
              <img 
                src={teacherPhoto} 
                alt="Cô Nguyễn Thị Thuỷ - Chuyên gia PTE" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative background blocks behind image */}
            <div className="absolute top-8 -left-8 w-full h-full bg-accent rounded-[2rem] -z-10" />
            <div className="absolute -bottom-8 right-8 w-full h-full border-2 border-primary/20 rounded-[2rem] -z-10" />
            
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] z-20 hidden md:block">
              <p className="text-primary font-heading font-bold text-4xl mb-1">"Hiểu đúng"</p>
              <p className="text-sm text-muted-foreground leading-tight">là chìa khoá để chinh phục điểm PTE thật nhanh.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary font-medium text-sm mb-6">
              <Heart className="w-4 h-4 fill-primary" />
              <span>Người đồng hành cùng bạn</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              Gặp gỡ <span className="text-primary">Cô Nguyễn Thị Thuỷ</span>
            </h2>
            
            <div className="prose prose-lg text-muted-foreground mb-10">
              <p>
                Với hơn 10 năm kinh nghiệm giảng dạy tiếng Anh và 5 năm chuyên sâu nghiên cứu về PTE, 
                cô Thuỷ hiểu rõ những khó khăn mà học viên Việt Nam thường gặp phải — từ việc phát âm sai, 
                thiếu phản xạ, đến việc "mất gốc" tiếng Anh nhưng lại cần điểm gấp cho mục tiêu du học và định cư.
              </p>
              <p>
                Không chỉ là một giáo viên, cô Thuỷ là <strong>người đồng hành</strong> — hướng dẫn bạn từng bước, 
                chỉ ra những lỗi sai nhỏ nhất, và giúp bạn lấy lại sự tự tin. Khóa học này không chỉ truyền đạt kiến thức, 
                mà còn truyền cảm hứng để bạn yêu tiếng Anh hơn.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:bg-accent/30 hover:border-accent">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}