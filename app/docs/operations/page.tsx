"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calculator, Plus, Minus, X, Divide } from "lucide-react";

export default function OperationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Operations</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to perform mathematical and logical operations using natural language syntax.
        </p>
      </div>

      {/* Mathematical Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calculator className="h-5 w-5" />
            <span>Mathematical Operations</span>
          </CardTitle>
          <CardDescription>Basic arithmetic operations using English words</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Plus className="h-4 w-4 text-green-600" />
                <h3 className="font-semibold">Addition</h3>
              </div>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  result is equal to x <span className="text-primary">plus</span> y
                </div>
                <div>
                  total is equal to a <span className="text-primary">plus</span> b{" "}
                  <span className="text-primary">plus</span> c
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Use "plus" to add numbers together. You can chain multiple additions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Minus className="h-4 w-4 text-red-600" />
                <h3 className="font-semibold">Subtraction</h3>
              </div>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  difference is equal to x <span className="text-primary">minus</span> y
                </div>
                <div>
                  remaining is equal to total <span className="text-primary">minus</span> used
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Use "minus" to subtract one number from another.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <X className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold">Multiplication</h3>
              </div>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  product is equal to x <span className="text-primary">times</span> y
                </div>
                <div>
                  area is equal to width <span className="text-primary">times</span> height
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Use "times" to multiply numbers together.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Divide className="h-4 w-4 text-purple-600" />
                <h3 className="font-semibold">Division</h3>
              </div>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  quotient is equal to x <span className="text-primary">divided by</span> y
                </div>
                <div>
                  average is equal to total <span className="text-primary">divided by</span> count
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Use "divided by" to divide one number by another.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operator Precedence */}
      <Card>
        <CardHeader>
          <CardTitle>Operator Precedence</CardTitle>
          <CardDescription>Understanding the order of operations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Basic Rules</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Operations are evaluated from left to right with standard mathematical precedence:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                    <Badge>1</Badge>
                    <span className="font-mono text-sm">times, divided by</span>
                    <span className="text-sm text-muted-foreground">
                      - Multiplication and Division (highest priority)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                    <Badge>2</Badge>
                    <span className="font-mono text-sm">plus, minus</span>
                    <span className="text-sm text-muted-foreground">- Addition and Subtraction (lower priority)</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Example 1: Mixed Operations</h4>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                    <div>result is equal to 2 plus 3 times 4</div>
                    <div className="text-green-600"># Evaluates as: 2 + (3 * 4) = 14</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Example 2: Left to Right</h4>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                    <div>result is equal to 10 minus 3 plus 2</div>
                    <div className="text-green-600"># Evaluates as: ((10 - 3) + 2) = 9</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Example 3: Division and Multiplication</h4>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                    <div>result is equal to 20 divided by 4 times 2</div>
                    <div className="text-green-600"># Evaluates as: ((20 / 4) * 2) = 10</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* String Operations */}
      <Card>
        <CardHeader>
          <CardTitle>String Operations</CardTitle>
          <CardDescription>Working with text and string concatenation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">String Concatenation</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>first_name is equal to "John"</div>
                <div>last_name is equal to "Doe"</div>
                <div>
                  full_name is equal to first_name <span className="text-primary">plus</span> " "{" "}
                  <span className="text-primary">plus</span> last_name
                </div>
                <div>print full_name</div>
                <div className="text-green-600"># Output: John Doe</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Use "plus" to join strings together. This works the same as adding numbers.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Mixing Numbers and Strings</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>age is equal to 25</div>
                <div>
                  message is equal to "I am " <span className="text-primary">plus</span> age{" "}
                  <span className="text-primary">plus</span> " years old"
                </div>
                <div>print message</div>
                <div className="text-green-600"># Output: I am 25 years old</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Numbers are automatically converted to strings when combined with text.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Increment and Decrement */}
      <Card>
        <CardHeader>
          <CardTitle>Increment and Decrement</CardTitle>
          <CardDescription>Special operations for changing values by 1</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Increment (Add 1)</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>counter is equal to 0</div>
                <div>
                  <span className="text-primary">increment</span> counter
                </div>
                <div>print counter</div>
                <div className="text-green-600"># Output: 1</div>
              </div>
              <p className="text-sm text-muted-foreground">Shorthand for adding 1 to a variable.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Decrement (Subtract 1)</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>counter is equal to 5</div>
                <div>
                  <span className="text-primary">decrement</span> counter
                </div>
                <div>print counter</div>
                <div className="text-green-600"># Output: 4</div>
              </div>
              <p className="text-sm text-muted-foreground">Shorthand for subtracting 1 from a variable.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Operations */}
      <Card>
        <CardHeader>
          <CardTitle>Comparison Operations</CardTitle>
          <CardDescription>Comparing values for conditional statements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Equality Comparisons</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  x <span className="text-primary">is equal to</span> y
                </div>
                <div>
                  x <span className="text-primary">is not equal to</span> y
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Magnitude Comparisons</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  x <span className="text-primary">is greater than</span> y
                </div>
                <div>
                  x <span className="text-primary">is less than</span> y
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Inclusive Comparisons</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  x <span className="text-primary">is greater than or equal to</span> y
                </div>
                <div>
                  x <span className="text-primary">is less than or equal to</span> y
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Usage in Conditions</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>if age is greater than 18 then</div>
                <div className="ml-4">print "Adult"</div>
                <div>endif</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Operation Patterns</CardTitle>
          <CardDescription>Frequently used mathematical patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Accumulation Pattern</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>total is equal to 0</div>
                <div>for i from 1 to 5</div>
                <div className="ml-4">
                  total is equal to total <span className="text-primary">plus</span> i
                </div>
                <div>endfor</div>
                <div>print total</div>
                <div className="text-green-600"># Output: 15 (1+2+3+4+5)</div>
              </div>
              <p className="text-sm text-muted-foreground">Building up a sum or total over multiple iterations.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Average Calculation</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>
                  sum is equal to 10 <span className="text-primary">plus</span> 20{" "}
                  <span className="text-primary">plus</span> 30
                </div>
                <div>count is equal to 3</div>
                <div>
                  average is equal to sum <span className="text-primary">divided by</span> count
                </div>
                <div>print average</div>
                <div className="text-green-600"># Output: 20</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Dividing a total by the number of items to get the average.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Percentage Calculation</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>correct_answers is equal to 8</div>
                <div>total_questions is equal to 10</div>
                <div>
                  percentage is equal to correct_answers <span className="text-primary">divided by</span>{" "}
                  total_questions <span className="text-primary">times</span> 100
                </div>
                <div>print percentage</div>
                <div className="text-green-600"># Output: 80</div>
              </div>
              <p className="text-sm text-muted-foreground">Converting a fraction to a percentage.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use parentheses for clarity</p>
                <p className="text-sm text-muted-foreground">
                  While not currently supported, plan your expressions to avoid ambiguity.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Break complex calculations into steps</p>
                <p className="text-sm text-muted-foreground">
                  Use intermediate variables for complex expressions to improve readability.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Be careful with division by zero</p>
                <p className="text-sm text-muted-foreground">
                  Always ensure you're not dividing by zero to avoid runtime errors.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
