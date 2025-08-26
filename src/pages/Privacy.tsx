import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
                <ul>
                  <li>Account information (name, email address, password)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our hosting services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Communicate about products, services, and promotional offers</li>
                  <li>Monitor and analyze usage patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information in these situations:</p>
                <ul>
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>With service providers who assist our operations</li>
                  <li>To protect rights, property, or safety</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <div className="mt-4">
                  <p><strong>Email:</strong> privacy@servercanine.com</p>
                  <p><strong>Address:</strong> 3 Floor Maitland House, Warrior Square, Southend-On-Sea, Essex, United Kingdom, SS1 2JY</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;