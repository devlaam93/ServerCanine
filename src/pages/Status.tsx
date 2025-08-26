import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

const Status = () => {
  const services = [
    {
      name: "Web Hosting",
      status: "operational",
      uptime: "99.98%",
      description: "All web hosting services are running normally"
    },
    {
      name: "Database Services",
      status: "operational", 
      uptime: "99.95%",
      description: "All database instances are operational"
    },
    {
      name: "API Gateway",
      status: "operational",
      uptime: "99.99%",
      description: "API endpoints responding normally"
    },
    {
      name: "File Storage",
      status: "degraded",
      uptime: "98.20%",
      description: "Experiencing intermittent issues with file uploads"
    },
    {
      name: "Email Services",
      status: "operational",
      uptime: "99.97%",
      description: "Email delivery functioning normally"
    },
    {
      name: "Monitoring",
      status: "operational",
      uptime: "99.96%",
      description: "All monitoring systems are active"
    }
  ];

  const incidents = [
    {
      title: "File Storage Performance Issues",
      status: "investigating",
      severity: "minor",
      started: "2025-01-25 14:30 UTC",
      description: "We are investigating reports of slow file upload speeds in the EU region."
    },
    {
      title: "Scheduled Maintenance - Database Cluster",
      status: "scheduled", 
      severity: "maintenance",
      started: "2025-01-28 02:00 UTC",
      description: "Scheduled maintenance window for database cluster upgrades. Expected 2-hour downtime."
    }
  ];

  const recentUpdates = [
    {
      time: "15:45 UTC",
      date: "Jan 25",
      message: "File storage performance issues identified in EU-West region. Engineering team investigating."
    },
    {
      time: "10:30 UTC", 
      date: "Jan 25",
      message: "All systems operational. Monthly security updates completed successfully."
    },
    {
      time: "09:15 UTC",
      date: "Jan 24", 
      message: "API gateway maintenance completed. All services restored to full capacity."
    },
    {
      time: "22:00 UTC",
      date: "Jan 23",
      message: "Brief disruption to email services resolved. Root cause identified and fixed."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "outage":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      operational: "default",
      degraded: "secondary", 
      outage: "destructive",
      investigating: "secondary",
      scheduled: "outline"
    };
    return variants[status] || "outline";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Status</h1>
            <p className="text-xl text-muted-foreground">
              Real-time status of all servercanine services and infrastructure
            </p>
          </div>

          {/* Overall Status */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <h2 className="text-xl font-semibold">All Systems Operational</h2>
                  <p className="text-muted-foreground">Last updated: Jan 25, 2025 at 15:45 UTC</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Status */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Service Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={getStatusBadge(service.status)} className="mb-1">
                        {service.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{service.uptime} uptime</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Incidents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Active Incidents & Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{incident.title}</h3>
                      <div className="flex gap-2">
                        <Badge variant={getStatusBadge(incident.status)}>
                          {incident.status}
                        </Badge>
                        <Badge variant="outline">
                          {incident.severity}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                    <p className="text-xs text-muted-foreground">Started: {incident.started}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 smooth-transition">
                    <div className="text-xs text-muted-foreground min-w-[80px]">
                      <div>{update.date}</div>
                      <div>{update.time}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{update.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Status;