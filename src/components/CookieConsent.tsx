import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Cookie, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('servercanine-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    
    localStorage.setItem('servercanine-cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('servercanine-cookie-timestamp', new Date().toISOString());
    
    // Set cookies based on preferences
    setCookies(allAccepted);
    
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    
    localStorage.setItem('servercanine-cookie-consent', JSON.stringify(essentialOnly));
    localStorage.setItem('servercanine-cookie-timestamp', new Date().toISOString());
    
    // Set cookies based on preferences
    setCookies(essentialOnly);
    
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('servercanine-cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('servercanine-cookie-timestamp', new Date().toISOString());
    
    // Set cookies based on preferences
    setCookies(preferences);
    
    setShowBanner(false);
    setShowSettings(false);
  };

  const setCookies = (prefs: CookiePreferences) => {
    // Set a cookie to remember user's choice
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // 1 year expiry
    
    document.cookie = `servercanine-analytics=${prefs.analytics}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
    document.cookie = `servercanine-functional=${prefs.functional}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
    document.cookie = `servercanine-marketing=${prefs.marketing}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
    
    // Initialize analytics if accepted
    if (prefs.analytics && typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics tools here
      console.log('Analytics cookies accepted - initializing tracking');
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
          <div className="max-w-6xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">We use cookies to enhance your experience</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        We use essential cookies to make our site work. We'd also like to set optional cookies to help us improve our website and analyze how it's used. 
                        <Link to="/cookies" className="text-primary hover:underline ml-1">
                          Learn more about our Cookie Policy
                        </Link>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowSettings(true)}
                      className="flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      Cookie Settings
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRejectAll}
                    >
                      Reject All
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleAcceptAll}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="h-5 w-5" />
                  Cookie Preferences
                </CardTitle>
                <CardDescription>
                  Choose which cookies you'd like to accept. You can change these settings at any time.
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-6">
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
                <p className="text-xs text-muted-foreground">
                  These cookies are necessary for security, navigation, and basic functionality.
                </p>
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
                <p className="text-xs text-muted-foreground">
                  Used for Google Analytics, page views, and performance monitoring.
                </p>
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
                <p className="text-xs text-muted-foreground">
                  Remember your preferences, login status, and customization settings.
                </p>
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
                <p className="text-xs text-muted-foreground">
                  Track your browsing to display personalized ads and measure campaign effectiveness.
                </p>
              </div>

              <Separator />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="flex-1"
                >
                  Reject All Optional
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1"
                >
                  Accept All
                </Button>
              </div>

              <div className="text-center pt-4">
                <Link 
                  to="/cookies" 
                  className="text-sm text-primary hover:underline"
                  onClick={() => setShowSettings(false)}
                >
                  Read our full Cookie Policy
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
