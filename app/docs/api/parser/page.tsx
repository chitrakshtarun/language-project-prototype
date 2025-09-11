import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ParserAPIPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Parser API</h1>
        <p className="text-xl text-muted-foreground">
          Understanding the core parser that converts English code to JavaScript.
        </p>
      </div>

      {/* Main Function */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>customParse()</span>
          </CardTitle>
          <CardDescription>The main entry point for converting English code to JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signature" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="signature">Function Signature</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="example">Usage Example</TabsTrigger>
            </TabsList>

            <TabsContent value="signature">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-blue-600">function</div>
                  <div>
                    <span className="text-purple-600">customParse</span>(englishCode:{" "}
                    <span className="text-green-600">string</span>): <span className="text-green-600">string</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Parameters</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <code className="bg-muted px-2 py-1 rounded">englishCode</code> - The English-like source code to
                      parse
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Returns</h4>
                  <p className="text-sm">Returns the generated JavaScript code as a string</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="implementation">
              <div className="space-y-4">
                <h4 className="font-semibold">How it works</h4>
                <ol className="space-y-2 text-sm">
                  <li>
                    <strong>1. Line Splitting:</strong> Breaks input into individual lines
                  </li>
                  <li>
                    <strong>2. Context Tracking:</strong> Maintains parsing state (indentation, blocks)
                  </li>
                  <li>
                    <strong>3. Parser Chain:</strong> Tries each construct parser in order
                  </li>
                  <li>
                    <strong>4. Code Generation:</strong> Builds JavaScript output
                  </li>
                </ol>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div>const lines = englishCode.split("\\n");</div>
                  <div>let jsCode = "";</div>
                  <div>let indentLevel = 0;</div>
                  <div className="mt-2">// Process each line...</div>
                  <div>for (let i = 0; i &lt; lines.length; i++) {`{`}</div>
                  <div className="ml-4">// Try each parser...</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="example">
              <div className="space-y-4">
                <h4 className="font-semibold">Basic Usage</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-600">// Import the parser</div>
                  <div>import {"{ customParse }"} from './language/interpreter/parser';</div>
                  <div className="mt-2 text-green-600">// English code</div>
                  <div>const englishCode = `</div>
                  <div className="ml-4">x is equal to 10</div>
                  <div className="ml-4">print x</div>
                  <div>`;</div>
                  <div className="mt-2 text-green-600">// Parse to JavaScript</div>
                  <div>const jsCode = customParse(englishCode);</div>
                  <div>console.log(jsCode);</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Parse Context */}
      <Card>
        <CardHeader>
          <CardTitle>ParseContext Interface</CardTitle>
          <CardDescription>Context object passed to each construct parser</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <div>
              <span className="text-blue-600">interface</span> ParseContext {"{"}
            </div>
            <div className="ml-4">
              line: <span className="text-green-600">string</span>;
            </div>
            <div className="ml-4">
              indentLevel: <span className="text-green-600">number</span>;
            </div>
            <div className="ml-4">
              inIfBlock: <span className="text-green-600">boolean</span>;
            </div>
            <div className="ml-4">
              inWhileLoop: <span className="text-green-600">boolean</span>;
            </div>
            <div className="ml-4">
              declaredVariables: <span className="text-green-600">Set&lt;string&gt;</span>;
            </div>
            <div>{"}"}</div>
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="font-semibold">Properties</h4>
            <div className="grid gap-3">
              <div className="flex items-start space-x-3">
                <Badge variant="outline">line</Badge>
                <span className="text-sm">Current line being processed</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline">indentLevel</Badge>
                <span className="text-sm">Current indentation depth for code blocks</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline">inIfBlock</Badge>
                <span className="text-sm">Whether currently inside an if statement</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline">inWhileLoop</Badge>
                <span className="text-sm">Whether currently inside a while loop</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline">declaredVariables</Badge>
                <span className="text-sm">Set of all declared variable names</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parse Result */}
      <Card>
        <CardHeader>
          <CardTitle>ParseResult Interface</CardTitle>
          <CardDescription>Result object returned by each construct parser</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <div>
              <span className="text-blue-600">interface</span> ParseResult {"{"}
            </div>
            <div className="ml-4">
              jsCode: <span className="text-green-600">string</span>;
            </div>
            <div className="ml-4">
              indentLevel: <span className="text-green-600">number</span>;
            </div>
            <div className="ml-4">
              inIfBlock: <span className="text-green-600">boolean</span>;
            </div>
            <div className="ml-4">
              inWhileLoop: <span className="text-green-600">boolean</span>;
            </div>
            <div className="ml-4">
              declaredVariables: <span className="text-green-600">Set&lt;string&gt;</span>;
            </div>
            <div className="ml-4">
              handled: <span className="text-green-600">boolean</span>;
            </div>
            <div>{"}"}</div>
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="font-semibold">Properties</h4>
            <div className="grid gap-3">
              <div className="flex items-start space-x-3">
                <Badge variant="outline">jsCode</Badge>
                <span className="text-sm">Generated JavaScript code for this line</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline">handled</Badge>
                <span className="text-sm">Whether the parser handled this line</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline">...context</Badge>
                <span className="text-sm">Updated context for the next line</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parser Chain */}
      <Card>
        <CardHeader>
          <CardTitle>Parser Chain</CardTitle>
          <CardDescription>Order in which construct parsers are executed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The parser tries each construct parser in the following order until one handles the line:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                <Badge>1</Badge>
                <span className="font-mono text-sm">parseIfStatements</span>
                <span className="text-sm text-muted-foreground">- if/else/endif blocks</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                <Badge>2</Badge>
                <span className="font-mono text-sm">parseForLoops</span>
                <span className="text-sm text-muted-foreground">- for/endfor loops</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                <Badge>3</Badge>
                <span className="font-mono text-sm">parseWhileLoops</span>
                <span className="text-sm text-muted-foreground">- while/endwhile loops</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                <Badge>4</Badge>
                <span className="font-mono text-sm">parseArithmeticOperations</span>
                <span className="text-sm text-muted-foreground">- mathematical expressions</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                <Badge>5</Badge>
                <span className="font-mono text-sm">parseVariableDeclarations</span>
                <span className="text-sm text-muted-foreground">- variable assignments</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-muted rounded">
                <Badge>6</Badge>
                <span className="font-mono text-sm">parsePrintStatements</span>
                <span className="text-sm text-muted-foreground">- print commands</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error Handling */}
      <Card>
        <CardHeader>
          <CardTitle>Error Handling</CardTitle>
          <CardDescription>How the parser handles unsupported syntax</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              When no parser can handle a line, it's marked as unsupported:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <div>if (!handled) {"{"}</div>
              <div className="ml-4">
                jsCode += `${"{"}
                {"{"}getIndent(indentLevel){"}"}// Unsupported: ${"{"}
                {"{"}line{"}"}`;
              </div>
              <div>{"}"}</div>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">
                Note
              </Badge>
              <div>
                <p className="font-medium">Graceful degradation</p>
                <p className="text-sm text-muted-foreground">
                  Unsupported lines become comments, allowing partial compilation.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
