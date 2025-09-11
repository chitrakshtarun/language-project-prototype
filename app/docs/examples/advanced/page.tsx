"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Copy, Play } from "lucide-react";

export default function AdvancedExamplesPage() {
  const examples = [
    {
      title: "Fibonacci Calculator",
      description: "Generate Fibonacci sequence using loops and conditionals",
      difficulty: "Advanced",
      englishCode: `n is equal to 10
a is equal to 0
b is equal to 1

print "Fibonacci sequence:"
print a
print b

for i from 3 to n
next is equal to a plus b
print next
a is equal to b
b is equal to next
endfor`,
      jsCode: `let n = 10;
let a = 0;
let b = 1;

console.log("Fibonacci sequence:");
console.log(a);
console.log(b);

for (let i = 3; i <= n; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}`,
    },
    {
      title: "Prime Number Checker",
      description: "Check if a number is prime using nested loops",
      difficulty: "Advanced",
      englishCode: `number is equal to 17
is_prime is equal to true

if number is less than 2 then
is_prime is equal to false
else
for i from 2 to number minus 1
remainder is equal to number divided by i
if remainder is equal to 0 then
is_prime is equal to false
endif
endfor
endif

if is_prime is equal to true then
print number + " is a prime number"
else
print number + " is not a prime number"
endif`,
      jsCode: `let number = 17;
let is_prime = true;

if (number < 2) {
  is_prime = false;
} else {
  for (let i = 2; i <= number - 1; i++) {
    let remainder = number % i;
    if (remainder == 0) {
      is_prime = false;
    }
  }
}

if (is_prime == true) {
  console.log(number + " is a prime number");
} else {
  console.log(number + " is not a prime number");
}`,
    },
    {
      title: "Grade Calculator with Statistics",
      description: "Calculate letter grades and class statistics",
      difficulty: "Advanced",
      englishCode: `# Student scores
total_students is equal to 5
total_score is equal to 0
grade_a_count is equal to 0
grade_b_count is equal to 0
grade_c_count is equal to 0

scores is equal to [95, 87, 76, 92, 84]

print "Processing student grades..."

for i from 1 to total_students
score is equal to scores at position i
total_score is equal to total_score plus score

if score is greater than or equal to 90 then
grade is equal to "A"
increment grade_a_count
else
if score is greater than or equal to 80 then
grade is equal to "B"
increment grade_b_count
else
grade is equal to "C"
increment grade_c_count
endif
endif

print "Student " + i + ": " + score + " (Grade: " + grade + ")"
endfor

average is equal to total_score divided by total_students
print "Class average: " + average
print "A grades: " + grade_a_count
print "B grades: " + grade_b_count
print "C grades: " + grade_c_count`,
      jsCode: `// Student scores
let total_students = 5;
let total_score = 0;
let grade_a_count = 0;
let grade_b_count = 0;
let grade_c_count = 0;

let scores = [95, 87, 76, 92, 84];

console.log("Processing student grades...");

for (let i = 1; i <= total_students; i++) {
  let score = scores[i - 1];
  total_score = total_score + score;

  if (score >= 90) {
    grade = "A";
    grade_a_count = grade_a_count + 1;
  } else {
    if (score >= 80) {
      grade = "B";
      grade_b_count = grade_b_count + 1;
    } else {
      grade = "C";
      grade_c_count = grade_c_count + 1;
    }
  }

  console.log("Student " + i + ": " + score + " (Grade: " + grade + ")");
}

let average = total_score / total_students;
console.log("Class average: " + average);
console.log("A grades: " + grade_a_count);
console.log("B grades: " + grade_b_count);
console.log("C grades: " + grade_c_count);`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Advanced Examples</h1>
        <p className="text-xl text-muted-foreground">
          Complex programs that combine multiple language features to solve real-world problems.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive">Advanced</Badge>
          <Badge variant="outline">Multiple Constructs</Badge>
          <Badge variant="outline">Complex Logic</Badge>
        </div>
      </div>

      {/* Warning */}
      <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
        <CardHeader>
          <CardTitle className="text-yellow-800 dark:text-yellow-200">Before You Begin</CardTitle>
          <CardDescription className="text-yellow-700 dark:text-yellow-300">
            These examples assume familiarity with basic syntax, conditionals, and loops.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            Make sure you're comfortable with the fundamentals before attempting these advanced examples. If you need a
            refresher, check out our{" "}
            <Link href="/docs/examples/basic" className="underline font-medium">
              basic examples
            </Link>{" "}
            first.
          </p>
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="space-y-6">
        {examples.map((example, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>{example.title}</span>
                  </CardTitle>
                  <CardDescription className="mt-2">{example.description}</CardDescription>
                </div>
                <Badge variant="destructive">{example.difficulty}</Badge>
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
                    <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap max-h-96 overflow-y-auto">
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
                    <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap max-h-96 overflow-y-auto">
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

      {/* Concepts Covered */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Concepts Demonstrated</CardTitle>
          <CardDescription>These examples showcase sophisticated programming techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Algorithm Implementation</h4>
              <p className="text-sm text-muted-foreground">
                Classical algorithms like Fibonacci sequence and prime number checking.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">State Management</h4>
              <p className="text-sm text-muted-foreground">
                Managing multiple variables and their relationships across iterations.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Nested Control Structures</h4>
              <p className="text-sm text-muted-foreground">
                Complex combinations of loops and conditionals working together.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Data Processing</h4>
              <p className="text-sm text-muted-foreground">
                Working with collections of data and statistical calculations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Programming Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Programming Patterns</CardTitle>
          <CardDescription>Reusable patterns you can apply to your own programs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Accumulator Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>total is equal to 0</div>
                <div>for item in collection</div>
                <div className="ml-4">total is equal to total plus item</div>
                <div>endfor</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Building up a result by processing each item in a collection.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Flag Variable Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>found is equal to false</div>
                <div>for item in collection</div>
                <div className="ml-4">if item meets condition then</div>
                <div className="ml-8">found is equal to true</div>
                <div className="ml-4">endif</div>
                <div>endfor</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Using a boolean variable to track whether a condition has been met.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Counter Pattern</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                <div>count is equal to 0</div>
                <div>for item in collection</div>
                <div className="ml-4">if item meets condition then</div>
                <div className="ml-8">increment count</div>
                <div className="ml-4">endif</div>
                <div>endfor</div>
              </div>
              <p className="text-sm text-muted-foreground">Counting items that meet specific criteria.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips for Advanced Programming */}
      <Card>
        <CardHeader>
          <CardTitle>Tips for Advanced Programming</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Break down complex problems</p>
                <p className="text-sm text-muted-foreground">
                  Start by solving smaller parts of the problem before combining them.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Test with simple cases first</p>
                <p className="text-sm text-muted-foreground">
                  Use small, known inputs to verify your logic before scaling up.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use meaningful variable names</p>
                <p className="text-sm text-muted-foreground">
                  Clear names make complex logic easier to follow and debug.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Add comments for complex logic</p>
                <p className="text-sm text-muted-foreground">
                  Document your thinking process, especially for algorithmic parts.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Continue Your Journey</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Try in Playground</CardTitle>
              <CardDescription>Experiment with these examples in the live editor</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/">
                  <Play className="mr-2 h-4 w-4" />
                  Open Playground
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Contributing</CardTitle>
              <CardDescription>Help extend the language with new features</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link href="/docs/contributing">Contribute</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
