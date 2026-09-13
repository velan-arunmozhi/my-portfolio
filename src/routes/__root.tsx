import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import appCss from '../index.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // TODO(owner): finalize <title>, description, and the deployed site URL
      { title: 'Varun — Software Engineer' },
      {
        name: 'description',
        content:
          'Varun is a software engineer. Explore his experience, projects, and get in touch.',
      },
      { property: 'og:title', content: 'Varun — Software Engineer' },
      {
        property: 'og:description',
        content:
          'Varun is a software engineer. Explore his experience, projects, and get in touch.',
      },
      {
        property: 'og:image',
        content: 'https://varun.dev/images/varun.svg',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  component: RootDocument,
})

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-canvas font-sans text-black antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}