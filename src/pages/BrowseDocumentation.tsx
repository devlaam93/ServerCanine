import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, FileText, Video, Download, ExternalLink, Star } from "lucide-react";

const BrowseDocumentation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const docCategories = [
    {
      title: "Getting Started",
      description: "Everything you need to begin with servercanine",
      icon: BookOpen,
      color: "bg-blue-500",
      docs: [
        { title: "Getting Started Guide", description: "Complete setup walkthrough", popular: true }
      ]
    },
    {
      title: "API & Configuration",
      description: "Technical documentation and configuration guides",
      icon: FileText,
      color: "bg-green-500",
      docs: [
        { title: "API Documentation", description: "Complete API reference", popular: true },
        { title: "Configuration Manual", description: "Advanced configuration options" }
      ]
    },
    {
      title: "Monitoring & Tools",
      description: "Monitoring, troubleshooting, and automation tools",
      icon: Video,
      color: "bg-purple-500",
      docs: [
        { title: "Advanced Monitoring", description: "Monitor server performance" },
        { title: "Troubleshooting Guide", description: "Common issues and solutions", popular: true }
      ]
    },
    {
      title: "Security & Optimization",
      description: "Security best practices and performance optimization",
      icon: Star,
      color: "bg-red-500",
      docs: [
        { title: "Security Best Practices", description: "Secure your infrastructure", popular: true },
        { title: "Performance Optimization", description: "Optimize server performance" }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive guides, tutorials, and references to help you succeed with servercanine
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              <Button variant="outline" size="lg" className="h-auto p-4 flex-col space-y-2" asChild>
                <Link to="/docs/getting-started-guide">
                  <BookOpen className="h-6 w-6" />
                  <span>Quick Start</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-auto p-4 flex-col space-y-2" asChild>
                <Link to="/docs/api-documentation">
                  <FileText className="h-6 w-6" />
                  <span>API Reference</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-auto p-4 flex-col space-y-2" asChild>
                <Link to="/docs/troubleshooting-guide">
                  <Search className="h-6 w-6" />
                  <span>Troubleshooting</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-auto p-4 flex-col space-y-2" asChild>
                <Link to="/contact-support">
                  <ExternalLink className="h-6 w-6" />
                  <span>Get Support</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredDocs.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredDocs.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 ${category.color} rounded-lg mr-4`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{category.title}</h2>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.docs.map((doc, docIndex) => (
                        <Card key={docIndex} className="hover:shadow-lg smooth-transition group">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="group-hover:text-primary smooth-transition">
                                {doc.title}
                              </CardTitle>
                              {doc.popular && (
                                <Badge variant="secondary" className="ml-2">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <CardDescription>{doc.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button variant="ghost" className="w-full justify-between p-0 h-auto" asChild>
                              <Link to={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                Read More
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact-support">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseDocumentation;
