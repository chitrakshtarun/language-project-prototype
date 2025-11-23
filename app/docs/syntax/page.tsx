"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Variable, Calculator, GitBranch, RotateCcw, Function } from "lucide-react";

export default function SyntaxPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Syntax Overview</h1>
        <p className="text-xl text-muted-foreground">Complete guide to the language syntax and features.</p>
      </div>

      {/* Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Variable className="h-5 w-5" />
            <span>Variables</span>
          </CardTitle>
          <CardDescription>Declare and assign values to variables using natural language</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="syntax" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="syntax">Syntax</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="syntax">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern:</div>
                  <div>variable_name is equal to value</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Variables are automatically declared when first assigned. No explicit type declarations needed.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>name is equal to "John"</div>
                <div>age is equal to 25</div>
                <div>price is equal to 99.99</div>
                <div>is_student is equal to true</div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Mathematical Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calculator className="h-5 w-5" />
            <span>Mathematical Operations</span>
          </CardTitle>
          <CardDescription>Perform arithmetic operations using English words</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Basic Operations</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>
                  <span className="text-primary">plus</span> - Addition
                </div>
                <div>
                  <span className="text-primary">minus</span> - Subtraction
                </div>
                <div>
                  <span className="text-primary">times</span> - Multiplication
                </div>
                <div>
                  <span className="text-primary">divided by</span> - Division
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Examples</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>sum is equal to x plus y</div>
                <div>difference is equal to a minus b</div>
                <div>product is equal to width times height</div>
                <div>average is equal to total divided by count</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="h-5 w-5" />
            <span>Comparison Operations</span>
          </CardTitle>
          <CardDescription>Compare values for conditional statements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Comparison Operators</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>
                  <span className="text-primary">is equal to</span>
                </div>
                <div>
                  <span className="text-primary">is not equal to</span>
                </div>
                <div>
                  <span className="text-primary">is greater than</span>
                </div>
                <div>
                  <span className="text-primary">is less than</span>
                </div>
                <div>
                  <span className="text-primary">is greater than or equal to</span>
                </div>
                <div>
                  <span className="text-primary">is less than or equal to</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Usage Examples</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>if age is equal to 18 then</div>
                <div>if score is greater than 90 then</div>
                <div>if temperature is less than 32 then</div>
                <div>if count is not equal to 0 then</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conditional Statements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="h-5 w-5" />
            <span>Conditional Statements</span>
          </CardTitle>
          <CardDescription>Control program flow with if statements</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="if" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="if">If Statements</TabsTrigger>
              <TabsTrigger value="ifelse">If-Else Statements</TabsTrigger>
            </TabsList>
            <TabsContent value="if">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern:</div>
                  <div>if condition then</div>
                  <div className="ml-4"># statements</div>
                  <div>endif</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2"># Example</div>
                  <div>if age is greater than 17 then</div>
                  <div className="ml-4">print "You can vote!"</div>
                  <div>endif</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ifelse">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern:</div>
                  <div>if condition then</div>
                  <div className="ml-4"># statements</div>
                  <div>else</div>
                  <div className="ml-4"># other statements</div>
                  <div>endif</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2"># Example</div>
                  <div>if temperature is greater than 30 then</div>
                  <div className="ml-4">print "It's hot!"</div>
                  <div>else</div>
                  <div className="ml-4">print "It's not that hot"</div>
                  <div>endif</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Loops */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <RotateCcw className="h-5 w-5" />
            <span>Loops</span>
          </CardTitle>
          <CardDescription>Repeat code execution with for and while loops</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="for" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="for">For Loops</TabsTrigger>
              <TabsTrigger value="while">While Loops</TabsTrigger>
            </TabsList>
            <TabsContent value="for">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern:</div>
                  <div>for variable from start to end</div>
                  <div className="ml-4"># statements</div>
                  <div>endfor</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2"># Example</div>
                  <div>for i from 1 to 10</div>
                  <div className="ml-4">print i</div>
                  <div>endfor</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="while">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern:</div>
                  <div>while condition</div>
                  <div className="ml-4"># statements</div>
                  <div>endwhile</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2"># Example</div>
                  <div>counter is equal to 0</div>
                  <div>while counter is less than 5</div>
                  <div className="ml-4">print counter</div>
                  <div className="ml-4">increment counter</div>
                  <div>endwhile</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Function className="h-5 w-5" />
            <span>Functions</span>
          </CardTitle>
          <CardDescription>Define and call reusable functions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="declaration" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="declaration">Declaration</TabsTrigger>
              <TabsTrigger value="calling">Calling</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="declaration">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern (No Parameters):</div>
                  <div>let function_name be a function</div>
                  <div className="ml-4"># statements</div>
                  <div>end function</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern (With Parameters):</div>
                  <div>let function_name be a function accepting param1 and param2</div>
                  <div className="ml-4"># statements</div>
                  <div>end function</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Functions can accept multiple parameters separated by "and". Use "return value" to return a value from a function.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="calling">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern (No Parameters):</div>
                  <div>run function_name</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern (With Parameters):</div>
                  <div>run function_name with arg1 and arg2</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Using Return Value:</div>
                  <div>result is equal to run function_name with arg1 and arg2</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2"># Simple Function</div>
                  <div>let greet be a function</div>
                  <div className="ml-4">print "Hello, World!"</div>
                  <div>end function</div>
                  <div className="mt-2">run greet</div>
                </div>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600 mb-2"># Function with Return Value</div>
                  <div>let add be a function accepting a and b</div>
                  <div className="ml-4">return a plus b</div>
                  <div>end function</div>
                  <div className="mt-2">result is equal to run add with 5 and 10</div>
                  <div>print result</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Special Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code2 className="h-5 w-5" />
            <span>Special Operations</span>
          </CardTitle>
          <CardDescription>Additional operations for variable manipulation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Increment/Decrement</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>increment variable_name</div>
                <div>decrement variable_name</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Print Output</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>print variable_name</div>
                <div>print "text string"</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
          <CardDescription>Tips for writing clean and readable code</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use descriptive variable names</p>
                <p className="text-sm text-muted-foreground">
                  Instead of "x", use "age", "count", or "temperature" for clarity.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Keep consistent indentation</p>
                <p className="text-sm text-muted-foreground">
                  While not required, consistent indentation improves readability.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use comments for complex logic</p>
                <p className="text-sm text-muted-foreground">
                  Add comments starting with # to explain complex calculations or logic.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
