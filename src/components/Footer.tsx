import { Link } from "react-router-dom";
import { CreditCard, Banknote, Bitcoin, Smartphone, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import LogoWithoutBackground from "@/components/LogoWithoutBackground";
import { useState } from "react";
const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const footerLinks = {
    product: [{
      name: "Features",
      href: "/features"
    }, {
      name: "Pricing",
      href: "/pricing"
    }, {
      name: "Integrations",
      href: "/integrations"
    }, {
      name: "API Docs",
      href: "/docs"
    }],
    company: [{
      name: "About Us",
      href: "/about"
    }, {
      name: "Blog",
      href: "/blog"
    }, {
      name: "Careers",
      href: "/careers"
    }, {
      name: "Contact",
      href: "/contact"
    }],
    resources: [{
      name: "Help Center",
      href: "/help"
    }, {
      name: "Community",
      href: "/community"
    }, {
      name: "Status",
      href: "/status"
    }, {
      name: "Security",
      href: "/security"
    }],
    legal: [{
      name: "Privacy Policy",
      href: "/privacy"
    }, {
      name: "Terms of Service",
      href: "/terms"
    }, {
      name: "Cookie Policy",
      href: "/cookies"
    }, {
      name: "GDPR",
      href: "/gdpr"
    }, {
      name: "Refund Policy",
      href: "/refund"
    }, {
      name: "Cancellation",
      href: "/cancellation"
    }, {
      name: "Instant Delivery",
      href: "/instant-delivery"
    }]
  };
  return <footer className="relative bg-gradient-to-br from-background via-muted/20 to-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                  <LogoWithoutBackground className="h-10 w-10 object-contain" />
                </div>
                <span className="text-2xl font-brand font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  servercanine
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Affordable cloud hosting solutions for developers and agencies. 
                Manage your infrastructure with ease and deploy with confidence.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:contact@servercanine.com" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                    contact@servercanine.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+447537132810" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                    +44 7537 132810
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    3 Floor Maitland House, Warrior Square,<br />
                    Southend-On-Sea, Essex, UK, SS1 2JY
                  </div>
                </div>
              </div>

              {/* Social Links */}
              
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Product */}
                <div>
                  <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Product</h3>
                  <ul className="space-y-3">
                    {footerLinks.product.map(link => <li key={link.name}>
                        <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary smooth-transition block py-1">
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map(link => <li key={link.name}>
                        <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary smooth-transition block py-1">
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Resources</h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map(link => <li key={link.name}>
                        <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary smooth-transition block py-1">
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map(link => <li key={link.name}>
                        <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary smooth-transition block py-1">
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Company Info */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-2">
                © 2025 Canine Craft & Calm LTD. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Company Number: 16641660 | Registered in England & Wales
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col items-center lg:items-end space-y-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Secure Payments</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-7 bg-background border border-border/50 rounded-md shadow-sm">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-center w-10 h-7 bg-background border border-border/50 rounded-md shadow-sm">
                  <Banknote className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-center w-10 h-7 bg-background border border-border/50 rounded-md shadow-sm">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-center w-10 h-7 bg-background border border-border/50 rounded-md shadow-sm">
                  <Bitcoin className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;