import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Cloud, Check, Shield, Zap, Clock, Star, Users, Award } from "lucide-react";

const StartFreeTrial = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serverCount: "",
    agreeToTerms: false
  });

  const benefits = [
    {
      icon: Clock,
      title: "14-Day Free Trial",
      description: "Full access to all premium features with no restrictions"
    },
    {
      icon: Shield,
      title: "No Credit Card Required",
      description: "Start immediately without any payment information"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get your servers monitored and managed in under 5 minutes"
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "Our team of experts is available around the clock"
    },
    {
      icon: Award,
      title: "Enterprise Features",
      description: "Access to advanced monitoring, automation, and security tools"
    },
    {
      icon: Star,
      title: "99.9% Uptime SLA",
      description: "Guaranteed reliability with industry-leading uptime"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DevOps Engineer",
      company: "TechFlow Inc",
      quote: "servercanine transformed our server management. Setup took 3 minutes and we immediately had full visibility into all our infrastructure."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      quote: "The cost savings are incredible - 40% less than our previous provider with better features and support."
    },
    {
      name: "Emily Watson",
      role: "System Administrator",
      company: "Global Corp",
      quote: "Best decision we made this year. The automated monitoring and alerts have prevented several potential outages."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Servers Managed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "< 2min", label: "Average Response Time" },
    { number: "40%", label: "Cost Savings vs Competitors" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms of Service to continue");
      return;
    }
    
    // Store form data in sessionStorage for checkout page
    sessionStorage.setItem('trialSignupData', JSON.stringify(formData));
    
    // Redirect to checkout page
    navigate('/checkout');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            Trusted by 10,000+ businesses worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have reduced their hosting costs by 40% while improving 
            performance and reliability. No credit card required - start monitoring your servers in minutes.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-2xl border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Create Your Free Account</CardTitle>
                <CardDescription>
                  Get instant access to all servercanine features for 14 days
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="serverCount">How many servers do you manage? *</Label>
                    <Select onValueChange={(value) => handleInputChange("serverCount", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your server count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 servers (Small team)</SelectItem>
                        <SelectItem value="6-20">6-20 servers (Growing business)</SelectItem>
                        <SelectItem value="21-50">21-50 servers (Mid-size company)</SelectItem>
                        <SelectItem value="51-100">51-100 servers (Large organization)</SelectItem>
                        <SelectItem value="100+">100+ servers (Enterprise)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-3 py-4">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked.toString())}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to servercanine's{" "}
                      <Link to="/terms" className="text-primary hover:text-primary/80 underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary/80 underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" variant="hero" size="lg">
                    Start My Free 14-Day Trial
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    No credit card required • Cancel anytime • Full feature access
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits & Social Proof */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose servercanine?</h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border/50">
                    <div className="p-2 primary-gradient rounded-lg flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <span className="text-primary font-semibold text-sm">
                            {testimonial.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Security Notice */}
            <Card className="bg-muted/30 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">Enterprise Security</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your data is protected with SOC 2 Type II compliance, end-to-end encryption, 
                  and regular security audits. We never sell or share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What happens after the 14-day trial?</h3>
                <p className="text-sm text-muted-foreground">
                  After your trial ends, you can choose to upgrade to a paid plan or your account will be automatically paused. 
                  No charges will occur without your explicit consent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do I need a credit card to start?</h3>
                <p className="text-sm text-muted-foreground">
                  No credit card is required to start your free trial. You can explore all features without any payment information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How quickly can I get started?</h3>
                <p className="text-sm text-muted-foreground">
                  Most customers are up and running within 5 minutes. Our one-click setup process automatically 
                  configures monitoring for your servers.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What support is included?</h3>
                <p className="text-sm text-muted-foreground">
                  All trial accounts include 24/7 chat and email support from our expert team. 
                  We also provide free migration assistance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your trial or subscription at any time with no penalties or fees. 
                  Your data remains accessible for 30 days after cancellation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my data secure?</h3>
                <p className="text-sm text-muted-foreground">
                  We use enterprise-grade security with SOC 2 compliance, encryption at rest and in transit, 
                  and regular third-party security audits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to get started? Join thousands of satisfied customers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-support">Talk to Sales</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/browse-documentation">View Documentation</Link>
            </Button>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartFreeTrial;
