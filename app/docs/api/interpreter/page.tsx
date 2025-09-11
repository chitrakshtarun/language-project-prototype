"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play, FileText, ArrowRight } from "lucide-react";

export default function InterpreterAPIPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Interpreter API</h1>
        <p className="text-xl text-muted-foreground">
          Understanding the JavaScript execution environment and how the language interpreter works.
        </p>
      </div>

      {/* Execute Function */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>executeJS()</span>
          </CardTitle>
          <CardDescription>Execute generated JavaScript code in a safe environment</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signature" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="signature">Function Signature</TabsTrigger>
              <TabsTrigger value="implementation">How It Works</TabsTrigger>
              <TabsTrigger value="example">Usage Example</TabsTrigger>
            </TabsList>

            <TabsContent value="signature">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-blue-600">function</div>
                  <div>
                    <span className="text-purple-600">executeJS</span>(jsCode:{" "}
                    <span className="text-green-600">string</span>): Promise&lt;
                    <span className="text-green-600">string</span>&gt;
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Parameters</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <code className="bg-muted px-2 py-1 rounded">jsCode</code> - The JavaScript code string to execute
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Returns</h4>
                  <p className="text-sm">Promise that resolves to the captured console output as a string</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="implementation">
              <div className="space-y-4">
                <h4 className="font-semibold">Execution Process</h4>
                <ol className="space-y-2 text-sm">
                  <li>
                    <strong>1. Console Capture:</strong> Redirects console.log to capture output
                  </li>
                  <li>
                    <strong>2. Safe Execution:</strong> Runs code in current JavaScript context
                  </li>
                  <li>
                    <strong>3. Output Collection:</strong> Collects all printed output
                  </li>
                  <li>
                    <strong>4. Error Handling:</strong> Catches and reports any runtime errors
                  </li>
                </ol>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div>// Simplified implementation concept</div>
                  <div>const output: string[] = [];</div>
                  <div>const originalLog = console.log;</div>
                  <div>console.log = (...args) =&gt; output.push(args.join(' '));</div>
                  <div className="mt-2">try {"{"}</div>
                  <div className="ml-4">eval(jsCode);</div>
                  <div>
                    {"}"} finally {"{"}
                  </div>
                  <div className="ml-4">console.log = originalLog;</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="example">
              <div className="space-y-4">
                <h4 className="font-semibold">Basic Usage</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600">// Import the interpreter</div>
                  <div>import {"{ executeJS }"} from './language/interpreter';</div>
                  <div className="mt-2 text-green-600">// JavaScript code to execute</div>
                  <div>const jsCode = `</div>
                  <div className="ml-4">let x = 10;</div>
                  <div className="ml-4">let y = 20;</div>
                  <div className="ml-4">console.log(x + y);</div>
                  <div>`;</div>
                  <div className="mt-2 text-green-600">// Execute and get output</div>
                  <div>const output = await executeJS(jsCode);</div>
                  <div>console.log(output); // "30"</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Complete Workflow */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Interpretation Workflow</CardTitle>
          <CardDescription>How English code becomes executed JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Step-by-Step Process</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <Badge>1</Badge>
                  <div>
                    <h5 className="font-semibold">English Input</h5>
                    <p className="text-sm text-muted-foreground">User writes code in natural English syntax</p>
                    <div className="bg-background p-2 rounded mt-2 font-mono text-sm">
                      x is equal to 10
                      <br />
                      print x
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <Badge>2</Badge>
                  <div>
                    <h5 className="font-semibold">Parsing</h5>
                    <p className="text-sm text-muted-foreground">customParse() converts English to JavaScript</p>
                    <div className="bg-background p-2 rounded mt-2 font-mono text-sm">
                      let x = 10;
                      <br />
                      console.log(x);
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <Badge>3</Badge>
                  <div>
                    <h5 className="font-semibold">Execution</h5>
                    <p className="text-sm text-muted-foreground">executeJS() runs the JavaScript and captures output</p>
                    <div className="bg-background p-2 rounded mt-2 font-mono text-sm text-green-600">10</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Integration Example</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div>import {"{ customParse, executeJS }"} from '@/language/interpreter';</div>
                <div className="mt-2">const englishCode = `</div>
                <div className="ml-4">age is equal to 25</div>
                <div className="ml-4">if age is greater than 18 then</div>
                <div className="ml-8">print "Adult"</div>
                <div className="ml-4">else</div>
                <div className="ml-8">print "Minor"</div>
                <div className="ml-4">endif</div>
                <div>`;</div>
                <div className="mt-2 text-green-600">// Parse English to JavaScript</div>
                <div>const jsCode = customParse(englishCode);</div>
                <div className="mt-2 text-green-600">// Execute and get result</div>
                <div>const output = await executeJS(jsCode);</div>
                <div>console.log(output); // "Adult"</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error Handling */}
      <Card>
        <CardHeader>
          <CardTitle>Error Handling</CardTitle>
          <CardDescription>How the interpreter deals with errors and edge cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Parse Errors</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div className="text-green-600">// Input: Unsupported syntax</div>
                <div>do something magical</div>
                <div className="mt-2 text-green-600">// Generated JavaScript:</div>
                <div>// Unsupported: do something magical</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Unsupported lines become comments, allowing partial execution of valid code.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Runtime Errors</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div className="text-green-600">// JavaScript that would cause error:</div>
                <div>let result = x / 0; // Division by zero</div>
                <div>console.log(undefined_variable); // Undefined variable</div>
                <div className="mt-2 text-red-600">// Error is caught and returned as output</div>
                <div className="text-red-600">// User sees the error message instead of crash</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Runtime errors are caught and displayed to the user instead of crashing the application.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Considerations */}
      <Card>
        <CardHeader>
          <CardTitle>Security and Limitations</CardTitle>
          <CardDescription>Understanding the execution environment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Note
              </Badge>
              <div>
                <p className="font-medium">Browser Environment</p>
                <p className="text-sm text-muted-foreground">
                  Code executes in the browser's JavaScript context with access to browser APIs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Limitation
              </Badge>
              <div>
                <p className="font-medium">No Sandboxing</p>
                <p className="text-sm text-muted-foreground">
                  Currently no sandboxing is implemented. Code has access to the global scope.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Feature
              </Badge>
              <div>
                <p className="font-medium">Output Capture</p>
                <p className="text-sm text-muted-foreground">
                  Console output is captured and returned rather than going to browser console.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Safety
              </Badge>
              <div>
                <p className="font-medium">Error Recovery</p>
                <p className="text-sm text-muted-foreground">
                  Errors don't crash the application and console.log is properly restored.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Considerations */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Considerations</CardTitle>
          <CardDescription>Understanding execution performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Execution Speed</h4>
              <p className="text-sm text-muted-foreground">
                The interpreter adds minimal overhead. Most time is spent in:
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Parsing English syntax (typically &lt;1ms for small programs)</li>
                <li>• JavaScript execution (depends on your code complexity)</li>
                <li>• Console output capture (minimal overhead)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Memory Usage</h4>
              <p className="text-sm text-muted-foreground">Memory usage is primarily from:</p>
              <ul className="space-y-1 text-sm">
                <li>• Generated JavaScript code strings</li>
                <li>• Captured output arrays</li>
                <li>• Variable storage in JavaScript runtime</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Optimization Tips</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="mt-1">
                    Tip
                  </Badge>
                  <div>
                    <p className="font-medium">Parse once, execute multiple times</p>
                    <p className="text-sm text-muted-foreground">
                      Cache parsed JavaScript if running the same code repeatedly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="mt-1">
                    Tip
                  </Badge>
                  <div>
                    <p className="font-medium">Limit output capture</p>
                    <p className="text-sm text-muted-foreground">
                      Very large amounts of console output can impact performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extension Points */}
      <Card>
        <CardHeader>
          <CardTitle>Extension Points</CardTitle>
          <CardDescription>How to extend the interpreter functionality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Custom Output Handling</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div>// Custom output processor</div>
                <div>function customExecuteJS(jsCode: string) {"{"}</div>
                <div className="ml-4">const output: string[] = [];</div>
                <div className="ml-4">const originalLog = console.log;</div>
                <div className="ml-4">console.log = (...args) =&gt; {"{"}</div>
                <div className="ml-8">// Custom formatting here</div>
                <div className="ml-8">output.push(formatOutput(args));</div>
                <div className="ml-4">{"}"};</div>
                <div className="ml-4">// ... rest of execution</div>
                <div>{"}"}</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Error Customization</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div>// Custom error handling</div>
                <div>try {"{"}</div>
                <div className="ml-4">eval(jsCode);</div>
                <div>
                  {"}"} catch (error) {"{"}
                </div>
                <div className="ml-4">// Custom error formatting</div>
                <div className="ml-4">return formatError(error);</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
