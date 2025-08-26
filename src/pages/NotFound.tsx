import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Home", href: "/", icon: Home },
    { name: "Features", href: "/features", icon: Search },
    { name: "Pricing", href: "/pricing", icon: Search },
    { name: "Documentation", href: "/browse-documentation", icon: Search },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* 404 Hero */}
            <div className="mb-8">
              <h1 className="text-9xl font-brand font-bold text-primary/20 mb-4">
                404
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Oops! Page not found
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, even the best explorers sometimes take a wrong turn.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="min-w-[200px]">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="min-w-[200px]">
                <Link to="#" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Link>
              </Button>
            </div>
          </div>

          {/* Popular Pages */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Looking for something specific? Try these popular pages:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularPages.map((page) => {
                  const IconComponent = page.icon;
                  return (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center p-4 rounded-lg border border-border hover:bg-muted/50 smooth-transition group"
                    >
                      <IconComponent className="h-5 w-5 mr-3 text-primary group-hover:text-primary-glow" />
                      <span className="font-medium">{page.name}</span>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Still can't find what you're looking for?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help. Get in touch and we'll assist you right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link to="/browse-documentation">
                    <Search className="mr-2 h-4 w-4" />
                    Browse Documentation
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact-support">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Error Details for Debugging */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Error details: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;