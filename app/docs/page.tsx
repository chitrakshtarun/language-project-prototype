import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Play, BookOpen, Zap } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Language Project Prototype</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A general-purpose programming language that resembles natural English, making programming more accessible and
          intuitive for everyone.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Prototype</Badge>
          <Badge variant="outline">English-like Syntax</Badge>
          <Badge variant="outline">JavaScript Transpiler</Badge>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Quick Start</span>
            </CardTitle>
            <CardDescription>Get up and running with your first program in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
              <div className="text-green-600"># Your first program</div>
              <div>x is equal to 10</div>
              <div>y is equal to 20</div>
              <div>result is equal to x plus y</div>
              <div>print result</div>
            </div>
            <Button asChild>
              <Link href="/docs/quick-start">Get Started</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span>Try Examples</span>
            </CardTitle>
            <CardDescription>Explore real-world examples and learn by doing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Browse through conditional statements, loops, and mathematical operations.
            </p>
            <Button variant="outline" asChild>
              <Link href="/docs/examples/basic">View Examples</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span>Currently Supported Features</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Declare and use variables with natural language</p>
              <code className="text-xs bg-muted p-2 rounded block">x is equal to 42</code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Math Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Addition, subtraction, multiplication, and division</p>
              <code className="text-xs bg-muted p-2 rounded block">result is equal to x plus y</code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Conditionals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">If statements and if-else logic</p>
              <code className="text-xs bg-muted p-2 rounded block">if x is greater than 10 then</code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Loops</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">For loops and while loops</p>
              <code className="text-xs bg-muted p-2 rounded block">for i from 1 to 5</code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Comparisons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Mathematical comparison operators</p>
              <code className="text-xs bg-muted p-2 rounded block">if age is less than 18 then</code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Increment/Decrement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Increase and decrease values</p>
              <code className="text-xs bg-muted p-2 rounded block">increment counter</code>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">What's Next?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Language Guide</CardTitle>
              <CardDescription>Learn the syntax and features in detail</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link href="/docs/syntax">Read Guide</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">API Reference</CardTitle>
              <CardDescription>Explore the parser and interpreter APIs</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link href="/docs/api/parser">View API</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
