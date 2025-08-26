import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, CheckCircle, Rocket, Globe, Shield } from "lucide-react";

const InstantDelivery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-primary to-primary-glow rounded-full">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <Badge variant="default" className="mb-4">Lightning Fast</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Instant Delivery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your applications go live in seconds, not hours. Experience the fastest deployment platform with global edge distribution.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <Clock className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">30-Second Deployments</h3>
                <p className="text-muted-foreground text-sm">
                  From git push to live application in under 30 seconds with our optimized build pipeline.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Edge Network</h3>
                <p className="text-muted-foreground text-sm">
                  Your apps are instantly available worldwide through our 200+ edge locations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-full">
                    <Rocket className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Zero-Config Setup</h3>
                <p className="text-muted-foreground text-sm">
                  Connect your repository and deploy instantly with intelligent auto-detection.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                How Instant Delivery Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Connect Your Repository</h4>
                    <p className="text-sm text-muted-foreground">
                      Link your GitHub, GitLab, or Bitbucket repository with one click. We automatically detect your framework and configure the build settings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Lightning-Fast Build</h4>
                    <p className="text-sm text-muted-foreground">
                      Our optimized build servers with NVMe SSDs and intelligent caching complete your build in record time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Global Distribution</h4>
                    <p className="text-sm text-muted-foreground">
                      Your application is instantly distributed to our global edge network, ensuring fast access from anywhere.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Automatic SSL & DNS</h4>
                    <p className="text-sm text-muted-foreground">
                      SSL certificates are provisioned and DNS is configured automatically. Your app is secure and accessible immediately.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Deployment Speed Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">servercanine</span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-green-500 rounded"></div>
                      <span className="text-sm font-semibold">~30s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Vercel</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-yellow-500 rounded"></div>
                      <span className="text-sm">~60s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Netlify</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-orange-500 rounded"></div>
                      <span className="text-sm">~90s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Traditional Hosting</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-red-500 rounded"></div>
                      <span className="text-sm">5-15min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Makes Us Faster</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Intelligent build caching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Parallel processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Optimized container builds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Edge-optimized distribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Smart dependency resolution</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Supported Frameworks */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instant Deployment for Any Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">⚛️</div>
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🅰️</div>
                  <span className="text-sm font-medium">Angular</span>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">💚</div>
                  <span className="text-sm font-medium">Vue.js</span>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🚀</div>
                  <span className="text-sm font-medium">Svelte</span>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <span className="text-sm font-medium">Next.js</span>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🌟</div>
                  <span className="text-sm font-medium">Nuxt.js</span>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🔥</div>
                  <span className="text-sm font-medium">Gatsby</span>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">📄</div>
                  <span className="text-sm font-medium">Static Sites</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Enterprise-Grade Reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">99.99% Uptime SLA</h4>
                  <p className="text-sm text-muted-foreground">
                    Built on redundant infrastructure with automatic failover and load balancing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Instant Rollbacks</h4>
                  <p className="text-sm text-muted-foreground">
                    Rollback to any previous deployment instantly if issues are detected.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Preview Deployments</h4>
                  <p className="text-sm text-muted-foreground">
                    Every pull request gets its own preview URL for testing before merging.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Atomic Deployments</h4>
                  <p className="text-sm text-muted-foreground">
                    Zero-downtime deployments that activate instantly when ready.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Testimonials */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Developers Say</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">
                  "The deployment speed is incredible. What used to take 10 minutes now happens in 30 seconds. Our development workflow has never been faster."
                </p>
                <cite className="text-sm font-semibold">- Sarah Chen, Lead Developer at TechCorp</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">
                  "Instant deployments changed how we work. We can push fixes and see them live immediately. It's like magic."
                </p>
                <cite className="text-sm font-semibold">- Marcus Rodriguez, CTO at StartupXYZ</cite>
              </blockquote>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Experience Instant Deployments Today</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of developers who've revolutionized their deployment workflow with servercanine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="primary-gradient">
                  <Zap className="mr-2 h-4 w-4" />
                  Start Free Trial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InstantDelivery;
