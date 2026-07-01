# Bor De Guna — Company Website

Official marketing website for **Bor De Guna**, a Bangladesh-based health & organic food products brand. Built with React 19 + Vite, featuring smooth scroll animations and multi-page routing.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 3 |
| Animation | GSAP 3, Framer Motion 12, AOS (Animate on Scroll) |
| Routing | React Router DOM 7 |
| Icons | Lucide React |

## Pages & Sections

**Home (`/`)**
- Navbar
- Hero section
- Brands showcase
- Products display
- Mission & Vision
- Why Trust Us
- FAQ
- Footer

**Gallery (`/gallery`)** — lazy loaded product/brand image gallery

**Staff Verify (`/staff-verify`)** — staff identity verification page

## Project Structure

```
src/
├── components/     # Reusable UI sections (Navbar, Hero, Products, FAQ, etc.)
├── pages/          # Lazy-loaded full pages (Gallery, StaffVerify)
├── utils/
│   └── aosInit.js  # AOS scroll animation initializer
├── App.jsx          # Router and page layout
└── main.jsx         # Entry point
public/
├── logos/           # Brand logo files
├── products/        # Product images
└── staff/           # Staff photos for verify page
```

## Getting Started

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Deployment

Includes `vercel.json` for Vercel deployment and `robots.txt` + `sitemap.xml` for SEO.
Built `dist/` output is also committed for direct static hosting.
