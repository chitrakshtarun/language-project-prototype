"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Variable, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VariablesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Variables</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to store and work with data using variables in natural language.
        </p>
      </div>

      {/* Basic Declaration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Variable className="h-5 w-5" />
            <span>Variable Declaration</span>
          </CardTitle>
          <CardDescription>Create variables using simple English syntax</CardDescription>
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
                  Variables are automatically declared when first assigned. No type declarations needed.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                  <div>age is equal to 25</div>
                  <div>name is equal to "Alice"</div>
                  <div>price is equal to 29.99</div>
                  <div>is_active is equal to true</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigator.clipboard.writeText(`age is equal to 25
name is equal to "Alice"
price is equal to 29.99
is_active is equal to true`)
                  }
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Examples
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* User Input */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Variable className="h-5 w-5" />
            <span>User Input</span>
          </CardTitle>
          <CardDescription>Get values from users at runtime</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="syntax" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="syntax">Syntax</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="syntax">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-primary font-semibold mb-2">Basic Pattern:</div>
                  <div>initialise variable_name with user input</div>
                  <div className="mt-3 text-primary font-semibold mb-2">With Custom Prompt:</div>
                  <div>initialise variable_name with user input "Your prompt message:"</div>
                  <div className="mt-3 text-primary font-semibold mb-2">With Type Specification:</div>
                  <div>initialise variable_name as type with user input</div>
                  <div className="mt-3 text-primary font-semibold mb-2">Combined:</div>
                  <div>initialise variable_name as type with user input "Your prompt:"</div>
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>
                    User input allows you to get values from users while your program is running. The browser will show a prompt dialog asking for input.
                  </p>
                  <p>
                    <strong>Supported types:</strong> <code className="bg-muted px-1 rounded">number</code>, <code className="bg-muted px-1 rounded">boolean</code>, <code className="bg-muted px-1 rounded">string</code> (default)
                  </p>
                  <p>
                    If no type is specified, the input is treated as a string. For boolean input, enter "true" or "True" (case-insensitive).
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Basic String Input</h4>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                    <div>initialise name with user input "Enter your name:"</div>
                    <div>print "Hello, " + name</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Number Input</h4>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                    <div>initialise age as number with user input "Enter your age:"</div>
                    <div>initialise nextYear as number</div>
                    <div>nextYear is equal to age plus 1</div>
                    <div>print "Next year you will be " + nextYear</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Boolean Input</h4>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                    <div>initialise isStudent as boolean with user input "Are you a student? (true/false):"</div>
                    <div>if isStudent then</div>
                    <div className="ml-4">print "You are a student!"</div>
                    <div>endif</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Default Prompt</h4>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                    <div>initialise value with user input</div>
                    <div>print value</div>
                  </div>
                  <p className="text-sm text-muted-foreground">Uses default prompt: "Enter value:"</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigator.clipboard.writeText(`initialise name with user input "Enter your name:"
print "Hello, " + name

initialise age as number with user input "Enter your age:"
initialise nextYear as number
nextYear is equal to age plus 1
print "Next year you will be " + nextYear

initialise isStudent as boolean with user input "Are you a student? (true/false):"
if isStudent then
print "You are a student!"
endif`)
                  }
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Examples
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Data Types */}
      <Card>
        <CardHeader>
          <CardTitle>Supported Data Types</CardTitle>
          <CardDescription>The language automatically detects data types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Numbers</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>age is equal to 25</div>
                <div>temperature is equal to 98.6</div>
                <div>count is equal to -5</div>
              </div>
              <p className="text-sm text-muted-foreground">Integers and decimal numbers are supported.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Text (Strings)</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>name is equal to "John"</div>
                <div>message is equal to "Hello, World!"</div>
                <div>empty is equal to ""</div>
              </div>
              <p className="text-sm text-muted-foreground">Text must be enclosed in double quotes.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Boolean (True/False)</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>is_student is equal to true</div>
                <div>is_complete is equal to false</div>
              </div>
              <p className="text-sm text-muted-foreground">Use `true` or `false` (lowercase).</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Expressions</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>sum is equal to x plus y</div>
                <div>full_name is equal to first_name + " " + last_name</div>
              </div>
              <p className="text-sm text-muted-foreground">Variables can be assigned the result of expressions.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Naming */}
      <Card>
        <CardHeader>
          <CardTitle>Variable Naming Rules</CardTitle>
          <CardDescription>Guidelines for choosing variable names</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">✓ Good Names</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                  <div>age</div>
                  <div>student_name</div>
                  <div>total_score</div>
                  <div>is_valid</div>
                  <div>max_attempts</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-red-600">✗ Avoid</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                  <div>x</div>
                  <div>temp</div>
                  <div>data1</div>
                  <div>thing</div>
                  <div>variable</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Naming Rules</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use descriptive names that explain the variable's purpose</li>
                <li>• Use lowercase letters and underscores (snake_case)</li>
                <li>• Start with a letter, not a number</li>
                <li>• Avoid spaces and special characters</li>
                <li>• Use boolean names that read like questions (is_valid, has_data)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Updates */}
      <Card>
        <CardHeader>
          <CardTitle>Updating Variables</CardTitle>
          <CardDescription>How to change variable values after declaration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Reassignment</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>counter is equal to 0</div>
                <div>print counter</div>
                <div className="mt-2 text-green-600"># Update the value</div>
                <div>counter is equal to 5</div>
                <div>print counter</div>
              </div>
              <p className="text-sm text-muted-foreground">Simply assign a new value using the same syntax.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Mathematical Updates</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>score is equal to 10</div>
                <div>score is equal to score plus 5</div>
                <div>print score</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Use the variable in expressions to update based on its current value.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Increment and Decrement</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>counter is equal to 0</div>
                <div>increment counter</div>
                <div>print counter</div>
                <div>decrement counter</div>
                <div>print counter</div>
              </div>
              <p className="text-sm text-muted-foreground">Special commands for adding or subtracting 1.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Scope */}
      <Card>
        <CardHeader>
          <CardTitle>Variable Scope</CardTitle>
          <CardDescription>Understanding where variables can be used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Global Variables</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>name is equal to "Alice"</div>
                <div className="mt-2">if age is greater than 18 then</div>
                <div className="ml-4">print name + " is an adult"</div>
                <div>endif</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Variables declared outside blocks can be used anywhere in the program.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Block Variables</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>if score is greater than 90 then</div>
                <div className="ml-4">grade is equal to "A"</div>
                <div className="ml-4">print grade</div>
                <div>endif</div>
                <div className="mt-2 text-red-600"># grade is not accessible here</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Variables declared inside blocks (if, for, while) are only available within that block.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
          <CardDescription>Tips for working effectively with variables</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Initialize variables before use</p>
                <p className="text-sm text-muted-foreground">
                  Always assign a value when declaring a variable to avoid errors.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Use meaningful names</p>
                <p className="text-sm text-muted-foreground">
                  Choose names that make your code self-documenting and easy to understand.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Be consistent with naming</p>
                <p className="text-sm text-muted-foreground">
                  Use the same naming pattern throughout your program (e.g., always use snake_case).
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Tip
              </Badge>
              <div>
                <p className="font-medium">Group related variables</p>
                <p className="text-sm text-muted-foreground">
                  Declare related variables near each other for better code organization.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Variable Patterns</CardTitle>
          <CardDescription>Frequently used variable patterns and their purposes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Counter Variables</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>count is equal to 0</div>
                <div>attempts is equal to 0</div>
                <div>total_items is equal to 0</div>
              </div>
              <p className="text-sm text-muted-foreground">Track how many times something happens.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Accumulator Variables</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>sum is equal to 0</div>
                <div>total_score is equal to 0</div>
                <div>product is equal to 1</div>
              </div>
              <p className="text-sm text-muted-foreground">Build up a result over multiple operations.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Flag Variables</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>found is equal to false</div>
                <div>is_complete is equal to false</div>
                <div>has_error is equal to false</div>
              </div>
              <p className="text-sm text-muted-foreground">Track true/false states or conditions.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Temporary Variables</h4>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                <div>temp is equal to a</div>
                <div>a is equal to b</div>
                <div>b is equal to temp</div>
              </div>
              <p className="text-sm text-muted-foreground">Store intermediate values during calculations.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
