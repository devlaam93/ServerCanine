import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Book, 
  MessageCircle, 
  Video, 
  Download, 
  HelpCircle,
  Clock,
  Star,
  ArrowRight,
  FileText,
  Settings,
  Shield,
  CreditCard,
  Server,
  Database,
  Globe,
  Zap
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of servercanine hosting",
      articles: 12,
      color: "bg-blue-500",
      topics: ["Account Setup", "First Deployment", "Domain Configuration", "Basic Settings"]
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Manage your servers and applications",
      articles: 18,
      color: "bg-green-500",
      topics: ["Server Configuration", "Resource Monitoring", "Scaling", "Backups"]
    },
    {
      icon: Database,
      title: "Database & Storage",
      description: "Database setup and storage management",
      articles: 15,
      color: "bg-purple-500",
      topics: ["Database Setup", "Storage Options", "Data Migration", "Performance"]
    },
    {
      icon: Shield,
      title: "Security & SSL",
      description: "Secure your applications and data",
      articles: 10,
      color: "bg-red-500",
      topics: ["SSL Certificates", "Firewall Rules", "Access Control", "Security Audits"]
    },
    {
      icon: Globe,
      title: "Domains & DNS",
      description: "Domain and DNS configuration",
      articles: 8,
      color: "bg-orange-500",
      topics: ["Domain Setup", "DNS Records", "Subdomains", "CDN Configuration"]
    },
    {
      icon: CreditCard,
      title: "Billing & Plans",
      description: "Manage your account and billing",
      articles: 6,
      color: "bg-yellow-500",
      topics: ["Plan Changes", "Payment Methods", "Invoices", "Usage Monitoring"]
    },
    {
      icon: Settings,
      title: "API & Integrations",
      description: "Integrate with our APIs and tools",
      articles: 14,
      color: "bg-indigo-500",
      topics: ["API Documentation", "Webhooks", "Third-party Tools", "Automation"]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimize your application performance",
      articles: 11,
      color: "bg-pink-500",
      topics: ["Caching", "Load Balancing", "Optimization", "Monitoring"]
    }
  ];

  const popularArticles = [
    {
      title: "How to deploy your first application",
      category: "Getting Started",
      readTime: "5 min",
      rating: 4.9,
      views: "12.5k"
    },
    {
      title: "Setting up custom domains and SSL",
      category: "Domains & DNS",
      readTime: "8 min",
      rating: 4.8,
      views: "9.2k"
    },
    {
      title: "Database configuration and optimization",
      category: "Database & Storage",
      readTime: "12 min",
      rating: 4.7,
      views: "7.8k"
    },
    {
      title: "Backup and restore procedures",
      category: "Server Management",
      readTime: "6 min",
      rating: 4.9,
      views: "6.4k"
    },
    {
      title: "Performance optimization best practices",
      category: "Performance",
      readTime: "10 min",
      rating: 4.6,
      views: "5.9k"
    },
    {
      title: "API authentication and rate limiting",
      category: "API & Integrations",
      readTime: "7 min",
      rating: 4.8,
      views: "4.7k"
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Contact Support",
      description: "Get help from our support team",
      action: "Open Ticket",
      link: "/contact-support"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      action: "Watch Now",
      link: "/tutorials"
    },
    {
      icon: Download,
      title: "Download Tools",
      description: "Get our CLI tools and SDKs",
      action: "Download",
      link: "/downloads"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse complete documentation",
      action: "Browse Docs",
      link: "/browse-documentation"
    }
  ];

  const recentUpdates = [
    {
      title: "New API endpoints for server monitoring",
      date: "2 days ago",
      type: "API Update"
    },
    {
      title: "Enhanced security features guide",
      date: "1 week ago",
      type: "Security"
    },
    {
      title: "Database backup automation tutorial",
      date: "2 weeks ago",
      type: "Tutorial"
    }
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to your questions and learn how to make the most of servercanine. 
              Our comprehensive help center has everything you need to succeed.
            </p>
          </div>

          {/* Search */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search help articles, guides, and tutorials..."
                  className="pl-10 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8">
                  Search
                </Button>
              </div>
              {searchQuery && (
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Found {filteredArticles.length} articles matching "{searchQuery}"
                </div>
              )}
            </CardContent>
          </Card>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg smooth-transition cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                    <CardHeader className="text-center">
                      <div className={`mx-auto p-3 rounded-full ${category.color} w-fit mb-3`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-3">{category.description}</p>
                      <p className="text-sm text-primary font-medium mb-3">{category.articles} articles</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.topics.slice(0, 2).map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="popular" className="mb-16">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="actions">Quick Actions</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
            </TabsList>

            <TabsContent value="popular" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Popular Articles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(searchQuery ? filteredArticles : popularArticles).map((article, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 smooth-transition cursor-pointer border border-border">
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{article.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {article.category}
                            </Badge>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              {article.rating}
                            </span>
                            <span>{article.views} views</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recent" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    Recently Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUpdates.map((update, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 smooth-transition cursor-pointer border border-border">
                        <div>
                          <h3 className="font-medium mb-1">{update.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {update.type}
                            </Badge>
                            <span>{update.date}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actions" className="mt-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {quickActions.map((action, index) => (
                  <Card key={index} className="hover:shadow-lg smooth-transition">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg mr-3">
                          <action.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{action.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{action.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline" asChild>
                        <Link to={action.link}>
                          {action.action}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="updates" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Latest Updates & Announcements</CardTitle>
                  <p className="text-muted-foreground">
                    Stay up to date with the latest features, improvements, and important announcements.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-l-green-500 pl-4">
                      <h3 className="font-semibold text-green-700 dark:text-green-300">New Feature Release</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Enhanced monitoring dashboard with real-time metrics and custom alerts.
                      </p>
                      <span className="text-xs text-muted-foreground">Released 3 days ago</span>
                    </div>
                    <div className="border-l-4 border-l-blue-500 pl-4">
                      <h3 className="font-semibold text-blue-700 dark:text-blue-300">Documentation Update</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        New API endpoints and improved code examples for better integration.
                      </p>
                      <span className="text-xs text-muted-foreground">Updated 1 week ago</span>
                    </div>
                    <div className="border-l-4 border-l-orange-500 pl-4">
                      <h3 className="font-semibold text-orange-700 dark:text-orange-300">Maintenance Notice</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Scheduled maintenance window for infrastructure upgrades.
                      </p>
                      <span className="text-xs text-muted-foreground">Scheduled for next week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">How do I deploy my first application?</h3>
                    <p className="text-sm text-muted-foreground">
                      Follow our getting started guide to deploy your first application in minutes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                    <p className="text-sm text-muted-foreground">
                      We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">How do I set up a custom domain?</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure your DNS settings and add your domain through the dashboard.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Is my data secure and backed up?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we provide automatic backups and enterprise-grade security features.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Can I scale my resources automatically?</h3>
                    <p className="text-sm text-muted-foreground">
                      Enable auto-scaling to automatically adjust resources based on demand.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">How do I contact support?</h3>
                    <p className="text-sm text-muted-foreground">
                      Use our support portal, live chat, or email us directly for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support CTA */}
          <Card className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our support team is available 24/7 to help you with any questions or issues. 
                Get personalized assistance from our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact-support">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/browse-documentation">
                    <Book className="h-4 w-4 mr-2" />
                    Browse Documentation
                  </Link>
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

export default Help;
