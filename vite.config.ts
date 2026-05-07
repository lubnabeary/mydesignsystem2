import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mydesignsystem2/',
  plugins: [react()],
  server: {
    allowedHosts: ['twig-passport-scarring.ngrok-free.dev']
  }
})