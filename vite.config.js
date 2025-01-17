import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test/',  // This should match the name of your GitHub repository
  server: {
    proxy: {
      '/submit': 'https://api.web3forms.com',  // Proxy to Web3Forms API
    },
  },
})
