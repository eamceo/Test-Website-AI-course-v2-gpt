# AI Finance Course — Landing Page

## Project Overview

Mobile-first landing page for an AI in Finance course, styled as a premium SaaS/AI product.
Single-page static site with minimal back-end (form submissions only).

**Core philosophy:** Technically simple, visually strong. The site should feel like a premium AI tool, not an info product.

**Aesthetic direction:** Museum-grade product presentation. Light base (white/warm milk), dramatic contrast through scale and whitespace — not color. The user should feel they are buying access to a modern system, not enrolling in a course.

**The two modes:**
- **Mobile** — vertical storytelling, almost app-like: large tappable cards, short text blocks, swipes, accordion sections
- **Desktop** — spacious, two-column layouts, mockup interfaces, wide visual panels, horizontal sections

---

## Tech Stack

- **HTML5 + CSS3 + Vanilla JS** — no framework overhead, fast load on mobile
- **CSS custom properties** for theming (dark/light cards, accent colors)
- **IntersectionObserver API** for scroll-triggered animations
- **No build step required** — open index.html directly in browser during dev
- **Form submissions:** Google Sheets (via Apps Script webhook) + Telegram bot notification

---

## Design System

### Color Palette

**Base — light, warm, airy:**
```
--color-bg:           #fafaf8   (warm milk white — main page background)
--color-bg-alt:       #f4f3ef   (slightly deeper warm white — alternating sections)
--color-surface:      #ffffff   (card backgrounds)
--color-surface-dark: #0f0f0f   (Pro pricing card, dark feature blocks)
--color-border:       #e8e6e0   (subtle warm border)
--color-border-dark:  #1e1e1e   (borders on dark surfaces)

--color-text:         #111111   (primary text — near black, not pure black)
--color-muted:        #6b6b6b   (secondary text)
--color-inverse:      #ffffff   (text on dark surfaces)

--color-blue:         #2563eb   (tech accent — CTA buttons, active states, links)
--color-blue-light:   #eff4ff   (blue tint for highlighted cards/tags)
--color-blue-glow:    rgba(37,99,235,0.12)  (soft glow on Pro card, hero graphic)

--color-yellow:       #f0b429   (warm AI accent — badges, highlights, underlines)
--color-yellow-light: #fef9ec   (yellow tint background)
```

**Usage rules:**
- Page background: always `--color-bg` or `--color-bg-alt`, never full white (#fff feels clinical)
- Dark blocks used sparingly: Pro pricing card, possibly final CTA section
- Blue = action and technology; Yellow = value and warmth; never both on same element
- Gradients: only blue→transparent or yellow→transparent, always soft (opacity 0.06–0.15)

### Typography
- Font: **Inter** (Google Fonts) — weights 300, 400, 500, 600, 700, 800
- Hero heading: 40–56px mobile / 64–80px desktop, weight 800, line-height 1.1
- Section headings: 28–36px mobile / 40–48px desktop, weight 700
- Body: 15–16px, weight 400, line-height 1.65
- Captions/labels: 12–13px, weight 500, letter-spacing 0.06em, uppercase for tags
- Soft typographic rhythm — generous paragraph spacing, short line lengths on mobile
- All text: optimized for mobile readability, never below 14px

### Spacing & Layout
- Base unit: 8px grid
- Section padding mobile: 64px vertical, 20px horizontal
- Section padding desktop: 96–120px vertical, max-width 1200px centered
- Cards: border-radius 16–20px, border 1px solid var(--color-border), background white
- Lots of whitespace — never cramped; breathing room is a design element, not a gap to fill

---

## Visual Language

### AI Abstract Graphics
The primary visual differentiator — used across hero, module cards, pricing, and final CTA.

**What to use:**
- Soft SVG/CSS waves — slow-moving, low-opacity, blue or yellow tinted
- Blurred radial gradients as background "glows" behind key elements
- Semi-transparent frosted-glass cards (backdrop-filter: blur) over gradient backgrounds
- Thin grid or dot patterns at very low opacity as texture on alt-bg sections
- Animated floating shapes (circles, rounded rectangles) in hero — very slow drift

**What to avoid:**
- Loud stock illustrations, icons with too much detail
- Acid colors, neon, heavy drop shadows
- Busy backgrounds that compete with text
- Any visual that reads as "PowerPoint" or "infoproduct"

### Motion Principles
All animation must feel: **controlled, calm, finance-grade**.

| Effect | Spec |
|--------|------|
| Scroll reveal | fade + translateY(24px→0), duration 0.6s, ease-out, staggered 0.1s per child |
| Card hover | translateY(-4px) + box-shadow increase, duration 0.25s ease |
| Card tap (mobile) | scale(0.97), duration 0.15s, spring back |
| Button tap | scale(0.95) on :active, duration 0.12s |
| CTA pulse | scale(1→1.025→1), 3s loop, ease-in-out |
| Accordion open | max-height animation + opacity 0→1, duration 0.35s ease |
| AI waves | transform: translateX(-50%→0%) or slow rotate, 12–20s loop, linear |
| Sticky CTA appear | translateY(100%→0), duration 0.4s ease-out |

**Never:** instant appearance, jarring jumps, fast spinning, bouncing that feels playful/childish.

### Card Hierarchy
Three visual card levels used consistently throughout:
1. **Light card** — white bg, warm border, subtle shadow (`0 2px 12px rgba(0,0,0,0.06)`)
2. **Tinted card** — `--color-blue-light` or `--color-yellow-light` bg, for featured/highlighted items
3. **Dark card** — `--color-surface-dark` bg, white text — used only for Pro tier and key callouts

---

## Site Structure (Sections)

1. **Nav** — logo + sticky CTA button (desktop), hamburger (mobile)
2. **Hero** — H1, subheadline, CTA button, animated AI Finance Workspace mockup
3. **Tools** — logo grid of 7 tools (Claude, ChatGPT, Codex, VS Code, Python, Obsidian, Excel)
4. **Pain** — 4 problem cards ("Узнаёте себя?")
5. **Audience** — who the course is for, short list
6. **Program** — 7 modules, accordion on mobile, grid on desktop
7. **Results** — 3 outcome cards
8. **Speakers** — 2 instructor cards with photo and credentials
9. **Testimonials** — 2 student reviews, horizontal swipe on mobile
10. **Pricing** — 3 tiers (Start / Pro / Expert), horizontal swipe on mobile
11. **Pre-order Banner** — yellow/beige tint card, date + discount, form (name + email/phone)
12. **FAQ** — 5 questions, accordion
13. **Final CTA** — dark section, strong tagline, button to pricing
14. **Footer** — social icons (Telegram, Instagram, Email, WhatsApp) + legal

Full content for all sections: see [content.md](content.md)

---

## Desktop Enhancements (progressive upgrade from mobile)

On screens ≥ 768px, the design expands — never just "bigger mobile":

- **Two-column layouts** for Problem/Solution, Program grid, Speaker cards
- **Mockup interface panels** — fake dashboard/tool UI as visual element in Hero and Program sections
- **Wide visual panels** — full-bleed sections with text left + graphic right (or reversed)
- **Horizontal feature rows** — icon + heading + short text in a 3–4 column grid
- **Larger hero** — headline breaks differently, AI graphic is more prominent and detailed
- **Hover states everywhere** — all cards, all links, all buttons get hover treatment on desktop

---

## Key Interactive Patterns

### Program Accordion (mobile)
- Tap module card → height animates open, content fades in
- "+" icon rotates 45° → becomes "–"
- Active card gets blue left border + blue module number
- Only one open at a time

### Pricing Swipe (mobile)
- CSS scroll-snap on horizontal flex container
- Scroll indicator dots below cards
- Pro card: black bg, white text, blue "Лучший выбор" badge, subtle blue glow
- Start card: beige/light
- Expert card: light with warm yellow accent

### Testimonials Swipe (mobile)
- Same horizontal scroll-snap pattern
- Auto-advance every 4s, pause on touch

### Sticky CTA
- Appears after scrolling past hero (IntersectionObserver on hero section)
- Fixed bottom bar on mobile: full-width button
- Smooth slide-up entrance animation

---

## File Structure

```
/
├── index.html          # Single page, all sections
├── css/
│   ├── reset.css       # Minimal CSS reset
│   ├── variables.css   # Design tokens (colors, spacing, fonts)
│   ├── base.css        # Typography, global styles
│   ├── components.css  # Buttons, cards, badges
│   ├── sections/
│   │   ├── hero.css
│   │   ├── program.css
│   │   ├── pricing.css
│   │   ├── testimonials.css
│   │   └── faq.css
│   └── animations.css  # Keyframes, transitions
├── js/
│   ├── animations.js   # IntersectionObserver scroll reveals
│   ├── accordion.js    # Program & FAQ accordion logic
│   ├── swipe.js        # Pricing & testimonials horizontal scroll
│   ├── sticky-cta.js   # Sticky bottom CTA behavior
│   └── form.js         # Form submission (Google Sheets + Telegram)
├── data/
│   ├── modules.js      # Course module content
│   ├── pricing.js      # Pricing tier content
│   └── testimonials.js # Student testimonials
├── assets/
│   ├── icons/          # SVG icons
│   └── images/         # Speaker photos, mockup assets
└── CLAUDE.md
```

---

## Mobile-First Rules

- Write all CSS mobile-first, use `@media (min-width: 768px)` for desktop overrides
- Minimum tap target: 44×44px
- No hover-only interactions — every hover effect must have a tap equivalent
- Test all swipe interactions with touch events, not just mouse
- Font sizes: never below 14px on mobile
- Sticky CTA only on mobile (`@media (max-width: 767px)`)

---

## Form & Back-end

### Purchase Flow (all tiers — Start, Pro, Expert)
Course launches 01/07/2026. All "Купить" buttons currently lead to the pre-order form (not a payment page).
1. User clicks "Купить Start / Pro / Expert"
2. Page smoothly scrolls to pre-order form (or opens inline form modal)
3. Form captures: Имя + Email или телефон + selected tier (hidden field)
4. Same submission pipeline as pre-order banner (see below)

When payment system is connected post-launch, replace scroll-to-form with direct payment URL per tier.

### Contact / Pre-order Form Flow (shared logic, three triggers)

**Trigger A — Pre-order Banner**
**Trigger B — Any "Купить" pricing button**
**Trigger C — Expert/Team "напишите нам"**

Fields: Имя + Email или телефон + hidden `type` field ("preorder" | "start" | "pro" | "expert" | "team")

Pipeline:
1. User submits inline form (no page reload)
2. JS sends POST to Google Apps Script webhook
3. Apps Script writes tagged row to Google Sheets + sends Telegram notification
4. Success state replaces form inline

### Footer Contacts
- Telegram → https://t.me/eam1studio
- Instagram → https://instagram.com/eam1studio
- Email → mailto:eamceo@gmail.com
- WhatsApp → https://wa.me/972569701490

### Environment Variables (not committed)
```
GOOGLE_SCRIPT_URL=https://script.google.com/...
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```
Store in `config.js` (gitignored) during dev; inject via hosting env vars in prod.

---

## Content (Russian)

All user-facing text is in **Russian**.
Code, comments, variable names, and file names are in **English**.

---

## Performance Targets

- First Contentful Paint: < 1.5s on 4G mobile
- No external JS libraries (no jQuery, no GSAP — use CSS transitions + Web Animations API)
- Images: WebP format, lazy-loaded
- Speaker photos: vertical 3:4 ratio, 600×800px, object-fit: cover
- Testimonial avatars: square 1:1, 120×120px, border-radius: 50%
- Total page weight: < 500KB (excluding fonts)

---

## Development Notes

- No build step — plain files, open `index.html` in browser
- Use Live Server (VS Code extension) for dev
- Test on Chrome DevTools mobile emulation (iPhone 12 Pro viewport primary)
- Accessibility: semantic HTML, aria-labels on interactive elements, focus-visible styles
