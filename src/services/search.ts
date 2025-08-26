// Search service for the ServerCanine application
export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'page' | 'documentation' | 'blog';
}

export interface PageInfo {
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'page' | 'documentation' | 'blog';
  keywords: string[];
}

// Complete list of all pages in the application
export const allPages: PageInfo[] = [
  // Main Pages
  {
    title: "Home",
    description: "ServerCanine cloud hosting platform - 40% more affordable than competitors",
    url: "/",
    category: "Main",
    type: "page",
    keywords: ["home", "hosting", "cloud", "servercanine", "affordable", "pricing"]
  },
  {
    title: "Features",
    description: "Explore ServerCanine's powerful hosting features and capabilities",
    url: "/features",
    category: "Main",
    type: "page",
    keywords: ["features", "capabilities", "hosting", "deployment", "security"]
  },
  {
    title: "Pricing",
    description: "Transparent pricing plans for all your hosting needs",
    url: "/pricing",
    category: "Main",
    type: "page",
    keywords: ["pricing", "plans", "cost", "billing", "subscription"]
  },
  {
    title: "Resources",
    description: "Documentation, guides, and resources for developers",
    url: "/resources",
    category: "Main",
    type: "page",
    keywords: ["resources", "documentation", "guides", "developers"]
  },
  {
    title: "About",
    description: "Learn about ServerCanine and our mission",
    url: "/about",
    category: "Company",
    type: "page",
    keywords: ["about", "company", "mission", "team"]
  },
  {
    title: "Blog",
    description: "Latest insights, comparisons, and hosting guides",
    url: "/blog",
    category: "Content",
    type: "blog",
    keywords: ["blog", "articles", "insights", "comparisons", "guides"]
  },
  {
    title: "Security",
    description: "Enterprise-grade security features and compliance",
    url: "/security",
    category: "Features",
    type: "page",
    keywords: ["security", "compliance", "protection", "enterprise"]
  },
  {
    title: "Integrations",
    description: "Connect with your favorite tools and services",
    url: "/integrations",
    category: "Features",
    type: "page",
    keywords: ["integrations", "tools", "services", "connect", "api"]
  },

  // Authentication Pages
  {
    title: "Login",
    description: "Sign in to your ServerCanine account",
    url: "/login",
    category: "Auth",
    type: "page",
    keywords: ["login", "signin", "account", "authentication"]
  },
  {
    title: "Sign Up",
    description: "Create your ServerCanine account",
    url: "/signup",
    category: "Auth",
    type: "page",
    keywords: ["signup", "register", "create account", "join"]
  },
  {
    title: "Forgot Password",
    description: "Reset your account password",
    url: "/forgot-password",
    category: "Auth",
    type: "page",
    keywords: ["forgot password", "reset", "recovery"]
  },
  {
    title: "Start Free Trial",
    description: "Begin your 14-day free trial",
    url: "/start-free-trial",
    category: "Trial",
    type: "page",
    keywords: ["free trial", "start", "14 days", "trial"]
  },

  // Support Pages
  {
    title: "Help Center",
    description: "Get help with ServerCanine hosting platform",
    url: "/help",
    category: "Support",
    type: "page",
    keywords: ["help", "support", "assistance", "faq"]
  },
  {
    title: "Contact Support",
    description: "Get in touch with our support team",
    url: "/contact-support",
    category: "Support",
    type: "page",
    keywords: ["contact", "support", "help", "assistance"]
  },
  {
    title: "Contact",
    description: "Contact ServerCanine team",
    url: "/contact",
    category: "Support",
    type: "page",
    keywords: ["contact", "reach out", "get in touch"]
  },
  {
    title: "Community",
    description: "Join the ServerCanine developer community",
    url: "/community",
    category: "Community",
    type: "page",
    keywords: ["community", "developers", "forum", "discussion"]
  },

  // Company Pages
  {
    title: "Careers",
    description: "Join the ServerCanine team",
    url: "/careers",
    category: "Company",
    type: "page",
    keywords: ["careers", "jobs", "hiring", "team"]
  },
  {
    title: "Status",
    description: "ServerCanine system status and uptime",
    url: "/status",
    category: "Company",
    type: "page",
    keywords: ["status", "uptime", "system", "monitoring"]
  },

  // Legal Pages
  {
    title: "Privacy Policy",
    description: "ServerCanine privacy policy and data protection",
    url: "/privacy",
    category: "Legal",
    type: "page",
    keywords: ["privacy", "policy", "data protection", "gdpr"]
  },
  {
    title: "Terms of Service",
    description: "ServerCanine terms of service and usage agreement",
    url: "/terms",
    category: "Legal",
    type: "page",
    keywords: ["terms", "service", "agreement", "legal"]
  },
  {
    title: "Cookies Policy",
    description: "Information about cookies usage",
    url: "/cookies",
    category: "Legal",
    type: "page",
    keywords: ["cookies", "policy", "tracking"]
  },
  {
    title: "GDPR Compliance",
    description: "GDPR compliance and data protection information",
    url: "/gdpr",
    category: "Legal",
    type: "page",
    keywords: ["gdpr", "compliance", "data protection", "privacy"]
  },
  {
    title: "Refund Policy",
    description: "ServerCanine refund policy and procedures",
    url: "/refund",
    category: "Legal",
    type: "page",
    keywords: ["refund", "policy", "money back", "guarantee"]
  },
  {
    title: "Cancellation Policy",
    description: "Account cancellation policy and procedures",
    url: "/cancellation",
    category: "Legal",
    type: "page",
    keywords: ["cancellation", "policy", "account", "terminate"]
  },

  // Service Pages
  {
    title: "Instant Delivery",
    description: "Fast deployment and instant delivery features",
    url: "/instant-delivery",
    category: "Features",
    type: "page",
    keywords: ["instant", "delivery", "fast", "deployment"]
  },

  // Documentation Pages
  {
    title: "Browse Documentation",
    description: "Browse all ServerCanine documentation and guides",
    url: "/browse-documentation",
    category: "Documentation",
    type: "documentation",
    keywords: ["documentation", "browse", "guides", "docs"]
  },
  {
    title: "Getting Started Guide",
    description: "Complete guide to get started with ServerCanine",
    url: "/docs/getting-started-guide",
    category: "Documentation",
    type: "documentation",
    keywords: ["getting started", "guide", "tutorial", "setup"]
  },
  {
    title: "API Documentation",
    description: "Complete API reference and documentation",
    url: "/docs/api-documentation",
    category: "Documentation",
    type: "documentation",
    keywords: ["api", "documentation", "reference", "endpoints"]
  },
  {
    title: "Configuration Manual",
    description: "Server configuration and setup manual",
    url: "/docs/configuration-manual",
    category: "Documentation",
    type: "documentation",
    keywords: ["configuration", "manual", "setup", "server"]
  },
  {
    title: "Troubleshooting Guide",
    description: "Common issues and troubleshooting solutions",
    url: "/docs/troubleshooting-guide",
    category: "Documentation",
    type: "documentation",
    keywords: ["troubleshooting", "issues", "problems", "solutions"]
  },
  {
    title: "Advanced Monitoring",
    description: "Advanced monitoring and analytics setup",
    url: "/docs/advanced-monitoring",
    category: "Documentation",
    type: "documentation",
    keywords: ["monitoring", "analytics", "advanced", "metrics"]
  },
  {
    title: "Security Best Practices",
    description: "Security guidelines and best practices",
    url: "/docs/security-best-practices",
    category: "Documentation",
    type: "documentation",
    keywords: ["security", "best practices", "guidelines", "protection"]
  },
  {
    title: "Performance Optimization",
    description: "Optimize your application performance",
    url: "/docs/performance-optimization",
    category: "Documentation",
    type: "documentation",
    keywords: ["performance", "optimization", "speed", "efficiency"]
  },
  {
    title: "Server Setup Basics",
    description: "Basic server setup and configuration",
    url: "/docs/server-setup-basics",
    category: "Documentation",
    type: "documentation",
    keywords: ["server", "setup", "basics", "configuration"]
  },
  {
    title: "Cloud Migration Strategies",
    description: "Strategies for migrating to the cloud",
    url: "/docs/cloud-migration-strategies",
    category: "Documentation",
    type: "documentation",
    keywords: ["cloud", "migration", "strategies", "move"]
  },
  {
    title: "Cost Management Guide",
    description: "Manage and optimize your hosting costs",
    url: "/docs/cost-management-guide",
    category: "Documentation",
    type: "documentation",
    keywords: ["cost", "management", "optimization", "billing"]
  },
  {
    title: "Server Monitoring Agent",
    description: "Install and configure monitoring agents",
    url: "/docs/server-monitoring-agent",
    category: "Documentation",
    type: "documentation",
    keywords: ["monitoring", "agent", "install", "configure"]
  },
  {
    title: "Configuration Templates",
    description: "Ready-to-use configuration templates",
    url: "/docs/configuration-templates",
    category: "Documentation",
    type: "documentation",
    keywords: ["configuration", "templates", "ready", "examples"]
  },
  {
    title: "SSL Certificate Setup",
    description: "SSL certificate installation and configuration",
    url: "/docs/ssl-certificate-setup",
    category: "Documentation",
    type: "documentation",
    keywords: ["ssl", "certificate", "setup", "https", "security"]
  },
  {
    title: "Backup Scripts",
    description: "Automated backup scripts and strategies",
    url: "/docs/backup-scripts",
    category: "Documentation",
    type: "documentation",
    keywords: ["backup", "scripts", "automated", "recovery"]
  },
  {
    title: "Security Tools",
    description: "Security tools and monitoring setup",
    url: "/docs/security-tools",
    category: "Documentation",
    type: "documentation",
    keywords: ["security", "tools", "monitoring", "protection"]
  }
];

// Search function
export function searchPages(query: string, category?: string): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  allPages.forEach(page => {
    // Skip if category filter is applied and doesn't match
    if (category && page.category !== category) {
      return;
    }

    let score = 0;
    let matches = false;

    // Check title (highest priority)
    if (page.title.toLowerCase().includes(searchTerm)) {
      score += 10;
      matches = true;
    }

    // Check description
    if (page.description.toLowerCase().includes(searchTerm)) {
      score += 5;
      matches = true;
    }

    // Check keywords
    page.keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(searchTerm)) {
        score += 3;
        matches = true;
      }
    });

    // Check URL
    if (page.url.toLowerCase().includes(searchTerm)) {
      score += 2;
      matches = true;
    }

    if (matches) {
      results.push({
        title: page.title,
        description: page.description,
        url: page.url,
        category: page.category,
        type: page.type
      });
    }
  });

  // Sort by relevance (you could implement a more sophisticated scoring system)
  return results.sort((a, b) => {
    // Prioritize exact title matches
    const aExactTitle = a.title.toLowerCase() === searchTerm;
    const bExactTitle = b.title.toLowerCase() === searchTerm;
    
    if (aExactTitle && !bExactTitle) return -1;
    if (!aExactTitle && bExactTitle) return 1;
    
    // Then by title contains
    const aTitleMatch = a.title.toLowerCase().includes(searchTerm);
    const bTitleMatch = b.title.toLowerCase().includes(searchTerm);
    
    if (aTitleMatch && !bTitleMatch) return -1;
    if (!aTitleMatch && bTitleMatch) return 1;
    
    // Finally alphabetical
    return a.title.localeCompare(b.title);
  });
}

// Get all categories
export function getCategories(): string[] {
  const categories = new Set(allPages.map(page => page.category));
  return Array.from(categories).sort();
}

// Get pages by category
export function getPagesByCategory(category: string): PageInfo[] {
  return allPages.filter(page => page.category === category);
}

// Get pages by type
export function getPagesByType(type: 'page' | 'documentation' | 'blog'): PageInfo[] {
  return allPages.filter(page => page.type === type);
}
