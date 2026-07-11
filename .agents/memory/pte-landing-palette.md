---
name: PTE landing accent palette contract
description: The strict 2-accent color system for the pte-landing artifact and how to keep future section edits consistent.
---

# pte-landing accent palette

The landing page uses a strict **2-accent** system. Keep future section edits inside it.

- **PINK** — `#FF4DA6` (buttons/solid, = Tailwind `primary` / `hsl(330 100% 65%)`), `#FF87C7` (lighter pink text). Primary accent. The whole site is now unified on this hot pink; the old muted rose `#D4537E` / `#ED93B1` that Hero & TeacherIntro used was RETIRED (they were switched to match the brighter lower sections). If you see `#D4537E`/`212,83,126` anywhere, it's a stray to convert to `#FF4DA6`/`255,77,166`.
- **GOLD** — `#FAC775`, **value/achievement ONLY** (e.g. 79+ top score, 90/90, price/gift value, a "result" badge, a highlighted method bullet). Do NOT use gold for decoration.
- **WHITE** — bold keywords. **GRAY** — `#a99cc0` body text. **MUTED** — `#6e3a52` chevrons / neutral pill borders only.
- **Forbidden:** cyan/mint/purple/green accents of any kind. (Legacy CSS utilities `neon-border` / `cyber-corner` / `border-primary` are fine — they resolve to pink `hsl(330 100% 65%)`. `neon-border-cyan` is NOT allowed.)
- **One sanctioned cyan:** the baked neon rim on the teacher portrait cutouts (cyan-left / pink-right), per `cyberpunk-portrait-treatment.md`. That is a photo treatment, not section chrome — do NOT "normalize" it to pink.
- **Intentional exception — persona cards:** the "Khóa học này dành cho ai?" (WhoIsThisFor) section deliberately uses 4 distinct badge colors (pink / yellow / orange / cyan) to differentiate the 4 personas. The client explicitly asked to KEEP these — do NOT normalize card 4's cyan (or the other badge hues) to pink in this section.

Copy rule: use "mục tiêu PTE", never "chứng chỉ PTE".

**Why:** the client spec is explicit that gold must read as a value/achievement signal — sprinkling gold in ambient particles, corner brackets, neon lines, or glow rings dilutes that meaning. A code review caught decorative gold + off-palette shades (`#E76D97`, `#7d7290`) that had crept in.

**How to apply:** when editing any pte-landing section, decorative chrome (particles, brackets, glows, rules, gradients) must be pink/gray; reserve gold strictly for value/achievement. Normalize any stray hex to the values above before shipping.
