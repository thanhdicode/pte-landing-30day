---
name: Cyberpunk portrait treatment (pte-landing)
description: How to give teacher portraits the site's cyberpunk look deterministically (rembg + PIL/numpy), and how the cards display them.
---

# Cyberpunk portrait treatment for pte-landing

The pte-landing theme is dark neon cyberpunk (pink/cyan HUD). Teacher photos are processed into transparent PNGs in `attached_assets/` and imported by `Hero.tsx` (section-1 right card) and `TeacherIntro.tsx` (section-2 bio card). Both cards render the image with `object-contain object-bottom` inside a fixed-height area that has a bottom `from-slate-900` gradient overlay — so a **bottom alpha fade baked into the PNG dissolves the lower body into the card**.

**Recipe (run via `.rembg-venv/bin/python`; rembg + PIL + numpy):**
- rembg remove bg → crop to alpha bbox → pad canvas (~70px) so the glow can breathe.
- Neon rim: Gaussian-blur the alpha silhouette, colorize with a horizontal cyan→pink gradient (cyan left, pink right = theme palette); use it as a soft outer aura + an inner edge (erosion via `MinFilter`, screen-blend).
- Subtle bloom (screen-blend a blurred bright-mask) + faint scanlines (dim every 3rd row).
- Bottom fade: smoothstep alpha ramp, **vertical only**, starting LOW (~0.80·H → bottom) for a light blend. Keep hands/nails **clear by default** — an early start (~0.60) and/or a horizontal fade into an outstretched hand over-dissolves them. The card's own bottom gradient overlay already hides ~bottom 20%, so a gentle baked fade suffices. Only dissolve a hand fully into neon mist if the user explicitly asks.

**Why:** user wanted the cyberpunk look on the photo, but after seeing a strong dissolve said the hands were too faded ("tay hơi mờ, cho rõ hơn... chỉ cần mờ nhẹ, giữ mặt nét") — so default to a LIGHT fade with clear hands and a sharp face; this deterministic pipeline matches the site palette and the card's existing bottom overlay.

**How to apply / gotcha:** keep the **face essentially ungraded** (only a tiny cool/contrast tweak) — heavy color-tinting makes skin look sickly; the cyberpunk feel must come from rim-light + bloom + dark background, not from recoloring the face. Save as a NEW filename (don't overwrite) for reversibility, then repoint the import. Verify in the real Hero card via a `"/"` screenshot (Hero is section 1, so it's directly capturable — unlike lower sections behind the min-h-screen hero).
