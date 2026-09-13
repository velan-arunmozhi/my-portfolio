# TODO — Replace placeholders with real content

The site is fully built and data-driven. Everything below is currently a
placeholder so the layout can be verified. Replace each item and the site
updates itself — no code changes required. Dates in `experiences.json` are
"YYYY-MM"; `end: null` means "current".

## Public/data (edit these)

1. `public/data/profile.json`
   - `name` (your name), `title` (headline), `bio` (short intro).
   - `photo` → path to your real photo (e.g. `/images/varun.jpg`).
   - `github`, `linkedin` → real profile URLs.
   - `email` → real contact address.
2. `public/data/experiences.json`
   - Replace the 3 placeholder entries with real roles (company, position,
     start/end, blurb, logo path). The timeline sorts oldest-first and the
     same order is used regardless of file order.
   - `logo` → real logo image paths (drop files in `public/images/`).
3. `public/data/projects.json`
   - Replace the 3 placeholder projects (title, image, blurb, links).
   - `links` is optional; leave `"links": []` or omit it for no buttons.

## Public assets (drop files in)

4. `public/images/` — replace the placeholder `varun.svg`, `logo-*.svg`,
   and `project-*.svg` files with real photos/screenshots, and update the
   paths above.
5. `public/resume.pdf` — replace the placeholder PDF with your real resume,
   keeping the same filename (`/resume.pdf` in `profile.json`) or updating
   `resumeHref`.

## Head metadata (edit `src/routes/__root.tsx`)

6. `<title>`, meta `description`, and the `og:*` tags use a placeholder
   domain (`https://varun.dev`). Update them once the site is deployed so
   OpenGraph previews point at real content and assets.
7. (Optional) Replace `public/favicon.svg` with a personal favicon.

## Site URL (edit `src/routes/__root.tsx` if needed)

8. The OG image path is relative to `https://varun.dev` — update to the real
   deployed origin.