import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText, Download, Copy, CheckCircle, Server, Database, Globe } from "lucide-react";

const ConfigurationTemplates = () => {
  const templateCategories = [
    {
      title: "Web Applications",
      description: "Ready-to-use configurations for web servers and applications",
      icon: Globe,
      templates: [
        { name: "NGINX + PHP-FPM", description: "High-performance web server setup", difficulty: "Easy" },
        { name: "Apache + SSL", description: "Secure web server with SSL termination", difficulty: "Medium" },
        { name: "Node.js + PM2", description: "Production Node.js application setup", difficulty: "Easy" },
        { name: "React + NGINX", description: "Static React app with NGINX", difficulty: "Easy" }
      ]
    },
    {
      title: "Database Servers",
      description: "Optimized database configurations for various use cases",
      icon: Database,
      templates: [
        { name: "MySQL Master-Slave", description: "High-availability MySQL setup", difficulty: "Advanced" },
        { name: "PostgreSQL + Backup", description: "PostgreSQL with automated backups", difficulty: "Medium" },
        { name: "Redis Cluster", description: "Distributed Redis cache setup", difficulty: "Advanced" },
        { name: "MongoDB Replica Set", description: "MongoDB with replication", difficulty: "Medium" }
      ]
    },
    {
      title: "Infrastructure",
      description: "Complete infrastructure setups and monitoring configurations",
      icon: Server,
      templates: [
        { name: "Load Balancer + SSL", description: "HAProxy with SSL termination", difficulty: "Medium" },
        { name: "Docker Swarm", description: "Container orchestration setup", difficulty: "Advanced" },
        { name: "Monitoring Stack", description: "Prometheus + Grafana monitoring", difficulty: "Medium" },
        { name: "CI/CD Pipeline", description: "Jenkins with automated deployment", difficulty: "Advanced" }
      ]
    }
  ];

  const featuredTemplates = [
    {
      name: "LAMP Stack",
      description: "Complete Linux, Apache, MySQL, PHP setup",
      category: "Web Applications",
      downloads: "2.5k",
      rating: 4.8,
      config: `# LAMP Stack Configuration
# Apache Virtual Host
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/html
    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

# MySQL Configuration
[mysqld]
bind-address = 127.0.0.1
max_connections = 100
innodb_buffer_pool_size = 256M

# PHP Configuration
memory_limit = 256M
upload_max_filesize = 64M
post_max_size = 64M`
    },
    {
      name: "NGINX + SSL",
      description: "Secure NGINX setup with Let's Encrypt SSL",
      category: "Web Applications",
      downloads: "3.2k",
      rating: 4.9,
      config: `# NGINX SSL Configuration
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    
    location / {
        root /var/www/html;
        index index.html index.htm;
    }
}`
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/browse-documentation">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Documentation
              </Link>
            </Button>
            
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Configuration Templates</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Configuration Templates</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Pre-built configuration templates to quickly deploy and configure your servercanine infrastructure.
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Template Library</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our configuration templates provide battle-tested setups for common server configurations. 
                Each template includes detailed documentation, security best practices, and performance optimizations.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">50+ Templates</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Ready to deploy</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Production Ready</h3>
                  <p className="text-sm text-green-600 dark:text-green-400">Battle tested</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">One-Click Deploy</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Instant setup</p>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <Server className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Customizable</h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Fully configurable</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Template Categories */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Template Categories</CardTitle>
              <CardDescription>
                Browse templates by category to find the perfect setup for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {templateCategories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.templates.map((template, templateIndex) => (
                        <div key={templateIndex} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium">{template.name}</h4>
                            <Badge variant={template.difficulty === "Easy" ? "secondary" : template.difficulty === "Medium" ? "default" : "destructive"} className="text-xs">
                              {template.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Deploy
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Featured Templates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Featured Templates</CardTitle>
              <CardDescription>
                Popular and highly-rated configuration templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="lamp" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="lamp">LAMP Stack</TabsTrigger>
                  <TabsTrigger value="nginx">NGINX + SSL</TabsTrigger>
                </TabsList>
                
                {featuredTemplates.map((template, index) => (
                  <TabsContent key={index} value={template.name.toLowerCase().replace(/\s+/g, '').replace('+', '')} className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{template.name}</h3>
                        <p className="text-muted-foreground">{template.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm text-muted-foreground">{template.downloads} downloads</span>
                          <Badge variant="secondary">★ {template.rating}</Badge>
                        </div>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="absolute top-2 right-2 z-10"
                        onClick={() => copyToClipboard(template.config)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{template.config}</code>
                      </pre>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="hero">
                        <Download className="h-4 w-4 mr-2" />
                        Deploy Template
                      </Button>
                      <Button variant="outline">View Documentation</Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Custom Templates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Creating Custom Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                You can create your own configuration templates and share them with your team or the community.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Template Structure</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Configuration files and scripts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Documentation and setup instructions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Environment variables and parameters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Validation and testing scripts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Best Practices</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Use environment variables for configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Include security hardening by default</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Provide clear documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Test templates thoroughly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Template Marketplace */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Template Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Explore community-contributed templates and share your own configurations with the servercanine community.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">Browse Templates</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Discover templates created by the community
                  </p>
                  <Button variant="outline" size="sm">Explore</Button>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">Submit Template</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Share your configuration with others
                  </p>
                  <Button variant="outline" size="sm">Submit</Button>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">Template Builder</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Create templates using our visual builder
                  </p>
                  <Button variant="outline" size="sm">Build</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Get Started with Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Ready to deploy your first template? Browse our library or create a custom configuration 
                tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/contact-support">Browse Templates</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/docs/getting-started-guide">Getting Started Guide</Link>
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

export default ConfigurationTemplates;
