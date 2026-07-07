---
name: Gradient-clipped text renders as a solid bar
description: Why background-clip:text text turns into a filled rectangle in Chromium, and the fix
---

Symptom: text styled with `-webkit-background-clip: text` + transparent fill (the trick to show a gradient *through* the letters) renders as a SOLID filled rectangle/bar that hides the glyphs.

Cause: applying a `filter:` (commonly `drop-shadow(...)`) directly on that same element defeats `background-clip: text` in Chromium — the entire gradient box becomes visible instead of only the letter shapes.

Fix:
- Remove the `filter` from the clipped element. If you need a glow, put the drop-shadow on a WRAPPER element, or drop the glow entirely (usually cleaner/more professional anyway).
- For robustness set BOTH `WebkitBackgroundClip: "text"` and standard `backgroundClip: "text"`, and both `WebkitTextFillColor: "transparent"` and `color: "transparent"`.
- Known-good pattern in this project: Tailwind `bg-clip-text text-transparent` with NO `filter` on the element.

**Why:** a landing-page heading rendered as a solid pink bar instead of gradient text; the culprit was a `drop-shadow` filter on the background-clip:text element.
**How to apply:** whenever building gradient/clipped text via background-clip:text — never add a `filter` to that element; verify below-the-fold headings actually show glyphs, not a bar.
