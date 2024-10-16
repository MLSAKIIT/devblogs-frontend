import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 100
      }
    })
  ]
}})