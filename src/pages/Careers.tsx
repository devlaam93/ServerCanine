import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build scalable cloud infrastructure solutions."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "London, UK",
      type: "Full-time", 
      experience: "3+ years",
      description: "Help us maintain and scale our global infrastructure across multiple regions."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years", 
      description: "Ensure our customers get maximum value from servercanine's hosting solutions."
    },
    {
      title: "Technical Writer",
      department: "Product",
      location: "Remote",
      type: "Contract",
      experience: "3+ years",
      description: "Create clear, comprehensive documentation and guides for our developer community."
    },
    {
      title: "Frontend Developer",
      department: "Engineering", 
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Build beautiful, responsive user interfaces for our control panel and marketing site."
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "London, UK",
      type: "Full-time",
      experience: "1+ years",
      description: "Generate qualified leads and build relationships with potential customers."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Flexible remote work options",
    "Health and dental insurance",
    "Learning and development budget",
    "Flexible PTO policy",
    "Home office setup allowance",
    "Team retreats and events",
    "Latest tech equipment"
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and aren't afraid to challenge the status quo."
    },
    {
      title: "Customer Obsessed",
      description: "Every decision we make starts with how it impacts our customers."
    },
    {
      title: "Transparency",
      description: "Open communication and honest feedback drive our culture."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage skill development."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of affordable cloud hosting while working with a passionate, distributed team
            </p>
          </div>

          {/* Company Culture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Why servercanine?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're a fast-growing startup on a mission to democratize cloud hosting. 
                  Our team is passionate about technology, innovation, and making a real impact 
                  in the developer community.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-sm">{value.title}</h4>
                      <p className="text-xs text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Benefits & Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-muted/20">
                    <Star className="h-4 w-4 text-primary mr-2 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Open Positions */}
          <Card>
            <CardHeader>
              <CardTitle>Open Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <div key={index} className="p-6 border border-border rounded-lg hover:shadow-md smooth-transition">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {position.department}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {position.location}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {position.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {position.experience}
                          </Badge>
                        </div>
                      </div>
                      <Button className="w-fit">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground">{position.description}</p>
                  </div>
                ))}
              </div>
              
              {/* No suitable position */}
              <div className="mt-8 p-6 bg-muted/20 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Don't see a perfect match?</h3>
                <p className="text-muted-foreground mb-4">
                  We're always looking for talented people. Send us your resume and we'll reach out when something fits.
                </p>
                <Button variant="outline">
                  Send General Application
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

export default Careers;