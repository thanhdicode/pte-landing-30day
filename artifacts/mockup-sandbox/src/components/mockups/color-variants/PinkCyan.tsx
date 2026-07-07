export function PinkCyan() {
  const primary = "#FF4DA6";
  const secondary = "#00FFFF";
  const scores = [
    { val: "24+", label: "BEGINNER", color: "#00FFFF" },
    { val: "50+", label: "INTERMEDIATE", color: "#FF4DA6" },
    { val: "65+", label: "UPPER-INT", color: "#a78bfa" },
    { val: "79+", label: "ADVANCED", color: "#facc15" },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "#020617", fontFamily: "'Plus Jakarta Sans', sans-serif", position: "relative", overflow: "hidden" }}>
      {/* Grid bg */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${primary}18 1px, transparent 1px), linear-gradient(90deg, ${primary}18 1px, transparent 1px)`, backgroundSize: "40px 40px", pointerEvents: "none" }} />
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "10%", right: "15%", width: 420, height: 420, background: `${primary}33`, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, background: `${secondary}22`, borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

      {/* Navbar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 48px", borderBottom: `1px solid ${primary}33`, position: "relative", zIndex: 10 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${primary}22`, border: `1.5px solid ${primary}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: primary, fontWeight: 800, letterSpacing: 1 }}>PTE</div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Về Cô Thuỷ", "Dành cho ai?", "Lộ trình", "Thành quả"].map(t => (
            <span key={t} style={{ color: "#94a3b8", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{t}</span>
          ))}
        </div>
        <button style={{ background: primary, color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: `0 0 20px ${primary}88` }}>Đăng ký học</button>
      </div>

      {/* Hero */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "60px 48px 40px", position: "relative", zIndex: 10 }}>
        {/* Left */}
        <div style={{ maxWidth: 620 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 50, border: `1px solid ${primary}44`, background: `${primary}11`, marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: primary, display: "inline-block", boxShadow: `0 0 8px ${primary}` }} />
            <span style={{ color: primary, fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>ĐANG TUYỂN SINH KHOÁ MỚI</span>
          </div>
          <div style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, letterSpacing: 4, marginBottom: 8, textTransform: "uppercase" }}>🚀 Khóa Đồng Hành</div>
          <div style={{ fontSize: 110, fontWeight: 900, lineHeight: 0.9, marginBottom: 12, background: `linear-gradient(135deg, #ffffff 0%, ${primary} 60%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            30 NGÀY
          </div>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: 2, marginBottom: 32, background: `linear-gradient(90deg, ${secondary}, #7dd3fc)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            CHINH PHỤC MỤC TIÊU PTE
          </div>

          {/* Score badges */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
            {scores.map(s => (
              <div key={s.val} style={{ padding: "8px 18px", borderRadius: 50, border: `1.5px solid ${s.color}66`, background: `${s.color}11`, textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 9, color: "#64748b", letterSpacing: 1 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16 }}>
            <button style={{ background: primary, color: "#fff", border: "none", borderRadius: 50, padding: "14px 32px", fontWeight: 800, fontSize: 14, cursor: "pointer", boxShadow: `0 0 30px ${primary}88`, letterSpacing: 1 }}>⚡ ĐĂNG KÝ NGAY — MIỄN PHÍ TƯ VẤN →</button>
            <button style={{ background: "transparent", color: "#e2e8f0", border: "1.5px solid #334155", borderRadius: 50, padding: "14px 28px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>▶ Xem lộ trình 30 ngày</button>
          </div>

          {/* Color label */}
          <div style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 8, background: `${primary}22`, border: `1px solid ${primary}44` }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: primary, display: "inline-block" }} />
            <span style={{ color: primary, fontSize: 13, fontWeight: 700 }}>Primary: {primary}</span>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: secondary, display: "inline-block", marginLeft: 8 }} />
            <span style={{ color: secondary, fontSize: 13, fontWeight: 700 }}>Accent: {secondary}</span>
          </div>
        </div>

        {/* HUD Card */}
        <div style={{ width: 340, background: "#0f172a", borderRadius: 24, border: `1.5px solid ${primary}44`, boxShadow: `0 0 40px ${primary}33`, overflow: "hidden", flexShrink: 0 }}>
          <div style={{ padding: "12px 18px", borderBottom: `1px solid ${primary}22`, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: primary, boxShadow: `0 0 8px ${primary}` }} />
            <span style={{ color: "#64748b", fontSize: 11, letterSpacing: 2, fontWeight: 600 }}>PTE_TALENTS.PROFILE</span>
          </div>
          <div style={{ height: 200, background: `linear-gradient(180deg, ${primary}22, transparent)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 60 }}>👩‍🏫</span>
          </div>
          <div style={{ padding: "0 20px 20px" }}>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>Cô Nguyễn Thị Thuỷ</div>
              <div style={{ fontSize: 13, color: primary, fontWeight: 600 }}>Chuyên gia PTE Talents</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[["10 NĂM","GIẢNG DẠY"],["4 NĂM","PTE"],["500+","HỌC VIÊN"]].map(([v,l]) => (
                <div key={l} style={{ textAlign: "center", padding: "10px 4px", background: "#1e293b", borderRadius: 10, border: `1px solid ${primary}22` }}>
                  <div style={{ color: primary, fontWeight: 800, fontSize: 14 }}>{v}</div>
                  <div style={{ color: "#64748b", fontSize: 9, letterSpacing: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
