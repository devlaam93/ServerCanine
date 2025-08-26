import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request:", { email });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2">
              <div className="p-3 primary-gradient rounded-lg">
                <Cloud className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">servercanine</span>
            </Link>
          </div>

          {/* Forgot Password Form */}
          <Card className="shadow-xl border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {isSubmitted ? "Check Your Email" : "Reset Password"}
              </CardTitle>
              <CardDescription>
                {isSubmitted 
                  ? "We've sent password reset instructions to your email address"
                  : "Enter your email address and we'll send you a link to reset your password"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="hero">
                    Send Reset Link
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If an account with <strong>{email}</strong> exists, you'll receive password reset instructions shortly.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline" 
                    className="w-full"
                  >
                    Try Different Email
                  </Button>
                </div>
              )}

              <div className="mt-6 text-center">
                <Link 
                  to="/login" 
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 smooth-transition"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Sign In
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground smooth-transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-foreground smooth-transition">
                Terms of Service
              </Link>
              <Link to="/contact-support" className="hover:text-foreground smooth-transition">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
