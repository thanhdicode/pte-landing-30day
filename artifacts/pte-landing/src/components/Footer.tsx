import pteLogo from '@assets/image_1783362987710.png';

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={pteLogo} alt="PTE Talents Logo" className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Khóa Đồng Hành 30 Ngày cùng Cô Nguyễn Thị Thuỷ. <br/>
            Bứt phá mục tiêu PTE nhanh chóng, hiệu quả.
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} PTE Talents. All rights reserved.
        </div>
      </div>
    </footer>
  );
}