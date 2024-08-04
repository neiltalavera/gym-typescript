import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //comes from @type/node that we installed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src" )}]
  }
})
