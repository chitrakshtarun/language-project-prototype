"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { RotateCcw } from "lucide-react";

export default function LoopsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Loops</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to repeat code execution using for loops and while loops to automate repetitive tasks.
        </p>
      </div>

      {/* For Loops */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <RotateCcw className="h-5 w-5" />
            <span>For Loops</span>
          </CardTitle>
          <CardDescription>Repeat code a specific number of times</CardDescription>
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
                  <div>for variable from start to end</div>
                  <div className="ml-4"># statements to repeat</div>
                  <div>endfor</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  The loop variable automatically counts from the start value to the end value (inclusive). Each
                  iteration, the variable increases by 1.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="example">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                  <div>for i from 1 to 5</div>
                  <div className="ml-4">print "Count: " plus i</div>
                  <div>endfor</div>
                  <div className="mt-2 text-green-600"># Output:</div>
                  <div className="text-green-600"># Count: 1</div>
                  <div className="text-green-600"># Count: 2</div>
                  <div className="text-green-600"># Count: 3</div>
                  <div className="text-green-600"># Count: 4</div>
                  <div className="text-green-600"># Count: 5</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This loop runs exactly 5 times, with i taking values 1, 2, 3, 4, and 5.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* While Loops */}
      <Card>
        <CardHeader>
          <CardTitle>While Loops</CardTitle>
          <CardDescription>Repeat code while a condition is true</CardDescription>
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
                  <div>while condition</div>
                  <div className="ml-4"># statements to repeat</div>
                  <div>endwhile</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  The loop continues as long as the condition is true. Make sure to update variables inside the loop to
                  eventually make the condition false.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="example">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                  <div>counter is equal to 1</div>
                  <div>while counter is less than or equal to 3</div>
                  <div className="ml-4">print "Loop " plus counter</div>
                  <div className="ml-4">increment counter</div>
                  <div>endwhile</div>
                  <div className="mt-2 text-green-600"># Output:</div>
                  <div className="text-green-600"># Loop 1</div>
                  <div className="text-green-600"># Loop 2</div>
                  <div className="text-green-600"># Loop 3</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This loop runs while counter is 1, 2, or 3. The increment is essential to prevent infinite loops.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* When to Use Each Type */}
      <Card>
        <CardHeader>
          <CardTitle>When to Use Each Loop Type</CardTitle>
          <CardDescription>Choosing the right loop for your situation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Use For Loops When:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You know exactly how many times to repeat</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You need to count through a specific range</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You want to process numbered items (1 to N)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You need the loop counter in your calculations</span>
                </li>
              </ul>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div># Example: Print multiplication table</div>
                <div>for i from 1 to 10</div>
                <div className="ml-4">result is equal to 7 times i</div>
                <div className="ml-4">print "7 x " plus i plus " = " plus result</div>
                <div>endfor</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Use While Loops When:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>You don't know how many iterations you need</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>The condition depends on user input or calculations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>You're searching for something specific</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>You need more complex stopping conditions</span>
                </li>
              </ul>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>{"# Example: Find first number > 100"}</div>
                <div>number is equal to 1</div>
                <div>while number is less than or equal to 100</div>
                <div className="ml-4">number is equal to number times 2</div>
                <div>endwhile</div>
                <div>print number</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nested Loops */}
      <Card>
        <CardHeader>
          <CardTitle>Nested Loops</CardTitle>
          <CardDescription>Using loops inside other loops</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Simple Nested Example</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>for row from 1 to 3</div>
                <div className="ml-4">for col from 1 to 4</div>
                <div className="ml-8">print "(" plus row plus "," plus col plus ")"</div>
                <div className="ml-4">endfor</div>
                <div>endfor</div>
                <div className="mt-2 text-green-600"># Creates a 3x4 grid of coordinates</div>
              </div>
              <p className="text-sm text-muted-foreground">
                The inner loop runs completely for each iteration of the outer loop.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Multiplication Table</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>for i from 1 to 5</div>
                <div className="ml-4">for j from 1 to 5</div>
                <div className="ml-8">product is equal to i times j</div>
                <div className="ml-8">print i plus " x " plus j plus " = " plus product</div>
                <div className="ml-4">endfor</div>
                <div className="ml-4">print ""</div>
                <div>endfor</div>
              </div>
              <p className="text-sm text-muted-foreground">Creates a complete 5x5 multiplication table.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Loop Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Loop Patterns</CardTitle>
          <CardDescription>Frequently used loop structures and their applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Accumulation Pattern</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>sum is equal to 0</div>
                <div>for i from 1 to 100</div>
                <div className="ml-4">sum is equal to sum plus i</div>
                <div>endfor</div>
                <div>print "Sum of 1 to 100: " plus sum</div>
              </div>
              <p className="text-sm text-muted-foreground">Building up a total by processing each item in sequence.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Counting Pattern</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>count is equal to 0</div>
                <div>for i from 1 to 50</div>
                <div className="ml-4">if i is greater than 25 then</div>
                <div className="ml-8">increment count</div>
                <div className="ml-4">endif</div>
                <div>endfor</div>
                <div>print "Numbers greater than 25: " plus count</div>
              </div>
              <p className="text-sm text-muted-foreground">Counting items that meet specific criteria.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Search Pattern</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>found is equal to false</div>
                <div>target is equal to 42</div>
                <div>counter is equal to 1</div>
                <div>while found is equal to false</div>
                <div className="ml-4">if counter is equal to target then</div>
                <div className="ml-8">found is equal to true</div>
                <div className="ml-8">print "Found " plus target plus " at position " plus counter</div>
                <div className="ml-4">endif</div>
                <div className="ml-4">increment counter</div>
                <div>endwhile</div>
              </div>
              <p className="text-sm text-muted-foreground">Searching for something and stopping when found.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Validation Pattern</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>attempts is equal to 0</div>
                <div>max_attempts is equal to 3</div>
                <div>while attempts is less than max_attempts</div>
                <div className="ml-4">print "Enter password:"</div>
                <div className="ml-4"># password checking logic would go here</div>
                <div className="ml-4">increment attempts</div>
                <div>endwhile</div>
                <div>print "Too many attempts"</div>
              </div>
              <p className="text-sm text-muted-foreground">Limiting the number of retry attempts.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Loop Control */}
      <Card>
        <CardHeader>
          <CardTitle>Loop Variables and Control</CardTitle>
          <CardDescription>Managing loop variables effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">For Loop Variables</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div># The loop variable (i) is automatically managed</div>
                <div>for i from 5 to 10</div>
                <div className="ml-4">print "Current value: " plus i</div>
                <div className="ml-4"># i increments automatically: 5, 6, 7, 8, 9, 10</div>
                <div>endfor</div>
              </div>
              <p className="text-sm text-muted-foreground">
                For loop variables increment automatically and don't need manual updating.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">While Loop Variables</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div># You must manually update the condition variable</div>
                <div>countdown is equal to 5</div>
                <div>while countdown is greater than 0</div>
                <div className="ml-4">print countdown</div>
                <div className="ml-4">decrement countdown # Essential!</div>
                <div>endwhile</div>
                <div>print "Blast off!"</div>
              </div>
              <p className="text-sm text-muted-foreground">
                While loop variables must be updated manually to avoid infinite loops.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <CardTitle>Common Mistakes and Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="destructive" className="mt-1">
                Error
              </Badge>
              <div>
                <p className="font-medium">Infinite while loops</p>
                <p className="text-sm text-muted-foreground">
                  Forgetting to update the condition variable inside a while loop.
                </p>
                <div className="bg-red-50 dark:bg-red-950 p-2 rounded mt-2 font-mono text-sm">
                  <div># BAD: counter never changes</div>
                  <div>counter is equal to 1</div>
                  <div>while counter is less than 5</div>
                  <div className="ml-4">print counter # runs forever!</div>
                  <div>endwhile</div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Fix
              </Badge>
              <div>
                <p className="font-medium">Always update condition variables</p>
                <div className="bg-green-50 dark:bg-green-950 p-2 rounded mt-2 font-mono text-sm">
                  <div># GOOD: counter changes each iteration</div>
                  <div>counter is equal to 1</div>
                  <div>while counter is less than 5</div>
                  <div className="ml-4">print counter</div>
                  <div className="ml-4">increment counter # Essential!</div>
                  <div>endwhile</div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use descriptive loop variable names</p>
                <p className="text-sm text-muted-foreground">
                  Instead of "i", use names like "row", "student", "attempt" for clarity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Be careful with loop ranges</p>
                <p className="text-sm text-muted-foreground">
                  "for i from 1 to 5" includes both 1 and 5. Double-check your start and end values.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
