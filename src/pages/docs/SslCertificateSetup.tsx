import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Lock, CheckCircle, AlertTriangle, Copy, Globe, Key } from "lucide-react";

const SslCertificateSetup = () => {
  const certificateTypes = [
    {
      type: "Let's Encrypt (Free)",
      description: "Free SSL certificates with automatic renewal",
      validity: "90 days",
      cost: "Free",
      features: ["Domain validation", "Automatic renewal", "Wildcard support", "API integration"],
      recommended: true
    },
    {
      type: "Commercial SSL",
      description: "Paid certificates from trusted CAs",
      validity: "1-3 years",
      cost: "$50-500/year",
      features: ["Extended validation", "Organization validation", "Warranty coverage", "24/7 support"],
      recommended: false
    },
    {
      type: "Self-Signed",
      description: "Certificates for development/testing",
      validity: "Custom",
      cost: "Free",
      features: ["Quick setup", "No external dependencies", "Development only", "Browser warnings"],
      recommended: false
    }
  ];

  const setupSteps = [
    {
      step: "Domain Verification",
      description: "Verify domain ownership and DNS configuration",
      duration: "5-10 minutes",
      tasks: [
        "Ensure domain points to your server",
        "Verify DNS A/AAAA records",
        "Check domain accessibility",
        "Configure web server (if needed)"
      ]
    },
    {
      step: "Certificate Generation",
      description: "Generate SSL certificate using chosen method",
      duration: "2-5 minutes",
      tasks: [
        "Install certificate authority client",
        "Request certificate from CA",
        "Complete domain validation",
        "Download certificate files"
      ]
    },
    {
      step: "Server Configuration",
      description: "Configure web server to use SSL certificate",
      duration: "10-15 minutes",
      tasks: [
        "Install certificate files",
        "Update web server configuration",
        "Configure SSL settings",
        "Test HTTPS connectivity"
      ]
    },
    {
      step: "Security Hardening",
      description: "Implement SSL security best practices",
      duration: "5-10 minutes",
      tasks: [
        "Configure SSL protocols",
        "Set up HSTS headers",
        "Implement cipher suites",
        "Enable OCSP stapling"
      ]
    }
  ];

  const nginxConfig = `# NGINX SSL Configuration
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL Certificate Configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # SSL Security Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # HSTS (HTTP Strict Transport Security)
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    location / {
        root /var/www/html;
        index index.html index.htm;
    }
}`;

  const apacheConfig = `# Apache SSL Configuration
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    Redirect permanent / https://example.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName example.com
    ServerAlias www.example.com
    DocumentRoot /var/www/html
    
    # SSL Engine
    SSLEngine on
    
    # SSL Certificate Configuration
    SSLCertificateFile /etc/letsencrypt/live/example.com/cert.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
    SSLCertificateChainFile /etc/letsencrypt/live/example.com/chain.pem
    
    # SSL Security Settings
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384
    SSLHonorCipherOrder off
    SSLCompression off
    
    # HSTS Header
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    
    # OCSP Stapling
    SSLUseStapling On
    SSLStaplingCache "shmcb:logs/ssl_stapling(32768)"
</VirtualHost>`;

  const securityChecklist = [
    { item: "SSL certificate installed and valid", critical: true },
    { item: "HTTP to HTTPS redirect configured", critical: true },
    { item: "Strong SSL protocols enabled (TLS 1.2+)", critical: true },
    { item: "Secure cipher suites configured", critical: true },
    { item: "HSTS headers implemented", critical: false },
    { item: "OCSP stapling enabled", critical: false },
    { item: "Certificate auto-renewal configured", critical: false },
    { item: "SSL security headers added", critical: false }
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
              <Shield className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">SSL Setup</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">SSL Certificate Setup</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Complete guide to setting up and configuring SSL certificates for secure HTTPS connections with servercanine.
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>SSL Certificate Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                SSL certificates encrypt data transmitted between your server and users' browsers, ensuring 
                secure communication and building trust. This guide covers everything from certificate 
                acquisition to advanced security configuration.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Secure</h3>
                  <p className="text-sm text-green-600 dark:text-green-400">Encrypted traffic</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">Trusted</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Browser verified</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">SEO Boost</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Search ranking</p>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <Key className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Compliance</h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Industry standards</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificate Types */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Certificate Types</CardTitle>
              <CardDescription>
                Choose the right SSL certificate type for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {certificateTypes.map((cert, index) => (
                  <div key={index} className={`border rounded-lg p-6 ${cert.recommended ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold">{cert.type}</h3>
                      {cert.recommended && (
                        <Badge variant="default" className="text-xs">Recommended</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Validity:</span>
                        <span className="font-medium">{cert.validity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Cost:</span>
                        <span className="font-medium">{cert.cost}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {cert.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Setup Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>SSL Setup Process</CardTitle>
              <CardDescription>
                Follow these steps to set up SSL certificates on your server
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

          {/* Let's Encrypt Setup */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Let's Encrypt Setup (Recommended)</CardTitle>
              <CardDescription>
                Free SSL certificates with automatic renewal using Certbot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Install Certbot</h3>
                  <div className="relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyToClipboard("sudo apt update && sudo apt install certbot python3-certbot-nginx")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">sudo apt update && sudo apt install certbot python3-certbot-nginx</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2. Obtain SSL Certificate</h3>
                  <div className="relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyToClipboard("sudo certbot --nginx -d example.com -d www.example.com")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">sudo certbot --nginx -d example.com -d www.example.com</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3. Test Auto-Renewal</h3>
                  <div className="relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyToClipboard("sudo certbot renew --dry-run")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">sudo certbot renew --dry-run</code>
                    </pre>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Note:</strong> Replace <code>example.com</code> with your actual domain name. 
                    Certbot will automatically configure NGINX and set up auto-renewal.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Web Server Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Web Server Configuration</CardTitle>
              <CardDescription>
                Configure your web server for optimal SSL security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="nginx" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="nginx">NGINX</TabsTrigger>
                  <TabsTrigger value="apache">Apache</TabsTrigger>
                </TabsList>
                
                <TabsContent value="nginx" className="space-y-4">
                  <div className="relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyToClipboard(nginxConfig)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{nginxConfig}</code>
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="apache" className="space-y-4">
                  <div className="relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyToClipboard(apacheConfig)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{apacheConfig}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Security Checklist */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>SSL Security Checklist</CardTitle>
              <CardDescription>
                Verify your SSL configuration meets security best practices
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

          {/* Testing & Validation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Testing & Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Online SSL Tests</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">SSL Labs Server Test (ssllabs.com/ssltest)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">SSL Checker (sslchecker.com)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Security Headers (securityheaders.com)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Command Line Tests</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">openssl s_client -connect domain.com:443</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">curl -I https://domain.com</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">nmap --script ssl-enum-ciphers -p 443 domain.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Common Issues & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Certificate Not Trusted</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Browser shows "Not Secure" or certificate warnings:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Check certificate chain completeness</li>
                        <li>• Verify domain name matches certificate</li>
                        <li>• Ensure certificate hasn't expired</li>
                        <li>• Clear browser cache and try again</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Mixed Content Warnings</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        HTTPS page loading HTTP resources:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Update all internal links to use HTTPS</li>
                        <li>• Use protocol-relative URLs (//example.com)</li>
                        <li>• Check third-party integrations</li>
                        <li>• Enable Content Security Policy</li>
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
                Once your SSL certificate is properly configured, consider implementing additional 
                security measures and monitoring to maintain a secure environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/docs/security-best-practices">Security Best Practices</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/docs/server-monitoring-agent">Set Up Monitoring</Link>
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

export default SslCertificateSetup;
