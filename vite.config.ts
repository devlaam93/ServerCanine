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
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-navigation-menu', '@radix-ui/react-popover', '@radix-ui/react-progress', '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-sheet', '@radix-ui/react-slider', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
          
          // Page chunks - group related pages
          'home-pages': ['./src/pages/Index.tsx', './src/pages/About.tsx', './src/pages/Features.tsx'],
          'auth-pages': ['./src/pages/Login.tsx', './src/pages/Signup.tsx', './src/pages/ForgotPassword.tsx'],
          'docs-pages': ['./src/pages/BrowseDocumentation.tsx', './src/pages/docs/ApiDocumentation.tsx', './src/pages/docs/GettingStartedGuide.tsx', './src/pages/docs/SecurityBestPractices.tsx', './src/pages/docs/TroubleshootingGuide.tsx'],
          'support-pages': ['./src/pages/Help.tsx', './src/pages/Contact.tsx', './src/pages/ContactSupport.tsx', './src/pages/Community.tsx'],
          'business-pages': ['./src/pages/Pricing.tsx', './src/pages/StartFreeTrial.tsx', './src/pages/Checkout.tsx', './src/pages/ThankYou.tsx'],
          'legal-pages': ['./src/pages/Privacy.tsx', './src/pages/Terms.tsx', './src/pages/Cookies.tsx', './src/pages/GDPR.tsx', './src/pages/Cancellation.tsx', './src/pages/Refund.tsx'],
          'blog-pages': ['./src/pages/Blog.tsx', './src/pages/BlogArticle.tsx'],
          
          // Component chunks
          'ui-components': ['./src/components/ui/button.tsx', './src/components/ui/input.tsx', './src/components/ui/card.tsx', './src/components/ui/dialog.tsx', './src/components/ui/form.tsx'],
          'layout-components': ['./src/components/Navigation.tsx', './src/components/Footer.tsx', './src/components/SEO.tsx'],
          'feature-components': ['./src/components/CookieConsent.tsx', './src/components/Captcha.tsx', './src/components/LogoGenerator.tsx']
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
