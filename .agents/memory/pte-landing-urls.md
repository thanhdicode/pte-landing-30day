---
name: PTE landing — deployments & URL landscape
description: The PTE landing product spans multiple Replit apps/URLs; clarifies which is which to stop the recurring "why is my version different / missing content" confusion.
---

# PTE landing — deployments & URL landscape

The user (a non-technical teacher) juggles several Replit URLs for this one product and has repeatedly been confused about why they differ. Keep these straight:

- **This workspace's `pte-landing` artifact** = the live, newest landing page (dark cyberpunk "30 NGÀY" design). Preview reflects edits immediately (Vite HMR).
- **`thuys-30-day--<user>.replit.app`** = a PUBLISHED snapshot of THIS landing page. Frozen at the last "Publish"; does NOT auto-update. When the user says this link is "the full/real version" and the preview is "missing" content, it is almost always the reverse — the preview is newer, the publish is stale. Fix = re-Publish.
- **`landing-page-sync--<user>.replit.app`** = a SEPARATE external checkout page the user built (countdown, payment, Zalo). The landing page's three "Đăng ký" CTAs link to it via `CHECKOUT_URL` in `artifacts/pte-landing/src/lib/links.ts`.

**Why:** The landing page and checkout are two separate apps that can drift (price/branding), and the stale publish keeps causing "my version is different" reports.

**How to apply:** If the user reports the site "missing" sections or looking different from a published link, first check `git log` for commits after the last "Published your App" and explain the snapshot-vs-preview distinction before changing any code. Do not assume content was lost. Also: applying several sequential edits to component files makes Vite HMR render broken intermediate states — if the user is watching the preview mid-edit they may see a half-broken page; restart the workflow to give them a clean state.
