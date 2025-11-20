// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // CLAVE: Usar ruta relativa. Esto soluciona los errores 404 en GitHub Pages
  base: './', 
})