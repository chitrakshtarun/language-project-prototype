export const userInput = {
  id: "user-input",
  name: "User Input Examples",
  code: `print "=== User Input Examples ==="
print ""

print "Example 1: Basic string input"
initialise name with user input "Enter your name:"
print "Hello, " + name
print ""

print "Example 2: Number input with calculation"
initialise age as number with user input "Enter your age:"
initialise nextYear as number
nextYear is equal to age plus 1
print "Next year you will be " + nextYear
print ""

print "Example 3: Boolean input"
initialise isStudent as boolean with user input "Are you a student? (true/false):"
if isStudent then
print "You are a student!"
else
print "You are not a student."
endif
print ""

print "Example 4: Multiple inputs"
initialise firstNumber as number with user input "Enter first number:"
initialise secondNumber as number with user input "Enter second number:"
initialise sum as number
sum is equal to firstNumber plus secondNumber
print "The sum is " + sum`,
};

