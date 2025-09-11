import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitBranch, ArrowRight } from "lucide-react";

export default function ConditionalsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Conditionals</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to make decisions in your programs using if statements and conditional logic.
        </p>
      </div>

      {/* Basic If Statements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="h-5 w-5" />
            <span>Basic If Statements</span>
          </CardTitle>
          <CardDescription>Making decisions based on conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="syntax" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="syntax">Syntax</TabsTrigger>
              <TabsTrigger value="example">Example</TabsTrigger>
            </TabsList>
            <TabsContent value="syntax">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern:</div>
                  <div>if condition then</div>
                  <div className="ml-4"># statements to execute if true</div>
                  <div>endif</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Every if statement must be closed with "endif". The code between "then" and "endif" runs only if the
                  condition is true.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="example">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                  <div>age is equal to 20</div>
                  <div className="mt-2">if age is greater than 18 then</div>
                  <div className="ml-4">print "You can vote!"</div>
                  <div>endif</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This example checks if someone is old enough to vote and prints a message if they are.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* If-Else Statements */}
      <Card>
        <CardHeader>
          <CardTitle>If-Else Statements</CardTitle>
          <CardDescription>Handling both true and false conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="syntax" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="syntax">Syntax</TabsTrigger>
              <TabsTrigger value="example">Example</TabsTrigger>
            </TabsList>
            <TabsContent value="syntax">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">Pattern:</div>
                  <div>if condition then</div>
                  <div className="ml-4"># statements if true</div>
                  <div>else</div>
                  <div className="ml-4"># statements if false</div>
                  <div>endif</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  The "else" section provides an alternative path when the condition is false.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="example">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                  <div>temperature is equal to 75</div>
                  <div className="mt-2">if temperature is greater than 80 then</div>
                  <div className="ml-4">print "It's hot outside!"</div>
                  <div>else</div>
                  <div className="ml-4">print "Weather is pleasant"</div>
                  <div>endif</div>
                </div>
                <p className="text-sm text-muted-foreground">This provides different messages based on temperature.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Nested Conditionals */}
      <Card>
        <CardHeader>
          <CardTitle>Nested Conditionals</CardTitle>
          <CardDescription>Using if statements inside other if statements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
              <div>age is equal to 16</div>
              <div className="mt-2">if age is greater than 12 then</div>
              <div className="ml-4">if age is less than 20 then</div>
              <div className="ml-8">print "Teenager"</div>
              <div className="ml-4">else</div>
              <div className="ml-8">print "Young adult"</div>
              <div className="ml-4">endif</div>
              <div>else</div>
              <div className="ml-4">print "Child"</div>
              <div>endif</div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Note
              </Badge>
              <div>
                <p className="font-medium">Proper nesting</p>
                <p className="text-sm text-muted-foreground">
                  Each nested if statement must have its own matching endif. Keep track of indentation for clarity.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Operators */}
      <Card>
        <CardHeader>
          <CardTitle>Comparison Operators</CardTitle>
          <CardDescription>All the ways to compare values</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Equality</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  if x <span className="text-primary">is equal to</span> 5 then
                </div>
                <div>
                  if name <span className="text-primary">is not equal to</span> "John" then
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Check if values are the same or different.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Size Comparison</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  if score <span className="text-primary">is greater than</span> 90 then
                </div>
                <div>
                  if age <span className="text-primary">is less than</span> 18 then
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Compare which value is larger or smaller.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Inclusive Comparison</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  if grade <span className="text-primary">is greater than or equal to</span> 60 then
                </div>
                <div>
                  if count <span className="text-primary">is less than or equal to</span> 10 then
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Include the boundary value in the comparison.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Boolean Values</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  if is_student <span className="text-primary">is equal to</span> true then
                </div>
                <div>
                  if has_permission <span className="text-primary">is equal to</span> false then
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Work with true/false values directly.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complex Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Complex Conditional Patterns</CardTitle>
          <CardDescription>Advanced techniques for decision making</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Multiple Conditions (Else If Pattern)</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>score is equal to 85</div>
                <div className="mt-2">if score is greater than or equal to 90 then</div>
                <div className="ml-4">grade is equal to "A"</div>
                <div>else</div>
                <div className="ml-4">if score is greater than or equal to 80 then</div>
                <div className="ml-8">grade is equal to "B"</div>
                <div className="ml-4">else</div>
                <div className="ml-8">if score is greater than or equal to 70 then</div>
                <div className="ml-12">grade is equal to "C"</div>
                <div className="ml-8">else</div>
                <div className="ml-12">grade is equal to "F"</div>
                <div className="ml-8">endif</div>
                <div className="ml-4">endif</div>
                <div>endif</div>
              </div>
              <p className="text-sm text-muted-foreground">Chain conditions together to handle multiple scenarios.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Range Checking</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>temperature is equal to 75</div>
                <div className="mt-2">if temperature is greater than 60 then</div>
                <div className="ml-4">if temperature is less than 80 then</div>
                <div className="ml-8">print "Perfect weather!"</div>
                <div className="ml-4">endif</div>
                <div>endif</div>
              </div>
              <p className="text-sm text-muted-foreground">Check if a value falls within a specific range.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Flag Variables</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>found is equal to false</div>
                <div>target is equal to 42</div>
                <div className="mt-2">for i from 1 to 100</div>
                <div className="ml-4">if i is equal to target then</div>
                <div className="ml-8">found is equal to true</div>
                <div className="ml-4">endif</div>
                <div>endfor</div>
                <div className="mt-2">if found is equal to true then</div>
                <div className="ml-4">print "Found the number!"</div>
                <div>endif</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Use boolean variables to track states across your program.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Conditional Patterns</CardTitle>
          <CardDescription>Frequently used decision-making patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Validation Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>if age is less than 0 then</div>
                <div className="ml-4">print "Invalid age"</div>
                <div>else</div>
                <div className="ml-4"># process valid age</div>
                <div>endif</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Menu Selection</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>if choice is equal to 1 then</div>
                <div className="ml-4">print "Option A"</div>
                <div>else</div>
                <div className="ml-4">if choice is equal to 2 then</div>
                <div className="ml-8">print "Option B"</div>
                <div className="ml-4">endif</div>
                <div>endif</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Error Checking</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>if divisor is equal to 0 then</div>
                <div className="ml-4">print "Cannot divide by zero"</div>
                <div>else</div>
                <div className="ml-4">result is equal to number divided by divisor</div>
                <div>endif</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Status Checking</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>if is_logged_in is equal to true then</div>
                <div className="ml-4">print "Welcome back!"</div>
                <div>else</div>
                <div className="ml-4">print "Please log in"</div>
                <div>endif</div>
              </div>
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
                <p className="font-medium">Always close your if statements</p>
                <p className="text-sm text-muted-foreground">
                  Every "if" must have a matching "endif". Missing closures will cause errors.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use meaningful variable names for flags</p>
                <p className="text-sm text-muted-foreground">
                  Names like "is_valid", "has_permission", "found" make conditions easier to read.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Avoid too many nested levels</p>
                <p className="text-sm text-muted-foreground">
                  Deep nesting makes code hard to follow. Consider breaking complex logic into simpler parts.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Test edge cases</p>
                <p className="text-sm text-muted-foreground">
                  Make sure your conditions handle boundary values correctly (like exactly 18, exactly 0, etc.).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
