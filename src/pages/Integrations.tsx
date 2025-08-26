import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plug, Zap, Database, Globe, Code, Shield } from "lucide-react";

const Integrations = () => {
  const integrationCategories = [
    {
      icon: Database,
      title: "Databases",
      count: 8,
      integrations: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      icon: Code,
      title: "Development Tools",
      count: 12,
      integrations: ["GitHub", "GitLab", "Docker", "Jenkins", "VS Code"]
    },
    {
      icon: Globe,
      title: "CDN & Edge",
      count: 6,
      integrations: ["Cloudflare", "AWS CloudFront", "KeyCDN", "BunnyCDN"]
    },
    {
      icon: Shield,
      title: "Security",
      count: 5,
      integrations: ["Let's Encrypt", "Cloudflare SSL", "Security Headers"]
    },
    {
      icon: Zap,
      title: "Monitoring",
      count: 7,
      integrations: ["Uptime Robot", "Pingdom", "New Relic", "DataDog"]
    },
    {
      icon: Plug,
      title: "Third-party APIs",
      count: 15,
      integrations: ["Stripe", "PayPal", "Twilio", "SendGrid", "Mailgun"]
    }
  ];

  const featuredIntegrations = [
    {
      name: "GitHub",
      description: "Automatic deployments from your GitHub repositories",
      category: "Development",
      status: "Available"
    },
    {
      name: "Cloudflare",
      description: "CDN and security integration for better performance",
      category: "Performance",
      status: "Available"
    },
    {
      name: "PostgreSQL",
      description: "Managed PostgreSQL databases with automatic backups",
      category: "Database",
      status: "Available"
    },
    {
      name: "Docker",
      description: "Deploy containerized applications seamlessly",
      category: "Development",
      status: "Available"
    },
    {
      name: "Stripe",
      description: "Payment processing integration for e-commerce sites",
      category: "Payment",
      status: "Coming Soon"
    },
    {
      name: "MongoDB",
      description: "NoSQL database hosting with replica sets",
      category: "Database",
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Integrations</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect servercanine with your favorite tools and services. Build your perfect development workflow.
            </p>
          </div>

          {/* Integration Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrationCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-lg smooth-transition">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{category.count} available</Badge>
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.integrations.slice(0, 3).map((integration, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">
                          • {integration}
                        </div>
                      ))}
                      {category.integrations.length > 3 && (
                        <div className="text-sm text-primary font-medium">
                          +{category.integrations.length - 3} more
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Integrations */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Popular Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredIntegrations.map((integration, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 smooth-transition">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{integration.name}</h3>
                      <Badge 
                        variant={integration.status === "Available" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {integration.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                    <Badge variant="outline" className="text-xs">{integration.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Custom Integration */}
          <Card>
            <CardHeader>
              <CardTitle>Need a Custom Integration?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Don't see the integration you need? Our team can help you build custom integrations 
                with our API or work with you to add native support for your favorite tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/docs/api-documentation">
                    View API Documentation
                  </Link>
                </Button>
                <Button variant="outline">
                  Request Integration
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Integrations;
