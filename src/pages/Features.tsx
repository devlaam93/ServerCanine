import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Server, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  GitBranch,
  Lock,
  Monitor,
  Smartphone,
  Cloud,
  Settings,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import cloudInfrastructure from "@/assets/cloud-infrastructure.jpg";
import fastDeployment from "@/assets/fast-deployment.jpg";
import security from "@/assets/security.jpg";
import teamManagement from "@/assets/team-management.jpg";

const Features = () => {
  const stacks = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Apache Stack",
      description: "Complete optimized Apache tech stack with PHP-FPM, Git, Composer, Redis and hosting-ready configuration."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Nginx Stack", 
      description: "High-performance Nginx tech stack with PHP-FPM, Git, Composer, Redis and optimized configurations."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "OLS Stack",
      description: "Fully optimized tech stack for WordPress sites powered by OpenLiteSpeed with LSPHP."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "MERN Stack",
      description: "Deploy Node.js based applications with our MERN stack without manual server setup."
    },
  ];

  const features = [
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "1-Click Deployments",
      description: "Auto-installer for 15+ applications including WordPress, N8N, Mautic, PHPMyAdmin and popular self-hosted apps."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "1-Click SSL Certificates",
      description: "Install free Let's Encrypt SSL certificates with one-click. SSL renewals are completely automatic."
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Deploy from Git",
      description: "Seamlessly deploy applications from GitHub, GitLab, and Bitbucket repositories."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "File Manager",
      description: "Powerful web-based file manager to handle all your application files and directories."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "PHP Settings",
      description: "Configure individual PHP versions and settings for each of your applications independently."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Site Cloning",
      description: "One-click clone your applications on the same server or across different servers."
    },
  ];

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SSH Access Management",
      description: "Complete control over SSH access, keys, ports, and user credentials."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Automated Backups",
      description: "Regular automated backups ensure your data is safe and easily recoverable."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Monitor server performance, resource usage, and application health in real-time."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Log Analysis",
      description: "Comprehensive log monitoring and analysis tools for optimization and security."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Features for
              <span className="block text-primary">Modern Hosting</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              servercanine provides all the features you need to efficiently manage your cloud hosting infrastructure with professional-grade tools.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">10-Minute Automated Setup</h2>
            <p className="text-lg text-muted-foreground">
              Choose from our optimized tech stacks and get hosting-ready servers in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stacks.map((stack, index) => (
              <Card key={index} className="elegant-shadow hover:glow-shadow smooth-transition">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {stack.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{stack.title}</h3>
                  <p className="text-sm text-muted-foreground">{stack.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Management Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hosting Management Features</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Streamline your hosting workflow with our comprehensive management tools designed for developers and agencies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={cloudInfrastructure}
                alt="Cloud Infrastructure Management"
                className="rounded-lg elegant-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={security}
                alt="Security Features"
                className="rounded-lg elegant-shadow"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Protect your infrastructure with advanced security features and monitoring tools.
              </p>
              
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Deployment */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Deploy Fast and Secure Applications</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get your applications online in minutes with our streamlined deployment process and built-in security features.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>One-click installers for 15+ applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Deploy directly from Git repositories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Automatic SSL certificate installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Isolated environments for security</span>
                </div>
              </div>
              
              <Button variant="hero" asChild>
                <Link to="/free-trial">Start Free Trial</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={fastDeployment}
                alt="Fast Deployment"
                className="rounded-lg elegant-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Management */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={teamManagement}
                alt="Team Management"
                className="rounded-lg elegant-shadow"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Scale With Your Team</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Advanced team management features for agencies and growing businesses.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Unlimited team members and roles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Granular permission management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Log monitoring and analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>White-label solutions available</span>
                </div>
              </div>
              
              <Button variant="outline-hero" asChild>
                <Link to="/pricing">View Team Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Deploy your first application in 10 minutes with our risk-free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
            <Button variant="outline-hero" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
            <span>✓ No credit card required</span>
            <span>✓ Free 4-day trial</span>
            <span>✓ Deploy in 10 minutes</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
