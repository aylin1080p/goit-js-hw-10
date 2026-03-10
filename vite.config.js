import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  root: 'src',
  base: '/goit-js-hw-10/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./src/index.html', import.meta.url)),
        timer: fileURLToPath(new URL('./src/01-timer.html', import.meta.url)),
        snackbar: fileURLToPath(new URL('./src/02-snackbar.html', import.meta.url))
      }
    }
  }
})
