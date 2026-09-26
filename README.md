# DCE Studio

Portfolio for David Christian Ekene and DCE Studio. The current site is a React 18 single-page application built with Vite, JavaScript, Tailwind CSS 4, and Framer Motion. It has not been migrated to Next.js.

## Run locally

From the project directory:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Checks

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

## Project structure

```text
src/
  components/   Reusable page sections, navigation, project cards and dialogs
  data/         Project and case-study content
  App.jsx       React page composition and CV viewer state
  Portfolio.css Responsive site styles
  index.css     Tailwind CSS entrypoint
public/         Favicon, portfolio images, robots.txt and sitemap.xml
index.html      SEO and social metadata for the Vite app
```

Project URLs, descriptions, technologies, and case-study content are maintained in `src/data/projects.js`. Add a `githubUrl` only when a real project repository is available.

## Next.js App Router migration

The following is a migration guide, not a claim that this React site already runs on Next.js.

1. Install Next.js and update the scripts in `package.json`:

   ```powershell
   npm.cmd install next
   ```

   Set `dev` to `next dev`, `build` to `next build`, and add `start` as `next start`. Remove the Vite-only `preview` script after the migration is verified.

2. Create `app/layout.js` as the root layout. Import the global styles there, move title/description/Open Graph settings into Next.js `metadata`, and keep the existing icon under `public/`. For example:

   ```js
   import "../src/index.css";
   import "../src/Portfolio.css";

   export const metadata = {
     metadataBase: new URL("https://dce-studio.vercel.app"),
     title: "David Christian Ekene | Frontend Developer & DCE Studio",
     description:
       "David Christian Ekene is a frontend developer and founder of DCE Studio, building modern, responsive websites with React, Next.js, JavaScript and Tailwind CSS.",
     alternates: {
       canonical: "/",
     },
     robots: {
       index: true,
       follow: true,
     },
     openGraph: {
       title: "David Christian Ekene | Frontend Developer & DCE Studio",
       description:
         "David Christian Ekene is a frontend developer and founder of DCE Studio, building modern, responsive websites with React, Next.js, JavaScript and Tailwind CSS.",
       url: "/",
       siteName: "DCE Studio",
       images: ["/Brand logo.png"],
       type: "website",
     },
     twitter: {
       card: "summary_large_image",
       title: "David Christian Ekene | Frontend Developer & DCE Studio",
       description:
         "David Christian Ekene is a frontend developer and founder of DCE Studio, building modern, responsive websites with React, Next.js, JavaScript and Tailwind CSS.",
       images: ["/Brand logo.png"],
     },
   };

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     );
   }
   ```

3. Move the composition in `src/App.jsx` to `app/page.js`. It currently uses React state for the CV viewer, so keep that route as a Client Component by placing `"use client"` at the top. Move the `Portfolio.css` import out of `App.jsx` and into `app/layout.js`; Next.js global CSS belongs in the root layout. Keep project content in `src/data/projects.js` and section components in `src/components/` while migrating.

4. Replace `<img>` with `Image` from `next/image` in image-owning components. For public images, keep paths such as `src="/Brand%20logo.png"` and provide `alt`, `width`, and `height`, or use `fill` inside a positioned parent with a `sizes` value. The project data also includes Unsplash image URLs; allow only the required host in `next.config.js` with `images.remotePatterns`, or download and optimize those images into `public/` first. Set `priority` only for the above-the-fold portrait; keep below-the-fold project imagery lazy.

5. Use `Link` from `next/link` for navigation to internal routes, for example `<Link href="/projects">Projects</Link>`. The current `#about`, `#projects`, and similar same-page anchors can remain regular `<a href="#projects">` links. Keep external project/social URLs, `mailto:`, and WhatsApp links as ordinary anchors.

6. App Router basics: each folder under `app/` can define a route through its `page.js`; `layout.js` wraps that route and nested routes; Server Components are the default; add `"use client"` only to components that need state, effects, event handlers, or browser APIs. The current interactive navigation, case-study dialog, scroll progress and CV viewer need client-side behavior. Keep purely presentational content server-renderable if the component boundaries are later split.

7. Verify with `npm.cmd run build`, then push the migrated repository and import it in Vercel. Vercel detects Next.js automatically; confirm the production build succeeds and that the live site uses the correct domain, metadata, images, and contact links.

## Contact

- Email: davchristian293@gmail.com
- WhatsApp: +234 701 578 1293
- GitHub: https://github.com/DCE-code
- LinkedIn: https://www.linkedin.com/in/christian-david-479650311
