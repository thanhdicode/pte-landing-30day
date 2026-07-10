---
name: Screenshotting below-the-fold sections
description: Why the appPreview Screenshot tool can't capture lower page sections on the pte-landing page, and how to verify them instead.
---

# Verifying below-the-fold sections on landing pages

The `Screenshot` (appPreview) tool captures from the top of the page and does **not** scroll. On pages whose hero uses `min-h-screen` (e.g. `pte-landing` Hero), the hero fills the whole viewport, so lower sections (TeacherIntro/"about", Roadmap, TargetScores, WhoIsThisFor, FooterCTA, Footer) are never in frame — even with a very tall `viewportSize`, because `min-h-screen` grows with the viewport.

Passing a hash path like `"/#about"` does **not** help: it's a client-rendered SPA, so the browser processes the hash before React mounts the anchor element, and no scroll happens in the captured frame.

**Why:** wasted a screenshot trying to confirm an edit in the About section; it just re-showed the Hero.

**How to apply:** don't rely on `Screenshot` to visually confirm edits below the hero on this landing page. For a quick *real* visual check, temporarily reorder the target section above `<Hero />` in `App.tsx` (so it renders at the top, in-frame), screenshot `"/"`, then revert the reorder — this worked cleanly for verifying the TeacherIntro card and is faster than the mockup-sandbox. Otherwise: trust HMR compile success in the workflow/browser logs for validity, eyeball the JSX, or render the component in isolation via the mockup-sandbox. Let the user look at the live preview for final sign-off.
