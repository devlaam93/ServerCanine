import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable manual chunking to let Vite handle it automatically
    // This should resolve React loading issues
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging
    sourcemap: mode === 'development',
    // Optimize for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Target modern browsers for better optimization
    target: 'es2020'
  }
}));
