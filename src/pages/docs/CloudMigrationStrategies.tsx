import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Cloud, Database, Server, Shield, Zap, CheckCircle } from "lucide-react";

const CloudMigrationStrategies = () => {
  const migrationStrategies = [
    {
      title: "Lift and Shift (Rehosting)",
      description: "Move applications to the cloud with minimal changes",
      complexity: "Low",
      timeframe: "1-3 months",
      benefits: ["Quick migration", "Minimal downtime", "Lower initial costs"],
      considerations: ["Limited cloud benefits", "May not optimize performance"]
    },
    {
      title: "Replatforming",
      description: "Make minor optimizations during migration",
      complexity: "Medium",
      timeframe: "3-6 months",
      benefits: ["Some cloud optimization", "Improved performance", "Better scalability"],
      considerations: ["Moderate complexity", "Requires some code changes"]
    },
    {
      title: "Refactoring",
      description: "Redesign applications for cloud-native architecture",
      complexity: "High",
      timeframe: "6-12 months",
      benefits: ["Full cloud benefits", "Maximum performance", "Future-proof"],
      considerations: ["High complexity", "Significant time investment"]
    }
  ];

  const migrationPhases = [
    {
      phase: "Assessment",
      duration: "2-4 weeks",
      activities: ["Inventory current infrastructure", "Assess application dependencies", "Identify migration priorities", "Calculate costs"]
    },
    {
      phase: "Planning",
      duration: "4-6 weeks",
      activities: ["Design target architecture", "Create migration timeline", "Plan security measures", "Prepare rollback strategies"]
    },
    {
      phase: "Migration",
      duration: "8-16 weeks",
      activities: ["Set up cloud infrastructure", "Migrate data and applications", "Configure networking", "Test functionality"]
    },
    {
      phase: "Optimization",
      duration: "4-8 weeks",
      activities: ["Monitor performance", "Optimize costs", "Implement automation", "Train team members"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/browse-documentation">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Documentation
              </Link>
            </Button>
            
            <div className="flex items-center mb-4">
              <Cloud className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Migration Guide</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Cloud Migration Strategies</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Comprehensive guide to planning and executing successful cloud migrations with servercanine.
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Migration Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Cloud migration is the process of moving digital business operations into the cloud. 
                With servercanine, you can choose from multiple migration strategies based on your 
                specific needs, timeline, and budget constraints.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Server className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">Servers, storage, networking</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Data</h3>
                  <p className="text-sm text-muted-foreground">Databases, files, backups</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Applications</h3>
                  <p className="text-sm text-muted-foreground">Web apps, services, workflows</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Migration Strategies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Migration Strategies</CardTitle>
              <CardDescription>
                Choose the right approach based on your requirements and constraints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {migrationStrategies.map((strategy, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                        <p className="text-muted-foreground">{strategy.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={strategy.complexity === "Low" ? "secondary" : strategy.complexity === "Medium" ? "default" : "destructive"}>
                          {strategy.complexity} Complexity
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{strategy.timeframe}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {strategy.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Considerations</h4>
                        <ul className="space-y-1">
                          {strategy.considerations.map((consideration, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <Shield className="h-4 w-4 text-orange-500 mr-2" />
                              {consideration}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Migration Phases */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Migration Phases</CardTitle>
              <CardDescription>
                A structured approach to ensure successful migration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {migrationPhases.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{phase.phase}</h3>
                        <Badge variant="outline">{phase.duration}</Badge>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Migration Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Before Migration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Conduct thorough application assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Create detailed migration plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Set up monitoring and alerting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Prepare rollback procedures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">During Migration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Migrate in phases, not all at once</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Test thoroughly at each step</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Monitor performance continuously</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Maintain communication with stakeholders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Ready to Start Your Migration?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Our migration experts are ready to help you plan and execute your cloud migration strategy. 
                Get started with a free consultation to discuss your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/contact-support">Schedule Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/docs/getting-started-guide">View Getting Started Guide</Link>
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

export default CloudMigrationStrategies;
