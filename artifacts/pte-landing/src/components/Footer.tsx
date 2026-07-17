import pteLogo from '@assets/pte-logo-clean.png';
import { siteConfig } from '../data/course-content';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src={pteLogo}
            alt="PTE Talents Logo"
            className="h-9 w-auto opacity-90 hover:opacity-100 transition-all"
          />
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left leading-relaxed mt-1">
            Khóa Đồng Hành 30 Ngày cùng Cô Nguyễn Thị Thuỷ. <br />
            Học tập tinh gọn, đồng hành chuyên môn đến khi đạt mục tiêu điểm số.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-400">
          <span>Liên hệ: {siteConfig.phoneFormatted}</span>
          <span>© {new Date().getFullYear()} PTE Talents. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
