import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Declaration to fix TypeScript error if @types/node isn't loaded
declare const process: any;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: './', // Use relative paths so it works on any repo name (e.g. MyPortfolio or myportfolio)
    define: {
      // Polyfill process.env for the geminiService
      'process.env.API_KEY': JSON.stringify(env.API_KEY) 
    }
  };
});