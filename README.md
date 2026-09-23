# Toms Johnson — Portfolio

A Next.js 14 (App Router) + Tailwind CSS recreation of the portfolio design.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx` — root layout, global metadata
- `app/page.tsx` — assembles all sections
- `app/globals.css` — Tailwind base + global styles
- `components/Navbar.tsx` — sticky nav with mobile menu
- `components/Hero.tsx` — hero/intro section
- `components/About.tsx` — about section (light panel)
- `components/Skills.tsx` — tools/skills grid
- `components/Projects.tsx` — featured projects grid
- `components/Journey.tsx` — experience timeline + quote
- `components/Contact.tsx` — contact + footer

## Notes

- Project thumbnails and portrait photos are placeholders (gradient panels) —
  swap in real images by dropping files into `public/` and using `next/image`.
- Update the email, location, and social links in `components/Contact.tsx`.
- Colors and type scale live in `tailwind.config.js` under `theme.extend`.
