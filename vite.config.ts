import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  base: mode === 'production' ? '/photography-web/' : '/',
  plugins: [react()],
}));
