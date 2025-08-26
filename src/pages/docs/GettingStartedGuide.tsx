import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, User } from "lucide-react";

const GettingStartedGuide = () => {
  const steps = [
    {
      title: "Create Your Account",
      content: "Sign up for servercanine and verify your email address to get started.",
      time: "2 minutes"
    },
    {
      title: "Connect Your First Server",
      content: "Add your server using our one-click connection or manual setup process.",
      time: "5 minutes"
    },
    {
      title: "Configure Basic Monitoring",
      content: "Set up essential monitoring for CPU, memory, disk usage, and network.",
      time: "3 minutes"
    },
    {
      title: "Install the Monitoring Agent",
      content: "Deploy our lightweight agent to collect detailed server metrics.",
      time: "5 minutes"
    },
    {
      title: "Set Up Alerts",
      content: "Configure notifications for critical events and threshold breaches.",
      time: "10 minutes"
    },
    {
      title: "Deploy Your First Application",
      content: "Use our deployment tools to launch your application on your server.",
      time: "15 minutes"
    }
  ];

  const prerequisites = [
    "A server with root/sudo access",
    "Basic command line knowledge",
    "SSH access to your server",
    "Port 22 (SSH) and port 80/443 (HTTP/HTTPS) open"
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
              <BookOpen className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Getting Started</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Getting Started Guide</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Complete walkthrough to get up and running with servercanine in under 30 minutes
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                30 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Beginner friendly
              </div>
            </div>
          </div>

          {/* Prerequisites */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Before you begin, make sure you have:</p>
              <ul className="space-y-2">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Steps */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Step-by-Step Guide</h2>
            
            {steps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      {step.title}
                    </CardTitle>
                    <Badge variant="outline">{step.time}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Steps */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">Now that you've completed the basic setup, explore these advanced features:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/docs/advanced-monitoring">Advanced Monitoring Setup</Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/docs/security-best-practices">Security Best Practices</Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/docs/performance-optimization">Performance Optimization</Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/contact-support">Get Support</Link>
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

export default GettingStartedGuide;