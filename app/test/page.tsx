"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { customParse, executeJS } from "@/language/interpreter";
import Link from "next/link";

interface TestCase {
  name: string;
  category: string;
  englishCode: string;
  expectedOutput: string;
  expectedJS?: string; // Optional: for parser unit tests
}

interface TestResult {
  testCase: TestCase;
  passed: boolean;
  error?: string;
  actualOutput?: string;
  actualJS?: string;
  executionTime?: number;
  iteration: number;
}

export default function TestPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [_runCount, setRunCount] = useState(1);
  const [iterationsInput, setIterationsInput] = useState("1");
  const [_progress, setProgress] = useState({ completed: 0, total: 0 });
  const [aggregateByTest, setAggregateByTest] = useState<
    Record<
      string,
      {
        passes: number;
        failures: number;
        total: number;
      }
    >
  >({});
  const [summary, setSummary] = useState({
    total: 0,
    passed: 0,
    failed: 0,
    totalTime: 0,
  });

  const MAX_TEST_EXECUTIONS = 100_000;

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Comprehensive test cases covering all language features
  const testCases: TestCase[] = [
    // Unit Tests: Variable Declarations
    {
      name: "Simple Variable Declaration",
      category: "Variable Declarations",
      englishCode: `x is equal to 10
print x`,
      expectedOutput: "10\n",
    },
    {
      name: "Multiple Variable Declarations",
      category: "Variable Declarations",
      englishCode: `x is equal to 5
y is equal to 10
z is equal to 15
print x
print y
print z`,
      expectedOutput: "5\n10\n15\n",
    },
    {
      name: "String Variable Declaration",
      category: "Variable Declarations",
      englishCode: `name is equal to "Alice"
print name`,
      expectedOutput: "Alice\n",
    },
    {
      name: "Variable Used Before Declaration",
      category: "Variable Declarations",
      englishCode: `print x
x is equal to 10`,
      expectedOutput: "undefined\n",
    },

    // Unit Tests: Arithmetic Operations
    {
      name: "Addition",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 10
y is equal to 20
z is equal to x plus y
print z`,
      expectedOutput: "30\n",
    },
    {
      name: "Subtraction",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 20
y is equal to 5
z is equal to x minus y
print z`,
      expectedOutput: "15\n",
    },
    {
      name: "Multiplication",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 5
y is equal to 4
z is equal to x times y
print z`,
      expectedOutput: "20\n",
    },
    {
      name: "Division",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 20
y is equal to 4
z is equal to x divided by y
print z`,
      expectedOutput: "5\n",
    },
    {
      name: "Complex Arithmetic Expression",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 10
y is equal to 5
z is equal to x plus y times 2
print z`,
      expectedOutput: "25\n", // Intentional expectation mismatch to validate error reporting
    },
    {
      name: "Increment Operation",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 5
increment x by 1
print x`,
      expectedOutput: "6\n",
    },
    {
      name: "Decrement Operation",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 5
decrement x by 1
print x`,
      expectedOutput: "4\n",
    },
    {
      name: "Division by Zero Handling",
      category: "Arithmetic Operations",
      englishCode: `x is equal to 10
y is equal to 0
z is equal to x divided by y
print z`,
      expectedOutput: "", // Should handle gracefully or show Infinity
    },

    // Unit Tests: Print Statements
    {
      name: "Print Number",
      category: "Print Statements",
      englishCode: `print 42`,
      expectedOutput: "42\n",
    },
    {
      name: "Print String",
      category: "Print Statements",
      englishCode: `print "Hello, World!"`,
      expectedOutput: "Hello, World!\n",
    },
    {
      name: "Print Variable",
      category: "Print Statements",
      englishCode: `x is equal to 100
print x`,
      expectedOutput: "100\n",
    },
    {
      name: "Multiple Print Statements",
      category: "Print Statements",
      englishCode: `print "First"
print "Second"
print "Third"`,
      expectedOutput: "First\nSecond\nThird\n",
    },
    {
      name: "Print Empty String",
      category: "Print Statements",
      englishCode: `print ""`,
      expectedOutput: "\n",
    },
    {
      name: "Print Undefined Variable",
      category: "Print Statements",
      englishCode: `print missingValue`,
      expectedOutput: "undefined\n",
    },

    // Unit Tests: If Statements
    {
      name: "Simple If Statement - True Condition",
      category: "If Statements",
      englishCode: `x is equal to 10
if x is greater than 5 then
print "x is greater than 5"
endif`,
      expectedOutput: "x is greater than 5\n",
    },
    {
      name: "Simple If Statement - False Condition",
      category: "If Statements",
      englishCode: `x is equal to 3
if x is greater than 5 then
print "x is greater than 5"
endif`,
      expectedOutput: "",
    },
    {
      name: "If with Less Than",
      category: "If Statements",
      englishCode: `x is equal to 3
if x is less than 5 then
print "x is less than 5"
endif`,
      expectedOutput: "x is less than 5\n",
    },
    {
      name: "If with Equal To",
      category: "If Statements",
      englishCode: `x is equal to 5
if x is equal to 5 then
print "x equals 5"
endif`,
      expectedOutput: "x equals 5\n",
    },
    {
      name: "Nested If Statements",
      category: "If Statements",
      englishCode: `age is equal to 18
if age is greater than 12 then
if age is less than 20 then
print "Teenager"
endif
endif`,
      expectedOutput: "Teenager\n",
    },
    {
      name: "If Statement Without Body",
      category: "If Statements",
      englishCode: `x is equal to 10
if x is greater than 5 then
endif
print "After if"`,
      expectedOutput: "After if\n",
    },
    {
      name: "If Statement With AND Condition",
      category: "If Statements",
      englishCode: `x is equal to 10
y is equal to 5
if x is greater than 5 and y is less than 10 then
print "Both conditions true"
endif`,
      expectedOutput: "Both conditions true\n",
    },
    {
      name: "If Statement With Not Equal Condition",
      category: "If Statements",
      englishCode: `status is equal to "ready"
if status is not equal to "idle" then
print "Active"
endif`,
      expectedOutput: "Active\n",
    },

    // Unit Tests: For Loops
    {
      name: "Simple For Loop",
      category: "For Loops",
      englishCode: `for i from 1 to 5
print i
endfor`,
      expectedOutput: "1\n2\n3\n4\n5\n",
    },
    {
      name: "For Loop with Variable",
      category: "For Loops",
      englishCode: `sum is equal to 0
for i from 1 to 3
sum is equal to sum plus i
endfor
print sum`,
      expectedOutput: "6\n",
    },
    {
      name: "Nested For Loops",
      category: "For Loops",
      englishCode: `for i from 1 to 2
for j from 1 to 2
print i
print j
endfor
endfor`,
      expectedOutput: "1\n1\n1\n2\n2\n1\n2\n2\n",
    },
    {
      name: "For Loop Without Body",
      category: "For Loops",
      englishCode: `for i from 1 to 3
endfor
print "Loop done"`,
      expectedOutput: "Loop done\n",
    },
    {
      name: "For Loop Single Value",
      category: "For Loops",
      englishCode: `for i from 3 to 3
print i
endfor`,
      expectedOutput: "3\n",
    },
    {
      name: "For Loop With Variable Bounds",
      category: "For Loops",
      englishCode: `start is equal to 2
limit is equal to 4
for i from start to limit
print i
endfor`,
      expectedOutput: "2\n3\n4\n",
    },

    // Unit Tests: While Loops
    {
      name: "Simple While Loop",
      category: "While Loops",
      englishCode: `x is equal to 1
while x is less than 4 do
print x
increment x by 1
endwhile`,
      expectedOutput: "1\n2\n3\n",
    },
    {
      name: "While Loop with Condition",
      category: "While Loops",
      englishCode: `count is equal to 0
while count is less than 3 do
print count
increment count by 1
endwhile`,
      expectedOutput: "0\n1\n2\n",
    },
    {
      name: "While Loop Initially False",
      category: "While Loops",
      englishCode: `x is equal to 0
while x is greater than 0 do
print x
increment x by 1
endwhile
print "Exited loop"`,
      expectedOutput: "Exited loop\n",
    },
    {
      name: "While Condition Greater Than Or Equal",
      category: "While Loops",
      englishCode: `x is equal to 3
while x is greater than or equal to 1 do
print x
decrement x by 1
endwhile`,
      expectedOutput: "3\n2\n1\n",
    },
    {
      name: "While Condition Not Equal",
      category: "While Loops",
      englishCode: `x is equal to 0
while x is not equal to 3 do
print x
increment x by 1
endwhile`,
      expectedOutput: "0\n1\n2\n",
    },

    // Unit Tests: Functions
    {
      name: "Simple Function Call",
      category: "Functions",
      englishCode: `let greet be a function
print "Hello"
end function

run greet`,
      expectedOutput: "Hello\n",
    },
    {
      name: "Function with Parameters",
      category: "Functions",
      englishCode: `let add be a function accepting a and b
return a plus b
end function

result is equal to run add with 5 and 10
print result`,
      expectedOutput: "16\n", // Expected failure to ensure coverage
    },
    {
      name: "Function with Multiple Statements",
      category: "Functions",
      englishCode: `let multiply be a function accepting x and y
product is equal to x times y
return product
end function

result is equal to run multiply with 3 and 4
print result`,
      expectedOutput: "12\n",
    },
    {
      name: "Function with Conditional",
      category: "Functions",
      englishCode: `let checkAge be a function accepting age
if age is greater than 17 then
return "Adult"
endif
return "Minor"
end function

status is equal to run checkAge with 20
print status`,
      expectedOutput: "Adult\n",
    },
    {
      name: "Recursive Function",
      category: "Functions",
      englishCode: `let factorial be a function accepting n
if n is less than or equal to 1 then
return 1
endif
temp is equal to n minus 1
fact is equal to run factorial with temp
return n times fact
end function

result is equal to run factorial with 5
print result`,
      expectedOutput: "120\n",
    },

    // Integration Tests: Complex Scenarios
    {
      name: "Calculator with Conditionals",
      category: "Integration Tests",
      englishCode: `x is equal to 10
y is equal to 20
z is equal to x plus y
print z

if z is greater than 25 then
print "z is quite large!"
endif`,
      expectedOutput: "30\nz is quite large!\n",
    },
    {
      name: "Loop with Conditionals",
      category: "Integration Tests",
      englishCode: `for i from 1 to 5
if i is greater than 3 then
print i
endif
endfor`,
      expectedOutput: "Numbers greater than three:\n4\n5\n",
    },
    {
      name: "Function with Loop",
      category: "Integration Tests",
      englishCode: `let sumArray be a function accepting arr
sum is equal to 0
for item in arr
sum is equal to sum plus item
endfor
return sum
end function

numbers is equal to [1, 2, 3, 4, 5]
result is equal to run sumArray with numbers
print result`,
      expectedOutput: "15\n",
    },
    {
      name: "Nested Control Structures",
      category: "Integration Tests",
      englishCode: `for i from 1 to 3
if i is equal to 2 then
print "Found two!"
endif
endfor`,
      expectedOutput: "Found two!\n",
    },
    {
      name: "Empty Code",
      category: "Integration Tests",
      englishCode: ``,
      expectedOutput: "",
    },
    {
      name: "Whitespace Only",
      category: "Integration Tests",
      englishCode: `   

  `,
      expectedOutput: "",
    },
  ];

  const runTest = (testCase: TestCase): TestResult => {
    const startTime = performance.now();
    try {
      const jsCode = customParse(testCase.englishCode);
      const output = executeJS(jsCode);
      const executionTime = performance.now() - startTime;

      // Normalize outputs for comparison (trim whitespace)
      const normalizedExpected = testCase.expectedOutput.trim();
      const normalizedActual = output.trim();

      const passed = normalizedExpected === normalizedActual;

      return {
        testCase,
        passed,
        actualOutput: output,
        actualJS: jsCode,
        executionTime,
        error: passed ? undefined : `Expected: "${normalizedExpected}", Got: "${normalizedActual}"`,
        iteration: 0,
      };
    } catch (error) {
      const executionTime = performance.now() - startTime;
      return {
        testCase,
        passed: false,
        error: error instanceof Error ? error.message : String(error),
        executionTime,
        iteration: 0,
      };
    }
  };

  const runSingleIteration = (iterationIndex: number, remainingCapacity: number): TestResult[] => {
    const randomizedCases = shuffleArray(testCases);
    const testsThisIteration = Math.min(remainingCapacity, Math.floor(Math.random() * testCases.length) + 1);
    const selectedCases = randomizedCases.slice(0, testsThisIteration);

    return selectedCases.map((testCase) => {
      const result = runTest(testCase);
      return {
        ...result,
        iteration: iterationIndex,
      };
    });
  };

  const runAllTests = async (iterations = 1) => {
    const safeIterations = Number.isFinite(iterations) && iterations > 0 ? Math.floor(iterations) : 1;

    setIsRunning(true);
    setRunCount(safeIterations);
    setProgress({ completed: 0, total: safeIterations });
    setAggregateByTest({});
    setSummary({
      total: 0,
      passed: 0,
      failed: 0,
      totalTime: 0,
    });

    const aggregate: Record<string, { passes: number; failures: number; total: number }> = {};
    let cumulativeTotal = 0;
    let cumulativePassed = 0;
    let cumulativeFailed = 0;
    const startTime = performance.now();

    let remainingExecutions = MAX_TEST_EXECUTIONS;

    for (let i = 1; i <= safeIterations && remainingExecutions > 0; i++) {
      const iterationResults = runSingleIteration(i, remainingExecutions);
      remainingExecutions -= iterationResults.length;

      iterationResults.forEach((result) => {
        const key = result.testCase.name;
        const current = aggregate[key] ?? { passes: 0, failures: 0, total: 0 };
        const updated = {
          passes: current.passes + (result.passed ? 1 : 0),
          failures: current.failures + (result.passed ? 0 : 1),
          total: current.total + 1,
        };
        aggregate[key] = updated;
        cumulativeTotal += 1;
        if (result.passed) {
          cumulativePassed += 1;
        } else {
          cumulativeFailed += 1;
        }
      });

      setAggregateByTest({ ...aggregate });
      setTestResults(iterationResults);
      setSummary({
        total: cumulativeTotal,
        passed: cumulativePassed,
        failed: cumulativeFailed,
        totalTime: performance.now() - startTime,
      });
      setProgress({
        completed: i,
        total: safeIterations,
      });

      // Yield to the event loop to keep UI responsive
      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    setIsRunning(false);
  };

  useEffect(() => {
    void runAllTests(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategoryResults = (category: string) => {
    const categoryTests = testCases.filter((tc) => tc.category === category);
    let total = 0;
    let passed = 0;

    categoryTests.forEach((testCase) => {
      const stats = aggregateByTest[testCase.name];
      if (stats) {
        total += stats.total;
        passed += stats.passes;
      }
    });

    return { total, passed };
  };

  const categories = Array.from(new Set(testCases.map((tc) => tc.category)));
  const parsedIterationsInput = Number(iterationsInput);
  const isValidIterationsInput = Number.isFinite(parsedIterationsInput) && parsedIterationsInput >= 1;

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Comprehensive Test Suite</h1>
          <p className="text-muted-foreground">
            White-box and black-box testing for the natural language programming interpreter
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Button onClick={() => void runAllTests(1)} disabled={isRunning}>
            {isRunning ? "Running..." : "Run (Random Order)"}
          </Button>
          <Button onClick={() => void runAllTests(100000)} disabled={isRunning} variant="secondary">
            {isRunning ? "Running..." : "Run 100k tests"}
          </Button>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={1}
              value={iterationsInput}
              onChange={(e) => setIterationsInput(e.target.value)}
              className="w-24"
              placeholder="Runs"
              disabled={isRunning}
            />
            <Button
              onClick={() => void runAllTests(isValidIterationsInput ? parsedIterationsInput : 1)}
              disabled={isRunning || !isValidIterationsInput}
            >
              {isRunning ? "Running..." : "Run Custom"}
            </Button>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <Card className="p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Test Results</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Total Tests</div>
            <div className="text-2xl font-bold">{summary.total}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Passed</div>
            <div className="text-2xl font-bold text-green-600">{summary.passed}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Failed</div>
            <div className="text-2xl font-bold text-red-600">{summary.failed}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Total Time</div>
            <div className="text-2xl font-bold">{summary.totalTime.toFixed(2)}ms</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm text-muted-foreground mb-2">Success Rate</div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all"
              style={{ width: `${summary.total > 0 ? (summary.passed / summary.total) * 100 : 0}%` }}
            />
          </div>
          <div className="text-sm mt-1">
            {summary.total > 0 ? ((summary.passed / summary.total) * 100).toFixed(1) : 0}%
          </div>
        </div>
      </Card>

      {/* Category Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {categories.map((category) => {
          const { total, passed } = getCategoryResults(category);
          return (
            <Card key={category} className="p-4">
              <div className="text-sm font-medium mb-2">{category}</div>
              <div className="flex items-center gap-2">
                <Badge variant={passed === total ? "default" : "destructive"}>
                  {passed}/{total}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {total > 0 ? ((passed / total) * 100).toFixed(0) : 0}%
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Test Results */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Detailed logs below show the most recent iteration; summary metrics above aggregate all iterations in this
          run.
        </p>
        {categories.map((category) => {
          // Only show categories that have results in the latest iteration for detail view
          const latestCategoryResults = testResults.filter((r) => r.testCase.category === category);
          if (latestCategoryResults.length === 0) return null;

          return (
            <Card key={category} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{category}</h2>
                <span className="text-xs text-muted-foreground">
                  Latest iteration {testResults[0]?.iteration ?? "-"}
                </span>
              </div>
              <div className="space-y-3">
                {latestCategoryResults.map((result, index) => (
                  <div
                    key={`${result.testCase.name}-${index}`}
                    className={`p-4 rounded-lg border ${
                      result.passed
                        ? "bg-green-50 dark:bg-green-950/20 border-green-200"
                        : "bg-red-50 dark:bg-red-950/20 border-red-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant={result.passed ? "default" : "destructive"}>
                          {result.passed ? "PASS" : "FAIL"}
                        </Badge>
                        <span className="font-medium">{result.testCase.name}</span>
                        <span className="text-xs text-muted-foreground">Iteration {result.iteration}</span>
                      </div>
                      {result.executionTime && (
                        <span className="text-xs text-muted-foreground">{result.executionTime.toFixed(2)}ms</span>
                      )}
                    </div>

                    <div className="text-sm space-y-2">
                      <div>
                        <div className="font-medium text-muted-foreground mb-1">English Code:</div>
                        <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
                          {result.testCase.englishCode || "(empty)"}
                        </pre>
                      </div>

                      {result.actualJS && (
                        <div>
                          <div className="font-medium text-muted-foreground mb-1">Generated JavaScript:</div>
                          <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">{result.actualJS}</pre>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="font-medium text-muted-foreground mb-1">Expected Output:</div>
                          <pre className="bg-muted p-2 rounded text-xs">
                            {result.testCase.expectedOutput || "(empty)"}
                          </pre>
                        </div>
                        <div>
                          <div className="font-medium text-muted-foreground mb-1">Actual Output:</div>
                          <pre className="bg-muted p-2 rounded text-xs">{result.actualOutput || "(empty)"}</pre>
                        </div>
                      </div>

                      {result.error && (
                        <div className="text-red-600 dark:text-red-400">
                          <div className="font-medium mb-1">Error:</div>
                          <div className="text-xs">{result.error}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Performance Summary */}
      <Card className="p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Performance Evaluation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Average Test Time</div>
            <div className="text-2xl font-bold">
              {(() => {
                if (testResults.length === 0) return "0.00";
                const total = testResults.reduce((sum, r) => sum + (r.executionTime || 0), 0);
                return (total / testResults.length).toFixed(2);
              })()}
              ms
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Fastest Test</div>
            <div className="text-2xl font-bold">
              {(() => {
                if (testResults.length === 0) return "0.00";
                const minTime = testResults.reduce((min, r) => {
                  const time = r.executionTime ?? Infinity;
                  return time < min ? time : min;
                }, Infinity);
                return minTime === Infinity ? "0.00" : minTime.toFixed(2);
              })()}
              ms
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Slowest Test</div>
            <div className="text-2xl font-bold">
              {(() => {
                if (testResults.length === 0) return "0.00";
                const maxTime = testResults.reduce((max, r) => {
                  const time = r.executionTime ?? 0;
                  return time > max ? time : max;
                }, 0);
                return maxTime.toFixed(2);
              })()}
              ms
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Tests &lt; 200ms</div>
            <div className="text-2xl font-bold text-green-600">
              {testResults.filter((r) => (r.executionTime || 0) < 200).length}/{testResults.length}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
