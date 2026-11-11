# 11:11 — A Little Universe Called Us

A static, responsive HTML/CSS/vanilla-JavaScript website made for Khushi (Tamatar) by Aryan.

## Run locally
Because the site loads JSON with `fetch`, open it through a local web server rather than double-clicking `index.html`.

- Python: `python -m http.server 8000`
- Then visit `http://localhost:8000`

No build step or framework is required.

## Project structure
- `index.html` — all sections and page structure
- `css/style.css` — responsive visual system and animations
- `js/main.js` — intro, navigation, letter, 11:11 note, sound controls
- `js/memories.js` — chat museum and random memory loader
- `js/timeline.js` — timeline
- `js/gallery.js` — replaceable Polaroid gallery
- `data/chat-memories.json` — curated, harmless excerpts from the supplied WhatsApp export
- `data/timeline.json` — milestones derived from the export
- `assets/images/` — put real photos here
- `assets/audio/` — optional ambient audio

## Replace the photographs
The eight uploaded images in `assets/images/` are already wired into the gallery. They are assigned across the Polaroid cards with varied rotations, and clicking any image opens the lightbox.

No photographs were present in the ZIP, so the gallery intentionally uses placeholders. It does not create or imitate photos of either person.

## Optional ambient audio
The uploaded `Umraan Lameriyan - Juss.mp3` is wired to the sound control. The visitor must press the sound control to start playback. There is no autoplay.

## Chat privacy and accuracy
The ZIP contained 46,913 parsed messages from 9 September 2026 through 11 November 2026. The visible dataset contains selected benign excerpts only; it does not publish the full conversation. Original Hinglish spellings and timestamps are retained for included messages. Sensitive or vulnerable discussions are intentionally excluded. No media omitted by WhatsApp is represented as if it were visible.

## Notes
- The intro clock is a scripted cinematic sequence; it does not wait for real time.
- The site respects `prefers-reduced-motion`.
- The page is static and can be hosted on GitHub Pages, Netlify, or any static host.
- External Google Fonts are optional; fallback fonts are included.
