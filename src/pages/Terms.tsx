import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for using servercanine hosting services
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>By accessing and using servercanine services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>servercanine provides cloud hosting services including:</p>
                <ul>
                  <li>Web hosting and domain management</li>
                  <li>Database hosting and management</li>
                  <li>Application deployment services</li>
                  <li>Technical support and maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You are responsible for:</p>
                <ul>
                  <li>Maintaining the confidentiality of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your content complies with applicable laws</li>
                  <li>Regular backups of your data</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You may not use our services for:</p>
                <ul>
                  <li>Illegal activities or content</li>
                  <li>Spam or unsolicited communications</li>
                  <li>Malware, viruses, or harmful code</li>
                  <li>Resource abuse or excessive usage</li>
                  <li>Copyright infringement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We strive for 99.9% uptime but cannot guarantee uninterrupted service. Scheduled maintenance will be announced in advance.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>servercanine shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;