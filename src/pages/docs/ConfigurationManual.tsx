import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Settings, Server, Shield, AlertTriangle } from "lucide-react";

const ConfigurationManual = () => {
  const configSections = [
    {
      title: "Server Configuration",
      icon: Server,
      configs: [
        {
          name: "Basic Server Setup",
          description: "Initial server configuration and connection settings",
          file: "server.conf",
          example: `# servercanine Server Configuration
server_name = "production-web-01"
server_type = "web"
environment = "production"
region = "us-east-1"
port = 80
ssl_port = 443`
        },
        {
          name: "Resource Limits",
          description: "CPU, memory, and disk usage limits",
          file: "limits.conf",
          example: `# Resource Limits Configuration
cpu_limit = 80%
memory_limit = 85%
disk_limit = 90%
network_bandwidth = 1000Mbps
max_connections = 1000`
        }
      ]
    },
    {
      title: "Monitoring Configuration",
      icon: Settings,
      configs: [
        {
          name: "Metrics Collection",
          description: "Configure what metrics to collect and how often",
          file: "monitoring.conf",
          example: `# Monitoring Configuration
collection_interval = 60s
retention_period = 30d
metrics_enabled = [
  "cpu_usage",
  "memory_usage", 
  "disk_usage",
  "network_io",
  "process_count"
]
detailed_logging = true`
        },
        {
          name: "Alert Thresholds",
          description: "Set up alert conditions and notification settings",
          file: "alerts.conf",
          example: `# Alert Configuration
cpu_threshold = 85%
memory_threshold = 90%
disk_threshold = 95%
response_time_threshold = 5000ms
error_rate_threshold = 5%

notification_channels = [
  "email",
  "slack",
  "webhook"
]`
        }
      ]
    },
    {
      title: "Security Configuration",
      icon: Shield,
      configs: [
        {
          name: "Firewall Rules",
          description: "Configure network security and access control",
          file: "firewall.conf",
          example: `# Firewall Configuration
default_policy = "deny"
allowed_ports = [22, 80, 443]
allowed_ips = [
  "10.0.0.0/8",
  "192.168.1.0/24"
]
rate_limiting = true
max_requests_per_minute = 1000`
        },
        {
          name: "SSL/TLS Settings",
          description: "Configure SSL certificates and encryption",
          file: "ssl.conf",
          example: `# SSL Configuration
ssl_enabled = true
ssl_certificate = "/etc/ssl/certs/servercanine.crt"
ssl_private_key = "/etc/ssl/private/servercanine.key"
ssl_protocols = ["TLSv1.2", "TLSv1.3"]
cipher_suites = "ECDHE-RSA-AES256-GCM-SHA384"`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/browse-documentation">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Documentation
              </Link>
            </Button>
            
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Configuration</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Configuration Manual</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Comprehensive guide to configuring servercanine for your specific needs. Learn how to optimize 
              performance, security, and monitoring settings.
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                For a basic setup, you only need to configure three essential files:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-blue-600 dark:text-blue-400">
                <li><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">server.conf</code> - Basic server settings</li>
                <li><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">monitoring.conf</code> - Enable monitoring</li>
                <li><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">alerts.conf</code> - Set up notifications</li>
              </ol>
            </CardContent>
          </Card>

          {/* Configuration Sections */}
          {configSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <section.icon className="h-6 w-6 mr-3 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={`config-${sectionIndex}-0`} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    {section.configs.map((config, configIndex) => (
                      <TabsTrigger key={configIndex} value={`config-${sectionIndex}-${configIndex}`}>
                        {config.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {section.configs.map((config, configIndex) => (
                    <TabsContent key={configIndex} value={`config-${sectionIndex}-${configIndex}`} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{config.name}</h3>
                        <p className="text-muted-foreground mb-4">{config.description}</p>
                        <Badge variant="outline" className="mb-4">{config.file}</Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Example Configuration:</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm">{config.example}</code>
                        </pre>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          ))}

          {/* Advanced Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Advanced Configuration Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Environment-Specific Settings</h3>
                <p className="text-muted-foreground mb-4">
                  servercanine supports different configuration profiles for development, staging, and production environments.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Development</h4>
                    <p className="text-sm text-muted-foreground">Relaxed limits, verbose logging</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Staging</h4>
                    <p className="text-sm text-muted-foreground">Production-like settings, testing enabled</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Production</h4>
                    <p className="text-sm text-muted-foreground">Optimized performance, strict security</p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Configuration Validation</h3>
                <p className="text-muted-foreground mb-4">
                  Use the servercanine CLI to validate your configuration before applying changes:
                </p>
                <pre className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">servercanine config validate --file server.conf</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Configuration Templates</h3>
                <p className="text-muted-foreground mb-4">
                  Download pre-configured templates for common use cases:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    Web Server Template
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Database Server Template
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Load Balancer Template
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Microservices Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Configuration Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Version Control</h4>
                    <p className="text-sm text-muted-foreground">Keep your configuration files in version control to track changes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Environment Variables</h4>
                    <p className="text-sm text-muted-foreground">Use environment variables for sensitive data like API keys</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Regular Backups</h4>
                    <p className="text-sm text-muted-foreground">Create backups before making configuration changes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Test Changes</h4>
                    <p className="text-sm text-muted-foreground">Always test configuration changes in a staging environment first</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConfigurationManual;