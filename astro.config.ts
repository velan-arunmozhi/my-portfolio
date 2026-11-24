import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // TODO: replace with domain name (once bought)
  site: 'https://my-portfolio-olive-two-tftn0wsppe.vercel.app/',
  vite: {
    plugins: [tailwindcss()],
  },
})