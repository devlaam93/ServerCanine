import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Zap, BarChart3, Cpu, HardDrive, Gauge } from "lucide-react";

const PerformanceOptimization = () => {
  const optimizationAreas = [
    {
      title: "CPU Optimization",
      icon: Cpu,
      current: 75,
      target: 60,
      techniques: [
        {
          name: "Process Optimization",
          description: "Identify and optimize CPU-intensive processes",
          commands: `# Find top CPU consumers
top -o %CPU
htop

# Nice/renice processes
nice -n 10 your-command
renice -n 5 -p PID

# CPU affinity
taskset -c 0,1 your-process`,
          impact: "High"
        },
        {
          name: "Kernel Tuning",
          description: "Optimize kernel parameters for better CPU utilization",
          commands: `# CPU governor settings
echo performance > /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# CPU frequency scaling
echo 1 > /sys/devices/system/cpu/cpufreq/boost

# Scheduler optimization
echo 0 > /proc/sys/kernel/sched_migration_cost_ns`,
          impact: "Medium"
        }
      ]
    },
    {
      title: "Memory Optimization",
      icon: HardDrive,
      current: 85,
      target: 70,
      techniques: [
        {
          name: "Memory Tuning",
          description: "Optimize memory usage and swap configuration",
          commands: `# Tune swappiness
echo 'vm.swappiness=10' >> /etc/sysctl.conf

# Memory overcommit
echo 'vm.overcommit_memory=1' >> /etc/sysctl.conf

# Cache pressure
echo 'vm.vfs_cache_pressure=50' >> /etc/sysctl.conf

# Apply changes
sysctl -p`,
          impact: "High"
        },
        {
          name: "Application Memory",
          description: "Optimize application memory allocation",
          commands: `# Java heap optimization
export JAVA_OPTS="-Xms2g -Xmx4g -XX:+UseG1GC"

# Node.js memory limits
node --max-old-space-size=4096 app.js

# Database memory tuning
# MySQL
innodb_buffer_pool_size = 2G
query_cache_size = 256M`,
          impact: "High"
        }
      ]
    },
    {
      title: "Disk I/O Optimization",
      icon: HardDrive,
      current: 70,
      target: 50,
      techniques: [
        {
          name: "Filesystem Optimization",
          description: "Optimize filesystem for better I/O performance",
          commands: `# Mount with optimized options
mount -o noatime,nodiratime,defaults /dev/sdb1 /data

# SSD optimization
echo noop > /sys/block/sda/queue/scheduler
echo mq-deadline > /sys/block/sdb/queue/scheduler

# I/O scheduler tuning
echo 1 > /sys/block/sda/queue/iosched/fifo_batch`,
          impact: "Medium"
        },
        {
          name: "Caching Strategies",
          description: "Implement effective caching to reduce disk I/O",
          commands: `# Redis caching
redis-cli config set maxmemory 2gb
redis-cli config set maxmemory-policy allkeys-lru

# Filesystem cache
echo 3 > /proc/sys/vm/drop_caches  # Clear cache
echo 'vm.dirty_ratio=15' >> /etc/sysctl.conf`,
          impact: "High"
        }
      ]
    }
  ];

  const performanceMetrics = [
    { name: "Response Time", current: "250ms", target: "< 200ms", status: "warning" },
    { name: "Throughput", current: "1,200 req/s", target: "> 1,500 req/s", status: "error" },
    { name: "CPU Usage", current: "75%", target: "< 60%", status: "warning" },
    { name: "Memory Usage", current: "85%", target: "< 70%", status: "error" },
    { name: "Disk I/O", current: "70%", target: "< 50%", status: "warning" },
    { name: "Network Latency", current: "45ms", target: "< 50ms", status: "success" }
  ];

  const optimizationTips = [
    {
      category: "Database Performance",
      tips: [
        "Implement proper indexing strategies",
        "Optimize query execution plans",
        "Use connection pooling",
        "Configure query caching"
      ]
    },
    {
      category: "Web Server Optimization",
      tips: [
        "Enable gzip compression",
        "Optimize static file serving",
        "Configure proper caching headers",
        "Use CDN for static assets"
      ]
    },
    {
      category: "Application Layer",
      tips: [
        "Implement efficient algorithms",
        "Use asynchronous processing",
        "Optimize database queries",
        "Minimize external API calls"
      ]
    },
    {
      category: "Network Optimization",
      tips: [
        "Use HTTP/2 protocol",
        "Optimize TCP settings",
        "Implement request multiplexing",
        "Configure proper timeouts"
      ]
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
              <Zap className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">Performance Guide</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Performance Optimization</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Comprehensive guide to optimize your servercanine infrastructure for maximum performance, 
              efficiency, and scalability.
            </p>
          </div>

          {/* Performance Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gauge className="h-5 w-5 mr-2" />
                Current Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">{metric.name}</h3>
                      <Badge 
                        variant={
                          metric.status === "success" ? "default" : 
                          metric.status === "warning" ? "secondary" : "destructive"
                        }
                      >
                        {metric.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Current:</span>
                        <span className="font-mono">{metric.current}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Target:</span>
                        <span className="font-mono">{metric.target}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Optimization Areas */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Optimization Areas</h2>
            
            {optimizationAreas.map((area, areaIndex) => (
              <Card key={areaIndex}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <area.icon className="h-6 w-6 mr-3 text-primary" />
                      {area.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Current vs Target</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-mono">{area.current}%</span>
                        <Progress value={area.current} className="w-20" />
                        <span className="text-sm font-mono text-green-600">→ {area.target}%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={`technique-${areaIndex}-0`} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      {area.techniques.map((technique, techniqueIndex) => (
                        <TabsTrigger key={techniqueIndex} value={`technique-${areaIndex}-${techniqueIndex}`}>
                          {technique.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {area.techniques.map((technique, techniqueIndex) => (
                      <TabsContent key={techniqueIndex} value={`technique-${areaIndex}-${techniqueIndex}`} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{technique.name}</h3>
                          <Badge variant={technique.impact === "High" ? "default" : "secondary"}>
                            {technique.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{technique.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium">Implementation Commands:</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{technique.commands}</code>
                          </pre>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Performance Optimization Tips</CardTitle>
              <p className="text-muted-foreground">
                Quick wins and best practices for different components of your infrastructure.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                {optimizationTips.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5"></div>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monitoring Performance */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Performance Monitoring Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="realtime" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="realtime">Real-time Monitoring</TabsTrigger>
                  <TabsTrigger value="profiling">Application Profiling</TabsTrigger>
                  <TabsTrigger value="benchmarking">Benchmarking</TabsTrigger>
                </TabsList>
                
                <TabsContent value="realtime" className="space-y-4">
                  <h3 className="font-semibold">Real-time Performance Monitoring</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{`# System monitoring commands
htop                    # Interactive process viewer
iotop                   # I/O monitoring
nethogs                 # Network bandwidth by process
vmstat 1               # Virtual memory statistics
iostat -x 1            # I/O statistics

# servercanine monitoring
servercanine monitor --real-time
servercanine metrics --live --interval 5s`}</code>
                  </pre>
                </TabsContent>
                
                <TabsContent value="profiling" className="space-y-4">
                  <h3 className="font-semibold">Application Profiling Tools</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{`# Node.js profiling
node --prof app.js
node --prof-process isolate-*.log

# Python profiling
python -m cProfile -o profile.stats script.py
py-spy top --pid 12345

# Java profiling
java -XX:+FlightRecorder -XX:StartFlightRecording=duration=60s MyApp`}</code>
                  </pre>
                </TabsContent>
                
                <TabsContent value="benchmarking" className="space-y-4">
                  <h3 className="font-semibold">Performance Benchmarking</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{`# Web server benchmarking
ab -n 1000 -c 10 http://localhost/
wrk -t 4 -c 100 -d 30s http://localhost/

# Database benchmarking
sysbench --test=oltp --mysql-table-engine=innodb prepare
sysbench --test=oltp --mysql-table-engine=innodb run

# Disk I/O benchmarking
fio --name=random-write --rw=randwrite --bs=4k --size=1G --runtime=60`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Performance Checklist */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Performance Optimization Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Infrastructure Level</h3>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Optimize CPU scheduling</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Tune memory management</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Configure I/O scheduler</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Optimize network stack</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Application Level</h3>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Implement caching strategies</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Optimize database queries</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Enable compression</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Set up load balancing</span>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PerformanceOptimization;