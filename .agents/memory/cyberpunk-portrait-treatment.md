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
- Ethereal hand/nail fade: smoothstep alpha ramp — vertical from ~0.60·H → bottom, plus (for an outstretched hand) a horizontal ramp over the far edge — dissolves hands/fingernails into mist ("mờ ảo").

**Why:** user asked for a cyberpunk look on the photo itself and for the fingernails to fade dreamily; this deterministic pipeline matches the site palette and the card's existing bottom fade.

**How to apply / gotcha:** keep the **face essentially ungraded** (only a tiny cool/contrast tweak) — heavy color-tinting makes skin look sickly; the cyberpunk feel must come from rim-light + bloom + dark background, not from recoloring the face. Save as a NEW filename (don't overwrite) for reversibility, then repoint the import. Verify in the real Hero card via a `"/"` screenshot (Hero is section 1, so it's directly capturable — unlike lower sections behind the min-h-screen hero).
