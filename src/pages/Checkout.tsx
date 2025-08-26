import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Shield, 
  Lock, 
  CheckCircle, 
  ArrowLeft, 
  Bitcoin, 
  Wallet,
  DollarSign,
  Clock,
  Star,
  AlertCircle
} from "lucide-react";

interface TrialData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serverCount: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [trialData, setTrialData] = useState<TrialData | null>(null);
  const [selectedPayment, setSelectedPayment] = useState("stripe");
  const [isProcessing, setIsProcessing] = useState(false);
  const [stripe, setStripe] = useState<any>(null);
  const [elements, setElements] = useState<any>(null);
  const [cardElement, setCardElement] = useState<any>(null);
  const [cardError, setCardError] = useState<string>("");
  const [cardComplete, setCardComplete] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [cryptoError, setCryptoError] = useState<string>("");
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: {
      postal_code: ""
    }
  });

  useEffect(() => {
    // Get trial data from sessionStorage
    const storedData = sessionStorage.getItem('trialSignupData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setTrialData(data);
      setBillingDetails(prev => ({
        ...prev,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email
      }));
    } else {
      // Redirect back to trial page if no data
      navigate('/start-free-trial');
    }
  }, [navigate]);

  useEffect(() => {
    // Initialize Stripe
    const initializeStripe = async () => {
      try {
        if (!window.Stripe) {
          const script = document.createElement('script');
          script.src = 'https://js.stripe.com/v3/';
          script.async = true;
          document.head.appendChild(script);
          
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }
        
        const stripeInstance = window.Stripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51234567890abcdef');
        setStripe(stripeInstance);
        
        const elementsInstance = stripeInstance.elements();
        setElements(elementsInstance);
        
        // Create card element with better styling
        const cardElementInstance = elementsInstance.create('card', {
          style: {
            base: {
              fontSize: '16px',
              color: '#0f172a',
              '::placeholder': {
                color: '#64748b',
              },
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              lineHeight: '1.5',
              padding: '12px',
            },
            invalid: {
              color: '#dc2626',
              iconColor: '#dc2626',
            },
            complete: {
              color: '#059669',
              iconColor: '#059669',
            },
          },
          hidePostalCode: true, // We have a separate postal code field
        });
        
        setCardElement(cardElementInstance);
        
        // Mount card element with better timing
        const mountCardElement = () => {
          const cardContainer = document.getElementById('card-element');
          if (cardContainer && cardElementInstance) {
            try {
              // Clear any existing content
              cardContainer.innerHTML = '';
              
              // Mount the card element
              cardElementInstance.mount('#card-element');
              
              // Add event listeners
              cardElementInstance.on('change', (event: any) => {
                setCardError(event.error ? event.error.message : '');
                setCardComplete(event.complete);
              });
              
              cardElementInstance.on('ready', () => {
                console.log('Stripe Elements card input is ready');
              });
              
              cardElementInstance.on('focus', () => {
                // Optional: Add focus styling
              });
              
              cardElementInstance.on('blur', () => {
                // Optional: Add blur styling
              });
              
            } catch (error) {
              console.error('Error mounting Stripe card element:', error);
              setCardError('Failed to load payment form. Please refresh the page.');
            }
          } else {
            // Retry mounting if container not ready
            setTimeout(mountCardElement, 100);
          }
        };
        
        // Start mounting process
        setTimeout(mountCardElement, 200);
        
      } catch (error) {
        console.error('Error initializing Stripe:', error);
        setCardError('Failed to initialize payment system. Please refresh the page.');
      }
    };

    if (selectedPayment === 'stripe') {
      initializeStripe();
    }
    
    // Cleanup function
    return () => {
      if (cardElement) {
        cardElement.unmount();
      }
    };
  }, [selectedPayment]);

  const handleStripePayment = async () => {
    if (!stripe || !cardElement || !cardComplete) {
      setCardError('Please complete your card information');
      return;
    }

    if (!billingDetails.name.trim()) {
      setCardError('Please enter the cardholder name');
      return;
    }

    setIsProcessing(true);
    setCardError('');

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: billingDetails.name,
          email: billingDetails.email,
          address: {
            postal_code: billingDetails.address.postal_code,
          },
        },
      });

      if (error) {
        setCardError(error.message || 'An error occurred while processing your payment method');
        setIsProcessing(false);
        return;
      }

      // For trial mode, we just validate the payment method and store it
      // In a real implementation, you would send this to your backend
      console.log('Payment method created successfully:', paymentMethod.id);
      
      // Store payment method info for trial
      sessionStorage.setItem('paymentMethodId', paymentMethod.id);
      sessionStorage.setItem('paymentMethodType', 'stripe');
      
      // Simulate backend processing
      setTimeout(() => {
        setIsProcessing(false);
        navigate('/thank-you?method=stripe');
      }, 1500);

    } catch (err) {
      console.error('Stripe payment error:', err);
      setCardError('An unexpected error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  const handlePaymentSubmit = async (paymentMethod: string) => {
    setIsProcessing(true);
    
    // PayPal redirects directly, no delay needed
    if (paymentMethod === 'PayPal') {
      // Simulate opening PayPal account for payment setup
      console.log('Opening PayPal account for payment setup...');
      setIsProcessing(false);
      const method = paymentMethod.toLowerCase().replace(' ', '');
      navigate(`/thank-you?method=${method}`);
      return;
    }
    
    // For other payment methods, simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Redirect to thank you page with payment method
      const method = paymentMethod.toLowerCase().replace(' ', '');
      navigate(`/thank-you?method=${method}`);
    }, 2000);
  };

  const handleCryptoPayment = async () => {
    if (!selectedCrypto) {
      setCryptoError('Please select a cryptocurrency');
      return;
    }

    if (!walletAddress.trim()) {
      setCryptoError('Please enter your wallet address');
      return;
    }

    setIsProcessing(true);
    setCryptoError('');

    // Store crypto payment info for trial
    sessionStorage.setItem('paymentMethodType', 'crypto');
    sessionStorage.setItem('selectedCrypto', selectedCrypto);
    sessionStorage.setItem('walletAddress', walletAddress);

    // Simulate crypto payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate(`/thank-you?method=crypto&crypto=${selectedCrypto.toLowerCase()}`);
    }, 1500);
  };

  if (!trialData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/start-free-trial">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Trial Signup
              </Link>
            </Button>
            
            <h1 className="text-4xl font-bold mb-4">Complete Your Trial Setup</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred payment method to activate your 14-day free trial. 
              No charges will occur during the trial period.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Trial Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Account Holder</span>
                      <span className="text-sm font-medium">{trialData.firstName} {trialData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <span className="text-sm font-medium">{trialData.email}</span>
                    </div>
                    {trialData.company && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Company</span>
                        <span className="text-sm font-medium">{trialData.company}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Server Count</span>
                      <span className="text-sm font-medium">{trialData.serverCount}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">14-Day Free Trial</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        FREE
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Trial Period</span>
                      <span>14 days</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Trial Cost</span>
                      <span>$0.00</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Today</span>
                      <span className="text-green-600">$0.00</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      After your 14-day trial, you can choose to upgrade to a paid plan or cancel at any time.
                    </p>
                  </div>

                  {/* Trial Benefits */}
                  <div className="mt-6 space-y-2">
                    <h4 className="font-medium text-sm">Trial Includes:</h4>
                    <div className="space-y-1">
                      {[
                        "Full access to all features",
                        "24/7 expert support",
                        "No setup fees",
                        "Cancel anytime",
                        "No credit card charges"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-green-500" />
                    Secure Payment Setup
                  </CardTitle>
                  <CardDescription>
                    Choose your preferred payment method for future billing after the trial period.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedPayment} onValueChange={setSelectedPayment}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="stripe" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Card
                      </TabsTrigger>
                      <TabsTrigger value="paypal" className="flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        PayPal
                      </TabsTrigger>
                      <TabsTrigger value="crypto" className="flex items-center gap-2">
                        <Bitcoin className="h-4 w-4" />
                        Crypto
                      </TabsTrigger>
                    </TabsList>

                    {/* Stripe Payment */}
                    <TabsContent value="stripe" className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardholderName">Cardholder Name</Label>
                            <Input 
                              id="cardholderName" 
                              placeholder="John Doe"
                              value={billingDetails.name}
                              onChange={(e) => setBillingDetails(prev => ({
                                ...prev,
                                name: e.target.value
                              }))}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="postalCode">ZIP/Postal Code</Label>
                            <Input 
                              id="postalCode" 
                              placeholder="12345"
                              value={billingDetails.address.postal_code}
                              onChange={(e) => setBillingDetails(prev => ({
                                ...prev,
                                address: {
                                  ...prev.address,
                                  postal_code: e.target.value
                                }
                              }))}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card-element">Card Information</Label>
                          <div 
                            id="card-element" 
                            className="relative p-4 border border-input rounded-md bg-white min-h-[60px] w-full transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
                            style={{
                              backgroundColor: '#ffffff',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              padding: '16px',
                              minHeight: '60px',
                              height: 'auto',
                              display: 'block',
                              width: '100%',
                              position: 'relative',
                              zIndex: 1,
                              boxSizing: 'border-box'
                            }}
                          >
                            {/* Stripe Elements will mount here */}
                            {!cardElement && (
                              <div className="text-muted-foreground text-sm flex items-center justify-center h-full">
                                Loading payment form...
                              </div>
                            )}
                          </div>
                          {cardError && (
                            <div className="flex items-center gap-2 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" />
                              <span>{cardError}</span>
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground">
                            Enter your card number, expiry date, and CVC
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-blue-900">Secure & Protected</h4>
                              <p className="text-sm text-blue-700">
                                Your payment information is encrypted and secure. We use Stripe Elements for PCI-compliant payment processing.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button 
                          className="w-full" 
                          size="lg" 
                          onClick={() => handleStripePayment()}
                          disabled={isProcessing || !cardComplete || !billingDetails.name.trim()}
                        >
                          {isProcessing ? (
                            <>
                              <Clock className="h-4 w-4 mr-2 animate-spin" />
                              Setting up trial...
                            </>
                          ) : (
                            <>
                              <CreditCard className="h-4 w-4 mr-2" />
                              Setup Trial with Card
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>

                    {/* PayPal Payment */}
                    <TabsContent value="paypal" className="space-y-6">
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Wallet className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Pay with PayPal</h3>
                        <p className="text-muted-foreground mb-6">
                          You'll be redirected to PayPal to complete your payment setup securely.
                        </p>
                        
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <div className="text-left">
                              <h4 className="font-medium text-yellow-900">PayPal Protection</h4>
                              <p className="text-sm text-yellow-700">
                                Your trial is free. PayPal will only be used for billing after the trial period ends.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700" 
                          size="lg"
                          onClick={() => handlePaymentSubmit('PayPal')}
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <>
                              <Clock className="h-4 w-4 mr-2 animate-spin" />
                              Connecting to PayPal...
                            </>
                          ) : (
                            <>
                              <Wallet className="h-4 w-4 mr-2" />
                              Continue with PayPal
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>

                    {/* Crypto Payment */}
                    <TabsContent value="crypto" className="space-y-6">
                      <div className="space-y-4">
                        <div className="text-center py-4">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Bitcoin className="h-8 w-8 text-orange-600" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Cryptocurrency Payment</h3>
                          <p className="text-muted-foreground">
                            Select your preferred cryptocurrency and provide wallet address.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label>Select Cryptocurrency *</Label>
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { name: "Bitcoin", symbol: "BTC", icon: "₿" },
                              { name: "Ethereum", symbol: "ETH", icon: "Ξ" },
                              { name: "USDT", symbol: "USDT", icon: "$" }
                            ].map((crypto) => (
                              <Card 
                                key={crypto.symbol} 
                                className={`cursor-pointer transition-colors ${
                                  selectedCrypto === crypto.symbol 
                                    ? 'border-orange-500 bg-orange-50' 
                                    : 'hover:bg-muted/50'
                                }`}
                                onClick={() => {
                                  setSelectedCrypto(crypto.symbol);
                                  setCryptoError('');
                                }}
                              >
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl mb-2">{crypto.icon}</div>
                                  <div className="font-medium text-sm">{crypto.name}</div>
                                  <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                                  {selectedCrypto === crypto.symbol && (
                                    <CheckCircle className="h-4 w-4 text-orange-600 mx-auto mt-2" />
                                  )}
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="walletAddress">Wallet Address *</Label>
                          <Input 
                            id="walletAddress" 
                            placeholder="Enter your wallet address (required)"
                            value={walletAddress}
                            onChange={(e) => {
                              setWalletAddress(e.target.value);
                              setCryptoError('');
                            }}
                            required
                          />
                          <p className="text-xs text-muted-foreground">
                            Enter a valid {selectedCrypto || 'cryptocurrency'} wallet address for future payments.
                          </p>
                        </div>

                        {cryptoError && (
                          <div className="flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            <span>{cryptoError}</span>
                          </div>
                        )}

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Bitcoin className="h-5 w-5 text-orange-600 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-orange-900">Crypto Benefits</h4>
                              <p className="text-sm text-orange-700">
                                Enjoy lower transaction fees and enhanced privacy with cryptocurrency payments.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button 
                          className="w-full bg-orange-600 hover:bg-orange-700" 
                          size="lg"
                          onClick={() => handleCryptoPayment()}
                          disabled={isProcessing || !selectedCrypto || !walletAddress.trim()}
                        >
                          {isProcessing ? (
                            <>
                              <Clock className="h-4 w-4 mr-2 animate-spin" />
                              Setting up crypto trial...
                            </>
                          ) : (
                            <>
                              <Bitcoin className="h-4 w-4 mr-2" />
                              Setup Trial with {selectedCrypto || 'Crypto'}
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Security Notice */}
                  <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-sm">Security & Privacy</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      All payment information is encrypted and processed securely. We never store your payment details on our servers. 
                      Your trial is completely free for 14 days with no hidden charges.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-green-500" />
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-500" />
                <span>30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
