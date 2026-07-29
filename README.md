# Carlos Altán — Developer Portfolio

Personal portfolio for Carlos Altán, Full Stack Developer and Computer Science student at Universidad del Valle de Guatemala (UVG). This portfolio highlights selected projects, certifications, experience, and contact details in a bilingual UI.

---

## Features

- **Dark / Light theme** — system-aware with manual toggle
- **EN / ES bilingual support** — custom locale provider without external i18n dependencies
- **IDE-inspired navigation** — file tree sidebar on desktop, responsive bottom navigation on mobile
- **GitHub API integration** — server-side API route fetches repo stats and project metadata
- **Featured projects** — includes GuateVigila and Weather Way among highlighted work
- **Certifications page** — updated with real certification data and preview cards
- **Responsive layout** — mobile-first design with polished desktop experience

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS |
| Animations | Framer Motion, GSAP |
| Routing | Next.js App Router |
| Deployment | Vercel or any Next.js host |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/carlosaltan18/my-portfolio.git
cd my-portfolio
npm install
```

### Run Locally

```bash
npm run dev
```

Then open http://localhost:3000.

---

## Project Structure

```
├── app/                    # Next.js App Router pages and API routes
│   ├── api/                # GitHub proxy route and server helpers
│   ├── certifications/     # Certifications page
│   ├── contact/            # Contact page
│   ├── projects/           # Projects page
│   ├── stack/              # Tech stack page
│   ├── globals.css         # Global styles and design tokens
│   ├── layout.tsx          # Root layout and metadata
│   └── page.tsx            # Home page
├── components/             # Shared React components
│   ├── BentoCard.tsx       # Card wrapper with animations
│   ├── FileTreeNav.tsx     # Sidebar navigation tree
│   ├── BottomNav.tsx       # Mobile navigation bar
│   ├── FeaturedProject.tsx # Featured project section
│   ├── Hero.tsx            # Hero intro section
│   └── PreferencesProvider.tsx  # Theme and locale provider
├── lib/
│   └── github.ts           # GitHub utilities and project mapping
└── public/
    └── assets/             # Images, CV PDF, and static media
```

---

## Deployment

Deploy on Vercel or any Next.js-compatible host. Add a GitHub token to the environment for more stable GitHub API usage.

---

## About

Carlos Altán — Full Stack Developer

- Computer Science student at Universidad del Valle de Guatemala (UVG)
- Featured projects: GuateVigila, Weather Way, EarthWay, ASIGBO
- Focused on TypeScript, Next.js, and smooth developer experiences

---

## License

MIT
