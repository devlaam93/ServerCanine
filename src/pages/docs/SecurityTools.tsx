import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, Copy, CheckCircle, Terminal, Server, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

const SecurityTools = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="outline"
        className="absolute top-2 right-2 h-8 w-8 p-0"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedCode === id ? (
          <CheckCircle className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/browse-documentation" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Security Tools</h1>
              <p className="text-xl text-gray-600 mt-2">
                Essential security tools and configurations for server hardening and threat protection
              </p>
            </div>
          </div>
        </div>

        {/* Security Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Security Framework Overview</CardTitle>
            <CardDescription>
              Comprehensive security tools and practices to protect your infrastructure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-red-800">Threat Protection</h3>
                <p className="text-sm text-red-600 mt-2">Advanced threat detection</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Lock className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-orange-800">Access Control</h3>
                <p className="text-sm text-orange-600 mt-2">Multi-factor authentication</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Eye className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-yellow-800">Monitoring</h3>
                <p className="text-sm text-yellow-600 mt-2">Real-time security alerts</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Network className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-800">Network Security</h3>
                <p className="text-sm text-green-600 mt-2">Firewall and intrusion prevention</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Security Notice:</strong> Always test security configurations in a staging environment before applying to production systems. 
            Improper configuration can lock you out of your server.
          </AlertDescription>
        </Alert>

        {/* Security Tools Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Security Tool Categories</CardTitle>
            <CardDescription>Choose the right security tools for your infrastructure needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 bg-gradient-to-br from-red-50 to-red-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Network Security</h3>
                  <Badge variant="destructive">Critical</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Priority:</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Complexity:</span>
                    <span className="text-sm font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Impact:</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Firewall configuration
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Intrusion detection
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    DDoS protection
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">System Hardening</h3>
                  <Badge variant="default">Essential</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Priority:</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Complexity:</span>
                    <span className="text-sm font-medium">Low</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Impact:</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    OS security updates
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Service configuration
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    User access control
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Monitoring & Logging</h3>
                  <Badge variant="outline">Important</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Priority:</span>
                    <span className="text-sm font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Complexity:</span>
                    <span className="text-sm font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Impact:</span>
                    <span className="text-sm font-medium">Medium</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security event logging
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time alerts
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Threat intelligence
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Tools */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Security Tools & Configurations</CardTitle>
            <CardDescription>Ready-to-deploy security tools and hardening scripts</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="firewall" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="firewall">Firewall</TabsTrigger>
                <TabsTrigger value="hardening">Hardening</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="scanning">Scanning</TabsTrigger>
              </TabsList>

              <TabsContent value="firewall" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">UFW (Uncomplicated Firewall) Setup</h3>
                  <p className="text-gray-600 mb-4">Configure UFW for basic server protection</p>
                  <CodeBlock
                    language="bash"
                    id="ufw-setup"
                    code={`#!/bin/bash

# ServerCanine UFW Firewall Setup Script
# Version: 2.0

# Reset UFW to defaults
sudo ufw --force reset

# Set default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (change port if using non-standard)
sudo ufw allow 22/tcp comment 'SSH'

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'

# Rate limiting for SSH to prevent brute force
sudo ufw limit ssh

# Enable logging
sudo ufw logging on

# Enable UFW
sudo ufw --force enable

# Show status
sudo ufw status verbose

echo "UFW firewall configuration completed"`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Fail2Ban Configuration</h3>
                  <p className="text-gray-600 mb-4">Automated intrusion prevention system</p>
                  <CodeBlock
                    language="bash"
                    id="fail2ban-setup"
                    code={`#!/bin/bash

# ServerCanine Fail2Ban Setup Script
# Version: 2.0

# Install Fail2Ban
sudo apt update
sudo apt install -y fail2ban

# Create custom jail configuration
sudo tee /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
# Ban time: 1 hour
bantime = 3600

# Find time: 10 minutes
findtime = 600

# Max retry: 3 attempts
maxretry = 3

# Ignore local IPs
ignoreip = 127.0.0.1/8 ::1 192.168.0.0/16 10.0.0.0/8 172.16.0.0/12

# Email notifications
destemail = admin@servercanine.com
sendername = Fail2Ban-ServerCanine
mta = sendmail

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600

[apache-auth]
enabled = true
port = http,https
filter = apache-auth
logpath = /var/log/apache2/error.log
maxretry = 3

[nginx-http-auth]
enabled = true
port = http,https
filter = nginx-http-auth
logpath = /var/log/nginx/error.log
maxretry = 3
EOF

# Start and enable Fail2Ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

echo "Fail2Ban configuration completed"`}
                  />
                </div>
              </TabsContent>

              <TabsContent value="hardening" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">System Hardening Script</h3>
                  <p className="text-gray-600 mb-4">Comprehensive system hardening for Ubuntu/Debian servers</p>
                  <CodeBlock
                    language="bash"
                    id="system-hardening"
                    code={`#!/bin/bash

# ServerCanine System Hardening Script
# Version: 2.0

set -e

LOG_FILE="/var/log/system-hardening.log"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log_message "Starting system hardening process"

# Update system packages
log_message "Updating system packages"
apt update && apt upgrade -y

# Install essential security packages
log_message "Installing security packages"
apt install -y \\
    unattended-upgrades \\
    fail2ban \\
    ufw \\
    rkhunter \\
    chkrootkit \\
    lynis

# Configure automatic security updates
log_message "Configuring automatic security updates"
cat << 'EOF' > /etc/apt/apt.conf.d/50unattended-upgrades
Unattended-Upgrade::Allowed-Origins {
    "\${distro_id}:\${distro_codename}-security";
};
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "false";
EOF

# Secure SSH configuration
log_message "Hardening SSH configuration"
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup

cat << 'EOF' > /etc/ssh/sshd_config
# ServerCanine SSH Hardening Configuration

Protocol 2
Port 22
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
PermitEmptyPasswords no
MaxAuthTries 3
MaxSessions 2
ClientAliveInterval 300
ClientAliveCountMax 2
X11Forwarding no
AllowTcpForwarding no
Banner /etc/ssh/banner
EOF

# Create SSH banner
cat << 'EOF' > /etc/ssh/banner
***************************************************************************
                    AUTHORIZED ACCESS ONLY
                    
This system is for authorized users only. All activities are monitored
and logged. Unauthorized access is strictly prohibited.

                    ServerCanine Security Notice
***************************************************************************
EOF

# Secure kernel parameters
log_message "Configuring kernel security parameters"
cat << 'EOF' > /etc/sysctl.d/99-security.conf
# IP Spoofing protection
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.all.rp_filter = 1

# Ignore ICMP redirects
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0

# Disable source packet routing
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0

# TCP SYN flood protection
net.ipv4.tcp_syncookies = 1
EOF

# Apply kernel parameters
sysctl -p /etc/sysctl.d/99-security.conf

# Set file permissions
log_message "Setting secure file permissions"
chmod 700 /root
chmod 600 /etc/ssh/sshd_config

# Restart services
log_message "Restarting services"
systemctl restart ssh
systemctl enable unattended-upgrades

log_message "System hardening completed successfully"`}
                  />
                </div>
              </TabsContent>

              <TabsContent value="monitoring" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Security Monitoring Setup</h3>
                  <p className="text-gray-600 mb-4">Configure security monitoring and alerting</p>
                  <CodeBlock
                    language="bash"
                    id="security-monitoring"
                    code={`#!/bin/bash

# ServerCanine Security Monitoring Script
# Version: 2.0

# Install monitoring tools
apt install -y logwatch aide tripwire

# Configure logwatch
cat << 'EOF' > /etc/logwatch/conf/logwatch.conf
LogDir = /var/log
MailTo = admin@servercanine.com
MailFrom = logwatch@servercanine.com
Print = No
Range = yesterday
Detail = Med
Service = All
EOF

# Initialize AIDE (file integrity monitoring)
aideinit
mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db

# Create daily AIDE check
cat << 'EOF' > /etc/cron.daily/aide-check
#!/bin/bash
/usr/bin/aide --check | /usr/bin/mail -s "AIDE Report - $(hostname)" admin@servercanine.com
EOF
chmod +x /etc/cron.daily/aide-check

# Create security monitoring script
cat << 'EOF' > /usr/local/bin/security-monitor.sh
#!/bin/bash

# Check for failed login attempts
failed_logins=$(grep "Failed password" /var/log/auth.log | wc -l)
if [ $failed_logins -gt 10 ]; then
    echo "High number of failed login attempts: $failed_logins" | \\
    mail -s "Security Alert - Failed Logins" admin@servercanine.com
fi

# Check for root login attempts
root_attempts=$(grep "root" /var/log/auth.log | grep "Failed" | wc -l)
if [ $root_attempts -gt 0 ]; then
    echo "Root login attempts detected: $root_attempts" | \\
    mail -s "Security Alert - Root Login Attempts" admin@servercanine.com
fi

# Check disk usage
disk_usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $disk_usage -gt 90 ]; then
    echo "Disk usage is at $disk_usage%" | \\
    mail -s "System Alert - High Disk Usage" admin@servercanine.com
fi
EOF

chmod +x /usr/local/bin/security-monitor.sh

# Add to crontab
echo "0 */6 * * * /usr/local/bin/security-monitor.sh" | crontab -

echo "Security monitoring configured"`}
                  />
                </div>
              </TabsContent>

              <TabsContent value="scanning" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Security Scanning Tools</h3>
                  <p className="text-gray-600 mb-4">Automated security scanning and vulnerability assessment</p>
                  <CodeBlock
                    language="bash"
                    id="security-scanning"
                    code={`#!/bin/bash

# ServerCanine Security Scanning Script
# Version: 2.0

# Install security scanning tools
apt install -y nmap lynis rkhunter chkrootkit

# Run Lynis security audit
echo "Running Lynis security audit..."
lynis audit system --quick

# Run rootkit scanner
echo "Running rootkit scan..."
rkhunter --update
rkhunter --check --sk

# Run chkrootkit
echo "Running chkrootkit..."
chkrootkit

# Network port scan
echo "Scanning open ports..."
nmap -sS -O localhost

# Create weekly security scan
cat << 'EOF' > /etc/cron.weekly/security-scan
#!/bin/bash

# Weekly security scan report
{
    echo "Weekly Security Scan Report - $(date)"
    echo "=================================="
    echo
    
    echo "Lynis Security Audit:"
    lynis audit system --quick
    echo
    
    echo "Rootkit Scan:"
    rkhunter --check --sk
    echo
    
    echo "Open Ports:"
    nmap -sS localhost
    echo
    
} | mail -s "Weekly Security Report - $(hostname)" admin@servercanine.com
EOF

chmod +x /etc/cron.weekly/security-scan

echo "Security scanning tools configured"`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Vulnerability Assessment</h3>
                  <p className="text-gray-600 mb-4">Automated vulnerability scanning and reporting</p>
                  <CodeBlock
                    language="bash"
                    id="vulnerability-assessment"
                    code={`#!/bin/bash

# ServerCanine Vulnerability Assessment Script
# Version: 2.0

# Install OpenVAS (Greenbone Vulnerability Management)
apt install -y openvas

# Setup OpenVAS
gvm-setup

# Create vulnerability scan script
cat << 'EOF' > /usr/local/bin/vuln-scan.sh
#!/bin/bash

# Start OpenVAS services
systemctl start ospd-openvas
systemctl start gvmd
systemctl start gsad

# Wait for services to start
sleep 30

# Create scan target
gvm-cli --gmp-username admin --gmp-password admin \\
    socket --socketpath /run/gvmd/gvmd.sock \\
    --xml "<create_target><name>localhost</name><hosts>127.0.0.1</hosts></create_target>"

# Run vulnerability scan
gvm-cli --gmp-username admin --gmp-password admin \\
    socket --socketpath /run/gvmd/gvmd.sock \\
    --xml "<create_task><name>Weekly Scan</name><target id='target-id'/><config id='config-id'/></create_task>"

echo "Vulnerability scan initiated"
EOF

chmod +x /usr/local/bin/vuln-scan.sh

# Create monthly vulnerability assessment
echo "0 2 1 * * /usr/local/bin/vuln-scan.sh" | crontab -

echo "Vulnerability assessment configured"`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Security Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Security Best Practices</CardTitle>
            <CardDescription>Essential security guidelines and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-800">✅ Security Checklist</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Keep systems updated</p>
                      <p className="text-sm text-gray-600">Regular security patches and updates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Use strong authentication</p>
                      <p className="text-sm text-gray-600">SSH keys, 2FA, and complex passwords</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Monitor system logs</p>
                      <p className="text-sm text-gray-600">Regular log analysis and alerting</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Backup critical data</p>
                      <p className="text-sm text-gray-600">Regular encrypted backups</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-800">⚠️ Security Warnings</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Never disable firewalls</p>
                      <p className="text-sm text-gray-600">Always maintain network protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Avoid default passwords</p>
                      <p className="text-sm text-gray-600">Change all default credentials</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Don't ignore security alerts</p>
                      <p className="text-sm text-gray-600">Investigate all security warnings</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Limit user privileges</p>
                      <p className="text-sm text-gray-600">Follow principle of least privilege</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Next Steps</CardTitle>
            <CardDescription>
              Continue securing your infrastructure with additional tools and monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/docs/backup-scripts">Backup Scripts</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/docs/server-monitoring-agent">Set Up Monitoring</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-100 p-2 rounded-lg mr-3">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-xl font-semibold text-gray-900">servercanine</span>
          </div>
          <p className="text-gray-600 mb-2">
            Affordable cloud hosting solutions for developers and agencies. Manage your infrastructure with ease and deploy with confidence.
          </p>
          <p className="text-sm text-gray-500">
            <a href="mailto:contact@servercanine.com" className="hover:text-blue-600">contact@servercanine.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityTools;
