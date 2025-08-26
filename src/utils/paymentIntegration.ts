// Payment integration utilities for ServerCanine checkout
import { toast } from "sonner";

// Types for payment data
export interface PaymentData {
  amount: number;
  currency: string;
  description: string;
  customerEmail: string;
  customerName: string;
}

export interface StripePaymentData extends PaymentData {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  cardholderName: string;
  zipCode: string;
}

export interface CryptoPaymentData extends PaymentData {
  walletAddress?: string;
  cryptoType: 'BTC' | 'ETH' | 'USDC';
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
  redirectUrl?: string;
}

// Stripe Integration
export class StripePaymentService {
  private static instance: StripePaymentService;
  private stripe: any = null;
  private publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo_key';

  private constructor() {
    this.initializeStripe();
  }

  public static getInstance(): StripePaymentService {
    if (!StripePaymentService.instance) {
      StripePaymentService.instance = new StripePaymentService();
    }
    return StripePaymentService.instance;
  }

  private async initializeStripe() {
    try {
      // Load Stripe.js dynamically
      if (!window.Stripe) {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/';
        script.async = true;
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }
      
      this.stripe = window.Stripe(this.publishableKey);
    } catch (error) {
      console.error('Failed to initialize Stripe:', error);
    }
  }

  async processPayment(paymentData: StripePaymentData): Promise<PaymentResult> {
    try {
      if (!this.stripe) {
        await this.initializeStripe();
      }

      // Create payment method
      const { error, paymentMethod } = await this.stripe.createPaymentMethod({
        type: 'card',
        card: {
          number: paymentData.cardNumber,
          exp_month: parseInt(paymentData.expiryMonth),
          exp_year: parseInt(paymentData.expiryYear),
          cvc: paymentData.cvc,
        },
        billing_details: {
          name: paymentData.cardholderName,
          email: paymentData.customerEmail,
          address: {
            postal_code: paymentData.zipCode,
          },
        },
      });

      if (error) {
        return {
          success: false,
          error: error.message,
        };
      }

      // For demo purposes, simulate successful payment
      // In production, you would send this to your backend
      const mockTransactionId = `stripe_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      toast.success('Payment processed successfully with Stripe!');
      
      return {
        success: true,
        transactionId: mockTransactionId,
      };

    } catch (error) {
      console.error('Stripe payment error:', error);
      return {
        success: false,
        error: 'Payment processing failed. Please try again.',
      };
    }
  }
}

// PayPal Integration
export class PayPalPaymentService {
  private static instance: PayPalPaymentService;
  private paypal: any = null;
  private clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID || 'demo_client_id';

  private constructor() {
    this.initializePayPal();
  }

  public static getInstance(): PayPalPaymentService {
    if (!PayPalPaymentService.instance) {
      PayPalPaymentService.instance = new PayPalPaymentService();
    }
    return PayPalPaymentService.instance;
  }

  private async initializePayPal() {
    try {
      // Load PayPal SDK dynamically
      if (!window.paypal) {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${this.clientId}&currency=USD`;
        script.async = true;
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }
      
      this.paypal = window.paypal;
    } catch (error) {
      console.error('Failed to initialize PayPal:', error);
    }
  }

  async processPayment(paymentData: PaymentData): Promise<PaymentResult> {
    try {
      if (!this.paypal) {
        await this.initializePayPal();
      }

      // For demo purposes, simulate PayPal redirect
      const mockTransactionId = `paypal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // In production, you would create a PayPal order and redirect
      toast.success('Redirecting to PayPal for secure payment...');
      
      // Simulate PayPal processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Payment processed successfully with PayPal!');
      
      return {
        success: true,
        transactionId: mockTransactionId,
        redirectUrl: `https://www.paypal.com/checkoutnow?token=demo_token_${mockTransactionId}`,
      };

    } catch (error) {
      console.error('PayPal payment error:', error);
      return {
        success: false,
        error: 'PayPal payment processing failed. Please try again.',
      };
    }
  }
}

// Cryptocurrency Integration
export class CryptoPaymentService {
  private static instance: CryptoPaymentService;

  private constructor() {}

  public static getInstance(): CryptoPaymentService {
    if (!CryptoPaymentService.instance) {
      CryptoPaymentService.instance = new CryptoPaymentService();
    }
    return CryptoPaymentService.instance;
  }

  async processPayment(paymentData: CryptoPaymentData): Promise<PaymentResult> {
    try {
      // Generate mock wallet addresses for demo
      const mockAddresses = {
        BTC: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        ETH: '0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4',
        USDC: '0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4',
      };

      const mockTransactionId = `crypto_${paymentData.cryptoType.toLowerCase()}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Simulate crypto payment processing
      toast.success(`Processing ${paymentData.cryptoType} payment...`);
      
      // In production, you would:
      // 1. Generate a unique wallet address for this transaction
      // 2. Monitor the blockchain for payment confirmation
      // 3. Update payment status when confirmed
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(`${paymentData.cryptoType} payment processed successfully!`);
      
      return {
        success: true,
        transactionId: mockTransactionId,
      };

    } catch (error) {
      console.error('Crypto payment error:', error);
      return {
        success: false,
        error: 'Cryptocurrency payment processing failed. Please try again.',
      };
    }
  }

  generatePaymentAddress(cryptoType: 'BTC' | 'ETH' | 'USDC'): string {
    // In production, this would generate a unique address for each transaction
    const mockAddresses = {
      BTC: `1${Math.random().toString(36).substr(2, 33)}`,
      ETH: `0x${Math.random().toString(16).substr(2, 40)}`,
      USDC: `0x${Math.random().toString(16).substr(2, 40)}`,
    };
    
    return mockAddresses[cryptoType];
  }

  async getExchangeRate(cryptoType: 'BTC' | 'ETH' | 'USDC', usdAmount: number): Promise<number> {
    // Mock exchange rates - in production, fetch from a crypto API
    const mockRates = {
      BTC: 45000, // $45,000 per BTC
      ETH: 2500,  // $2,500 per ETH
      USDC: 1,    // $1 per USDC
    };
    
    return usdAmount / mockRates[cryptoType];
  }
}

// Payment Manager - Main interface for all payment methods
export class PaymentManager {
  private stripeService: StripePaymentService;
  private paypalService: PayPalPaymentService;
  private cryptoService: CryptoPaymentService;

  constructor() {
    this.stripeService = StripePaymentService.getInstance();
    this.paypalService = PayPalPaymentService.getInstance();
    this.cryptoService = CryptoPaymentService.getInstance();
  }

  async processStripePayment(paymentData: StripePaymentData): Promise<PaymentResult> {
    return this.stripeService.processPayment(paymentData);
  }

  async processPayPalPayment(paymentData: PaymentData): Promise<PaymentResult> {
    return this.paypalService.processPayment(paymentData);
  }

  async processCryptoPayment(paymentData: CryptoPaymentData): Promise<PaymentResult> {
    return this.cryptoService.processPayment(paymentData);
  }

  async validatePaymentData(method: 'stripe' | 'paypal' | 'crypto', data: any): Promise<boolean> {
    switch (method) {
      case 'stripe':
        return this.validateStripeData(data);
      case 'paypal':
        return this.validatePayPalData(data);
      case 'crypto':
        return this.validateCryptoData(data);
      default:
        return false;
    }
  }

  private validateStripeData(data: StripePaymentData): boolean {
    const required = ['cardNumber', 'expiryMonth', 'expiryYear', 'cvc', 'cardholderName'];
    return required.every(field => data[field as keyof StripePaymentData]);
  }

  private validatePayPalData(data: PaymentData): boolean {
    const required = ['amount', 'currency', 'customerEmail'];
    return required.every(field => data[field as keyof PaymentData]);
  }

  private validateCryptoData(data: CryptoPaymentData): boolean {
    const required = ['amount', 'currency', 'cryptoType'];
    return required.every(field => data[field as keyof CryptoPaymentData]);
  }
}

// Export singleton instance
export const paymentManager = new PaymentManager();

// Utility functions
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateCardNumber = (cardNumber: string): boolean => {
  // Basic Luhn algorithm validation
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

// Type declarations for external libraries
declare global {
  interface Window {
    Stripe: any;
    paypal: any;
  }
}
