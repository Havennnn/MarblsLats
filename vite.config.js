import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MarblsLats/', // Adjust as necessary for your deployment path
  server: {
    proxy: {
      '/submit': 'https://api.web3forms.com', // Proxy to Web3Forms API
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // All vendor modules will go into a separate chunk
          }
        },
      },
    },
  },
})
