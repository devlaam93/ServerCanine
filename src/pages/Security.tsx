import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileCheck, Server, Users, AlertTriangle, CheckCircle } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced DDoS mitigation protecting against volumetric, protocol, and application layer attacks.",
      status: "Active"
    },
    {
      icon: Lock,
      title: "SSL/TLS Encryption",
      description: "Free SSL certificates with automatic renewal and support for custom certificates.",
      status: "Standard"
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "ISO 27001 compliant data centers with 24/7 physical security and monitoring.",
      status: "Certified"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous security monitoring with automated threat detection and response.",
      status: "24/7"
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "GDPR, SOC 2, and PCI DSS compliance with regular security audits.",
      status: "Verified"
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Multi-factor authentication, role-based permissions, and audit logging.",
      status: "Enterprise"
    }
  ];

  const certifications = [
    "ISO 27001:2013",
    "SOC 2 Type II",
    "PCI DSS Level 1",
    "GDPR Compliant",
    "HIPAA Ready",
    "FedRAMP Authorized"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security & Compliance</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security protecting your applications and data with industry-leading standards and certifications.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg smooth-transition">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feature.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Security Measures */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Encryption at Rest</h4>
                    <p className="text-sm text-muted-foreground">AES-256 encryption for all stored data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Encryption in Transit</h4>
                    <p className="text-sm text-muted-foreground">TLS 1.3 for all data transmission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Backup Encryption</h4>
                    <p className="text-sm text-muted-foreground">Encrypted automated backups with point-in-time recovery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Key Management</h4>
                    <p className="text-sm text-muted-foreground">Hardware security modules (HSM) for key storage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Monitoring & Detection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Intrusion Detection</h4>
                    <p className="text-sm text-muted-foreground">AI-powered threat detection and prevention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Security Information</h4>
                    <p className="text-sm text-muted-foreground">SIEM integration with real-time alerts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Vulnerability Scanning</h4>
                    <p className="text-sm text-muted-foreground">Continuous scanning and patch management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Incident Response</h4>
                    <p className="text-sm text-muted-foreground">24/7 security operations center (SOC)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Certifications */}
          <Card className="mb-16">
            <CardHeader>
              <FileCheck className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Compliance & Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                servercanine maintains the highest industry standards through rigorous compliance programs and third-party audits.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 border border-border rounded-lg bg-muted/20 hover:bg-muted/40 smooth-transition"
                  >
                    <span className="text-sm font-medium text-center">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Incident Response */}
          <Card className="mb-16">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Security Incident Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Response Timeline</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Detection</span>
                      <Badge variant="outline">&lt; 5 minutes</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Initial Response</span>
                      <Badge variant="outline">&lt; 15 minutes</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Customer Notification</span>
                      <Badge variant="outline">&lt; 1 hour</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Resolution</span>
                      <Badge variant="outline">&lt; 4 hours</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Security Team:</strong> security@servercanine.com
                    </div>
                    <div>
                      <strong>Emergency Hotline:</strong> +44 7537 132810
                    </div>
                    <div>
                      <strong>PGP Key:</strong> Available on request
                    </div>
                    <div>
                      <strong>Bug Bounty:</strong> security.servercanine.com
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Security Updates & Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We believe in transparency and keep our customers informed about security matters that may affect their services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Security Blog</h4>
                  <p className="text-sm text-muted-foreground">Regular updates on security enhancements</p>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Status Page</h4>
                  <p className="text-sm text-muted-foreground">Real-time security incident reporting</p>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Security Advisories</h4>
                  <p className="text-sm text-muted-foreground">Timely notifications of security updates</p>
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

export default Security;