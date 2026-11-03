---
version: 2.0
name: Humankind-Portfolio-design
description: |
  A storytelling-driven portfolio inspired by the Humankind visual style. Built with vanilla HTML/CSS/JS and Tailwind CDN. The identity blends DM Sans (clean sans-serif body) with Caveat (handwritten/accent font) on a warm off-white canvas with bold nearly-black ink. Every interactive element uses a signature "doodle border" recipe: 1px solid stroke, 10-12px radius, and a 3-5px hard drop shadow that lifts on hover. Accent pastels (mint, sky, cream) provide tonal variety. Character SVGs from the Transhumans set act as narrative anchors throughout. The page feels like a sketchbook — loose, imperfect, charming.

colors:
  bg-light: "#F7F5F1"
  bg-dark: "#141414"
  fg-light: "#1B1B1B"
  fg-dark: "#f0ede6"
  fg-muted-light: "#5a5a5a"
  fg-muted-dark: "#888"
  border-light: "#1B1B1B"
  border-dark: "#f0ede6"
  shadow-light: "rgba(0,0,0,0.12)"
  shadow-dark: "rgba(255,255,255,0.06)"
  card-bg-light: "#ffffff"
  card-bg-dark: "#1e1e1e"
  nav-bg-light: "rgba(247,245,241,0.92)"
  nav-bg-dark: "rgba(20,20,20,0.92)"
  accent-mint: "#DCE7D4"
  accent-sky: "#DDE7F6"
  accent-cream: "#F5E8C7"

typography:
  display-hero:
    fontFamily: Caveat
    fontSize: clamp(3rem, 7vw, 5rem)
    fontWeight: 700
    lineHeight: 1.2
  heading-section:
    fontFamily: Caveat
    fontSize: text-4xl md:text-5xl
    fontWeight: 700
    lineHeight: 1.25
  heading-card:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-strong:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
  handwritten-md:
    fontFamily: Caveat
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
  handwritten-lg:
    fontFamily: Caveat
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1

rounded:
  sm: 10px
  md: 12px
  lg: 16px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 56px
  page-x: 16px
  page-max: 1200px

components:
  doodle-border:
    borderWidth: 1px
    borderColor: var(--border)
    borderRadius: 12px
    boxShadow: 3px 3px 0 var(--shadow)
    transition: box-shadow 0.2s, transform 0.2s

  doodle-button:
    backgroundColor: var(--card-bg)
    textColor: var(--fg)
    border: 1px solid var(--border)
    borderRadius: 10px
    boxShadow: 3px 3px 0 var(--shadow)
    typography: body-strong
    transition: transform 0.2s, box-shadow 0.2s
  doodle-button-hover:
    transform: translateY(-3px) translateX(-1px)
    boxShadow: 5px 5px 0 var(--shadow)
  doodle-button-active:
    transform: translateY(1px) translateX(1px)
    boxShadow: 1px 1px 0 var(--shadow)

  navbar:
    backgroundColor: var(--nav-bg)
    backdropFilter: blur(12px)
    border: 1px solid var(--border)
    borderRadius: 16px
    padding: 12px 20px
    transition: transform 0.3s ease

  mobile-menu:
    backgroundColor: var(--nav-bg)
    backdropFilter: blur(12px)
    border: 1px solid var(--border)
    borderRadius: 12px
    boxShadow: 3px 3px 0 var(--shadow)
    padding: 16px 24px
    gap: 12px

  project-row:
    display: grid
    gridTemplateColumns: 1fr
    gap: 2rem
    alignItems: center
    transition: transform 0.3s, box-shadow 0.3s
  project-row-desktop:
    gridTemplateColumns: 1fr 1fr
  project-row-alt-image:
    order: -1
  project-row-hover:
    img: transform scale(1.05)
    number: letter-spacing 1px

  project-number:
    fontSize: 5.5rem
    fontWeight: 700
    opacity: 0.08
    userSelect: none
  project-number-anim:
    opacity: 0
    transform: translateY(40px) scale(0.8)
    transition: opacity 0.6s, transform 0.6s
  project-number-anim-visible:
    opacity: 0.1
    transform: translateY(0) scale(1)

  skill-item:
    fontSize: 1.2rem
    fontWeight: 600
    padding: 0.5rem 0
  skill-cat:
    fontSize: 0.75rem
    fontWeight: 700
    textTransform: uppercase
    letterSpacing: 0.12em
    padding: 0.75rem 0 0.25rem
    opacity: 0.4

  contact-content:
    display: flex
    flexDirection: column
    gap: 1.5rem
  contact-status-block:
    position: relative
  contact-character-float:
    float: right
    shapeOutside: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)
    shapeMargin: 8px
    width: 120px
  contact-character-float-desktop:
    width: 160px

  doodle-divider:
    textAlign: center
    fontSize: 1.25rem
    letterSpacing: 0.5em
    opacity: 0.25
    padding: 1.5rem 0

  doodle-star:
    display: inline-block
    animation: spin-slow 8s linear infinite
    fontSize: 1rem
    opacity: 0.2
    userSelect: none

  parallax-svg:
    willChange: transform

  form-input:
    backgroundColor: var(--bg)
    textColor: var(--fg)
    border: 1px solid var(--border)
    borderRadius: 10px
    padding: 0.65rem 1rem
    fontSize: 0.95rem
    fontFamily: DM Sans
    width: 100%
    outline: none
    transition: box-shadow 0.2s, border-color 0.2s
  form-input-focus:
    borderColor: var(--fg)
    boxShadow: 3px 3px 0 var(--border)

  resume-btn:
    backgroundColor: var(--fg)
    textColor: var(--bg)
    borderRadius: 999px
    border: 1px solid var(--fg)
    padding: 6px 18px
    fontWeight: 700
    fontSize: 0.9rem
    boxShadow: 2px 2px 0 var(--shadow)
    whiteSpace: nowrap
    transition: transform 0.2s, box-shadow 0.2s
  resume-btn-hover:
    transform: translateY(-2px) translateX(-1px)
    boxShadow: 4px 4px 0 var(--shadow)

  nav-link:
    textColor: var(--fg)
    fontWeight: 500
    position: relative
  nav-link-underline:
    content: ""
    position: absolute
    left: 0
    bottom: -2px
    width: 0
    height: 2px
    backgroundColor: var(--fg)
    transition: width 0.2s
  nav-link-underline-hover:
    width: 100%

  theme-btn:
    borderRadius: 50%
    padding: 6px
    transition: background 0.2s
  theme-btn-hover:
    backgroundColor: var(--accent)

  scroll-top:
    position: fixed
    bottom: 2rem
    right: 2rem
    zIndex: 40
    width: 44px
    height: 44px
    borderRadius: 10px
    opacity: 0
    pointerEvents: none
    transition: opacity 0.3s
  scroll-top-show:
    opacity: 1
    pointerEvents: all

  preloader:
    position: fixed
    inset: 0
    zIndex: 60
    display: flex
    alignItems: center
    justifyContent: center
    transition: opacity 0.6s ease, visibility 0.6s
  preloader-loaded:
    opacity: 0
    visibility: hidden
    pointerEvents: none

---

## Overview

Eswar's portfolio is a single-page "doodle" site built with vanilla HTML/CSS/JS and Tailwind (via CDN for utility classes). The defining visual signature is the **doodle border** — every card, button, and container gets a `1px` solid border in the foreground color with a hard offset drop shadow (`3-5px` right and down), evoking marker pen on paper.

The page is fully dark/light theme-aware via CSS custom properties declared in `:root` and `.dark`. Theme toggle, scroll reveal animations, parallax effects, and a preloader are all vanilla JS with IntersectionObserver.

### Key Characteristics
- **Dual-type system**: DM Sans (clean geometric sans-serif) for body/ui text; Caveat (loose handwritten cursive) for hero headings, section titles, and decorative labels.
- **Hard-shadow aesthetic**: Every interactable element uses a solid offset shadow (no blur) that grows on hover — the signature "doodle depth" effect.
- **Pastel accent palette**: Three muted pastels (mint `#DCE7D4`, sky `#DDE7F6`, cream `#F5E8C7`) tint buttons, decoration, and accent elements. These darken appropriately in dark mode.
- **No framework**: Pure CSS custom properties + Tailwind CDN for responsive layout. No build step.
- **Reveal animations**: Elements fade + slide up via IntersectionObserver; project numbers stagger in sequence with scale.
- **Narrative illustrations**: Transhumans character SVGs serve as visual anchors — each section gets a themed character that reinforces the storytelling.
- **7 projects**: Numbered project rows with alternating layouts, hover micro-interactions (image scale, letter-spacing on number).

## Colors

### Surface
- **Background** (`--bg`): `#F7F5F1` (warm off-white) light / `#141414` (near-black) dark — the full-page canvas.
- **Foreground** (`--fg`): `#1B1B1B` (soft black) light / `#f0ede6` (warm white) dark — all text and borders.
- **Muted** (`--fg-muted`): `#5a5a5a` light / `#888` dark — secondary body text, timeline labels.
- **Card** (`--card-bg`): `#ffffff` light / `#1e1e1e` dark — card and button fill.
- **Nav** (`--nav-bg`): semi-transparent version of the background — `rgba(247,245,241,0.92)` light / `rgba(20,20,20,0.92)` dark, with backdrop blur.

### Accent Pastels
| Token | Light | Dark | Use |
|---|---|---|---|
| `--accent` | `#DCE7D4` (mint) | `#2a3324` | StudyGenie GitHub, Weather GitHub, Pixel Blaster GitHub |
| `--accent2` | `#DDE7F6` (sky) | `#242e38` | Dormsy GitHub |
| `--accent3` | `#F5E8C7` (cream) | `#352e1f` | SecurePortal GitHub, Ritual GitHub |

### Shadows & Borders
- **Border** (`--border`): always matches `--fg` — `#1B1B1B` light / `#f0ede6` dark.
- **Shadow** (`--shadow`): `rgba(0,0,0,0.12)` light / `rgba(255,255,255,0.06)` dark — used in the hard offset drop shadow.

## Typography

### Font Family
- **DM Sans** (Google Font) — body text, card text, navigation links, form inputs, tags, buttons. Weights 400, 500, 700.
- **Caveat** (Google Font) — handwritten accent font. Weights 400, 600, 700. Used for hero headline, section titles (`.handwritten` class), signature, and decorative labels.

### Hierarchy
| Token | Font | Size | Weight | Use |
|---|---|---|---|---|
| `display-hero` | Caveat | `text-5xl md:text-7xl` | 700 | Main hero heading ("Building things. Learning fast.") |
| `heading-section` | Caveat | `text-4xl md:text-5xl` | 700 | Section titles ("My Journey", "Things I've Built", "Currently", "What I Use", "Have an idea?") |
| `statement` | Caveat | `clamp(2.5rem,8vw,6rem)` | 700 | Statement section ("I learn by building.") |
| `handwritten-md` | Caveat | `text-2xl` | 700 | Signature, timeline headings, status block labels |
| `project-title` | Caveat | `text-3xl md:text-4xl` | 700 | Individual project titles |
| `hero-sub` | Caveat | `text-xl md:text-2xl` | 400 | Hero subtitle (handwritten) |
| `heading-card` | DM Sans | 20px | 700 | Currently section headings |
| `body-lg` | DM Sans | 18px | 400 | Hero paragraph, about info text |
| `body-md` | DM Sans | 16px | 400 | Default body |
| `body-strong` | DM Sans | 16px | 700 | Button labels, emphasis spans |
| `body-sm` | DM Sans | 14px | 400 | Project descriptions, timestamp text, status block |

### Principles
The system uses two fonts for a clear emotional split: **Caveat** for the "handmade / personal" voice (headings, signature, status labels), **DM Sans** for the "professional / readable" voice (projects, skills, contact form). Section titles always use `.handwritten` (Caveat) in bold to maintain the sketchbook feel.

## Layout

### Spacing System
- **Page padding**: `16px` horizontal (`px-4 sm:px-6 lg:px-8`) with max-width `1200px` container (`max-w-6xl`).
- **Section rhythm**: `56px` vertical padding per section (`py-14`).
- **Card internal padding**: `32px` on mobile, `48px` on desktop (`p-8 md:p-12`) for the contact form card.
- **Section backgrounds**: Alternate between `--bg` and `--card-bg` for visual separation.

### Sections (in order)
1. **Hero** — Full-screen intro with 40/60 text/illustration split. Astro SVG at 420px width.
2. **About** — Timeline format (2023–2027) with Runner + Coffee SVGs.
3. **Statement** — Dramatic centered statement "I learn by building." with parallax effect.
4. **Projects** — 7 numbered featured rows (THFSA, Adaptive Traffic Signal Controller, PRNU Smartphone Authentication, Liftly, StudyGenie AI, Dormsy, Design Pattern Case Study), with the five earlier projects retained in a secondary disclosure.
5. **Currently** — 3-column grid (Learning, Building, Looking for).
6. **Skills** — grouped list for programming, web development, AI/ML, databases, and tools.
7. **Contact** — Editorial float layout: text + status block with Gamestation SVG floated right via `shape-outside`.
8. **Footer** — Signature text + social links + credits.

### Grid
- **Projects**: Single column on mobile, 2-column alternating rows on desktop (`grid-cols-1 md:grid-cols-2`).
- **Currently**: 1-column on mobile, 3-column on desktop (`md:grid-cols-3`).
- **Skills**: 2-column on mobile, 4-column on desktop (`grid-cols-2 md:grid-cols-4`).
- **Contact**: Flex column layout with character SVG floated right inside the status block using `shape-outside: polygon()`. Single column, no grid.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Body text, background |
| 1 — Doodle surface | 1px solid `--border`, 12px radius, 3px shadow | Contact card container, mobile menu |
| 2 — Interactive | 1px solid `--border`, 10px radius, 3px shadow | All buttons (`.doodle-button`) |
| 3 — Elevated | 1px solid `--border`, 12px radius, 5px shadow | Project row hover (image scale + letter-spacing) |
| 4 — Nav | 1px solid `--border`, 16px radius, blur backdrop | Fixed navbar, mobile menu |

Depth is expressed entirely through the **hard offset shadow** system — shadow always shifts right and down with zero blur, mimicking a paper stack.

## Shapes

### Border Radius Scale
| Value | Use |
|---|---|
| 10px | Buttons, form inputs |
| 12px | Cards, doodle-border containers, mobile menu, contact card |
| 16px | Navbar |
| 9999px | Theme toggle button, resume button |

### Decorative Shapes
- **Doodle divider**: `✦ ✦ ✦ ✦ ✦` text-based divider between sections, 25% opacity, centered, 0.5em letter-spacing.
- **Doodle star**: Rotating `✦` / `✧` characters positioned near section headings, 8s spin animation, 20% opacity.
- **Project number**: 5.5rem bold number at 8% opacity, grows letter-spacing on row hover.

## Components

### Buttons

**`doodle-button`** — the universal CTA
- Border `1px solid --border`, radius 10px, shadow `3px 3px 0 --shadow`, background `--card-bg`, text `--fg` in bold.
- **Hover**: lifts `-3px` Y / `-1px` X, shadow grows to `5px 5px`.
- **Active**: presses down `1px` Y/X, shadow shrinks to `1px 1px`.
- Used for "View Projects ↓", project "View Live →" / "GitHub ↗", "Send Message →".

**`resume-btn`** — pill-shaped dark CTA
- Background `--fg`, text `--bg`, full border radius, border `1px solid --fg`, shadow `2px 2px`.
- **Hover**: lifts `-2px` Y / `-1px` X, shadow grows to `4px 4px`.

### Project Rows

**`project-row`** — numbered project display
- 2-column grid on desktop (text | image), single column on mobile.
- `.project-row-alt` reverses the image/text order.
- **Hover**: project image scales to 1.05, project number letter-spacing increases to 1px.
- Contents: project number (01–07), title (Caveat, 3xl→4xl), description + human detail line, tech stack, two buttons (View Live, GitHub).
- Each project uses a themed Transhumans SVG illustration.

### Navigation

**`navbar`** — fixed top bar
- Fixed position at `top: 12px`, horizontally centered, max-width 1200px.
- Background `--nav-bg` with `backdrop-filter: blur(12px)`, border 1px, radius 16px, padding `12px 20px`.
- **3-column flex layout**: left (logo), center (nav links), right (theme toggle + resume + hamburger).
- Logo: handwritten `Eswar_` with a CSS `step-end` blinking cursor animation (no JS).
- Desktop nav links: About, Projects, Now, Skills, Contact.
- **Scroll behavior**: hides on scroll down (translateY -120%), reappears on scroll up.

### Form Inputs

**`form-input`** — contact form fields
- Background `--bg`, text `--fg`, border 1px solid `--border`, radius 10px, padding `0.65rem 1rem`, font DM Sans 0.95rem.
- **Focus**: border stays same color, shadow grows to `3px 3px 0 --border`.

### Contact Section

**Editorial float layout**
- Top: intro text + handwritten signature.
- Middle: Status block with Gamestation character SVG floated right via CSS `shape-outside: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)` + `shape-margin: 8px`. The character wraps text around it like a magazine layout.
- Bottom: Contact form (name, email, message, send button).
- Full-width single column, no grid. Character shrinks on mobile (140px) but maintains float behavior.

### Preloader

Full-screen fixed overlay with centered "Eswar" in handwritten font at foreground color, with a `fadeInOut` opacity animation (1.6s cycle). Fades out after window load event with 1s delay. Always shows on every visit.

## Animations

| Name | Target | Properties | Use |
|---|---|---|---|
| `float` | `.floating` | translateY(-6px) at 50%, 6s ease-in-out | Hero Astro SVG |
| `fadeInOut` | Preloader text | Opacity 0.08 → 0.45 → 0.08, 1.6s ease-in-out | Preloader animation |
| `spin-slow` | `.doodle-star` | rotate 0→360deg, 8s linear | Decorative stars near headings |
| Scroll reveal | `.reveal` | translateY(28px) → translateY(0), opacity 0 → 1, 0.6s ease-out | Section entrances |
| Project number reveal | `.project-number-anim` | translateY(40px) scale(0.8) → translateY(0) scale(1), opacity 0 → 0.1, 0.6s | Project numbers stagger in |
| Parallax | `.parallax-svg` | translateY based on scroll position | Hero and statement SVGs |

## Dark Mode

Dark mode is applied by adding the `.dark` class to `<html>` and `<body>`. All colors swap via CSS custom properties:
- Canvas: `#F7F5F1` → `#141414`
- Ink: `#1B1B1B` → `#f0ede6`
- Shadow: opaque black → opaque white (both at 6–12%)
- Accents: pastels → desaturated near-black tones

Theme preference is persisted in `localStorage('theme')`. The toggle button swaps sun/moon SVG icons.

## Transhumans SVGs Used

12 character SVGs in `assets/transhumans/`, all SVGO-optimized with theme-adapted fills (`black` → `currentColor`, `white` → `var(--card-bg)`):

| SVG | Section | Context |
|---|---|---|
| Astro | Hero, Projects heading | Main hero illustration + section decoration |
| Runner | About heading | About section decoration |
| Coffee | About timeline | 2025 timeline decoration |
| Waiting | Project 01 | StudyGenie |
| Mask | Project 02 | SecurePortal |
| Looking Ahead | Project 03 | Limitless |
| Pondering | Project 04 | Dormsy |
| Feliz | Project 05 | Weather Insight |
| Jumping | Project 06 | Ritual |
| Gamestation | Project 07, Contact float | Pixel Blaster + editorial float character |
| Roboto | Skills heading | Skills section decoration |
| Puppy | Contact heading | Contact section decoration |

## Responsive Behavior

| Breakpoint | Key Changes |
|---|---|
| lg (1024px) | 2-col project rows, 4-col skills grid, 3-col currently, contact float character 160px |
| md (768px) | 2-col projects, nav hamburger appears, contact character shrinks |
| sm (640px) | 1-col everything, hero text scales down, padding tightens, contact float character shrinks to 120px |

## EmailJS Integration

- Service: `service_4i3nbxz`
- Template: `template_gaz6a83`
- Public key: `q8c1AgavyQtt8aPYS`
- Uses `emailjs.send()` with explicit params object (`user_name`, `user_email`, `message`)
- Include `reply_to` param for template compatibility
- Template variables must match JS params exactly
- Gmail connection in EmailJS dashboard requires manual reconnection if expired

## Project List

The main projects section presents seven numbered featured projects in alternating rows: THFSA, Adaptive Traffic Signal Controller, PRNU Smartphone Authentication, Liftly, StudyGenie AI, Dormsy, and Design Pattern Case Study. SecurePortal, Limitless, Weather Insight, Ritual, and Pixel Blaster remain in a secondary disclosure. Category filters cover web development, AI / machine learning, security, IoT, and software engineering.
