import pteLogo from '@assets/pte-logo-clean.png';

export default function Footer() {
  return (
    <footer className="bg-[#25101B] py-12 border-t border-primary/20 relative overflow-hidden cyber-grid-bg">
      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={pteLogo}
            alt="PTE Talents Logo"
            className="h-10 w-auto opacity-80 hover:opacity-100 transition-all"
            style={{ filter: 'drop-shadow(0 0 8px hsl(330 100% 65% / 0.4))' }}
          />
          <p className="text-slate-500 text-sm text-center md:text-left">
            Khóa Đồng Hành 30 Ngày cùng Cô Nguyễn Thị Thuỷ. <br />
            Bứt phá mục tiêu PTE nhanh chóng, hiệu quả.
          </p>
        </div>

        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} PTE Talents. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
