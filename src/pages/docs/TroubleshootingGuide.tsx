import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, AlertTriangle, Search, CheckCircle, XCircle, HelpCircle } from "lucide-react";

const TroubleshootingGuide = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const troubleshootingItems = [
    {
      category: "Connection Issues",
      color: "bg-red-500",
      issues: [
        {
          title: "Cannot connect to server",
          severity: "high",
          symptoms: "Connection timeout, 'Server unreachable' error",
          causes: ["Firewall blocking connection", "Incorrect server IP/hostname", "Server is down"],
          solutions: [
            "Verify server IP address and hostname",
            "Check firewall rules and ensure port 22 (SSH) is open",
            "Test network connectivity with ping command",
            "Restart servercanine agent if installed"
          ]
        },
        {
          title: "SSH authentication failed",
          severity: "medium",
          symptoms: "Permission denied, authentication errors",
          causes: ["Invalid SSH keys", "Incorrect username", "SSH service not running"],
          solutions: [
            "Verify SSH key is correctly configured",
            "Check username matches server configuration",
            "Ensure SSH service is running on server",
            "Try password authentication if keys fail"
          ]
        }
      ]
    },
    {
      category: "Monitoring Issues",
      color: "bg-orange-500",
      issues: [
        {
          title: "Metrics not updating",
          severity: "medium",
          symptoms: "Stale data, missing metrics in dashboard",
          causes: ["Agent stopped", "Network connectivity", "High server load"],
          solutions: [
            "Restart servercanine monitoring agent",
            "Check agent logs for errors",
            "Verify network connectivity to servercanine",
            "Check server resources and reduce load"
          ]
        },
        {
          title: "High CPU usage alerts",
          severity: "high",
          symptoms: "Repeated CPU threshold alerts, slow performance",
          causes: ["Resource-intensive processes", "Memory leaks", "Malware"],
          solutions: [
            "Identify processes using 'top' or 'htop' command",
            "Kill unnecessary processes",
            "Optimize application code",
            "Consider server upgrade if consistently high"
          ]
        }
      ]
    },
    {
      category: "Performance Issues",
      color: "bg-yellow-500",
      issues: [
        {
          title: "Slow response times",
          severity: "medium",
          symptoms: "High latency, timeout errors",
          causes: ["High server load", "Network congestion", "Database bottlenecks"],
          solutions: [
            "Monitor server resources (CPU, memory, disk)",
            "Optimize database queries",
            "Enable caching mechanisms",
            "Consider load balancing"
          ]
        },
        {
          title: "Memory usage constantly high",
          severity: "high",
          symptoms: "Out of memory errors, system slowdowns",
          causes: ["Memory leaks", "Inefficient applications", "Insufficient RAM"],
          solutions: [
            "Identify memory-intensive processes",
            "Restart applications with memory leaks",
            "Optimize application memory usage",
            "Upgrade server memory if needed"
          ]
        }
      ]
    },
    {
      category: "Security Issues",
      color: "bg-purple-500",
      issues: [
        {
          title: "Suspicious network activity",
          severity: "high",
          symptoms: "Unusual traffic patterns, unauthorized access attempts",
          causes: ["Brute force attacks", "DDoS attempts", "Malware infections"],
          solutions: [
            "Enable fail2ban for SSH protection",
            "Review and strengthen firewall rules",
            "Monitor logs for suspicious patterns",
            "Consider using servercanine security features"
          ]
        },
        {
          title: "SSL certificate errors",
          severity: "medium",
          symptoms: "Certificate warnings, HTTPS not working",
          causes: ["Expired certificates", "Misconfigured SSL", "Certificate chain issues"],
          solutions: [
            "Check certificate expiration date",
            "Renew SSL certificates if expired",
            "Verify certificate chain is complete",
            "Test SSL configuration with online tools"
          ]
        }
      ]
    }
  ];

  const filteredItems = troubleshootingItems.map(category => ({
    ...category,
    issues: category.issues.filter(issue =>
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.symptoms.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.issues.length > 0);

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "medium":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case "low":
        return <HelpCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

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
              <AlertTriangle className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Troubleshooting</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Troubleshooting Guide</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Common issues and their solutions. Find quick fixes for the most frequent servercanine problems.
            </p>

            {/* Search */}
            <div className="relative max-w-md mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Emergency Contacts */}
          <Card className="mb-8 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700 dark:text-red-300">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Emergency Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600 dark:text-red-400 mb-4">
                For critical issues affecting production systems, contact our emergency support:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50" asChild>
                  <Link to="/contact-support">24/7 Emergency Line</Link>
                </Button>
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50" asChild>
                  <Link to="/contact-support">Open Priority Ticket</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting Categories */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No issues found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or browse all categories</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredItems.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.issues.map((issue, issueIndex) => (
                        <AccordionItem key={issueIndex} value={`item-${categoryIndex}-${issueIndex}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center">
                              {getSeverityIcon(issue.severity)}
                              <span className="ml-2">{issue.title}</span>
                              <Badge 
                                variant={issue.severity === "high" ? "destructive" : "secondary"} 
                                className="ml-auto mr-2"
                              >
                                {issue.severity}
                              </Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-4">
                              <div>
                                <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Symptoms:</h4>
                                <p className="text-sm text-muted-foreground">{issue.symptoms}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Common Causes:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                  {issue.causes.map((cause, index) => (
                                    <li key={index}>{cause}</li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Solutions:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                                  {issue.solutions.map((solution, index) => (
                                    <li key={index}>{solution}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Additional Resources */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4 flex-col items-start" asChild>
                  <Link to="/docs/configuration-manual">
                    <span className="font-semibold">Configuration Manual</span>
                    <span className="text-sm text-muted-foreground mt-1">Learn proper configuration</span>
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 flex-col items-start" asChild>
                  <Link to="/docs/api-documentation">
                    <span className="font-semibold">API Documentation</span>
                    <span className="text-sm text-muted-foreground mt-1">Programmatic solutions</span>
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 flex-col items-start" asChild>
                  <Link to="/contact-support">
                    <span className="font-semibold">Contact Support</span>
                    <span className="text-sm text-muted-foreground mt-1">Get personalized help</span>
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 flex-col items-start">
                  <span className="font-semibold">Community Forum</span>
                  <span className="text-sm text-muted-foreground mt-1">Ask the community</span>
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

export default TroubleshootingGuide;
