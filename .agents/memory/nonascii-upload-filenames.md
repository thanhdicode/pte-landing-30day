---
name: Non-ASCII upload filenames
description: Opening user-uploaded files with accented/Vietnamese names from Python (attached_assets)
---

When a user uploads a file with a non-ASCII name (e.g. Vietnamese "Ảnh_màn_hình_…png"), it lands in `attached_assets/` but the on-disk bytes may be Unicode **NFD** (decomposed) while a hardcoded Python string literal is **NFC** (composed). `Image.open("…Ảnh…")` then fails with `FileNotFoundError` even though `ls` shows the file.

**Rule:** Don't hardcode the accented filename in scripts. Match it by its ASCII portion instead — uploaded files carry a numeric timestamp suffix (e.g. `*_1783420125307.png`), so `glob.glob(f"{BASE}/*<suffix>*.png")[0]` is robust.

**Why:** macOS-origin uploads are commonly NFD; Python literals default to NFC. The mismatch is invisible in a terminal (both render identically) which makes it confusing.

**How to apply:** Any time a processing script needs an uploaded file with a non-ASCII name, resolve the path via `glob`/`os.listdir` + an ASCII substring rather than typing the name. Alternatively `unicodedata.normalize("NFC"/"NFD", …)` both candidates, but globbing by suffix is simpler.
