import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { Cookie, Settings } from "lucide-react";
import { toast } from "sonner";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const Cookies = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Load current preferences from localStorage
    const savedPreferences = localStorage.getItem('servercanine-cookie-consent');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem('servercanine-cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('servercanine-cookie-timestamp', new Date().toISOString());
    
    // Set cookies based on preferences
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    
    document.cookie = `servercanine-analytics=${preferences.analytics}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
    document.cookie = `servercanine-functional=${preferences.functional}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
    document.cookie = `servercanine-marketing=${preferences.marketing}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
    
    toast.success('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground">
              How we use cookies and similar technologies on our website
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h4>Essential Cookies</h4>
                <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                
                <h4>Analytics Cookies</h4>
                <p>We use these cookies to understand how visitors interact with our website, helping us improve user experience and site performance.</p>
                
                <h4>Functional Cookies</h4>
                <p>These cookies enable enhanced functionality and personalization, such as remembering your login details and preferences.</p>
                
                <h4>Marketing Cookies</h4>
                <p>These cookies track your browsing habits to show you relevant advertisements and measure the effectiveness of our marketing campaigns.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You can control and manage cookies in several ways:</p>
                <ul>
                  <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                  <li>Cookie banner: Use our cookie preference center when you first visit our site</li>
                  <li>Third-party tools: Use privacy tools to manage tracking across websites</li>
                </ul>
                <p>Please note that disabling certain cookies may affect the functionality of our website.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We may use third-party services that set their own cookies, including:</p>
                <ul>
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing content</li>
                  <li>Payment processors for handling transactions</li>
                  <li>Customer support tools for live chat functionality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Manage Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  You can update your cookie preferences at any time using the controls below.
                </p>

                {/* Essential Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base font-medium">Essential Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Required for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.essential}
                      disabled={true}
                      aria-label="Essential cookies (always enabled)"
                    />
                  </div>
                </div>

                <Separator />

                {/* Analytics Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base font-medium">Analytics Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                      aria-label="Analytics cookies"
                    />
                  </div>
                </div>

                <Separator />

                {/* Functional Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base font-medium">Functional Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable enhanced functionality and personalization.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.functional}
                      onCheckedChange={(checked) => handlePreferenceChange('functional', checked)}
                      aria-label="Functional cookies"
                    />
                  </div>
                </div>

                <Separator />

                {/* Marketing Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base font-medium">Marketing Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Used to show you relevant advertisements.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                      aria-label="Marketing cookies"
                    />
                  </div>
                </div>

                <Separator />

                <div className="flex justify-center pt-4">
                  <Button onClick={handleSavePreferences} className="flex items-center gap-2">
                    <Cookie className="h-4 w-4" />
                    Save Cookie Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p>If you have questions about our Cookie Policy, please contact us at:</p>
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

export default Cookies;
