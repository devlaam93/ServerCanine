import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Heart, Zap, Calendar, Trophy } from "lucide-react";

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "5,000+", icon: Users },
    { label: "Topics Discussed", value: "1,200+", icon: MessageSquare },
    { label: "Questions Answered", value: "3,500+", icon: Heart },
    { label: "Expert Contributors", value: "150+", icon: Trophy }
  ];

  const channels = [
    {
      name: "General Discussion",
      description: "General servercanine topics and announcements",
      members: "2,340",
      category: "General"
    },
    {
      name: "Technical Support",
      description: "Get help with technical issues and troubleshooting",
      members: "1,890",
      category: "Support"
    },
    {
      name: "Feature Requests",
      description: "Suggest and discuss new features",
      members: "890",
      category: "Feedback"
    },
    {
      name: "Deployment Help",
      description: "Share deployment tips and best practices",
      members: "1,240",
      category: "Development"
    },
    {
      name: "Database Discussion",
      description: "Database setup, optimization, and troubleshooting",
      members: "780",
      category: "Development"
    },
    {
      name: "Performance Optimization",
      description: "Tips for optimizing your applications",
      members: "650",
      category: "Development"
    }
  ];

  const upcomingEvents = [
    {
      title: "Monthly Community Call",
      date: "Feb 15, 2025",
      time: "2:00 PM UTC",
      type: "Virtual"
    },
    {
      title: "Deployment Masterclass",
      date: "Feb 22, 2025",
      time: "6:00 PM UTC",
      type: "Workshop"
    },
    {
      title: "Q&A with Engineering Team",
      date: "Mar 1, 2025",
      time: "4:00 PM UTC",
      type: "Live Session"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">servercanine Community</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow developers, get help, share knowledge, and shape the future of servercanine
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Channels */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Community Channels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {channels.map((channel, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 smooth-transition">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium"># {channel.name}</h3>
                      <Badge variant="outline" className="text-xs">{channel.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {channel.members} members
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge>{event.type}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>{event.date} at {event.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Community Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 mt-1">
                      <Heart className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Expert Support</h4>
                      <p className="text-xs text-muted-foreground">Get help from experienced developers and servercanine team members</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 mt-1">
                      <Zap className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Early Access</h4>
                      <p className="text-xs text-muted-foreground">Be the first to try new features and provide feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 mt-1">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Networking</h4>
                      <p className="text-xs text-muted-foreground">Connect with like-minded developers and potential collaborators</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 mt-1">
                      <Trophy className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Recognition</h4>
                      <p className="text-xs text-muted-foreground">Get recognized for your contributions and help others</p>
                    </div>
                  </div>
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

export default Community;
