import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Code, Key, Search, ExternalLink, Copy } from "lucide-react";

const ApiDocumentation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/servers",
      description: "List all servers",
      category: "Servers"
    },
    {
      method: "POST",
      path: "/api/v1/servers",
      description: "Add a new server",
      category: "Servers"
    },
    {
      method: "GET",
      path: "/api/v1/servers/{id}/metrics",
      description: "Get server metrics",
      category: "Monitoring"
    },
    {
      method: "GET",
      path: "/api/v1/alerts",
      description: "List all alerts",
      category: "Alerts"
    },
    {
      method: "POST",
      path: "/api/v1/alerts",
      description: "Create a new alert",
      category: "Alerts"
    },
    {
      method: "GET",
      path: "/api/v1/deployments",
      description: "List deployments",
      category: "Deployments"
    }
  ];

  const codeExamples = {
    servers: {
      curl: `curl -X GET "https://api.servercanine.com/v1/servers" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      javascript: `const response = await fetch('https://api.servercanine.com/v1/servers', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const servers = await response.json();`,
      python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.servercanine.com/v1/servers', headers=headers)
servers = response.json()`
    },
    metrics: {
      curl: `curl -X GET "https://api.servercanine.com/v1/servers/12345/metrics" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      javascript: `const response = await fetch('https://api.servercanine.com/v1/servers/12345/metrics', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const metrics = await response.json();`,
      python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.servercanine.com/v1/servers/12345/metrics', headers=headers)
metrics = response.json()`
    }
  };

  const filteredEndpoints = endpoints.filter(endpoint =>
    endpoint.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    endpoint.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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
              <Code className="h-6 w-6 text-primary mr-3" />
              <Badge variant="secondary">API Reference</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Complete reference for the servercanine REST API. Manage your servers, monitor metrics, and automate deployments programmatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" asChild>
                <Link to="/contact-support">Get API Key</Link>
              </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search endpoints..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Key className="h-4 w-4 mr-2" />
                    Authentication
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Servers API
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Monitoring API
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Alerts API
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Deployments API
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Error Codes
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Authentication */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The servercanine API uses API keys for authentication. Include your API key in the Authorization header:
                  </p>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">Authorization Header</span>
                      <Button size="sm" variant="ghost" onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY")}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <code>Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    You can generate API keys in your dashboard under Settings → API Keys.
                  </p>
                </CardContent>
              </Card>

              {/* Endpoints */}
              <Card>
                <CardHeader>
                  <CardTitle>API Endpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredEndpoints.map((endpoint, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <Badge variant={endpoint.method === "GET" ? "secondary" : "default"}>
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm font-mono">{endpoint.path}</code>
                          </div>
                          <Badge variant="outline">{endpoint.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Code Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Code Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="servers" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="servers">List Servers</TabsTrigger>
                      <TabsTrigger value="metrics">Get Metrics</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="servers" className="space-y-4">
                      <Tabs defaultValue="curl" className="w-full">
                        <TabsList>
                          <TabsTrigger value="curl">cURL</TabsTrigger>
                          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                          <TabsTrigger value="python">Python</TabsTrigger>
                        </TabsList>
                        
                        {Object.entries(codeExamples.servers).map(([lang, code]) => (
                          <TabsContent key={lang} value={lang}>
                            <div className="relative">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="absolute top-2 right-2 z-10"
                                onClick={() => copyToClipboard(code)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                                <code className="text-sm">{code}</code>
                              </pre>
                            </div>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </TabsContent>
                    
                    <TabsContent value="metrics" className="space-y-4">
                      <Tabs defaultValue="curl" className="w-full">
                        <TabsList>
                          <TabsTrigger value="curl">cURL</TabsTrigger>
                          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                          <TabsTrigger value="python">Python</TabsTrigger>
                        </TabsList>
                        
                        {Object.entries(codeExamples.metrics).map(([lang, code]) => (
                          <TabsContent key={lang} value={lang}>
                            <div className="relative">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="absolute top-2 right-2 z-10"
                                onClick={() => copyToClipboard(code)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                                <code className="text-sm">{code}</code>
                              </pre>
                            </div>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Response Format */}
              <Card>
                <CardHeader>
                  <CardTitle>Response Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">All API responses follow a consistent JSON format:</p>
                  <div className="relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyToClipboard(`{
  "success": true,
  "data": {...},
  "message": "Request completed successfully",
  "timestamp": "2024-01-20T12:00:00Z"
}`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{`{
  "success": true,
  "data": {...},
  "message": "Request completed successfully",
  "timestamp": "2024-01-20T12:00:00Z"
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Error Codes */}
              <Card>
                <CardHeader>
                  <CardTitle>Error Codes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <code className="text-red-500 font-mono">400</code>
                        <span className="ml-3">Bad Request</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Invalid request parameters</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <code className="text-red-500 font-mono">401</code>
                        <span className="ml-3">Unauthorized</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Invalid or missing API key</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <code className="text-red-500 font-mono">404</code>
                        <span className="ml-3">Not Found</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Resource not found</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <code className="text-red-500 font-mono">429</code>
                        <span className="ml-3">Rate Limited</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Too many requests</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <code className="text-red-500 font-mono">500</code>
                        <span className="ml-3">Server Error</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Internal server error</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDocumentation;
