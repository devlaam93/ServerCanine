import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Rocket, 
  Globe, 
  Database,
  Server,
  Cloud,
  Calculator,
  CreditCard,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for personal projects and experimentation",
      monthlyPrice: 0,
      yearlyPrice: 0,
      yearlyDiscount: 0,
      features: [
        "1 Project",
        "100GB Bandwidth",
        "10GB Storage",
        "1 Team Member",
        "Community Support",
        "SSL Certificates",
        "Git Integration",
        "Basic Analytics",
        "99.9% Uptime SLA"
      ],
      cta: "Get Started Free",
      popular: false,
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      name: "Professional",
      description: "For growing businesses and development teams",
      monthlyPrice: 29,
      yearlyPrice: 290,
      yearlyDiscount: 17,
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
      cta: "Start Free Trial",
      popular: true,
      icon: <Zap className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      name: "Business",
      description: "For scaling applications and larger teams",
      monthlyPrice: 79,
      yearlyPrice: 790,
      yearlyDiscount: 17,
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
        "Advanced Monitoring",
        "99.99% Uptime SLA"
      ],
      cta: "Start Free Trial",
      popular: false,
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500"
    },
    {
      name: "Enterprise",
      description: "For large organizations with specific needs",
      monthlyPrice: null,
      yearlyPrice: null,
      yearlyDiscount: 0,
      features: [
        "Unlimited Projects",
        "Unlimited Bandwidth",
        "Unlimited Storage",
        "Unlimited Team Members",
        "Dedicated Support Manager",
        "White-label Options",
        "Custom SLA Guarantees",
        "On-premise Deployment",
        "Custom Contracts",
        "Advanced Security Features",
        "Migration Assistance",
        "Training & Onboarding",
        "99.99% Uptime SLA"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: <Shield className="h-6 w-6" />,
      color: "bg-orange-500"
    }
  ];

  const usageBasedPricing = [
    {
      category: "Compute Resources",
      icon: <Server className="h-5 w-5" />,
      items: [
        { name: "CPU Hours", price: "$0.05", unit: "per hour", description: "Additional compute power" },
        { name: "Memory (RAM)", price: "$0.02", unit: "per GB/hour", description: "Extra memory allocation" },
        { name: "GPU Hours", price: "$0.50", unit: "per hour", description: "GPU acceleration for ML workloads" }
      ]
    },
    {
      category: "Storage & Bandwidth",
      icon: <Database className="h-5 w-5" />,
      items: [
        { name: "Additional Storage", price: "$0.10", unit: "per GB/month", description: "Beyond plan limits" },
        { name: "Bandwidth Overage", price: "$0.08", unit: "per GB", description: "When exceeding plan limits" },
        { name: "Backup Storage", price: "$0.05", unit: "per GB/month", description: "Extended backup retention" }
      ]
    },
    {
      category: "Premium Services",
      icon: <Cloud className="h-5 w-5" />,
      items: [
        { name: "Dedicated IP", price: "$5.00", unit: "per month", description: "Static IP address" },
        { name: "Load Balancer", price: "$15.00", unit: "per month", description: "High availability setup" },
        { name: "CDN Premium", price: "$10.00", unit: "per month", description: "Enhanced global delivery" }
      ]
    }
  ];

  const addOnServices = [
    {
      name: "Managed Database",
      description: "Fully managed PostgreSQL, MySQL, or MongoDB with automatic scaling",
      icon: <Database className="h-6 w-6" />,
      variants: [
        { name: "Basic", price: "$15", specs: "1 vCPU, 1GB RAM, 20GB Storage" },
        { name: "Standard", price: "$45", specs: "2 vCPU, 4GB RAM, 100GB Storage" },
        { name: "Premium", price: "$120", specs: "4 vCPU, 16GB RAM, 500GB Storage" },
        { name: "Enterprise", price: "Custom", specs: "Custom configuration" }
      ],
      features: [
        "Automatic backups & point-in-time recovery",
        "High availability with failover",
        "Performance monitoring & optimization",
        "Security patches & updates",
        "Connection pooling & caching"
      ]
    },
    {
      name: "CDN & Edge Computing",
      description: "Global content delivery network with edge functions and caching",
      icon: <Globe className="h-6 w-6" />,
      variants: [
        { name: "Starter", price: "$10", specs: "100GB transfer, 50 edge locations" },
        { name: "Professional", price: "$25", specs: "500GB transfer, 100 edge locations" },
        { name: "Business", price: "$60", specs: "2TB transfer, 200+ edge locations" },
        { name: "Enterprise", price: "Custom", specs: "Unlimited transfer, global coverage" }
      ],
      features: [
        "200+ global edge locations",
        "DDoS protection & security",
        "Image & video optimization",
        "Real-time cache purging",
        "Edge functions & serverless computing"
      ]
    },
    {
      name: "Advanced Monitoring",
      description: "Comprehensive application performance and infrastructure monitoring",
      icon: <Shield className="h-6 w-6" />,
      variants: [
        { name: "Basic", price: "$20", specs: "5 applications, 30-day retention" },
        { name: "Professional", price: "$50", specs: "25 applications, 90-day retention" },
        { name: "Business", price: "$120", specs: "100 applications, 1-year retention" },
        { name: "Enterprise", price: "Custom", specs: "Unlimited applications, custom retention" }
      ],
      features: [
        "Real-time performance metrics",
        "Error tracking & debugging",
        "Custom alerts & notifications",
        "API & infrastructure monitoring",
        "Advanced analytics & reporting"
      ]
    }
  ];

  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (plan.monthlyPrice === null) return "Custom";
    if (plan.monthlyPrice === 0) return "Free";
    
    const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice / 12;
    return `$${Math.round(price)}`;
  };

  const getYearlyDiscount = (plan: typeof pricingPlans[0]) => {
    if (plan.yearlyDiscount > 0) {
      return `Save ${plan.yearlyDiscount}%`;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SEO 
        title="Pricing Plans - Affordable Cloud Hosting"
        description="Simple, transparent pricing for cloud hosting. Compare our hosting plans starting from free. 14-day free trial, no setup fees, 30-day money-back guarantee."
        keywords="hosting pricing, cloud hosting plans, affordable hosting, web hosting cost, VPS pricing, dedicated server pricing, hosting comparison, cheap hosting plans"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="default" className="mb-4">
              <Star className="h-3 w-3 mr-1" />
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Scalable
              <span className="block primary-gradient bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your hosting needs. Scale seamlessly as your business grows with our transparent, predictable pricing structure.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === "yearly" ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
                Yearly
              </span>
              <Badge variant="secondary" className="ml-2">Save up to 17%</Badge>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative elegant-shadow hover:glow-shadow smooth-transition ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="primary-gradient text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 ${plan.color} rounded-full`}>
                      <div className="text-white">
                        {plan.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold primary-gradient bg-clip-text text-transparent">
                    {getPrice(plan)}
                    {plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                      <span className="text-lg text-muted-foreground">/month</span>
                    )}
                  </div>
                  {billingCycle === "yearly" && getYearlyDiscount(plan) && (
                    <Badge variant="secondary" className="mt-2">
                      {getYearlyDiscount(plan)}
                    </Badge>
                  )}
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "outline-hero"} 
                    className="w-full"
                    asChild
                  >
                    <Link to={plan.name === "Enterprise" ? "/contact" : "/start-free-trial"}>
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed Feature Comparison</h2>
            <p className="text-lg text-muted-foreground">
              Compare all features and limits across our pricing plans
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg shadow-lg">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold">Business</th>
                  <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Monthly Price</td>
                  <td className="py-4 px-6 text-center font-semibold text-green-600">Free</td>
                  <td className="py-4 px-6 text-center font-semibold">$29</td>
                  <td className="py-4 px-6 text-center font-semibold">$79</td>
                  <td className="py-4 px-6 text-center font-semibold">Custom</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Projects</td>
                  <td className="py-4 px-6 text-center">1</td>
                  <td className="py-4 px-6 text-center">10</td>
                  <td className="py-4 px-6 text-center">50</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Bandwidth</td>
                  <td className="py-4 px-6 text-center">100GB</td>
                  <td className="py-4 px-6 text-center">1TB</td>
                  <td className="py-4 px-6 text-center">5TB</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Storage</td>
                  <td className="py-4 px-6 text-center">10GB</td>
                  <td className="py-4 px-6 text-center">100GB</td>
                  <td className="py-4 px-6 text-center">500GB</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Team Members</td>
                  <td className="py-4 px-6 text-center">1</td>
                  <td className="py-4 px-6 text-center">5</td>
                  <td className="py-4 px-6 text-center">20</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">SSL Certificates</td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Custom Domains</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">API Access</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="py-4 px-6 text-center">Community</td>
                  <td className="py-4 px-6 text-center">Priority Email</td>
                  <td className="py-4 px-6 text-center">24/7 Phone & Email</td>
                  <td className="py-4 px-6 text-center">Dedicated Manager</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">SLA</td>
                  <td className="py-4 px-6 text-center">99.9%</td>
                  <td className="py-4 px-6 text-center">99.95%</td>
                  <td className="py-4 px-6 text-center">99.99%</td>
                  <td className="py-4 px-6 text-center">Custom SLA</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">SSO Integration</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium">White-label Options</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Usage-Based Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Usage-Based Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Pay only for what you use with our transparent usage-based pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {usageBasedPricing.map((category, index) => (
              <Card key={index} className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {category.icon}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-border pb-3 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-primary font-semibold">{item.price}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{item.unit}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services with Variants */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-on Services</h2>
            <p className="text-lg text-muted-foreground">
              Enhance your hosting with our optional managed services
            </p>
          </div>
          
          <Tabs defaultValue="database" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="database">Managed Database</TabsTrigger>
              <TabsTrigger value="cdn">CDN & Edge</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {addOnServices.map((service, serviceIndex) => (
              <TabsContent 
                key={serviceIndex} 
                value={serviceIndex === 0 ? "database" : serviceIndex === 1 ? "cdn" : "monitoring"}
                className="mt-8"
              >
                <Card className="elegant-shadow">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{service.name}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {service.variants.map((variant, variantIndex) => (
                        <Card key={variantIndex} className="border-2 hover:border-primary smooth-transition">
                          <CardHeader className="text-center pb-2">
                            <CardTitle className="text-lg">{variant.name}</CardTitle>
                            <div className="text-2xl font-bold text-primary">
                              {variant.price}
                              {variant.price !== "Custom" && <span className="text-sm text-muted-foreground">/month</span>}
                            </div>
                            <p className="text-xs text-muted-foreground">{variant.specs}</p>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <Button 
                              variant={variantIndex === 1 ? "default" : "outline"} 
                              className="w-full"
                              size="sm"
                              asChild
                            >
                              <Link to={variant.price === "Custom" ? "/contact" : "/start-free-trial"}>
                                {variant.price === "Custom" ? "Contact Sales" : "Get Started"}
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-4">Included Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our pricing and plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Can I change plans anytime?
                </h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  What's included in the free trial?
                </h3>
                <p className="text-muted-foreground">
                  Our 14-day free trial includes full access to Professional plan features. No credit card required.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Do you offer refunds?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Is there a setup fee?
                </h3>
                <p className="text-muted-foreground">
                  No setup fees ever. You only pay for what you use with transparent, predictable pricing.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  What payment methods do you accept?
                </h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Do you offer enterprise discounts?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We offer custom pricing and volume discounts for large organizations. Contact our sales team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of developers who trust servercanine for their hosting needs. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/start-free-trial">
                <Rocket className="mr-2 h-4 w-4" />
                Start Free Trial
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                <Calculator className="mr-2 h-4 w-4" />
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
