import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Documentation",
      description: "Complete guides and API references",
      icon: BookOpen,
      items: [
        "Getting Started Guide",
        "API Documentation", 
        "Configuration Manual",
        "Troubleshooting Guide"
      ]
    },
    {
      title: "Tutorials",
      description: "Step-by-step video tutorials",
      icon: Video,
      items: [
        "Server Setup Basics",
        "Domain Configuration",
        "SSL Certificate Setup",
        "Advanced Monitoring"
      ]
    },
    {
      title: "Downloads",
      description: "Tools and software packages",
      icon: Download,
      items: [
        "Server Monitoring Agent",
        "Configuration Templates",
        "Backup Scripts",
        "Security Tools"
      ]
    },
    {
      title: "White Papers",
      description: "Technical insights and best practices",
      icon: FileText,
      items: [
        "Cloud Migration Strategies",
        "Security Best Practices",
        "Performance Optimization",
        "Cost Management Guide"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resources & Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to succeed with servercanine. From documentation to tutorials, 
              we've got you covered with comprehensive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/browse-documentation">Browse Documentation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact-support">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg smooth-transition">
                  <CardHeader>
                    <div className="p-3 primary-gradient rounded-lg w-fit mb-4">
                      <resource.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-muted-foreground hover:text-foreground smooth-transition cursor-pointer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <Link 
                            to={`/docs/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="hover:text-primary smooth-transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you succeed. Get in touch for personalized assistance.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>24/7 Support</CardTitle>
                  <CardDescription>Get help anytime, anywhere</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact-support">Open Support Ticket</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
