 import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import StartFreeTrial from "./pages/StartFreeTrial";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import ContactSupport from "./pages/ContactSupport";
import BrowseDocumentation from "./pages/BrowseDocumentation";
import GettingStartedGuide from "./pages/docs/GettingStartedGuide";
import ApiDocumentation from "./pages/docs/ApiDocumentation";
import ConfigurationManual from "./pages/docs/ConfigurationManual";
import TroubleshootingGuide from "./pages/docs/TroubleshootingGuide";
import AdvancedMonitoring from "./pages/docs/AdvancedMonitoring";
import SecurityBestPractices from "./pages/docs/SecurityBestPractices";
import PerformanceOptimization from "./pages/docs/PerformanceOptimization";
import ServerSetupBasics from "./pages/docs/ServerSetupBasics";
import CloudMigrationStrategies from "./pages/docs/CloudMigrationStrategies";
import CostManagementGuide from "./pages/docs/CostManagementGuide";
import ServerMonitoringAgent from "./pages/docs/ServerMonitoringAgent";
import ConfigurationTemplates from "./pages/docs/ConfigurationTemplates";
import SslCertificateSetup from "./pages/docs/SslCertificateSetup";
import BackupScripts from "./pages/docs/BackupScripts";
import SecurityTools from "./pages/docs/SecurityTools";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Security from "./pages/Security";
import Cookies from "./pages/Cookies";
import GDPR from "./pages/GDPR";
import Help from "./pages/Help";
import Community from "./pages/Community";
import Status from "./pages/Status";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Integrations from "./pages/Integrations";
import BlogArticle from "./pages/BlogArticle";
import Refund from "./pages/Refund";
import Cancellation from "./pages/Cancellation";
import InstantDelivery from "./pages/InstantDelivery";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsent />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
