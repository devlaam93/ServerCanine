import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Server, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Star, Quote, Globe, Database, Rocket, Clock, Calendar, User, Mail, Gift, Percent, DollarSign, Award, Check, FolderOpen, HardDrive, Wifi, UserPlus, Lock, Globe2, Code, BarChart, Layers, Archive, Headphones, TrendingUp, Key, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import cloudInfrastructure from "@/assets/cloud-infrastructure.jpg";
import fastDeployment from "@/assets/fast-deployment.jpg";
import security from "@/assets/security.jpg";
import teamManagement from "@/assets/team-management.jpg";
import awsVsServercanine from "@/assets/blog/aws-vs-servercanine.jpg";
import googleCloudAlternative from "@/assets/blog/google-cloud-alternative.jpg";
import digitalOceanVsServercanine from "@/assets/blog/digitalocean-vs-servercanine.jpg";
const Index = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);

    try {
      // Simulate API call - replace with actual newsletter subscription logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("🎉 Successfully subscribed to our newsletter!", {
        description: "Thank you for joining 25,000+ developers! You'll receive our latest updates and exclusive offers.",
        duration: 5000,
      });
      
      // Clear the input
      setNewsletterEmail("");
      
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const stats = [{
    value: "$2.5M+",
    label: "Hosting Bills Saved",
    icon: <DollarSign className="h-6 w-6" />
  }, {
    value: "100,000+",
    label: "Sites Deployed",
    icon: <Globe className="h-6 w-6" />
  }, {
    value: "50,000+",
    label: "Happy Customers",
    icon: <Users className="h-6 w-6" />
  }, {
    value: "99.99%",
    label: "Uptime",
    icon: <Shield className="h-6 w-6" />
  }];
  const specialOffers = [{
    badge: "Limited Time",
    title: "Professional Plan - 50% Off",
    description: "Get our most popular plan at an incredible discount",
    originalPrice: "$29",
    discountPrice: "$14.50",
    yearlyPrice: "$290",
    yearlyDiscountPrice: "$145",
    validUntil: "Dec 31, 2024",
    features: [
      "10 Projects",
      "1TB Bandwidth", 
      "100GB Storage",
      "5 Team Members",
      "Priority Email Support",
      "Custom Domains",
      "Advanced Analytics",
      "Staging Environments",
      "API Access",
      "Build Monitoring",
      "Automatic Backups",
      "99.95% Uptime SLA"
    ],
    cta: "Claim 50% Discount",
    highlight: true,
    savings: "Save $174/year"
  }, {
    badge: "Business Plan",
    title: "Business Hosting - 30% Off",
    description: "Perfect for scaling applications and larger teams",
    originalPrice: "$79",
    discountPrice: "$55.30",
    yearlyPrice: "$790",
    yearlyDiscountPrice: "$553",
    validUntil: "Limited Time",
    features: [
      "50 Projects",
      "5TB Bandwidth",
      "500GB Storage", 
      "20 Team Members",
      "24/7 Phone & Email Support",
      "Advanced Security",
      "Team Management",
      "SSO Integration",
      "Compliance Reports",
      "Custom Integrations",
      "Performance Optimization",
      "Advanced Monitoring"
    ],
    cta: "Get Business Plan",
    highlight: false,
    savings: "Save $237/year"
  }, {
    badge: "Add-on Special",
    title: "Managed Database Bundle",
    description: "Complete database solution with monitoring included",
    originalPrice: "$65",
    discountPrice: "$45",
    bundleDetails: "Database + Monitoring",
    features: [
      "Managed PostgreSQL/MySQL/MongoDB",
      "2 vCPU, 4GB RAM, 100GB Storage",
      "Automatic backups & recovery",
      "High availability with failover",
      "Performance monitoring",
      "25 applications monitoring",
      "90-day retention",
      "Custom alerts & notifications"
    ],
    cta: "Get Bundle Deal",
    highlight: false,
    savings: "Save $20/month"
  }, {
    badge: "Enterprise",
    title: "Custom Enterprise Solutions",
    description: "Tailored hosting with dedicated support and SLA",
    features: [
      "Unlimited Projects & Resources",
      "Dedicated Support Manager", 
      "White-label Options",
      "Custom SLA Guarantees",
      "On-premise Deployment",
      "Advanced Security Features",
      "Migration Assistance",
      "Training & Onboarding",
      "Priority Feature Requests"
    ],
    cta: "Contact Sales",
    highlight: false,
    customPricing: true
  }];

  const usagePricing = [
    {
      category: "Compute Resources",
      items: [
        { name: "CPU Hours", price: "$0.05", unit: "per hour" },
        { name: "Memory (RAM)", price: "$0.02", unit: "per GB/hour" },
        { name: "GPU Hours", price: "$0.50", unit: "per hour" }
      ]
    },
    {
      category: "Storage & Bandwidth", 
      items: [
        { name: "Additional Storage", price: "$0.10", unit: "per GB/month" },
        { name: "Bandwidth Overage", price: "$0.08", unit: "per GB" },
        { name: "Backup Storage", price: "$0.05", unit: "per GB/month" }
      ]
    },
    {
      category: "Premium Services",
      items: [
        { name: "Dedicated IP", price: "$5.00", unit: "per month" },
        { name: "Load Balancer", price: "$15.00", unit: "per month" },
        { name: "CDN Premium", price: "$10.00", unit: "per month" }
      ]
    }
  ];
  const features = [{
    icon: <Rocket className="h-8 w-8" />,
    title: "Lightning-Fast Deployments",
    description: "Deploy your applications in under 30 seconds with our optimized infrastructure and global CDN.",
    image: fastDeployment,
    benefits: ["30-second deployments", "Global edge network", "Automatic scaling", "Zero-downtime updates"]
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise-Grade Security",
    description: "Built-in security features including DDoS protection, SSL certificates, and automated security updates.",
    image: security,
    benefits: ["DDoS protection", "SSL certificates", "WAF protection", "Security monitoring"]
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Manage your team with role-based access controls and collaborative development environments.",
    image: teamManagement,
    benefits: ["Role-based access", "Team management", "Shared environments", "Activity logs"]
  }];
  const testimonials = [{
    quote: "servercanine saved us $3,000 monthly while improving our app performance by 40%. The migration was seamless.",
    author: "Sarah Johnson",
    role: "CTO at TechFlow",
    avatar: "👩‍💼",
    rating: 5
  }, {
    quote: "Best hosting experience ever. Lightning-fast deployments and incredible support team that actually helps.",
    author: "Michael Chen",
    role: "Lead Developer at StartupXYZ",
    avatar: "👨‍💻",
    rating: 5
  }, {
    quote: "The automatic scaling handled our viral launch perfectly. 10x traffic increase with zero downtime.",
    author: "Jessica Taylor",
    role: "Founder at GrowthApp",
    avatar: "👩‍🔬",
    rating: 5
  }];
  const blogPosts = [{
    title: "AWS vs servercanine: Why We're 40% Cheaper",
    excerpt: "A detailed comparison of AWS pricing versus servercanine's affordable cloud hosting solutions.",
    category: "Comparison",
    author: "Tech Team",
    date: "2025-01-20",
    readTime: "8 min read",
    image: awsVsServercanine,
    slug: "aws-vs-servercanine-40-percent-cheaper"
  }, {
    title: "Google Cloud Alternative: servercanine's Edge",
    excerpt: "Discover how servercanine provides better value than Google Cloud Platform for SMBs.",
    category: "Alternatives",
    author: "Sarah Johnson",
    date: "2025-01-18",
    readTime: "6 min read",
    image: googleCloudAlternative,
    slug: "google-cloud-alternative-servercanine-edge"
  }, {
    title: "DigitalOcean vs servercanine: Feature Comparison",
    excerpt: "Side-by-side comparison of features, pricing, and performance between providers.",
    category: "Comparison",
    author: "Mike Chen",
    date: "2025-01-15",
    readTime: "10 min read",
    image: digitalOceanVsServercanine,
    slug: "digitalocean-vs-servercanine-feature-comparison"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SEO 
        title="Affordable Cloud Hosting for Developers & Agencies"
        description="Affordable cloud hosting solutions 40% cheaper than competitors. Managed hosting with intuitive control panels, automated deployments, and enterprise security. Start your 14-day free trial today."
        keywords="cloud hosting, web hosting, managed hosting, VPS hosting, dedicated servers, affordable hosting, developer hosting, agency hosting, cheap hosting, reliable hosting, fast hosting, secure hosting, servercanine"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 primary-gradient text-white">
                <Star className="h-3 w-3 mr-1" />
                40% More Affordable Than Competitors
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Cloud Hosting
                <span className="block primary-gradient bg-clip-text text-transparent">
                  For Modern Teams
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Deploy faster, scale smarter, and save money with servercanine's 
                <strong> enterprise-grade hosting platform</strong> designed for developers, agencies, and growing businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" className="hover-scale" asChild>
                  <Link to="/free-trial">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline-hero" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-glow rounded-lg blur opacity-20"></div>
              <img src={heroDashboard} alt="servercanine Dashboard" className="relative rounded-lg elegant-shadow hover:glow-shadow smooth-transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-purple-500/20">
              <DollarSign className="h-3 w-3 mr-1" />
              Complete Pricing Overview
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare all features and limits across our hosting plans to find the perfect fit for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg shadow-lg">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="flex flex-col items-center">
                      <Rocket className="h-5 w-5 mb-1 text-blue-500" />
                      <span>Starter</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="flex flex-col items-center">
                      <Zap className="h-5 w-5 mb-1 text-green-500" />
                      <span>Professional</span>
                      <Badge variant="secondary" className="text-xs mt-1">Most Popular</Badge>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="flex flex-col items-center">
                      <Users className="h-5 w-5 mb-1 text-purple-500" />
                      <span>Business</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="flex flex-col items-center">
                      <Shield className="h-5 w-5 mb-1 text-orange-500" />
                      <span>Enterprise</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Monthly Price</td>
                  <td className="py-4 px-6 text-center">
                    <div className="font-bold text-2xl text-green-600">Free</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="font-bold text-2xl text-primary">$29</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="font-bold text-2xl text-primary">$79</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="font-bold text-2xl text-primary">Custom</div>
                    <div className="text-xs text-muted-foreground">contact sales</div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="h-4 w-4 text-blue-500" />
                      <span>Projects</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">1</td>
                  <td className="py-4 px-6 text-center font-semibold">10</td>
                  <td className="py-4 px-6 text-center font-semibold">50</td>
                  <td className="py-4 px-6 text-center font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-green-500" />
                      <span>Bandwidth</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">100GB</td>
                  <td className="py-4 px-6 text-center font-semibold">1TB</td>
                  <td className="py-4 px-6 text-center font-semibold">5TB</td>
                  <td className="py-4 px-6 text-center font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-purple-500" />
                      <span>Storage</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">10GB</td>
                  <td className="py-4 px-6 text-center font-semibold">100GB</td>
                  <td className="py-4 px-6 text-center font-semibold">500GB</td>
                  <td className="py-4 px-6 text-center font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <UserPlus className="h-4 w-4 text-orange-500" />
                      <span>Team Members</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">1</td>
                  <td className="py-4 px-6 text-center font-semibold">5</td>
                  <td className="py-4 px-6 text-center font-semibold">20</td>
                  <td className="py-4 px-6 text-center font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-green-600" />
                      <span>SSL Certificates</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4 text-blue-600" />
                      <span>Custom Domains</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-indigo-500" />
                      <span>API Access</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <BarChart className="h-4 w-4 text-cyan-500" />
                      <span>Advanced Analytics</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">Basic</span>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-teal-500" />
                      <span>Staging Environments</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Archive className="h-4 w-4 text-amber-500" />
                      <span>Automatic Backups</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-pink-500" />
                      <span>Support</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm">Community</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium">Priority Email</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium">24/7 Phone & Email</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-medium">Dedicated Manager</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                      <span>SLA Uptime</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">99.9%</td>
                  <td className="py-4 px-6 text-center font-semibold">99.95%</td>
                  <td className="py-4 px-6 text-center font-semibold">99.99%</td>
                  <td className="py-4 px-6 text-center font-semibold">Custom SLA</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-red-500" />
                      <span>SSO Integration</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Palette className="h-4 w-4 text-violet-500" />
                      <span>White-label Options</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-muted-foreground">-</span>
                  </td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="py-6 px-6 font-medium">Get Started</td>
                  <td className="py-6 px-6 text-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/free-trial">Start Free</Link>
                    </Button>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Button variant="default" size="sm" asChild>
                      <Link to="/free-trial">Start Trial</Link>
                    </Button>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Button variant="default" size="sm" asChild>
                      <Link to="/free-trial">Start Trial</Link>
                    </Button>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">Contact Sales</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              All plans include: Git integration, SSL certificates, global CDN, and 14-day free trial
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/pricing">
                <ArrowRight className="mr-2 h-4 w-4" />
                View Complete Pricing Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center group hover-scale animate-fade-in">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white smooth-transition">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold primary-gradient bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Award className="h-3 w-3 mr-1" />
              Industry Leading Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Modern Hosting
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From lightning-fast deployments to enterprise-grade security, we provide all the tools your team needs to succeed.
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="text-primary mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{benefit}</span>
                      </div>)}
                  </div>
                </div>
                
                <div className={`animate-scale-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg blur"></div>
                    <img src={feature.image} alt={feature.title} className="relative rounded-lg elegant-shadow hover:glow-shadow smooth-transition" />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/10 text-blue-500 border-blue-500/20">
              <Calendar className="h-3 w-3 mr-1" />
              Latest from Our Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Insights & Comparisons
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest hosting trends, comparisons, and guides to help you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => <Card key={index} className="group elegant-shadow hover:glow-shadow smooth-transition hover-scale overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 smooth-transition" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary smooth-transition line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline-hero" asChild>
              
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by 1000+ Developers</h2>
            <p className="text-lg text-muted-foreground">
              See what our customers are saying about their servercanine experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="elegant-shadow hover:glow-shadow smooth-transition hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Mail className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with servercanine
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest hosting tips, platform updates, and exclusive offers delivered to your inbox. 
              Join 25,000+ developers who trust our newsletter.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubscribing}
                required
              />
              <Button 
                type="submit" 
                variant="secondary" 
                className="hover-scale"
                disabled={isSubscribing}
              >
                <Mail className="mr-2 h-4 w-4" />
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            
            <p className="text-sm text-white/70">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Hosting Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of developers who've revolutionized their deployment workflow with servercanine. 
            Start your free trial today and see the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="hover-scale" asChild>
              <Link to="/free-trial">
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Trial
              </Link>
            </Button>
            <Button variant="outline-hero" size="lg" asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
