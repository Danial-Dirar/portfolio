# handout.md — Project Handbook

> **এই ফাইলটা কী:** এই প্রজেক্টে যা যা করা হয়েছে তার running log + guide।
> প্রতি session-এ কাজ শেষে এটা **আপডেট করতে হবে** — যাতে পরের বার এটা পড়েই
> পুরো context বোঝা যায়। (Owner-এর নির্দেশ, 2026-07-18)

## নিয়ম (owner-এর দেওয়া)

- **Git commits শুধু owner-এর নামে।** কোনো `Co-Authored-By: Claude` লাইন
  দেওয়া যাবে না — ইতিহাস থেকেও মুছে ফেলা হয়েছে (filter-branch, 2026-07-18)।
- Design সিদ্ধান্ত extravagant না — অল্প tab, simple, terminal vibe।

## প্রজেক্টটা কী

**Md. Danial Dirar**-এর personal portfolio + blog। উনি CS engineer — ML, AI,
generative AI, আর business-এর জন্য local AI tailoring নিয়ে কাজ করেন।
ঢাকা, বাংলাদেশ। (Owner চ্যাটে Banglish-এ কথা বলেন।)

**Reference sites:** sabbir.qullia.com (terminal cursor aesthetic),
safayatborhan.github.io (minimal blog)। Design spec:
`docs/superpowers/specs/2026-07-18-portfolio-blog-design.md`

## Stack

- **Next.js 16** (App Router, TS, Turbopack) — single app, monorepo না
- **Tailwind v4** + **shadcn/ui** (radix base, nova preset) + lucide-react
- **Framer Motion** (Reveal component) — Haifa Intelligence থেকে আনা
- **Blog:** Git-based MDX — `content/blog/*.mdx`, `gray-matter` +
  `next-mdx-remote/rsc` + `rehype-pretty-code` (Shiki, dual theme) + `remark-gfm`
- **Theme:** dependency-free dark/light, **dark default**, terminal-green accent।
  Anti-FOUC: `next/script beforeInteractive` (layout.tsx) — ⚠️ Haifa-র
  InlineScript hack ব্যবহার কোরো না, ওটা React 19-এ hydration ভাঙে (নিচে দেখো)
- **কোনো backend নেই।** Deploy target: Vercel (এখনো deploy হয়নি)

## Structure (গুরুত্বপূর্ণ ফাইল)

```
app/
  layout.tsx        fonts (Geist + JetBrains Mono), theme script, Navbar/Footer
  page.tsx          Home: TerminalHero + featured projects + latest 3 posts
  projects/page.tsx সব project grid
  blog/page.tsx     post list + ?tag= filter (dynamic route)
  blog/[slug]/      MDX render, SSG via generateStaticParams
  about/page.tsx    bio, skills, publications, portrait, contact buttons
components/
  home/terminal-hero.tsx   typing animation + blinking cursor + floating code
  layout/navbar.tsx        fixed, terminal-prompt wordmark (danial@haifa:~$)
  layout/footer.tsx
  shared/project-card.tsx  cover image / gradient fallback
  shared/post-card.tsx
  theme/                   theme-script.ts, use-theme.ts, theme-toggle.tsx
  motion/reveal.tsx        scroll reveal (Haifa থেকে)
lib/
  site.ts           নাম, email, socials, nav — সব config এখানে
  blog.ts           MDX reader: getAllPosts/getPost/getAllTags/formatDate
  data/projects.ts  ৯টা প্রজেক্ট (Haifa থেকে কপি)
  data/publications.ts  ২টা journal paper (DOI সহ)
  data/founder.ts   portrait + blurDataURL
content/blog/       ২টা sample post আছে
public/founder/danial.jpg   আসল ছবি (EXIF stripped, 1100px)
public/work/        project cover images (Haifa থেকে)
```

## Data কোথা থেকে এলো

সব identity/project data **`~/Development/Haifa Intelligence/apps/web/lib/`**
থেকে কপি করা। GitHub: `Danial-Dirar`, Scholar: `OeiDTrwAAAAJ`,
ORCID: `0009-0002-4081-4175`। Email এখন `danieldirar@protonmail.com`
(**confirm হয়নি** — gmail-এ বদলাতে চাইতে পারেন)।

## নতুন blog post লেখার নিয়ম

1. `content/blog/<slug>.mdx` বানাও — frontmatter: `title, date (yyyy-mm-dd),
   tags[], excerpt, cover (optional)`
2. ছবি: `public/blog/<slug>/` এ রাখো, MDX-এ `![alt](/blog/<slug>/x.jpg)`
3. Commit করলেই publish (SSG)

## চালানো

```bash
npm run dev     # সাধারণত port 3199 ব্যবহার করছি টেস্টে
npm run build   # ⚠️ dev server চালু থাকা অবস্থায় build চালালে dev server
                # মরে যায় (একই .next dir) — আগে dev বন্ধ করো
```

## এখন পর্যন্ত যা হয়েছে (changelog)

### 2026-07-18 — session 1: পুরো সাইট scaffold থেকে দাঁড় করানো

- Spec + brainstorm (owner-এর পছন্দ: সব Haifa data reuse, MDX blog,
  Home/Projects/Blog/About ৪ tab, dark+green terminal aesthetic)
- create-next-app + shadcn (radix/nova) + framer-motion + MDX stack
- Terminal-green theme tokens (oklch, brand-1 green / brand-2 amber),
  bg-grid, cursor-blink, terminal-window, prose-blog CSS — সব `globals.css`-এ
- TerminalHero: `$ whoami` / `$ cat focus.txt` / `$ ./contact --now` typing script
- সব page + ২টা sample post + publications সহ About
- **Bug fix:** tab click কাজ করছিল না — Haifa-র InlineScript (server/client
  type-swap) React 19-এর head hydration fail করাচ্ছিল → পুরো tree client-এ
  regenerate হয়ে JS interactivity মরে যাচ্ছিল। Fix: `next/script`
  `strategy="beforeInteractive"` + body-তে suppressHydrationWarning।
- Cursor blink কমানো: শুধু terminal box-এর ভেতরে থাকবে (নাম/navbar থেকে সরানো)
- আসল ছবি: `~/IMG_20241007_175559.jpg` → resize 1100px, EXIF strip,
  নতুন blurDataURL, About-এ objectPosition 50% 30%
- Git history rewrite: সব Co-Authored-By লাইন মুছে ফেলা হয়েছে
- Remote যোগ: `origin → github.com/Danial-Dirar/portfolio.git` (owner নিজে push দেন)
- **CV viewer:** About-এর sidebar-এ "View CV" button → animated modal
  (`components/shared/cv-dialog.tsx`, framer-motion spring + backdrop blur)।
  Preview = pre-rendered webp pages (`public/cv/page-*.webp`, mobile-safe);
  Print = hidden iframe দিয়ে আসল PDF (`public/cv/danial-dirar-cv.pdf`),
  fallback new tab; Download = `<a download>`। CV আপডেট হলে: নতুন PDF
  `public/cv/`-তে রেখে `pdftoppm -png -r 150` → magick webp — একই নামে।

## Pending / জিজ্ঞেস করার আছে

- [ ] Email কোনটা যাবে — protonmail (এখন) নাকি gmail?
- [ ] ছবি home page-এও যাবে কিনা (এখন শুধু About-এ)
- [ ] `site.url` এখন `danialdirar.dev` placeholder — আসল domain ঠিক হয়নি
- [ ] Vercel deploy (CLI install করা নেই)
- [ ] Terminal hero-র লাইনগুলো owner-এর পছন্দমতো tweak
