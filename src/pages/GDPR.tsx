import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GDPR Compliance</h1>
            <p className="text-xl text-muted-foreground">
              How we comply with the General Data Protection Regulation
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Rights Under GDPR</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:</p>
                <ul>
                  <li><strong>Right to Access:</strong> You can request copies of your personal data</li>
                  <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
                  <li><strong>Right to Erasure:</strong> You can request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> You can request limitation of data processing</li>
                  <li><strong>Right to Data Portability:</strong> You can request transfer of your data</li>
                  <li><strong>Right to Object:</strong> You can object to certain types of processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Basis for Processing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We process your personal data based on the following legal grounds:</p>
                <ul>
                  <li><strong>Contract:</strong> To provide our hosting services</li>
                  <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                  <li><strong>Consent:</strong> For marketing communications and optional features</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Processing Activities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h4>Personal Data We Collect</h4>
                <ul>
                  <li>Contact information (name, email, phone)</li>
                  <li>Account credentials and preferences</li>
                  <li>Payment and billing information</li>
                  <li>Technical data and usage analytics</li>
                  <li>Customer support communications</li>
                </ul>
                
                <h4>How We Use Your Data</h4>
                <ul>
                  <li>Providing and maintaining our services</li>
                  <li>Processing payments and billing</li>
                  <li>Customer support and communication</li>
                  <li>Service improvement and analytics</li>
                  <li>Legal compliance and security</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>When we transfer your data outside the EU/EEA, we ensure adequate protection through:</p>
                <ul>
                  <li>Standard Contractual Clauses (SCCs)</li>
                  <li>Adequacy decisions by the European Commission</li>
                  <li>Other appropriate safeguards as required by GDPR</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We retain your personal data only as long as necessary for the purposes outlined in our Privacy Policy:</p>
                <ul>
                  <li>Account data: Until account deletion + 30 days</li>
                  <li>Billing data: 7 years for tax compliance</li>
                  <li>Support communications: 3 years</li>
                  <li>Analytics data: 26 months (anonymized)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exercising Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">To exercise your GDPR rights, please contact our Data Protection Officer:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> dpo@servercanine.com</p>
                  <p><strong>Subject Line:</strong> GDPR Data Subject Request</p>
                  <p><strong>Response Time:</strong> Within 30 days</p>
                  <p><strong>Verification:</strong> Identity verification required</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  You also have the right to lodge a complaint with your local supervisory authority if you believe we have not handled your personal data in accordance with GDPR.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GDPR;