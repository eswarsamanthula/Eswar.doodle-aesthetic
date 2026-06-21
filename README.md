# Eswar — Portfolio

A storytelling-inspired portfolio built with vanilla HTML, CSS, and JavaScript. Features a hand-drawn doodle aesthetic with Transhumans character illustrations, dark/light theme, and a contact form powered by EmailJS.

**Live site:** [eswarsamanthula.github.io](https://eswarsamanthula.github.io)

---

## ✨ Features

- **Doodle aesthetic** — Hand-drawn borders, hard-offset shadows, rotating star decorations, and paper-like texture
- **Dark/light theme** — Persisted in `localStorage`, toggled via a sun/moon button
- **7 project showcases** — Numbered project rows with live demos and GitHub links
- **Editorial contact layout** — CSS `shape-outside` text wrapping around a character illustration
- **Scroll reveal** — IntersectionObserver-powered fade-and-slide-up animations
- **Parallax** — Subtle scroll-driven movement on hero and statement illustrations
- **Responsive** — Mobile-first layout that adapts from phone to desktop
- **EmailJS contact form** — Sends messages directly to the owner's inbox
- **Preloader** — Full-screen loading animation on each visit
- **Custom 404-page-ready** — Single-page anchor-based navigation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 (Custom Properties) | Styling, theming, animations |
| JavaScript (Vanilla) | Interactivity, scroll effects, EmailJS |
| [Tailwind CSS](https://tailwindcss.com/) (CDN) | Responsive utility classes |
| [EmailJS](https://www.emailjs.com/) | Contact form delivery |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Body typography |
| [Caveat](https://fonts.google.com/specimen/Caveat) | Handwritten display font |
| [Transhumans](https://transhumans.art/) | Character illustrations |

---

## 📁 Project Structure

```
├── index.html                  # Single-page portfolio
├── README.md                   # This file
├── DESIGN.md                   # Design system documentation
├── assets/
│   └── transhumans/            # SVG character illustrations (12 files)
│       ├── Astro.svg
│       ├── Coffee.svg
│       ├── Feliz.svg
│       ├── Gamestation.svg
│       ├── Jumping.svg
│       ├── Looking Ahead.svg
│       ├── Mask.svg
│       ├── Pondering.svg
│       ├── Puppy.svg
│       ├── Roboto.svg
│       ├── Runner.svg
│       └── Waiting.svg
```

---

## 🚀 Projects Featured

| # | Project | Tech Stack | Live Demo | GitHub |
|---|---|---|---|---|
| 01 | **StudyGenie** | Flask · OpenAI · SQLite | [Live](https://studygenie-ai.netlify.app) | [Repo](https://github.com/eswarsamanthula/StudyGenie-AI) |
| 02 | **SecurePortal** | Flask · SQLite · Python · Security | [Live](https://secure-student-portal.onrender.com) | [Repo](https://github.com/eswarsamanthula/secure-student-portal) |
| 03 | **Limitless** | Supabase · Vercel · JavaScript | [Live](https://applimitlessai.vercel.app) | [Repo](https://github.com/eswarsamanthula/Limitless) |
| 04 | **Dormsy** | React · Node.js · Supabase · Stripe | [Live](https://dormsy-hostel-management-system.vercel.app) | [Repo](https://github.com/eswarsamanthula/Dormsy_Hostel_Management_System) |
| 05 | **Weather Insight** | JavaScript · Weather API · Netlify | [Live](https://weather-insight-wed.netlify.app) | [Repo](https://github.com/eswarsamanthula/Weather-Insight-Web) |
| 06 | **Ritual** | JavaScript · Vercel | [Live](https://ritual-cyan.vercel.app) | [Repo](https://github.com/eswarsamanthula/Ritual) |
| 07 | **Pixel Blaster** | HTML · CSS · JavaScript | [Live](https://eswarsamanthula.github.io/pixel-blaster-dx) | [Repo](https://github.com/eswarsamanthula/pixel-blaster-dx) |

---

## 🎨 Design System

See [`DESIGN.md`](./DESIGN.md) for the full design token documentation including colors, typography, spacing, component specs, and animation details.

### Key Design Tokens

- **Background**: `#F7F5F1` (warm off-white) / `#141414` (near-black dark)
- **Foreground**: `#1B1B1B` (soft black) / `#f0ede6` (warm white dark)
- **Accents**: Mint `#DCE7D4`, Sky `#DDE7F6`, Cream `#F5E8C7`
- **Border**: 1px solid `--border` with 3-5px hard offset shadow
- **Fonts**: DM Sans (body) + Caveat (handwritten headings)

---

## 🔧 Development

No build step required. Open `index.html` in any browser to run locally.

```bash
# Clone the repo
git clone https://github.com/eswarsamanthula/Eswar.Humankind-storytelling_doodle-aesthetic.git

# Open in browser
open index.html
```

### Customization

- **Theme**: Modify `:root` / `.dark` CSS custom properties in `<style>`
- **Projects**: Edit the `.project-row` blocks in the projects section
- **Content**: Update text throughout in the HTML body
- **EmailJS**: Replace `service_4i3nbxz`, `template_gaz6a83`, and `q8c1AgavyQtt8aPYS` in the script section

---

## 📬 Contact

- **Email**: [eswarsamanthula@gmail.com](mailto:eswarsamanthula@gmail.com)
- **LinkedIn**: [eswarsamanthula](https://linkedin.com/in/eswarsamanthula)
- **GitHub**: [eswarsamanthula](https://github.com/eswarsamanthula)
- **Docker Hub**: [eswarsamanthula](https://hub.docker.com/u/eswarsamanthula)

---

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio.
