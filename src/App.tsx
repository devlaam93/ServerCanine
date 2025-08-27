 import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import CookieConsent from "@/components/CookieConsent";

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

// Lazy load pages for better code splitting
// Core pages (loaded immediately)
import Index from "./pages/Index";

// Home & Marketing pages
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Security = lazy(() => import("./pages/Security"));

// Auth pages
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

// Business pages
const StartFreeTrial = lazy(() => import("./pages/StartFreeTrial"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Support pages
const Help = lazy(() => import("./pages/Help"));
const Contact = lazy(() => import("./pages/Contact"));
const ContactSupport = lazy(() => import("./pages/ContactSupport"));
const Community = lazy(() => import("./pages/Community"));

// Documentation pages
const BrowseDocumentation = lazy(() => import("./pages/BrowseDocumentation"));
const GettingStartedGuide = lazy(() => import("./pages/docs/GettingStartedGuide"));
const ApiDocumentation = lazy(() => import("./pages/docs/ApiDocumentation"));
const ConfigurationManual = lazy(() => import("./pages/docs/ConfigurationManual"));
const TroubleshootingGuide = lazy(() => import("./pages/docs/TroubleshootingGuide"));
const AdvancedMonitoring = lazy(() => import("./pages/docs/AdvancedMonitoring"));
const SecurityBestPractices = lazy(() => import("./pages/docs/SecurityBestPractices"));
const PerformanceOptimization = lazy(() => import("./pages/docs/PerformanceOptimization"));
const ServerSetupBasics = lazy(() => import("./pages/docs/ServerSetupBasics"));
const CloudMigrationStrategies = lazy(() => import("./pages/docs/CloudMigrationStrategies"));
const CostManagementGuide = lazy(() => import("./pages/docs/CostManagementGuide"));
const ServerMonitoringAgent = lazy(() => import("./pages/docs/ServerMonitoringAgent"));
const ConfigurationTemplates = lazy(() => import("./pages/docs/ConfigurationTemplates"));
const SslCertificateSetup = lazy(() => import("./pages/docs/SslCertificateSetup"));
const BackupScripts = lazy(() => import("./pages/docs/BackupScripts"));
const SecurityTools = lazy(() => import("./pages/docs/SecurityTools"));

// Legal pages
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const GDPR = lazy(() => import("./pages/GDPR"));
const Refund = lazy(() => import("./pages/Refund"));
const Cancellation = lazy(() => import("./pages/Cancellation"));

// Blog pages
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));

// Other pages
const Resources = lazy(() => import("./pages/Resources"));
const Status = lazy(() => import("./pages/Status"));
const Careers = lazy(() => import("./pages/Careers"));
const Integrations = lazy(() => import("./pages/Integrations"));
const InstantDelivery = lazy(() => import("./pages/InstantDelivery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsent />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/free-trial" element={<StartFreeTrial />} />
            <Route path="/start-free-trial" element={<StartFreeTrial />} />
            <Route path="/contact-support" element={<ContactSupport />} />
            <Route path="/browse-documentation" element={<BrowseDocumentation />} />
            <Route path="/docs/getting-started-guide" element={<GettingStartedGuide />} />
            <Route path="/docs/api-documentation" element={<ApiDocumentation />} />
            <Route path="/docs/configuration-manual" element={<ConfigurationManual />} />
            <Route path="/docs/troubleshooting-guide" element={<TroubleshootingGuide />} />
            <Route path="/docs/advanced-monitoring" element={<AdvancedMonitoring />} />
            <Route path="/docs/security-best-practices" element={<SecurityBestPractices />} />
            <Route path="/docs/performance-optimization" element={<PerformanceOptimization />} />
            <Route path="/docs/server-setup-basics" element={<ServerSetupBasics />} />
            <Route path="/docs/cloud-migration-strategies" element={<CloudMigrationStrategies />} />
            <Route path="/docs/cost-management-guide" element={<CostManagementGuide />} />
            <Route path="/docs/server-monitoring-agent" element={<ServerMonitoringAgent />} />
            <Route path="/docs/configuration-templates" element={<ConfigurationTemplates />} />
            <Route path="/docs/ssl-certificate-setup" element={<SslCertificateSetup />} />
            <Route path="/docs/backup-scripts" element={<BackupScripts />} />
            <Route path="/docs/security-tools" element={<SecurityTools />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/security" element={<Security />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/help" element={<Help />} />
            <Route path="/community" element={<Community />} />
            <Route path="/status" element={<Status />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/docs" element={<BrowseDocumentation />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/instant-delivery" element={<InstantDelivery />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
