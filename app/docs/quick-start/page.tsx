"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Quick Start</h1>
        <p className="text-xl text-muted-foreground">Get started with your first program in under 5 minutes.</p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <CardTitle>Write Your First Program</CardTitle>
            </div>
            <CardDescription>Let{"s"} start with a simple addition program</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="english" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="english">English Code</TabsTrigger>
                <TabsTrigger value="javascript">Generated JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="english">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2"># My first program</div>
                  <div>x is equal to 10</div>
                  <div>y is equal to 20</div>
                  <div className="mt-2">result is equal to x plus y</div>
                  <div>print result</div>
                  <div className="mt-2">if result is greater than 25 then</div>
                  <div className="ml-4">print {'"Result is large!"'}</div>
                  <div>endif</div>
                </div>
              </TabsContent>
              <TabsContent value="javascript">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2">{"// My first program"}</div>
                  <div>let x = 10;</div>
                  <div>let y = 20;</div>
                  <div className="mt-2">let result = x + y;</div>
                  <div>console.log(result);</div>
                  <div className="mt-2">{"if (result > 25) {'{'}"}</div>
                  <div className="ml-4">console.log({'"Result is large!"'});</div>
                  <div>{"}"}</div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <CardTitle>Understanding the Syntax</CardTitle>
            </div>
            <CardDescription>Key patterns to remember</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Variable Assignment
                </h4>
                <code className="text-sm bg-muted p-2 rounded block">variable_name is equal to value</code>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Mathematical Operations
                </h4>
                <code className="text-sm bg-muted p-2 rounded block">
                  x plus y, x minus y, x times y, x divided by y
                </code>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Conditionals
                </h4>
                <code className="text-sm bg-muted p-2 rounded block">if condition then ... endif</code>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Printing Output
                </h4>
                <code className="text-sm bg-muted p-2 rounded block">print variable_or_text</code>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <CardTitle>Try More Examples</CardTitle>
            </div>
            <CardDescription>Explore different language features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold">Loops</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  <div>for i from 1 to 5</div>
                  <div className="ml-4">print i</div>
                  <div>endfor</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Nested Conditions</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  <div>if age is greater than 12 then</div>
                  <div className="ml-4">if age is less than 20 then</div>
                  <div className="ml-8">print {'"Teenager"'}</div>
                  <div className="ml-4">endif</div>
                  <div>endif</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
