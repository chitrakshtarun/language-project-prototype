"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RotateCcw, Copy, ArrowRight } from "lucide-react";

export default function LoopsExamplesPage() {
  const examples = [
    {
      title: "Basic For Loop",
      description: "Count from 1 to 5 using a for loop",
      difficulty: "Beginner",
      englishCode: `for i from 1 to 5
print i
endfor`,
      jsCode: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
    },
    {
      title: "Counting with While Loop",
      description: "Use a while loop to count with manual increment",
      difficulty: "Beginner",
      englishCode: `count is equal to 1
while count is less than 5 do
print "Count is now: " + count
increment count by 1
endwhile`,
      jsCode: `let count = 1;
while (count < 5) {
  console.log("Count is now: " + count);
  count = count + 1;
}`,
    },
    {
      title: "Multiplication Table",
      description: "Generate a multiplication table using a for loop",
      difficulty: "Intermediate",
      englishCode: `number is equal to 7
print "Multiplication table for " + number

for i from 1 to 10
result is equal to number times i
print number + " x " + i + " = " + result
endfor`,
      jsCode: `let number = 7;
console.log("Multiplication table for " + number);

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(number + " x " + i + " = " + result);
}`,
    },
    {
      title: "Sum Calculator",
      description: "Calculate the sum of numbers from 1 to 10",
      difficulty: "Intermediate",
      englishCode: `sum is equal to 0
print "Calculating sum of numbers from 1 to 10"

for i from 1 to 10
sum is equal to sum plus i
print "Adding " + i + ", sum is now " + sum
endfor

print "Final sum: " + sum`,
      jsCode: `let sum = 0;
console.log("Calculating sum of numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  console.log("Adding " + i + ", sum is now " + sum);
}

console.log("Final sum: " + sum);`,
    },
    {
      title: "Countdown Timer",
      description: "Create a countdown from 10 to 1 using a while loop",
      difficulty: "Intermediate",
      englishCode: `timer is equal to 10
print "Countdown starting..."

while timer is greater than 0
print timer
decrement timer
endwhile

print "Time's up!"`,
      jsCode: `let timer = 10;
console.log("Countdown starting...");

while (timer > 0) {
  console.log(timer);
  timer = timer - 1;
}

console.log("Time's up!");`,
    },
    {
      title: "Number Pattern",
      description: "Create a number pattern using nested loops",
      difficulty: "Advanced",
      englishCode: `print "Number Pattern:"

for row from 1 to 5
for col from 1 to row
print col + " "
endfor
print ""
endfor`,
      jsCode: `console.log("Number Pattern:");

for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line = line + col + " ";
  }
  console.log(line);
}`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Loop Examples</h1>
        <p className="text-xl text-muted-foreground">
          Master repetitive tasks with for loops and while loops to automate your programs.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        {examples.map((example, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <RotateCcw className="h-5 w-5" />
                    <span>{example.title}</span>
                  </CardTitle>
                  <CardDescription className="mt-2">{example.description}</CardDescription>
                </div>
                <Badge
                  variant={
                    example.difficulty === "Beginner"
                      ? "default"
                      : example.difficulty === "Intermediate"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {example.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="english" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="english">English Code</TabsTrigger>
                  <TabsTrigger value="javascript">Generated JavaScript</TabsTrigger>
                </TabsList>
                <TabsContent value="english">
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{example.englishCode}</code>
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => navigator.clipboard.writeText(example.englishCode)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="javascript">
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{example.jsCode}</code>
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => navigator.clipboard.writeText(example.jsCode)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Loop Types Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Loop Types Comparison</CardTitle>
          <CardDescription>Understanding when to use each type of loop</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">For Loops</h4>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  <div>for variable from start to end</div>
                  <div className="ml-4"># statements</div>
                  <div>endfor</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Best for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Counting through a known range</li>
                    <li>• Repeating a fixed number of times</li>
                    <li>• Iterating through sequences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">While Loops</h4>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  <div>while condition</div>
                  <div className="ml-4"># statements</div>
                  <div>endwhile</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Best for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Condition-based repetition</li>
                    <li>• Unknown number of iterations</li>
                    <li>• More complex stopping criteria</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Loop Patterns</CardTitle>
          <CardDescription>Frequently used loop structures and their applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Accumulation Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>total is equal to 0</div>
                <div>for i from 1 to 10</div>
                <div className="ml-4">total is equal to total plus i</div>
                <div>endfor</div>
              </div>
              <p className="text-sm text-muted-foreground">Building up a result over multiple iterations.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Counting Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>counter is equal to 0</div>
                <div>while counter is less than 10</div>
                <div className="ml-4">print counter</div>
                <div className="ml-4">increment counter</div>
                <div>endwhile</div>
              </div>
              <p className="text-sm text-muted-foreground">Manually controlling the loop counter.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Search Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>found is equal to false</div>
                <div>while not found</div>
                <div className="ml-4"># check condition</div>
                <div className="ml-4"># update found if needed</div>
                <div>endwhile</div>
              </div>
              <p className="text-sm text-muted-foreground">Looking for something until found.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Nested Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>for i from 1 to 3</div>
                <div className="ml-4">for j from 1 to 3</div>
                <div className="ml-8">print i + "," + j</div>
                <div className="ml-4">endfor</div>
                <div>endfor</div>
              </div>
              <p className="text-sm text-muted-foreground">Creating tables, grids, or complex patterns.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Important Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Warning
              </Badge>
              <div>
                <p className="font-medium">Avoid infinite loops</p>
                <p className="text-sm text-muted-foreground">
                  Make sure your while loop condition will eventually become false, or your program will run forever.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use descriptive variable names</p>
                <p className="text-sm text-muted-foreground">
                  Instead of "i", use names like "counter", "row", or "item" for clarity.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Keep loop bodies simple</p>
                <p className="text-sm text-muted-foreground">
                  If your loop body gets too complex, consider breaking it into smaller functions.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
