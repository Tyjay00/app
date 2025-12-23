import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure the base path matches your repository name exactly
  base: '/app', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});