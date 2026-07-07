---
name: ImageMagick fonts on Replit
description: montage/convert have no default font on this NixOS env; how to supply one and what to avoid
---

# ImageMagick fonts on Replit (NixOS)

`montage` / `convert` fail with `unable to read font ''` when annotating text, because there is no configured default font.

**Rule:** always pass an explicit font resolved via fontconfig:
`FONT=$(fc-match -f '%{file}' sans); montage -font "$FONT" ...`
DejaVuSans (what `fc-match sans` returns here) supports Vietnamese diacritics, so `-label` text with đ/ố/ệ renders fine — but keep labels ASCII if unsure.

**Why:** the default font lookup is empty in this environment, so any text annotation (`-label`, `-annotate`, `caption:`) errors out.

**How to apply:** whenever building composites/labelled grids with ImageMagick. Do NOT `find /nix -iname '*.ttf'` to locate a font — it scans the whole Nix store and times out the shell. `fc-match` is instant.
