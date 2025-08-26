import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your satisfaction is our priority. Learn about our comprehensive refund policy and how we protect your investment.
            </p>
          </div>

          {/* Quick Overview */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                30-Day Money-Back Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We offer a no-questions-asked 30-day money-back guarantee on all our hosting plans. 
                If you're not completely satisfied with our service, we'll refund your payment in full.
              </p>
            </CardContent>
          </Card>

          {/* Refund Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Refund Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Within 30 Days</h4>
                  <p className="text-sm text-muted-foreground">Full refund available for any reason</p>
                </div>
                <div>
                  <h4 className="font-semibold">Processing Time</h4>
                  <p className="text-sm text-muted-foreground">3-5 business days to original payment method</p>
                </div>
                <div>
                  <h4 className="font-semibold">Prorated Refunds</h4>
                  <p className="text-sm text-muted-foreground">Available for annual plans after 30 days</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  What's Covered
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">All Hosting Plans</h4>
                  <p className="text-sm text-muted-foreground">Starter, Professional, Business, Enterprise</p>
                </div>
                <div>
                  <h4 className="font-semibold">Add-on Services</h4>
                  <p className="text-sm text-muted-foreground">Database hosting, SSL certificates, backups</p>
                </div>
                <div>
                  <h4 className="font-semibold">Domain Names</h4>
                  <p className="text-sm text-muted-foreground">Refundable within 5 days if not transferred</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Detailed Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <h3>Eligibility Criteria</h3>
              <ul>
                <li>Refund requests must be submitted within 30 days of initial purchase</li>
                <li>Account must be in good standing with no policy violations</li>
                <li>Free trial users are not eligible for refunds (no payment made)</li>
                <li>Promotional credits and discounts are non-refundable</li>
              </ul>

              <h3>How to Request a Refund</h3>
              <ol>
                <li>Contact our support team via email or live chat</li>
                <li>Provide your account details and reason for refund</li>
                <li>Our team will process your request within 24 hours</li>
                <li>Receive confirmation and refund timeline</li>
              </ol>

              <h3>Exceptions</h3>
              <ul>
                <li>Domain registration fees are non-refundable after 5 days</li>
                <li>Setup fees for custom configurations are non-refundable</li>
                <li>Third-party services and licenses cannot be refunded</li>
                <li>Accounts terminated for policy violations are not eligible</li>
              </ul>

              <h3>Prorated Refunds</h3>
              <p>
                For annual subscriptions cancelled after the 30-day period, we offer prorated refunds 
                calculated from the cancellation date. Monthly subscriptions are not prorated but will 
                continue until the end of the current billing cycle.
              </p>

              <h3>Dispute Resolution</h3>
              <p>
                If you're not satisfied with our refund decision, you can escalate your case to our 
                customer success manager. We're committed to finding a fair resolution for all parties.
              </p>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Need to Request a Refund?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you with any refund requests or questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="mailto:support@servercanine.com">Email Support</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">Contact Us</a>
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

export default Refund;