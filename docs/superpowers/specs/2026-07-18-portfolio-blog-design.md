# Danial Dirar — Portfolio + Blog · Design Spec

**Date:** 2026-07-18 · **Status:** Approved by user

## Goal

A personal portfolio website for Md. Danial Dirar — CS engineer working on ML, AI,
and local AI tailoring for business — with a simple image-capable blog.
Not extravagant: few tabs, terminal/code aesthetic, fast.

References: sabbir.qullia.com (terminal cursor / portfolio vibe),
safayatborhan.github.io (minimal blog: reverse-chronological list, tags).

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack), Tailwind CSS v4, shadcn/ui, lucide-react
- Framer Motion for reveals; custom dependency-free light/dark theme (anti-FOUC inline script, default dark) — same pattern as Haifa Intelligence
- Blog: Git-based MDX — `content/blog/*.mdx` + frontmatter (`title, date, tags, cover, excerpt`), rendered with `next-mdx-remote/rsc`, `gray-matter`, `rehype-pretty-code` (Shiki). Images in `public/blog/<slug>/`
- No backend. Deploy target: Vercel. Single app (no monorepo).

## Routes

Nav: **Home · Projects · Blog · About**

| Route | Content |
|---|---|
| `/` | Terminal hero + featured projects (3–4) + latest 3 blog posts |
| `/projects` | All projects grid — stack badges, GitHub links |
| `/blog` | Reverse-chronological post list, tag filter |
| `/blog/[slug]` | Post: cover, prose, highlighted code, tags |
| `/about` | Bio, skills, publications (2 papers, DOI links), contact + socials |

## Terminal Hero

- Terminal window chrome (traffic-light dots, `danial@haifa:~$` prompt)
- Typing animation with blinking block cursor:
  - `$ whoami` → `Md. Danial Dirar — ML & Software Engineer`
  - `$ cat focus.txt` → `Machine Learning · Generative AI · Local AI for business`
  - `$ ./contact --now`
- Faint floating/blurred code snippets in the background for depth

## Aesthetic

- Dark default; terminal-green accent (≈ `#00ff9c`), amber secondary; light mode toggle
- Fonts: JetBrains Mono (headings/terminal/code) + Geist/Inter (body)
- Grid background, subtle glows, monospace labels

## Data (reused from Haifa Intelligence repo)

- Identity: Md. Danial Dirar, Dhaka, Bangladesh; GitHub `Danial-Dirar`;
  Google Scholar `OeiDTrwAAAAJ`; ORCID `0009-0002-4081-4175`
- Email: `danieldirar@protonmail.com` (default; user may swap later)
- Projects: Haifa HiveMind, Groundwater Level Prediction, GRD, Unsupervised Music
  Generation, CreditSense AI, E-commerce Shipping AI, DishDash, Distributed ML
  System, Signal Sweep — copied from `Haifa Intelligence/apps/web/lib/data/projects.ts`
- Publications: 2 Applied Water Science journal articles — copied from `publications.ts`
- Founder photo: `public/founder/danial.jpg` + blurDataURL

## Out of scope (YAGNI)

NestJS API, database, admin panel, comments, CMS, AI studio, analytics.
