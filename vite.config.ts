import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimizar el tamaño del bundle
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['lucide-react', '@phosphor-icons/react'],
          'vendor-utils': ['class-variance-authority', 'clsx', 'tailwind-merge'],
        },
        // Nombres más cortos para mejor cache
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimizar el bundle
    minify: 'terser',
    // Tamaño máximo de chunk
    chunkSizeWarningLimit: 1000,
    // Generar sourcemaps para debugging
    sourcemap: false,
  },
  // Preload de módulos críticos
  optimizeDeps: {
    include: ['react', 'react-dom', '@phosphor-icons/react']
  }
})
