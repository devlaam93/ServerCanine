import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, DollarSign, TrendingDown, AlertTriangle, BarChart3, CheckCircle, Target } from "lucide-react";

const CostManagementGuide = () => {
  const costOptimizationStrategies = [
    {
      title: "Right-sizing Resources",
      description: "Match resource allocation to actual usage patterns",
      savings: "20-40%",
      difficulty: "Easy",
      tips: ["Monitor CPU and memory utilization", "Use auto-scaling features", "Downsize over-provisioned instances"]
    },
    {
      title: "Reserved Instances",
      description: "Commit to longer-term usage for significant discounts",
      savings: "30-60%",
      difficulty: "Medium",
      tips: ["Analyze usage patterns", "Start with 1-year commitments", "Mix reserved and on-demand instances"]
    },
    {
      title: "Spot Instances",
      description: "Use spare capacity for non-critical workloads",
      savings: "50-90%",
      difficulty: "Advanced",
      tips: ["Use for batch processing", "Implement fault tolerance", "Monitor spot price trends"]
    }
  ];

  const costMonitoringMetrics = [
    {
      metric: "Monthly Spend",
      description: "Total cloud costs per month",
      target: "Within budget",
      alert: "95% of budget"
    },
    {
      metric: "Cost per User",
      description: "Average cost per active user",
      target: "Decreasing trend",
      alert: "20% increase"
    },
    {
      metric: "Resource Utilization",
      description: "Percentage of allocated resources used",
      target: "> 70%",
      alert: "< 50%"
    },
    {
      metric: "Idle Resources",
      description: "Resources with minimal usage",
      target: "< 5%",
      alert: "> 15%"
    }
  ];

  const budgetingSteps = [
    {
      step: "Baseline Assessment",
      description: "Analyze current spending patterns and identify cost drivers",
      duration: "1 week"
    },
    {
      step: "Budget Planning",
      description: "Set realistic budgets based on business requirements",
      duration: "2 weeks"
    },
    {
      step: "Implementation",
      description: "Deploy cost controls and monitoring systems",
      duration: "1 week"
    },
    {
      step: "Optimization",
      description: "Continuously monitor and optimize costs",
      duration: "Ongoing"
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
              <DollarSign className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Cost Management</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Cost Management Guide</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Learn how to optimize your cloud spending and maximize ROI with servercanine's cost management tools.
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Management Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Effective cost management is crucial for maximizing the value of your cloud investment. 
                With servercanine's built-in cost optimization tools, you can reduce expenses by up to 60% 
                while maintaining performance and reliability.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <TrendingDown className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Reduce Costs</h3>
                  <p className="text-sm text-green-600 dark:text-green-400">Up to 60% savings</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">Monitor Usage</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Real-time insights</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">Set Budgets</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Automated controls</p>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Get Alerts</h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Proactive notifications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cost Optimization Strategies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Optimization Strategies</CardTitle>
              <CardDescription>
                Proven methods to reduce your cloud spending without compromising performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {costOptimizationStrategies.map((strategy, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                        <p className="text-muted-foreground">{strategy.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          {strategy.savings} Savings
                        </Badge>
                        <br />
                        <Badge variant={strategy.difficulty === "Easy" ? "default" : strategy.difficulty === "Medium" ? "secondary" : "destructive"}>
                          {strategy.difficulty}
                        </Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Implementation Tips</h4>
                      <ul className="space-y-1">
                        {strategy.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cost Monitoring */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Monitoring & Alerts</CardTitle>
              <CardDescription>
                Key metrics to track and alert thresholds to set
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {costMonitoringMetrics.map((metric, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{metric.metric}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{metric.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Target:</span>
                        <Badge variant="secondary">{metric.target}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Alert at:</span>
                        <Badge variant="destructive">{metric.alert}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Budget Planning */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Budget Planning Process</CardTitle>
              <CardDescription>
                Step-by-step approach to effective cloud budget management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {budgetingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{step.step}</h3>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cost Optimization Tools */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>servercanine Cost Optimization Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Automated Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Auto-scaling based on demand</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Idle resource detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Cost anomaly detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Budget alerts and notifications</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Reporting & Analytics</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Detailed cost breakdowns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Usage trend analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Cost optimization recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Custom dashboards and reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Management Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-green-600">Do's</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Review costs weekly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Tag resources for better tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Use development environments efficiently</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Implement automated shutdowns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-red-600">Don'ts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm">Don't ignore unused resources</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm">Don't over-provision by default</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm">Don't skip cost monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm">Don't ignore budget alerts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Start Optimizing Your Costs Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Ready to reduce your cloud costs? Our cost optimization experts can help you implement 
                these strategies and achieve significant savings within the first month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/contact-support">Get Cost Analysis</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/docs/performance-optimization">Performance Optimization</Link>
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

export default CostManagementGuide;
