import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Lock, Key, AlertTriangle, CheckCircle } from "lucide-react";

const SecurityBestPractices = () => {
  const securityLayers = [
    {
      title: "Network Security",
      icon: Shield,
      practices: [
        {
          name: "Firewall Configuration",
          description: "Implement strict firewall rules to control network access",
          implementation: `# UFW Firewall Setup
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable`,
          priority: "critical"
        },
        {
          name: "VPN Access",
          description: "Use VPN for administrative access to servers",
          implementation: `# OpenVPN Client Configuration
client
dev tun
proto udp
remote vpn.servercanine.com 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client.crt
key client.key`,
          priority: "high"
        }
      ]
    },
    {
      title: "Authentication & Authorization",
      icon: Key,
      practices: [
        {
          name: "SSH Key Management",
          description: "Use SSH keys instead of passwords for server access",
          implementation: `# Generate SSH Key Pair
ssh-keygen -t ed25519 -C "admin@company.com"

# Copy public key to server
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server

# Disable password authentication
echo "PasswordAuthentication no" >> /etc/ssh/sshd_config
systemctl restart sshd`,
          priority: "critical"
        },
        {
          name: "Multi-Factor Authentication",
          description: "Enable MFA for all administrative accounts",
          implementation: `# Install Google Authenticator
sudo apt-get install libpam-google-authenticator

# Configure PAM
echo "auth required pam_google_authenticator.so" >> /etc/pam.d/sshd

# Enable in SSH config
echo "ChallengeResponseAuthentication yes" >> /etc/ssh/sshd_config`,
          priority: "high"
        }
      ]
    },
    {
      title: "Data Protection",
      icon: Lock,
      practices: [
        {
          name: "Encryption at Rest",
          description: "Encrypt sensitive data stored on disk",
          implementation: `# LUKS Disk Encryption
sudo cryptsetup luksFormat /dev/sdb
sudo cryptsetup luksOpen /dev/sdb encrypted_disk
sudo mkfs.ext4 /dev/mapper/encrypted_disk

# Auto-mount encrypted volume
echo "encrypted_disk /dev/sdb none luks" >> /etc/crypttab`,
          priority: "high"
        },
        {
          name: "SSL/TLS Configuration",
          description: "Secure data in transit with proper SSL/TLS setup",
          implementation: `# Nginx SSL Configuration
server {
    listen 443 ssl http2;
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
}`,
          priority: "critical"
        }
      ]
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security controls",
      requirements: ["Access controls", "Encryption", "Monitoring", "Incident response"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      requirements: ["Risk assessment", "Security policies", "Asset management", "Access control"]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data",
      requirements: ["Data minimization", "Consent management", "Right to erasure", "Data portability"]
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      requirements: ["Network security", "Data encryption", "Access control", "Regular testing"]
    }
  ];

  const securityChecklist = [
    { item: "Enable automatic security updates", completed: true },
    { item: "Configure intrusion detection system", completed: true },
    { item: "Set up log monitoring and analysis", completed: true },
    { item: "Implement backup encryption", completed: false },
    { item: "Configure vulnerability scanning", completed: false },
    { item: "Set up security incident response plan", completed: false },
    { item: "Enable audit logging", completed: true },
    { item: "Configure fail2ban protection", completed: true }
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
              <Shield className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Security Guide</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Security Best Practices</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Comprehensive security guidelines to protect your servercanine infrastructure and ensure 
              compliance with industry standards.
            </p>
          </div>

          {/* Security Threat Alert */}
          <Card className="mb-8 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700 dark:text-red-300">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Security Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600 dark:text-red-400">
                Security is an ongoing process, not a one-time setup. Regularly review and update your 
                security configurations, monitor for threats, and stay informed about new vulnerabilities.
              </p>
            </CardContent>
          </Card>

          {/* Security Layers */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Multi-Layer Security Approach</h2>
            
            {securityLayers.map((layer, layerIndex) => (
              <Card key={layerIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <layer.icon className="h-6 w-6 mr-3 text-primary" />
                    {layer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={`practice-${layerIndex}-0`} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      {layer.practices.map((practice, practiceIndex) => (
                        <TabsTrigger key={practiceIndex} value={`practice-${layerIndex}-${practiceIndex}`}>
                          {practice.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {layer.practices.map((practice, practiceIndex) => (
                      <TabsContent key={practiceIndex} value={`practice-${layerIndex}-${practiceIndex}`} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{practice.name}</h3>
                          <Badge variant={practice.priority === "critical" ? "destructive" : "secondary"}>
                            {practice.priority} priority
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{practice.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium">Implementation:</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{practice.implementation}</code>
                          </pre>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Compliance Standards */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Compliance Standards</CardTitle>
              <p className="text-muted-foreground">
                servercanine helps you meet various compliance requirements through built-in security features.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{standard.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{standard.description}</p>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Key Requirements:</h4>
                      <ul className="text-sm space-y-1">
                        {standard.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Checklist */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Security Implementation Checklist</CardTitle>
              <p className="text-muted-foreground">
                Track your security implementation progress with this comprehensive checklist.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityChecklist.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    {item.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <div className="h-5 w-5 border-2 border-muted-foreground rounded-full"></div>
                    )}
                    <span className={item.completed ? "text-muted-foreground line-through" : ""}>
                      {item.item}
                    </span>
                    <Badge variant={item.completed ? "secondary" : "outline"} className="ml-auto">
                      {item.completed ? "Complete" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Incident Response */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Security Incident Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Immediate Actions</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Isolate affected systems</li>
                    <li>Preserve evidence and logs</li>
                    <li>Notify security team</li>
                    <li>Document the incident</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Recovery Steps</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Assess the damage</li>
                    <li>Remove the threat</li>
                    <li>Restore from backups</li>
                    <li>Monitor for reoccurrence</li>
                  </ol>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Emergency Contact Information
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  For security incidents requiring immediate attention, contact our 24/7 security team 
                  at security@servercanine.com or through the emergency hotline.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Tools */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recommended Security Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex-col items-start">
                  <span className="font-semibold">Fail2ban</span>
                  <span className="text-sm text-muted-foreground mt-1">Intrusion prevention</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col items-start">
                  <span className="font-semibold">ClamAV</span>
                  <span className="text-sm text-muted-foreground mt-1">Antivirus scanning</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col items-start">
                  <span className="font-semibold">OSSEC</span>
                  <span className="text-sm text-muted-foreground mt-1">Host intrusion detection</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col items-start">
                  <span className="font-semibold">Nessus</span>
                  <span className="text-sm text-muted-foreground mt-1">Vulnerability scanner</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col items-start">
                  <span className="font-semibold">Lynis</span>
                  <span className="text-sm text-muted-foreground mt-1">Security auditing</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col items-start">
                  <span className="font-semibold">OpenVAS</span>
                  <span className="text-sm text-muted-foreground mt-1">Security assessment</span>
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

export default SecurityBestPractices;
