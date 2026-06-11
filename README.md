# Landmarx Group Website

Marketing site for Landmarx Group — an integrated real asset development platform based in Cairns, Australia.

**Live site:** https://landmarx-group-website.vercel.app

## Stack

- [Next.js](https://nextjs.org) (App Router, static pages) + TypeScript
- Tailwind CSS v4 — design tokens live in `app/globals.css` (`@theme` block: ink/beech/gold palette)
- Fonts via `next/font`: Space Grotesk (display), Instrument Serif (italic accents), Inter (body)

## Editing

```bash
npm install
npm run dev     # local preview at http://localhost:3000
```

Each page is a file under `app/` (e.g. `app/about/page.tsx`). Shared pieces live in `components/` — `Navigation.tsx`, `Footer.tsx`, and the animation helpers `Reveal.tsx`, `Counter.tsx`, `Marquee.tsx`.

A step-by-step guide for non-developers (GitHub access, editing with Claude Code, deploying) is on the hidden page `/help` of the live site.

## Deploying

Pushes to `main` deploy automatically via the Vercel GitHub integration. Branch pushes get preview URLs.

```bash
git add .
git commit -m "Describe the change"
git push
```

The live site updates ~60–90 seconds after the push.
