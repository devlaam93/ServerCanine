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
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'utils-vendor';
            }
            if (id.includes('react-hook-form') || id.includes('@hookform')) {
              return 'form-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('@tanstack')) {
              return 'query-vendor';
            }
            // Other vendor libraries
            return 'vendor';
          }
          
          // Page chunks
          if (id.includes('/pages/')) {
            if (id.includes('/pages/Index.tsx') || id.includes('/pages/About.tsx') || id.includes('/pages/Features.tsx')) {
              return 'home-pages';
            }
            if (id.includes('/pages/Login.tsx') || id.includes('/pages/Signup.tsx') || id.includes('/pages/ForgotPassword.tsx')) {
              return 'auth-pages';
            }
            if (id.includes('/pages/docs/')) {
              return 'docs-pages';
            }
            if (id.includes('/pages/Help.tsx') || id.includes('/pages/Contact') || id.includes('/pages/Community.tsx')) {
              return 'support-pages';
            }
            if (id.includes('/pages/Pricing.tsx') || id.includes('/pages/Checkout.tsx') || id.includes('/pages/ThankYou.tsx') || id.includes('/pages/StartFreeTrial.tsx')) {
              return 'business-pages';
            }
            if (id.includes('/pages/Privacy.tsx') || id.includes('/pages/Terms.tsx') || id.includes('/pages/Cookies.tsx') || id.includes('/pages/GDPR.tsx') || id.includes('/pages/Cancellation.tsx') || id.includes('/pages/Refund.tsx')) {
              return 'legal-pages';
            }
            if (id.includes('/pages/Blog')) {
              return 'blog-pages';
            }
            return 'other-pages';
          }
          
          // Component chunks
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
          if (id.includes('/components/Navigation.tsx') || id.includes('/components/Footer.tsx') || id.includes('/components/SEO.tsx')) {
            return 'layout-components';
          }
          if (id.includes('/components/CookieConsent.tsx') || id.includes('/components/Captcha.tsx') || id.includes('/components/LogoGenerator.tsx')) {
            return 'feature-components';
          }
        }
      }
    },
    // Increase chunk size warning limit to 1000kb
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging
    sourcemap: mode === 'development',
    // Optimize for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Target modern browsers for better optimization
    target: 'es2020'
  }
}));
