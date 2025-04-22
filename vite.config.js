import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 important for Docker
    port: 4173       // 👈 match this with Docker EXPOSE and port mapping
  }
})
