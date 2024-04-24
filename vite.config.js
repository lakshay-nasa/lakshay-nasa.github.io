import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lakshay-nasa.github.io/",
  build: { chunkSizeWarningLimit: 1600, }
})
