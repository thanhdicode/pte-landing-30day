---
name: JSX responsive <br> sentence spacing
description: Two-line subtitles using a desktop-only <br> jam sentences together on mobile unless an explicit space is kept.
---

# Responsive `<br className="hidden md:block">` needs an explicit space

pte-landing subtitles (Hero, WhoIsThisFor, and similar) split two sentences onto two visual lines with a desktop-only line break:

```
sentence one.{" "}
<br className="hidden md:block" />
sentence two.
```

The `{" "}` before the `<br>` is REQUIRED. On mobile the `<br>` is `display:none`, and JSX collapses the newline whitespace between the text and the tag to nothing — so without the explicit space the two sentences render jammed together (e.g. "...tình huống này.Nếu bạn..."). On desktop the trailing space before the forced break is trimmed, so it is harmless there.

**Why:** shipped a subtitle where mobile showed "tình huống này.Nếu bạn" with no space; caught only by a 375px screenshot, never visible on desktop.

**How to apply:** any two-line subtitle using a hidden-on-mobile `<br>` must keep an explicit `{" "}` (or a leading space on the next line). Do not "clean up" that space as redundant. Always verify these blocks at mobile width, not just desktop.
