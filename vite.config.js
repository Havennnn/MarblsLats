import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MarblsLats/',

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    assetsInclude: ['**/*.jsx', '**/*.js'],
    chunkSizeWarningLimit: 1000,
  },

  server: {
    proxy: {
      '/submit': 'https://api.web3forms.com',
    },
  },
})
