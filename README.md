# Eswar — Portfolio

A personal portfolio built with vanilla HTML, CSS, and JavaScript. It keeps the paper-like canvas, Caveat headings, DM Sans interface, Transhumans doodles, numbered alternating project rows, and hand-drawn buttons.

## Run locally

No build step is required. From this folder, run:

~~~powershell
python -m http.server 8000
~~~

Open http://localhost:8000. An HTTP server supports the /now page and service worker. The included resume.pdf and assets/Eswar_Atomberg_Portfolio.pdf are downloadable.

## Featured projects

1. **THFSA — Transformer-Based Hardware Fingerprint Identification**: scanner identification and verification research prototype with a Flask multi-factor authentication demonstration. Stored images were used; no physical R307 scanner was connected or tested.
2. **Adaptive Traffic Signal Controller**: MQTT and Python traffic controller simulation with a Node-RED dashboard. It does not control real road infrastructure.
3. **PRNU Smartphone Authentication**: PRNU camera fingerprint research implementation inspired by the ABC smartphone authentication protocol.
4. **Liftly**: ride-share app using React, TypeScript, Express, and MongoDB. Feature copy is based on repository routes and screens.
5. **StudyGenie AI**: Gemini and Supabase study planner. Live demo: https://studygenie-ai.netlify.app/
6. **Dormsy**: Supabase hostel management app with admin, warden, and student areas. Live demo: https://dormsy-hostel-management-system.vercel.app/
7. **Design Pattern Case Study**: pattern analysis and UML work for a NestJS parking application.

SecurePortal, Limitless, Weather Insight, Ritual, and Pixel Blaster remain in the secondary project list.

## Features

- Light/dark theme with persisted preference
- Responsive alternating showcases and working category filters
- Project details dialog and native detail disclosure
- Transhumans SVG illustrations
- Academic timeline, current studies, grouped skills, and contact form
- EmailJS integration with browser-side validation and feedback
- Keyboard navigation, reduced-motion support, and reveal fallback without JavaScript
- Reading progress, command palette, keyboard shortcuts, preloader, and scroll-to-top

## Contact and EmailJS

Email: eswarsamanthula@gmail.com
GitHub: https://github.com/eswarsamanthula
LinkedIn: https://linkedin.com/in/eswarsamanthula
Docker Hub: https://hub.docker.com/u/eswarsamanthula

Existing EmailJS identifiers are retained. Check domain restrictions and rate limits in the EmailJS dashboard. Delivery was not verified because doing so requires sending a message.

## Project structure

- index.html — main portfolio, styles, and vanilla JavaScript
- now/index.html — compact /now page
- data/now.json — /now page content
- assets/transhumans/ — character illustrations
- resume.pdf — downloadable resume
- assets/Eswar_Atomberg_Portfolio.pdf — Atomberg CMF Design Intern application portfolio
- DESIGN.md — visual system notes

## Review and push

Target repository: https://github.com/eswarsamanthula/Eswar.doodle-aesthetic (branch master)

~~~powershell
git status
git diff
git diff --check
git add .gitignore index.html README.md DESIGN.md data/now.json now/index.html manifest.json robots.txt sitemap.xml sw.js
git commit -m "Upgrade portfolio with 2026 projects and journey"
git push -u origin master
~~~
