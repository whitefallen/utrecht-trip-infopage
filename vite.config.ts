import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // '/' in dev so the local server works normally at localhost:5174
  // full sub-path in production so GitHub Pages assets resolve correctly
  base: command === 'build' ? '/utrecht-trip-infopage/' : '/',
  build: {
    rollupOptions: {
      input: {
        main:   resolve(__dirname, 'index.html'),
        report: resolve(__dirname, 'report.html'),
      },
    },
  },
}))
