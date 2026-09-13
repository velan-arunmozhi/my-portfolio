import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // TODO(owner): replace with the real deployed origin
  site: 'https://varun.dev',
  vite: {
    plugins: [tailwindcss()],
  },
})