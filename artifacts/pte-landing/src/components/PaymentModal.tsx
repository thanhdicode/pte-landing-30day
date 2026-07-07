import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, CheckCheck, CreditCard } from "lucide-react";
import { useState } from "react";

const ACCOUNT = "19027789210035";
const BANK_ID  = "TCB";
const NAME     = "NGUYEN THI THUY";
const QR_URL   = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT}-compact2.png?accountName=${encodeURIComponent(NAME)}&addInfo=${encodeURIComponent("Khoa Dong Hanh 30 Ngay PTE")}`;

interface Props { onClose: () => void; }

export default function PaymentModal({ onClose }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(ACCOUNT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 24 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: "hsl(222 47% 7%)",
            border: "1px solid hsl(330 100% 65% / 0.35)",
            boxShadow: "0 0 60px hsl(330 100% 65% / 0.25), 0 24px 48px rgba(0,0,0,0.6)",
          }}
        >
          {/* Top neon line */}
          <div className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg, transparent, hsl(330 100% 65%), hsl(180 100% 60%), transparent)" }} />

          {/* Corner brackets */}
          {["top-3 left-3 border-t border-l border-primary/50",
            "top-3 right-3 border-t border-r border-cyan-400/50",
            "bottom-3 left-3 border-b border-l border-cyan-400/50",
            "bottom-3 right-3 border-b border-r border-primary/50",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-5 h-5 pointer-events-none ${cls}`} />
          ))}

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 pt-5">
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="w-4 h-4 text-primary" style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 65%))" }} />
              <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Thanh toán học phí</span>
            </div>
            <h2 className="text-lg font-extrabold text-white mb-5"
              style={{ textShadow: "0 0 20px hsl(330 100% 65% / 0.4)" }}>
              Đăng ký Khoá Đồng Hành 30 Ngày
            </h2>

            {/* QR */}
            <div className="flex justify-center mb-5">
              <div className="rounded-xl overflow-hidden p-2 bg-white"
                style={{ boxShadow: "0 0 24px hsl(330 100% 65% / 0.4)" }}>
                <img
                  src={QR_URL}
                  alt="QR Thanh toán Techcombank"
                  className="w-52 h-52 object-contain"
                  onError={e => { (e.target as HTMLImageElement).src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ACCOUNT}`; }}
                />
              </div>
            </div>

            {/* Bank info */}
            <div className="rounded-xl p-4 space-y-3 mb-4"
              style={{ background: "hsl(222 47% 10%)", border: "1px solid hsl(330 100% 65% / 0.15)" }}>
              {[
                { label: "Ngân hàng",   value: "Techcombank (TCB)" },
                { label: "Tên tài khoản", value: "Nguyễn Thị Thuỷ" },
                { label: "Nội dung CK", value: "Khoa Dong Hanh 30 Ngay PTE" },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">{row.label}</span>
                  <span className="text-slate-200 font-medium text-right">{row.value}</span>
                </div>
              ))}

              {/* STK with copy */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Số tài khoản</span>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold tracking-wide"
                    style={{ textShadow: "0 0 10px hsl(330 100% 65% / 0.6)" }}>
                    {ACCOUNT}
                  </span>
                  <button
                    onClick={copy}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Sao chép STK"
                  >
                    {copied
                      ? <CheckCheck className="w-4 h-4 text-green-400" />
                      : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-xs text-slate-500 leading-relaxed">
              Quét mã QR bằng app ngân hàng bất kỳ.<br />
              Sau khi chuyển khoản, Cô Thuỷ sẽ liên hệ xác nhận trong <span className="text-primary">24h</span>.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
