import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import lovalble from "react-lovable" 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), lovalble()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
