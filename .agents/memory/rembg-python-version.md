---
name: rembg / image background removal on Replit
description: How to run rembg for cutting out or cleaning up an existing user photo, and why deterministic tooling is the right call
---

- `rembg` (via its numba/llvmlite deps) requires **Python < 3.10** on Replit. The default/system Python (3.11+) fails to import it. Create an isolated env with `uv venv --python 3.9` and install `pillow numpy opencv-python-headless rembg onnxruntime` there.
- There is **no AI image-edit callback** in the sandbox (media-generation is generation-only; the Gemini image integration is heavyweight). To edit/clean an EXISTING photo — remove background, erase a stray object/hand while preserving a face — go deterministic: rembg for the background, then a feathered alpha-erase of a bounding box via opencv/PIL. Never touch the face region.

**Why:** discovered when cleaning a teacher headshot — system Python couldn't import rembg and no edit-callback existed, costing several attempts before the Python 3.9 venv worked.
**How to apply:** any request to cut out / remove background / clean up a user-provided photo.
