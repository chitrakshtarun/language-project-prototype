"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitBranch, Copy, ArrowRight } from "lucide-react";

export default function ConditionalsExamplesPage() {
  const examples = [
    {
      title: "Age Classification",
      description: "Classify people by age using if statements",
      difficulty: "Beginner",
      englishCode: `age is equal to 18

if age is less than 13 then
print "Child"
endif

if age is greater than 12 then
if age is less than 20 then
print "Teenager"
endif
endif

if age is greater than 19 then
print "Adult"
endif`,
      jsCode: `let age = 18;

if (age < 13) {
  console.log("Child");
}

if (age > 12) {
  if (age < 20) {
    console.log("Teenager");
  }
}

if (age > 19) {
  console.log("Adult");
}`,
    },
    {
      title: "Temperature Check",
      description: "Weather advice based on temperature using if-else",
      difficulty: "Beginner",
      englishCode: `temperature is equal to 75

if temperature is greater than 30 then
print "It's hot! Stay hydrated."
else
print "Weather is pleasant."
endif

if temperature is less than 0 then
print "It's freezing! Wear warm clothes."
else
print "No need for heavy winter gear."
endif`,
      jsCode: `let temperature = 75;

if (temperature > 30) {
  console.log("It's hot! Stay hydrated.");
} else {
  console.log("Weather is pleasant.");
}

if (temperature < 0) {
  console.log("It's freezing! Wear warm clothes.");
} else {
  console.log("No need for heavy winter gear.");
}`,
    },
    {
      title: "Grade Calculator",
      description: "Assign letter grades based on numerical scores",
      difficulty: "Intermediate",
      englishCode: `score is equal to 85

if score is greater than or equal to 90 then
grade is equal to "A"
else
if score is greater than or equal to 80 then
grade is equal to "B"
else
if score is greater than or equal to 70 then
grade is equal to "C"
else
if score is greater than or equal to 60 then
grade is equal to "D"
else
grade is equal to "F"
endif
endif
endif
endif

print "Score: " + score
print "Grade: " + grade`,
      jsCode: `let score = 85;

if (score >= 90) {
  grade = "A";
} else {
  if (score >= 80) {
    grade = "B";
  } else {
    if (score >= 70) {
      grade = "C";
    } else {
      if (score >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }
    }
  }
}

console.log("Score: " + score);
console.log("Grade: " + grade);`,
    },
    {
      title: "Number Comparison",
      description: "Compare two numbers using multiple conditions",
      difficulty: "Intermediate",
      englishCode: `a is equal to 15
b is equal to 10

if a is equal to b then
print "Numbers are equal"
else
if a is greater than b then
print a + " is greater than " + b
else
print a + " is less than " + b
endif
endif

if a is not equal to b then
difference is equal to a minus b
if difference is greater than 0 then
print "Difference: " + difference
else
difference is equal to b minus a
print "Difference: " + difference
endif
endif`,
      jsCode: `let a = 15;
let b = 10;

if (a == b) {
  console.log("Numbers are equal");
} else {
  if (a > b) {
    console.log(a + " is greater than " + b);
  } else {
    console.log(a + " is less than " + b);
  }
}

if (a != b) {
  difference = a - b;
  if (difference > 0) {
    console.log("Difference: " + difference);
  } else {
    difference = b - a;
    console.log("Difference: " + difference);
  }
}`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Conditional Examples</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to make decisions in your programs with if statements and conditional logic.
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
                    <GitBranch className="h-5 w-5" />
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

      {/* Comparison Operators Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Comparison Operators Reference</CardTitle>
          <CardDescription>All the comparison operators you can use in conditional statements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Equality</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  <span className="text-primary">is equal to</span> - Checks if values are the same
                </div>
                <div>
                  <span className="text-primary">is not equal to</span> - Checks if values are different
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Magnitude</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  <span className="text-primary">is greater than</span> - Checks if first value is larger
                </div>
                <div>
                  <span className="text-primary">is less than</span> - Checks if first value is smaller
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Inclusive Comparisons</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  <span className="text-primary">is greater than or equal to</span>
                </div>
                <div>
                  <span className="text-primary">is less than or equal to</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Conditional Structure</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>
                  <span className="text-primary">if ... then</span> - Start a condition
                </div>
                <div>
                  <span className="text-primary">else</span> - Alternative branch
                </div>
                <div>
                  <span className="text-primary">endif</span> - End the condition
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Tips for Writing Conditionals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Always close your if statements</p>
                <p className="text-sm text-muted-foreground">Every "if" statement must have a corresponding "endif".</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use nested conditions carefully</p>
                <p className="text-sm text-muted-foreground">
                  Too many nested if statements can make code hard to read. Consider alternatives.
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
                  Make sure your conditions handle boundary values correctly.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
