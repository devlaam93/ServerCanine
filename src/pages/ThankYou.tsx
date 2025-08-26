import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Mail, 
  Shield, 
  Clock, 
  Star,
  ArrowRight,
  Download,
  BookOpen,
  Headphones,
  Zap,
  Users,
  Award,
  Globe,
  Server,
  Database,
  BarChart3
} from "lucide-react";

interface TrialData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serverCount: string;
}

const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [trialData, setTrialData] = useState<TrialData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  useEffect(() => {
    // Get payment method from URL params
    const method = searchParams.get('method') || 'stripe';
    setPaymentMethod(method);

    // Get trial data from sessionStorage (backup data)
    const storedData = sessionStorage.getItem('trialSignupData');
    if (storedData) {
      setTrialData(JSON.parse(storedData));
    } else {
      // If no data, redirect to trial page
      navigate('/start-free-trial');
    }
  }, [navigate, searchParams]);

  const trialFeatures = [
    {
      icon: Server,
      title: "Full Server Management",
      description: "Complete control over your server infrastructure with our intuitive dashboard"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security features including DDoS protection and SSL certificates"
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "24/7 monitoring with instant alerts and performance analytics"
    },
    {
      icon: Database,
      title: "Automated Backups",
      description: "Daily automated backups with one-click restore functionality"
    },
    {
      icon: Zap,
      title: "Lightning Fast Deployment",
      description: "Deploy applications in under 30 seconds with our optimized infrastructure"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access controls and collaborative development environments"
    }
  ];

  const nextSteps = [
    {
      step: "1",
      title: "Check Your Email",
      description: "We've sent a verification email to your inbox. Click the link to verify your account.",
      icon: Mail,
      action: "Open Email",
      actionLink: `mailto:${trialData?.email}`
    },
    {
      step: "2", 
      title: "Access Your Dashboard",
      description: "Once verified, you'll receive login credentials to access your ServerCanine dashboard.",
      icon: Globe,
      action: "Dashboard Preview",
      actionLink: "/features"
    },
    {
      step: "3",
      title: "Start Your Trial",
      description: "Begin exploring all features with our getting started guide and 24/7 support.",
      icon: BookOpen,
      action: "Getting Started",
      actionLink: "/docs/getting-started-guide"
    }
  ];

  const supportOptions = [
    {
      title: "24/7 Live Support",
      description: "Get instant help from our expert team",
      icon: Headphones,
      action: "Start Chat",
      link: "/contact-support"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: BookOpen,
      action: "Browse Docs",
      link: "/browse-documentation"
    },
    {
      title: "Download Resources",
      description: "Mobile apps and desktop tools",
      icon: Download,
      action: "Download",
      link: "/resources"
    }
  ];

  if (!trialData) {
    return <div>Loading...</div>;
  }

  const getPaymentMethodDisplay = (method: string) => {
    switch (method) {
      case 'stripe': return 'Credit Card';
      case 'paypal': return 'PayPal';
      case 'crypto': return 'Cryptocurrency';
      default: return 'Payment Method';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="mx-auto mb-6 p-4 bg-green-100 rounded-full w-fit">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
              Welcome to ServerCanine! 🎉
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your 14-day free trial has been successfully activated. Get ready to experience 
              the most powerful and affordable cloud hosting platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Account Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Account Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Account Holder</span>
                      <span className="text-sm font-medium">{trialData.firstName} {trialData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <span className="text-sm font-medium">{trialData.email}</span>
                    </div>
                    {trialData.company && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Company</span>
                        <span className="text-sm font-medium">{trialData.company}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Server Count</span>
                      <span className="text-sm font-medium">{trialData.serverCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Payment Method</span>
                      <span className="text-sm font-medium">{getPaymentMethodDisplay(paymentMethod)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Trial Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Trial Period</span>
                      <span>14 days</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Expires</span>
                      <span>{new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Trial Includes:</h4>
                    <div className="space-y-1">
                      {[
                        "Full access to all features",
                        "24/7 expert support",
                        "Unlimited projects",
                        "Advanced monitoring",
                        "Automated backups",
                        "Team collaboration tools"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Email Verification Notice */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Mail className="h-5 w-5" />
                    Verify Your Email Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-blue-700">
                      <strong>Important:</strong> We've sent a verification email to <strong>{trialData.email}</strong>. 
                      Please check your inbox and click the verification link to activate your account.
                    </p>
                    <div className="bg-white border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">What to expect:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Verification email from noreply@servercanine.com</li>
                        <li>• Dashboard access credentials after verification</li>
                        <li>• Welcome guide with setup instructions</li>
                        <li>• Direct line to your dedicated support specialist</li>
                      </ul>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.location.href = `mailto:${trialData.email}`}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Open Email
                      </Button>
                      <Button variant="outline">
                        Resend Verification
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                  <CardDescription>
                    Follow these steps to get the most out of your ServerCanine trial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {nextSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold mb-1">{step.title}</h3>
                              <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                            </div>
                            <step.icon className="h-5 w-5 text-primary mt-1" />
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={step.actionLink}>
                              {step.action}
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trial Features */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Included in Your Trial</CardTitle>
                  <CardDescription>
                    Explore all premium features during your 14-day trial period
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {trialFeatures.map((feature, index) => (
                      <div key={index} className="flex gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <feature.icon className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Support Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help Getting Started?</CardTitle>
                  <CardDescription>
                    Our team is here to help you succeed with ServerCanine
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {supportOptions.map((option, index) => (
                      <div key={index} className="text-center p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                          <option.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="font-medium mb-2">{option.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link to={option.link}>{option.action}</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-primary to-primary-glow rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 text-white/90">
              Check your email for verification instructions and dashboard access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = `mailto:${trialData.email}`}
              >
                <Mail className="h-4 w-4 mr-2" />
                Check Email
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/contact-support">
                  <Headphones className="h-4 w-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
