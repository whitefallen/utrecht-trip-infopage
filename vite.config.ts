import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // '/' in dev so the local server works normally at localhost:5173
  // full sub-path in production so GitHub Pages assets resolve correctly
  base: command === 'build' ? '/utrecht-trip-infopage/' : '/',
}))
