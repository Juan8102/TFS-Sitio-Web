import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'tfs-website';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: `/${repoName}/`,
})
