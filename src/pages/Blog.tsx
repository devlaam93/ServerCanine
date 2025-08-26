import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";

// Import blog images
import awsVsServercanine from "@/assets/blog/aws-vs-servercanine.jpg";
import googleCloudAlternative from "@/assets/blog/google-cloud-alternative.jpg";
import digitalOceanVsServercanine from "@/assets/blog/digitalocean-vs-servercanine.jpg";
import hostingComparison from "@/assets/blog/hosting-comparison-guide.jpg";
import serverlessDeployment from "@/assets/blog/serverless-deployment.jpg";
import databasePerformance from "@/assets/blog/database-performance.jpg";
import developerExperience from "@/assets/blog/developer-experience.jpg";
import enterpriseSecurity from "@/assets/blog/enterprise-security.jpg";

const Blog = () => {
  const [showLoadMore, setShowLoadMore] = useState(true);

  const blogPosts = [
    {
      id: 1,
      title: "AWS vs servercanine: Why We're 40% Cheaper",
      excerpt: "A detailed comparison of AWS pricing versus servercanine's affordable cloud hosting solutions.",
      category: "Comparison",
      author: "Editorial Team",
      date: "2025-01-20",
      readTime: "8 min read",
      featured: true,
      image: awsVsServercanine
    },
    {
      id: 2,
      title: "Google Cloud Alternative: servercanine's Edge",
      excerpt: "Discover how servercanine provides better value than Google Cloud Platform for small to medium businesses.",
      category: "Alternatives",
      author: "Content Team",
      date: "2025-01-18",
      readTime: "6 min read",
      image: googleCloudAlternative
    },
    {
      id: 3,
      title: "DigitalOcean vs servercanine: Feature Comparison",
      excerpt: "Side-by-side comparison of features, pricing, and performance between DigitalOcean and servercanine.",
      category: "Comparison",
      author: "Technical Team",
      date: "2025-01-15",
      readTime: "10 min read",
      image: digitalOceanVsServercanine
    },
    {
      id: 4,
      title: "Complete Hosting Comparison Guide 2025",
      excerpt: "Comprehensive guide comparing all major cloud hosting providers to help you make the right choice.",
      category: "Guide",
      author: "Technical Team",
      date: "2025-01-12",
      readTime: "12 min read",
      image: hostingComparison
    },
    {
      id: 5,
      title: "Serverless Deployment: The Complete Guide",
      excerpt: "Everything you need to know about serverless deployment, from basics to advanced strategies.",
      category: "Guide",
      author: "Engineering Team",
      date: "2025-01-10",
      readTime: "9 min read",
      image: serverlessDeployment
    },
    {
      id: 6,
      title: "Database Performance Optimization Guide",
      excerpt: "Comprehensive strategies to optimize database performance for web applications.",
      category: "Performance",
      author: "Technical Team",
      date: "2025-01-08",
      readTime: "11 min read",
      image: databasePerformance
    },
    {
      id: 7,
      title: "Optimizing Developer Experience in 2025",
      excerpt: "How to create development workflows that boost productivity and developer satisfaction.",
      category: "Developer Tools",
      author: "Content Team",
      date: "2025-01-05",
      readTime: "8 min read",
      image: developerExperience
    },
    {
      id: 8,
      title: "Enterprise Security Best Practices for Cloud Hosting",
      excerpt: "Comprehensive guide to securing your cloud infrastructure and applications at enterprise scale.",
      category: "Security",
      author: "Technical Team",
      date: "2025-01-03",
      readTime: "13 min read",
      image: enterpriseSecurity
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">servercanine Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, comparisons, and guides for modern cloud hosting alternatives
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-12 overflow-hidden border-primary/20">
              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 p-1">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="order-2 md:order-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">Featured</Badge>
                        <Badge variant="outline">{featuredPost.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">
                        {featuredPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <Button asChild>
                        <Link to="/blog/aws-vs-servercanine-40-percent-cheaper">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                  <div className="order-1 md:order-2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg smooth-transition overflow-hidden">
                {/* Blog Post Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary smooth-transition line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary" asChild>
                    <Link to={
                      post.id === 2 ? "/blog/google-cloud-alternative-servercanine-edge" :
                      post.id === 3 ? "/blog/digitalocean-vs-servercanine-feature-comparison" :
                      post.id === 4 ? "/blog/hosting-comparison-guide" :
                      post.id === 5 ? "/blog/serverless-deployment-guide" :
                      post.id === 6 ? "/blog/database-performance-optimization" :
                      post.id === 7 ? "/blog/developer-experience-guide" :
                      post.id === 8 ? "/blog/enterprise-security-guide" :
                      `/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
                    }>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {showLoadMore && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowLoadMore(false)}
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
