import type { APIRoute } from 'astro'

// Single-page site: the sitemap lists only the home page. Add entries here
// if more pages are created.
export const GET: APIRoute = ({ site }) => {
  const home = new URL('/', site)
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `  <url><loc>${home}</loc></url>\n` +
      `</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  )
}
