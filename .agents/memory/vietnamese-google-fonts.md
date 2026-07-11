---
name: Vietnamese Google Fonts subset
description: Which Google fonts ship a `vietnamese` subset; verify before picking a display/heading font for a Vietnamese site.
---

# Vietnamese Google Fonts — verify the subset before choosing

**Rule:** For a Vietnamese site, confirm a Google Font ships the `vietnamese` subset BEFORE using it — especially for display/heading fonts. If it doesn't, Vietnamese diacritics (ệ ụ ữ ỗ ẫ ỷ …) fall back to a system font and render inconsistently vs the base letters — this is the classic "lỗi font" complaint.

**Why:** pte-landing headings used **Outfit**, which ships only `latin` + `latin-ext` (NO vietnamese). Base letters looked right but accented glyphs used a fallback, so headings looked broken. Confirmed by curling the CSS2 API.

**How to verify (no guessing):**
```
curl -s -H "User-Agent: Mozilla/5.0" \
  "https://fonts.googleapis.com/css2?family=<Family>:wght@400;700;800;900&display=swap" \
  | grep -c "/\* vietnamese \*/"      # >0 means it has the subset
# weights actually served:
  | grep -oE "font-weight: [0-9]+"
```

**Verified findings (2026-07):**
- **Outfit** — latin/latin-ext only, NO vietnamese. Do NOT use for a VN site.
- **Plus Jakarta Sans** — HAS vietnamese (pte-landing body font, fine).
- **Be Vietnam Pro** — HAS vietnamese, full weights 400–900. Purpose-built for VN. Now the pte-landing heading font.
- **Montserrat** — HAS vietnamese + 900. Viable bold display alt.
- **Sora** — NO vietnamese.
- **Space Grotesk** — HAS vietnamese but only 400/700 (no 800/900) → unusable where headings need font-black.

**Also:** when swapping the global `--font-heading`, grep components for hardcoded inline `fontFamily` overrides (e.g. `style={{ fontFamily: "'Outfit'..." }}`) — they bypass the token and will fall back to the removed font. `grep -rn "fontFamily\|Outfit" src`.
