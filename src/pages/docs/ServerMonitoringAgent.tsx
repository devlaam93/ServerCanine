import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Monitor, Activity, AlertCircle, Download, Terminal, CheckCircle, Copy } from "lucide-react";

const ServerMonitoringAgent = () => {
  const monitoringFeatures = [
    {
      title: "System Metrics",
      description: "CPU, memory, disk, and network monitoring",
      metrics: ["CPU usage", "Memory utilization", "Disk I/O", "Network traffic"]
    },
    {
      title: "Application Monitoring",
      description: "Track application performance and health",
      metrics: ["Response times", "Error rates", "Throughput", "Database queries"]
    },
    {
      title: "Log Collection",
      description: "Centralized log aggregation and analysis",
      metrics: ["System logs", "Application logs", "Error logs", "Access logs"]
    },
    {
      title: "Custom Alerts",
      description: "Configurable alerts for proactive monitoring",
      metrics: ["Threshold alerts", "Anomaly detection", "Email notifications", "Slack integration"]
    }
  ];

  const installationSteps = [
    {
      os: "Ubuntu/Debian",
      commands: [
        "wget https://releases.servercanine.com/agent/latest/servercanine-agent-linux-amd64.deb",
        "sudo dpkg -i servercanine-agent-linux-amd64.deb",
        "sudo systemctl enable servercanine-agent",
        "sudo systemctl start servercanine-agent"
      ]
    },
    {
      os: "CentOS/RHEL",
      commands: [
        "wget https://releases.servercanine.com/agent/latest/servercanine-agent-linux-amd64.rpm",
        "sudo rpm -i servercanine-agent-linux-amd64.rpm",
        "sudo systemctl enable servercanine-agent",
        "sudo systemctl start servercanine-agent"
      ]
    },
    {
      os: "Docker",
      commands: [
        "docker pull servercanine/monitoring-agent:latest",
        "docker run -d --name servercanine-agent \\",
        "  -v /proc:/host/proc:ro \\",
        "  -v /sys:/host/sys:ro \\",
        "  -e SERVERCANINE_API_KEY=your_api_key \\",
        "  servercanine/monitoring-agent:latest"
      ]
    }
  ];

  const configurationOptions = [
    {
      section: "Basic Configuration",
      options: [
        { key: "api_key", description: "Your servercanine API key", required: true },
        { key: "server_name", description: "Custom name for this server", required: false },
        { key: "tags", description: "Comma-separated tags for grouping", required: false },
        { key: "region", description: "Server region/location", required: false }
      ]
    },
    {
      section: "Monitoring Settings",
      options: [
        { key: "collect_interval", description: "Data collection interval (seconds)", required: false },
        { key: "cpu_threshold", description: "CPU usage alert threshold (%)", required: false },
        { key: "memory_threshold", description: "Memory usage alert threshold (%)", required: false },
        { key: "disk_threshold", description: "Disk usage alert threshold (%)", required: false }
      ]
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
              <Monitor className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Monitoring Agent</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Server Monitoring Agent</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Install and configure the servercanine monitoring agent to track server performance and health metrics.
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Agent Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The servercanine monitoring agent is a lightweight, secure agent that collects system and 
                application metrics from your servers. It provides real-time insights into server performance, 
                resource utilization, and application health.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">Real-time</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Live monitoring</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Lightweight</h3>
                  <p className="text-sm text-green-600 dark:text-green-400">&lt; 50MB RAM</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">Secure</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Encrypted data</p>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <Download className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Easy Setup</h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400">5-minute install</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Monitoring Features</CardTitle>
              <CardDescription>
                Comprehensive monitoring capabilities for servers and applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {monitoringFeatures.map((feature, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Installation Guide</CardTitle>
              <CardDescription>
                Choose your operating system and follow the installation steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="ubuntu" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="ubuntu">Ubuntu/Debian</TabsTrigger>
                  <TabsTrigger value="centos">CentOS/RHEL</TabsTrigger>
                  <TabsTrigger value="docker">Docker</TabsTrigger>
                </TabsList>
                
                {installationSteps.map((step, index) => {
                  const tabValue = step.os.toLowerCase().split('/')[0] === 'centos' ? 'centos' : step.os.toLowerCase().split('/')[0];
                  return (
                  <TabsContent key={index} value={tabValue} className="space-y-4">
                    <div className="space-y-3">
                      {step.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="relative">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute top-2 right-2 z-10"
                            onClick={() => copyToClipboard(command)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{command}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Note:</strong> Replace <code>your_api_key</code> with your actual servercanine API key. 
                        You can find your API key in the dashboard under Settings → API Keys.
                      </p>
                    </div>
                  </TabsContent>
                  );
                })}
              </Tabs>
            </CardContent>
          </Card>

          {/* Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Configuration Options</CardTitle>
              <CardDescription>
                Customize the agent behavior with these configuration options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {configurationOptions.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-4">{section.section}</h3>
                    <div className="space-y-3">
                      {section.options.map((option, optIndex) => (
                        <div key={optIndex} className="border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                              {option.key}
                            </code>
                            {option.required && (
                              <Badge variant="destructive" className="text-xs">Required</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Configuration File Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Configuration File Example</CardTitle>
              <CardDescription>
                Sample configuration file (/etc/servercanine/agent.conf)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="absolute top-2 right-2 z-10"
                  onClick={() => copyToClipboard(`# servercanine Agent Configuration
api_key = "your_api_key_here"
server_name = "web-server-01"
tags = "production,web,frontend"
region = "us-east-1"

# Monitoring Settings
collect_interval = 60
cpu_threshold = 80
memory_threshold = 85
disk_threshold = 90

# Log Settings
log_level = "info"
log_file = "/var/log/servercanine/agent.log"

# Network Settings
proxy_url = ""
timeout = 30`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`# servercanine Agent Configuration
api_key = "your_api_key_here"
server_name = "web-server-01"
tags = "production,web,frontend"
region = "us-east-1"

# Monitoring Settings
collect_interval = 60
cpu_threshold = 80
memory_threshold = 85
disk_threshold = 90

# Log Settings
log_level = "info"
log_file = "/var/log/servercanine/agent.log"

# Network Settings
proxy_url = ""
timeout = 30`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Troubleshooting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Agent Not Starting</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Check the agent status and logs:
                  </p>
                  <pre className="bg-muted p-2 rounded text-sm">
                    <code>sudo systemctl status servercanine-agent</code>
                  </pre>
                  <pre className="bg-muted p-2 rounded text-sm mt-2">
                    <code>sudo journalctl -u servercanine-agent -f</code>
                  </pre>
                </div>
                
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">No Data in Dashboard</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Verify API key is correct</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Check network connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Ensure agent has proper permissions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">High Resource Usage</h3>
                  <p className="text-sm text-muted-foreground">
                    Increase the collection interval to reduce resource usage:
                  </p>
                  <pre className="bg-muted p-2 rounded text-sm mt-2">
                    <code>collect_interval = 300  # 5 minutes</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Once the agent is installed and running, you can view your server metrics in the 
                servercanine dashboard and set up custom alerts for proactive monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/contact-support">Get API Key</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/docs/advanced-monitoring">Advanced Monitoring</Link>
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

export default ServerMonitoringAgent;
