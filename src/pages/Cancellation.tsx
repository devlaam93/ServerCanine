import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cancellation = () => {
  const navigate = useNavigate();

  const handleContactSupport = () => {
    navigate('/contact-support');
  };

  const handleLiveChat = () => {
    // In a real implementation, this would open a live chat widget
    window.open('mailto:support@servercanine.com?subject=Cancellation Support Request', '_blank');
  };

  const handleLearnMore = () => {
    navigate('/pricing');
  };

  const handleGetHelp = () => {
    navigate('/contact-support');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-500/10 rounded-full">
                <XCircle className="h-12 w-12 text-orange-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cancellation Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understand our cancellation process and what happens to your data when you cancel your servercanine account.
            </p>
          </div>

          {/* Quick Actions */}
          <Card className="mb-8 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-500">
                <AlertTriangle className="h-5 w-5" />
                Before You Cancel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Make sure to backup your data and update any DNS settings before cancelling your account. Contact our support team for assistance with data migration and backup procedures.
              </p>
            </CardContent>
          </Card>

          {/* Cancellation Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Immediate Cancellation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">What Happens</h4>
                  <p className="text-sm text-muted-foreground">
                    Your services stop immediately, and you lose access to your dashboard and data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">When to Choose</h4>
                  <p className="text-sm text-muted-foreground">
                    If you've already migrated your services elsewhere and don't need the remaining time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Refund Eligibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Prorated refunds available for annual plans (subject to terms).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>End of Billing Cycle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">What Happens</h4>
                  <p className="text-sm text-muted-foreground">
                    Your services continue until the end of your current billing period.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">When to Choose</h4>
                  <p className="text-sm text-muted-foreground">
                    Most common option - allows time to migrate without service interruption.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">No Refunds</h4>
                  <p className="text-sm text-muted-foreground">
                    You keep access for the paid period, so no refund is provided.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Retention Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Retention & Recovery</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <h3>What Happens to Your Data</h3>
              <ul>
                <li><strong>30-Day Grace Period:</strong> Your data is retained for 30 days after cancellation</li>
                <li><strong>Read-Only Access:</strong> You can download but not modify data during this period</li>
                <li><strong>Complete Deletion:</strong> All data is permanently deleted after 30 days</li>
                <li><strong>Reactivation Window:</strong> Accounts can be reactivated within 30 days</li>
              </ul>

              <h3>What You Should Download</h3>
              <ul>
                <li>Website files and application code</li>
                <li>Database backups (MySQL, PostgreSQL, MongoDB)</li>
                <li>Email accounts and messages</li>
                <li>SSL certificates and configuration files</li>
                <li>Analytics and usage reports</li>
              </ul>

              <h3>Services Affected</h3>
              <ul>
                <li>Web hosting and application hosting</li>
                <li>Database services</li>
                <li>Email services</li>
                <li>CDN and storage services</li>
                <li>Monitoring and analytics</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cancellation Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How to Cancel Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Log into Your Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Access your servercanine dashboard using your account credentials.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Go to Account Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Navigate to the billing section in your account settings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Choose Cancellation Option</h4>
                    <p className="text-sm text-muted-foreground">
                      Select immediate cancellation or end of billing cycle.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Confirm Cancellation</h4>
                    <p className="text-sm text-muted-foreground">
                      Review the cancellation terms and confirm your decision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">Receive Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      Get email confirmation with next steps and important dates.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Options */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Before You Cancel - Consider These Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Downgrade Your Plan</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Reduce costs by switching to a smaller plan that meets your current needs.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleLearnMore}>Learn More</Button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Pause Your Account</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Temporarily suspend services for up to 3 months without losing your data.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleContactSupport}>Contact Support</Button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Migration Assistance</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get help moving to a solution that better fits your needs.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleGetHelp}>Get Help</Button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Talk to Support</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Discuss your concerns with our team before making a final decision.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleContactUs}>Contact Us</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Need Help with Cancellation?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is available 24/7 to assist with the cancellation process or explore alternatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleContactSupport}>
                  Contact Support
                </Button>
                <Button variant="outline" onClick={handleLiveChat}>
                  Live Chat
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

export default Cancellation;
