# KC Tech Team — Official Website

> Kansas City's premier AI consulting, IT managed services, automation, and cybersecurity firm. Headquartered in Kansas City, MO — serving clients locally and globally.

**Live site:** [https://kctechteam.com](https://kctechteam.com)

---

## Overview

This is the official marketing website for **KC Tech Team**, built as a premium, high-performance Next.js application with immersive Three.js animations, a Google Gemini-powered AI sales agent (ARIA), and strong Kansas City local SEO.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (CSS-based config via `@theme {}`) |
| 3D Animations | Three.js + React Three Fiber + React Three Drei |
| Animations | Framer Motion |
| AI Agent | Google Gemini 2.0 Flash (`@google/generative-ai`) |
| Voice I/O | Web Speech API (SpeechRecognition + SpeechSynthesis) |
| Icons | Lucide React |
| Fonts | Syne (headings) + Inter (body) via Google Fonts |

---

## Features

- **Immersive 3D Scenes** — Neural network, particle field, cyber shield, circuit board, and data flow animations built with React Three Fiber
- **ARIA Voice AI Agent** — Floating sales agent powered by Gemini 2.0 Flash with full voice input/output via Web Speech API
- **6 Service Pages** — AI Consulting, Automation, IT Managed Services, Cybersecurity, Web Development, Custom Integrations
- **Blog** — 4 SEO-targeted Kansas City tech articles with static generation
- **Contact Form** — Service inquiry form with service-type selector
- **Full SEO** — Per-page metadata, LocalBusiness + Organization JSON-LD schema, dynamic sitemap, robots.txt
- **Dark Glassmorphism Design** — Premium dark UI with cyan neon accents and glow effects
- **Fully Responsive** — Mobile-first layout, hamburger nav, optimized touch targets
- **Performance** — Dynamic imports for Three.js, `prefers-reduced-motion` support, Next.js image optimization

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout: fonts, metadata, JSON-LD, VoiceAgent
│   ├── page.tsx                      # Home page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/
│   │   ├── page.tsx                  # Services hub
│   │   ├── ai-consulting/page.tsx
│   │   ├── automation/page.tsx
│   │   ├── it-msp/page.tsx
│   │   ├── cybersecurity/page.tsx
│   │   ├── web-development/page.tsx
│   │   └── custom-integrations/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/
│       └── ai-agent/route.ts         # Gemini API proxy endpoint
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── GlowEffect.tsx
│   │   └── AnimatedCounter.tsx
│   ├── three/
│   │   ├── SceneWrapper.tsx
│   │   ├── NeuralNetworkScene.tsx
│   │   ├── ParticleField.tsx
│   │   ├── CyberShieldScene.tsx
│   │   ├── CircuitBoardScene.tsx
│   │   └── DataFlowScene.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── WhyKCSection.tsx
│   │   │   ├── KansasCitySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── services/
│   │   │   ├── ServiceHero.tsx
│   │   │   └── ServiceFeatures.tsx
│   │   └── about/
│   │       ├── MissionSection.tsx
│   │       └── TeamSection.tsx
│   └── ai/
│       ├── VoiceAgent.tsx
│       ├── AgentChat.tsx
│       └── VoiceWaveform.tsx
│
├── hooks/
│   ├── useVoiceAgent.ts              # Web Speech API + Gemini chat state
│   └── useScrollAnimation.ts
│
├── lib/
│   ├── gemini.ts                     # Gemini client + ARIA system prompt
│   ├── seo.ts                        # generateMetadata() + JSON-LD schemas
│   └── utils.ts
│
├── data/
│   ├── services.ts                   # All 6 service content objects
│   ├── team.ts
│   └── blog-posts.ts
│
├── types/index.ts
└── styles/globals.css                # Tailwind v4 @theme{} design tokens
```

---

## Services

| Service | URL |
|---|---|
| AI Consulting | `/services/ai-consulting` |
| Automation Consulting | `/services/automation` |
| IT Managed Services | `/services/it-msp` |
| Cybersecurity | `/services/cybersecurity` |
| Web Development | `/services/web-development` |
| Custom Integrations | `/services/custom-integrations` |

---

## Design System

| Token | Value |
|---|---|
| Background | `#060B18` |
| Surface | `#0D1428` |
| Card | `#111C35` |
| Border | `#1E3A5F` |
| Text Primary | `#F0F4FF` |
| Text Muted | `#7E9CC0` |
| Accent Cyan | `#00D4FF` |
| Accent Green | `#00FF88` |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/digitalboostplus/kctechteam.git
cd kctechteam

# Install dependencies
npm install

# Install required Windows native binaries (Windows only)
npm install @tailwindcss/oxide-win32-x64-msvc lightningcss-win32-x64-msvc
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
NEXT_PUBLIC_SITE_URL=https://kctechteam.com
```

Get your Gemini API key at [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## ARIA — Voice AI Sales Agent

ARIA (AI Response & Intelligence Agent) is a floating voice assistant powered by **Google Gemini 2.0 Flash**. It uses the browser's Web Speech API for voice input and output.

**How it works:**
1. User clicks the floating ARIA button (bottom-right)
2. Speaks their question
3. Web Speech API transcribes speech → sent to `/api/ai-agent`
4. Gemini 2.0 Flash generates a response using the KC Tech Team system prompt
5. Response is read aloud via SpeechSynthesis and displayed in the chat transcript

**System prompt:** `src/lib/gemini.ts` — ARIA introduces KC Tech Team services, answers questions, and guides visitors toward scheduling a free consultation.

---

## SEO

- **Per-page metadata** — Unique `title`, `description`, Open Graph, and Twitter Card for every page via `generateMetadata()` in `src/lib/seo.ts`
- **LocalBusiness JSON-LD** — Kansas City address, coordinates, phone, hours, service area (KC Metro + US + Canada + UK)
- **Organization JSON-LD** — Brand entity with logo and contact point
- **Dynamic sitemap** — `/sitemap.xml` auto-generated from all routes
- **Robots.txt** — `/robots.txt` served via `src/app/robots.ts`
- **Canonical URLs** — Set on all pages
- **Primary keywords:** AI consulting Kansas City, IT managed services Kansas City, automation consulting KC, cybersecurity services Kansas City

---

## Blog

Located at `/blog`. Four SEO-targeted articles are statically generated at build time from `src/data/blog-posts.ts`. No CMS required — add new posts directly to the data file.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Set environment variables: `GEMINI_API_KEY`, `NEXT_PUBLIC_SITE_URL`
4. Deploy — Vercel auto-configures Next.js

### Other Platforms

Any platform supporting Node.js 20+ and Next.js standalone output will work (Railway, Render, AWS, etc.).

---

## Contact

- **Website:** [kctechteam.com](https://kctechteam.com)
- **Email:** hello@kctechteam.com
- **Phone:** (816) 555-0100
- **Address:** 1000 Walnut St, Suite 1400, Kansas City, MO 64106

---

&copy; 2025 KC Tech Team. All rights reserved.
