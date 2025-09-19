import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000' // vercel dev runs on 3000
    }
  }
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> fed4b15ae02a1fa3d5418c4b433ddc9930172977
})
