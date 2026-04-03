# Moon Stars Scholars Academy — school website

Public marketing site for **Moon Stars Scholars Academy**, built with **React 18** and **Vite 5**. It includes a home landing page (hero, programs, about, gallery, testimonials), plus **Admissions**, **Contact**, and **News** pages via **React Router**.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start dev server (HMR)   |
| `npm run build`| Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint               |

## Project layout

- `src/App.jsx` — route definitions
- `src/main.jsx` — app entry, `BrowserRouter`
- `src/pages/` — `HomePage`, `AdmissionsPage`, `ContactPage`, `NewsPage`
- `src/Components/` — shared UI (navbar, hero, sections, footer, layout)
- `src/assets/` — images

Update placeholder contact details (email, phone) in [`src/Components/Footer/Footer.jsx`](src/Components/Footer/Footer.jsx) and [`src/pages/ContactPage.jsx`](src/pages/ContactPage.jsx) for production.

## Deploying

Build static assets with `npm run build` and host the `dist/` folder on any static host (e.g. Netlify, Vercel, school web server). Configure the host to serve `index.html` for client-side routes (**SPA fallback**).

## Future: CMS and backend

**Headless CMS** (e.g. Sanity, Contentful, or markdown at build time) is a good fit when non-developers need to edit news, gallery copy, or program blurbs without redeploying from code.

A **backend** (auth, applications, parent portals, payments) is a separate product phase: define who logs in, what data you store, and compliance requirements first, then choose a stack (e.g. Supabase, Firebase, or a custom API). Keep the public site static or CDN-backed until those requirements are clear.

## License

Private project (`private: true` in `package.json`).
