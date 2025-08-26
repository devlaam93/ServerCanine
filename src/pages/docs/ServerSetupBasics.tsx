import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Server, CheckCircle, AlertTriangle, Copy, Terminal, Shield, Zap } from "lucide-react";

const ServerSetupBasics = () => {
  const setupSteps = [
    {
      step: "Initial Server Configuration",
      description: "Basic server setup and security hardening",
      duration: "15-30 minutes",
      tasks: [
        "Update system packages",
        "Create non-root user with sudo privileges",
        "Configure SSH key authentication",
        "Disable root login and password authentication",
        "Configure basic firewall rules"
      ]
    },
    {
      step: "Network Configuration",
      description: "Set up networking and domain configuration",
      duration: "10-15 minutes",
      tasks: [
        "Configure static IP address (if required)",
        "Set up hostname and FQDN",
        "Configure DNS settings",
        "Test network connectivity",
        "Set up reverse DNS (if applicable)"
      ]
    },
    {
      step: "Security Hardening",
      description: "Implement security best practices",
      duration: "20-30 minutes",
      tasks: [
        "Install and configure fail2ban",
        "Set up automatic security updates",
        "Configure log rotation",
        "Install security monitoring tools",
        "Set up intrusion detection"
      ]
    },
    {
      step: "Monitoring Setup",
      description: "Install servercanine monitoring agent",
      duration: "5-10 minutes",
      tasks: [
        "Download servercanine agent",
        "Configure API credentials",
        "Start monitoring services",
        "Verify data collection",
        "Set up basic alerts"
      ]
    }
  ];

  const osConfigurations = [
    {
      os: "Ubuntu 22.04 LTS",
      commands: {
        update: "sudo apt update && sudo apt upgrade -y",
        user: "sudo adduser serveradmin && sudo usermod -aG sudo serveradmin",
        ssh: "sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config",
        firewall: "sudo ufw enable && sudo ufw allow ssh"
      }
    },
    {
      os: "CentOS 8 / RHEL 8",
      commands: {
        update: "sudo dnf update -y",
        user: "sudo adduser serveradmin && sudo usermod -aG wheel serveradmin",
        ssh: "sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config",
        firewall: "sudo firewall-cmd --permanent --add-service=ssh && sudo firewall-cmd --reload"
      }
    },
    {
      os: "Debian 11",
      commands: {
        update: "sudo apt update && sudo apt upgrade -y",
        user: "sudo adduser serveradmin && sudo usermod -aG sudo serveradmin",
        ssh: "sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config",
        firewall: "sudo ufw enable && sudo ufw allow ssh"
      }
    }
  ];

  const securityChecklist = [
    { item: "System packages updated to latest versions", critical: true },
    { item: "Non-root user created with sudo privileges", critical: true },
    { item: "SSH key authentication configured", critical: true },
    { item: "Root login disabled", critical: true },
    { item: "Password authentication disabled", critical: true },
    { item: "Firewall configured and enabled", critical: true },
    { item: "Fail2ban installed and configured", critical: false },
    { item: "Automatic security updates enabled", critical: false },
    { item: "Log rotation configured", critical: false },
    { item: "Intrusion detection system installed", critical: false }
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
              <Server className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Server Setup</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Server Setup Basics</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Complete guide to setting up and configuring your servers with servercanine best practices.
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Setup Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This guide covers the essential steps to set up a secure, well-configured server ready for 
                production use with servercanine. Follow these steps to ensure your server meets security 
                and performance best practices.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <Terminal className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">Easy Setup</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Step-by-step guide</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Secure</h3>
                  <p className="text-sm text-green-600 dark:text-green-400">Security hardened</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">Optimized</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Performance tuned</p>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Production Ready</h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Battle tested</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Setup Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Setup Process</CardTitle>
              <CardDescription>
                Follow these steps in order to properly configure your server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {setupSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{step.step}</h3>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* OS-Specific Commands */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>OS-Specific Setup Commands</CardTitle>
              <CardDescription>
                Choose your operating system and follow the commands below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="ubuntu" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="ubuntu">Ubuntu 22.04</TabsTrigger>
                  <TabsTrigger value="centos">CentOS 8</TabsTrigger>
                  <TabsTrigger value="debian">Debian 11</TabsTrigger>
                </TabsList>
                
                {osConfigurations.map((config, index) => (
                  <TabsContent key={index} value={config.os.toLowerCase().split(' ')[0]} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">1. Update System Packages</h3>
                        <div className="relative">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute top-2 right-2 z-10"
                            onClick={() => copyToClipboard(config.commands.update)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{config.commands.update}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">2. Create Non-Root User</h3>
                        <div className="relative">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute top-2 right-2 z-10"
                            onClick={() => copyToClipboard(config.commands.user)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{config.commands.user}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">3. Configure SSH Security</h3>
                        <div className="relative">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute top-2 right-2 z-10"
                            onClick={() => copyToClipboard(config.commands.ssh)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{config.commands.ssh}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">4. Configure Firewall</h3>
                        <div className="relative">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute top-2 right-2 z-10"
                            onClick={() => copyToClipboard(config.commands.firewall)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{config.commands.firewall}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Important:</strong> After configuring SSH, make sure to test your SSH key 
                        authentication before closing your current session to avoid being locked out.
                      </p>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Security Checklist */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Security Checklist</CardTitle>
              <CardDescription>
                Verify your server meets these security requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityChecklist.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm">{item.item}</span>
                    </div>
                    {item.critical && (
                      <Badge variant="destructive" className="text-xs">Critical</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Additional Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Performance Optimization</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Configure swap file (if needed)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Optimize kernel parameters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Configure file descriptor limits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Set up log rotation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Monitoring & Maintenance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Install servercanine monitoring agent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Configure automated backups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Set up health checks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Schedule regular maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Issues */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Common Setup Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">SSH Connection Refused</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        If you can't connect via SSH after configuration changes:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Check if SSH service is running: <code>sudo systemctl status ssh</code></li>
                        <li>• Verify firewall allows SSH: <code>sudo ufw status</code></li>
                        <li>• Check SSH configuration: <code>sudo sshd -t</code></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Permission Denied for New User</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        If the new user can't use sudo commands:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Verify user is in sudo group: <code>groups username</code></li>
                        <li>• Check sudoers file: <code>sudo visudo</code></li>
                        <li>• Log out and back in to refresh group membership</li>
                      </ul>
                    </div>
                  </div>
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
                Once your server is properly configured, you can proceed with installing applications, 
                setting up monitoring, and configuring specific services for your use case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/docs/server-monitoring-agent">Install Monitoring Agent</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/docs/security-best-practices">Security Best Practices</Link>
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

export default ServerSetupBasics;
