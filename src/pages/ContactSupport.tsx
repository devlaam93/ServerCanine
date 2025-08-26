import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, Clock, MessageSquare, CheckCircle, Headphones, Clock3 } from "lucide-react";
const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "",
    message: ""
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      console.log("Support request:", formData);
      setIsSubmitting(false);
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        priority: "",
        message: ""
      });
    }, 1500);
  };
  const supportChannels = [{
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7 Available",
    action: "Start Chat",
    onClick: () => {
      // Simple live chat simulation - in production, this would integrate with a real chat service
      alert("Live chat feature coming soon! For immediate assistance, please email us at contact@servercanine.com or call +44 7537 132810");
    }
  }, {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 2 hours",
    action: "Send Email",
    onClick: () => {
      window.location.href = "mailto:contact@servercanine.com?subject=Support Request";
    }
  }, {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri 9AM-6PM EST",
    action: "Call Now",
    onClick: () => {
      window.location.href = "tel:+447537132810";
    }
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expert support team is here to help you 24/7. Get the assistance you need to succeed.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {supportChannels.map((channel, index) => <Card key={index} className="text-center hover:shadow-lg smooth-transition">
                  <CardHeader>
                    <div className="p-3 primary-gradient rounded-lg w-fit mx-auto mb-4">
                      <channel.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center mb-4 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {channel.availability}
                    </div>
                    <Button variant="outline" className="w-full" onClick={channel.onClick}>
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Support Request</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us assist you better
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" value={formData.subject} onChange={e => setFormData({
                      ...formData,
                      subject: e.target.value
                    })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level</Label>
                      <Select onValueChange={value => setFormData({
                      ...formData,
                      priority: value
                    })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="medium">Medium - Non-urgent issue</SelectItem>
                          <SelectItem value="high">High - Business impact</SelectItem>
                          <SelectItem value="critical">Critical - Service down</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={6} placeholder="Please describe your issue or question in detail..." value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} required />
                  </div>

                  <Button type="submit" className="w-full" variant="hero" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Clock3 className="h-4 w-4 mr-2 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      "Send Support Request"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Multiple ways to reach our support team
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">Send us an email anytime</p>
                <a 
                  href="mailto:contact@servercanine.com" 
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  contact@servercanine.com
                </a>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                <a 
                  href="tel:+447537132810" 
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  +44 7537 132810
                </a>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Live Chat</h3>
                <p className="text-muted-foreground">24/7 instant support</p>
                <Button 
                  variant="outline" 
                  onClick={() => alert("Live chat feature coming soon! For immediate assistance, please email us at contact@servercanine.com or call +44 7537 132810")}
                >
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-green-800">
              Message Received Successfully!
            </DialogTitle>
            <DialogDescription className="text-center space-y-3 pt-2">
              <p className="text-lg">
                Thank you for contacting ServerCanine support! 🎉
              </p>
              <p className="text-muted-foreground">
                We've received your support request and our expert team is already reviewing it. 
                You can expect a response within <strong>2 hours</strong> during business hours.
              </p>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Headphones className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">What happens next?</h4>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Our support team will review your request</li>
                    <li>• You'll receive an email confirmation shortly</li>
                    <li>• A specialist will respond with a solution</li>
                    <li>• For urgent issues, call us at +44 7537 132810</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-900">Need immediate help?</h4>
                  <p className="text-sm text-green-700 mt-1">
                    For critical issues, our 24/7 emergency line is available at{" "}
                    <a href="tel:+447537132810" className="font-medium underline">
                      +44 7537 132810
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.location.href = "mailto:contact@servercanine.com"}
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
            <Button 
              className="flex-1" 
              onClick={() => setShowSuccessModal(false)}
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>;
};
export default ContactSupport;
