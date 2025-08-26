import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Activity, BarChart3, AlertCircle, Settings } from "lucide-react";

const AdvancedMonitoring = () => {
  const monitoringFeatures = [
    {
      title: "Custom Metrics",
      description: "Define and track your own application-specific metrics",
      config: `# Custom Metrics Configuration
custom_metrics:
  - name: "active_users"
    type: "gauge"
    description: "Number of active users"
    collection_interval: 30s
    
  - name: "request_duration"
    type: "histogram"
    description: "HTTP request duration"
    buckets: [0.1, 0.5, 1.0, 2.5, 5.0, 10.0]`,
      benefits: ["Application-specific insights", "Business metric tracking", "Performance optimization"]
    },
    {
      title: "Distributed Tracing",
      description: "Track requests across multiple services and components",
      config: `# Tracing Configuration
tracing:
  enabled: true
  sampling_rate: 0.1
  exporter: "jaeger"
  endpoint: "http://jaeger:14268/api/traces"
  
  # Service configuration
  service_name: "web-api"
  service_version: "1.2.0"`,
      benefits: ["End-to-end visibility", "Performance bottleneck identification", "Service dependency mapping"]
    },
    {
      title: "Log Aggregation",
      description: "Centralize and analyze logs from all your services",
      config: `# Log Aggregation Setup
logging:
  level: "info"
  format: "json"
  destinations:
    - type: "file"
      path: "/var/log/servercanine.log"
    - type: "elasticsearch"
      endpoint: "https://es.example.com:9200"
      index: "servercanine-logs"`,
      benefits: ["Centralized log management", "Advanced search capabilities", "Historical analysis"]
    }
  ];

  const alertingRules = [
    {
      name: "High Error Rate",
      condition: "error_rate > 5%",
      severity: "critical",
      notification: "Immediate email + SMS"
    },
    {
      name: "Response Time Degradation",
      condition: "avg_response_time > 2s for 5min",
      severity: "warning",
      notification: "Slack notification"
    },
    {
      name: "Memory Usage Spike",
      condition: "memory_usage > 85% for 10min",
      severity: "warning",
      notification: "Email notification"
    },
    {
      name: "Disk Space Critical",
      condition: "disk_usage > 95%",
      severity: "critical",
      notification: "Immediate email + SMS"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/browse-documentation">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Documentation
              </Link>
            </Button>
            
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Advanced Guide</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Advanced Monitoring Setup</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Learn how to implement comprehensive monitoring with custom metrics, distributed tracing, 
              and intelligent alerting for production environments.
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Monitoring Architecture Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Advanced monitoring in servercanine provides deep insights into your infrastructure and applications 
                through multiple layers of observability:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-border rounded-lg">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Metrics</h3>
                  <p className="text-sm text-muted-foreground">Time-series data collection</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Traces</h3>
                  <p className="text-sm text-muted-foreground">Request flow tracking</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <AlertCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Logs</h3>
                  <p className="text-sm text-muted-foreground">Event and error tracking</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Features */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Advanced Monitoring Features</h2>
            
            {monitoringFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="config" className="w-full">
                    <TabsList>
                      <TabsTrigger value="config">Configuration</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="config">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{feature.config}</code>
                      </pre>
                    </TabsContent>
                    
                    <TabsContent value="benefits">
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Intelligent Alerting */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Intelligent Alerting Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Set up smart alerting rules that reduce noise and focus on what matters most to your business.
              </p>
              <div className="space-y-4">
                {alertingRules.map((rule, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{rule.name}</h4>
                      <Badge variant={rule.severity === "critical" ? "destructive" : "secondary"}>
                        {rule.severity}
                      </Badge>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Condition:</span>
                        <code className="ml-2 bg-muted px-2 py-1 rounded">{rule.condition}</code>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Notification:</span>
                        <span className="ml-2">{rule.notification}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Optimization */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Performance Optimization Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Metric Collection</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1.5"></div>
                      Use appropriate collection intervals (30s-5m)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1.5"></div>
                      Implement metric cardinality limits
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1.5"></div>
                      Use histogram buckets wisely
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Alert Management</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></div>
                      Implement alert deduplication
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></div>
                      Use escalation policies
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></div>
                      Set up maintenance windows
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integration Examples */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Integration Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="prometheus" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="prometheus">Prometheus</TabsTrigger>
                  <TabsTrigger value="grafana">Grafana</TabsTrigger>
                  <TabsTrigger value="datadog">Datadog</TabsTrigger>
                </TabsList>
                
                <TabsContent value="prometheus" className="space-y-4">
                  <h3 className="font-semibold">Prometheus Integration</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{`# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'servercanine'
    static_configs:
      - targets: ['localhost:9090']
    scrape_interval: 30s
    metrics_path: /metrics`}</code>
                  </pre>
                </TabsContent>
                
                <TabsContent value="grafana" className="space-y-4">
                  <h3 className="font-semibold">Grafana Dashboard Setup</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{`{
  "dashboard": {
    "title": "servercanine Monitoring",
    "panels": [
      {
        "title": "CPU Usage",
        "type": "graph",
        "targets": [
          {
            "expr": "cpu_usage_percent",
            "legendFormat": "CPU %"
          }
        ]
      }
    ]
  }
}`}</code>
                  </pre>
                </TabsContent>
                
                <TabsContent value="datadog" className="space-y-4">
                  <h3 className="font-semibold">Datadog Integration</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{`# datadog.yaml
api_key: YOUR_API_KEY
site: datadoghq.com

logs_enabled: true
process_config:
  enabled: true

integrations:
  servercanine:
    enabled: true
    metric_prefix: "servercanine."`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdvancedMonitoring;