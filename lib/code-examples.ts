export const codeExamples = [
  // x + y
  {
    id: "basic",
    name: "Basic Addition",
    code: `x is equal to 10
y is equal to 20

z is equal to x plus y
print z

if z is greater than 25 then
print "z is quite large!"
endif`,
  },
  // calculator
  {
    id: "calculator",
    name: "Simple Calculator",
    code: `a is equal to 10
b is equal to 5

sum is equal to a plus b
print "Sum: " + sum

difference is equal to a minus b
print "Difference: " + difference

product is equal to a times b
print "Product: " + product

quotient is equal to a divided by b
print "Quotient: " + quotient`,
  },
  // conditional
  {
    id: "ifconditional",
    name: "If Conditionals",
    code: `age is equal to 18

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
  },
  // if-else conditionals
  {
    id: "ifelse",
    name: "If-Else Conditionals",
    code: `x is equal to 10 
if x is equal to 10 then
print "X is 10"
else
print "X is not 10"
endif
`,
  },
  // increment
  {
    id: "increment",
    name: "Increment Example",
    code: `counter is equal to 0
print "Initial value: " + counter

increment counter by 1
print "After increment: " + counter

increment counter by 5
print "After adding 5: " + counter`,
  },
  // for loops
  {
    id: "forloops",
    name: "For Loops",
    code: `for i from 1 to 5
print i
endfor`,
  },
  // while loop
  {
    id: "whileloop",
    name: "While Loops",
    code: `count is equal to 1
while count is less than 5 do
print "Count is now: " + count
increment count by 1
endwhile`,
  },
  // boolean logic
  {
    id: "booleanlogic",
    name: "Boolean Logic",
    code: `x is equal to 5
y is equal to 10
z is equal to 15

if x is greater than 3 and y is less than 15 then
print "Both conditions are true"
endif

if x is equal to 5 or z is equal to 20 then
print "At least one condition is true"
endif

if x is not equal to 10 and y is greater than 5 then
print "x is not 10 AND y is greater than 5"
endif`,
  },
  // ternary logic
  {
    id: "ternarylogic",
    name: "Ternary Conditionals",
    code: `age is equal to 18
score is equal to 85

if age is greater than 17 print "Adult" otherwise print "Minor"
if score is greater than 90 print "Excellent" otherwise print "Good"
if age is 18 print "Just turned adult!" otherwise print "Not 18"`,
  },
  // playground
  {
    id: "playground",
    name: "Playground",
    code: ``,
  },
];
