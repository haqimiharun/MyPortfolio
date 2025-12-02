import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: "/MyPortfolio/", // Ensures assets load correctly on GitHub Pages (relative paths)
    define: {
      // Polyfill process.env for the geminiService
      'process.env.API_KEY': JSON.stringify(env.API_KEY) 
    }
  };
});