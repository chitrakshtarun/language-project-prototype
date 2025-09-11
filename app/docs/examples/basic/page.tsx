"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Play, Copy } from "lucide-react";

export default function BasicExamplesPage() {
  const examples = [
    {
      title: "Basic Addition",
      description: "Simple variable assignment and mathematical operations",
      difficulty: "Beginner",
      englishCode: `x is equal to 10
y is equal to 20

z is equal to x plus y
print z

if z is greater than 25 then
print "z is quite large!"
endif`,
      jsCode: `let x = 10;
let y = 20;

let z = x + y;
console.log(z);

if (z > 25) {
  console.log("z is quite large!");
}`,
    },
    {
      title: "Simple Calculator",
      description: "Demonstrates all four basic mathematical operations",
      difficulty: "Beginner",
      englishCode: `a is equal to 10
b is equal to 5

sum is equal to a plus b
print "Sum: " + sum

difference is equal to a minus b
print "Difference: " + difference

product is equal to a times b
print "Product: " + product

quotient is equal to a divided by b
print "Quotient: " + quotient`,
      jsCode: `let a = 10;
let b = 5;

let sum = a + b;
console.log("Sum: " + sum);

let difference = a - b;
console.log("Difference: " + difference);

let product = a * b;
console.log("Product: " + product);

let quotient = a / b;
console.log("Quotient: " + quotient);`,
    },
    {
      title: "Variable Types",
      description: "Working with different types of values",
      difficulty: "Beginner",
      englishCode: `name is equal to "Alice"
age is equal to 25
height is equal to 5.6
is_student is equal to true

print "Name: " + name
print "Age: " + age
print "Height: " + height
print "Is student: " + is_student`,
      jsCode: `let name = "Alice";
let age = 25;
let height = 5.6;
let is_student = true;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Height: " + height);
console.log("Is student: " + is_student);`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Basic Examples</h1>
        <p className="text-xl text-muted-foreground">
          Start with these fundamental examples to understand the language basics.
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
                    <Code className="h-5 w-5" />
                    <span>{example.title}</span>
                  </CardTitle>
                  <CardDescription className="mt-2">{example.description}</CardDescription>
                </div>
                <Badge variant={example.difficulty === "Beginner" ? "default" : "secondary"}>
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
                    <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
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
                    <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
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

      {/* Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Key Concepts Covered</CardTitle>
          <CardDescription>These examples demonstrate the following fundamental concepts:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Variable Assignment</h4>
              <p className="text-sm text-muted-foreground">
                Learn how to store values in variables using natural language syntax.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Mathematical Operations</h4>
              <p className="text-sm text-muted-foreground">
                Perform addition, subtraction, multiplication, and division.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Print Statements</h4>
              <p className="text-sm text-muted-foreground">Display output using simple print commands.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Data Types</h4>
              <p className="text-sm text-muted-foreground">Work with numbers, strings, and boolean values.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
