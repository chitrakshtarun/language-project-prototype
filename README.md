# Language Project Prototype

A general-purpose programming language that resembles natural English, making programming more accessible and intuitive for everyone. This prototype transpiles English-like syntax to JavaScript.

## Features

### Core Language Features

- **Variable Declaration and Assignment**

  ```
  x is equal to 42
  name is equal to "John"
  ```

- **User Input**

  ```
  initialise name with user input "Enter your name:"
  initialise age as number with user input "Enter your age:"
  initialise isStudent as boolean with user input "Are you a student? (true/false):"
  ```

  Supports optional type specification (`as number`, `as boolean`, `as string`) and custom prompt messages.

- **Mathematical Operations**

  - Addition: `result is equal to x plus y`
  - Subtraction: `result is equal to x minus y`
  - Multiplication: `result is equal to x times y`
  - Division: `result is equal to x divided by y`

- **Random Number Generation**

  ```
  randomValue is equal to random number from 1 to 10
  diceRoll is equal to random number from 1 to 6
  ```

  Generates a random integer between the specified minimum and maximum values (inclusive). Both bounds can be literal numbers or expressions.

- **Array Operations**

  ```
  days is a list containing "Monday", "Tuesday", "Wednesday"
  print size of days
  print position 1 of days
  ```

- **Control Flow**

  - **If Statements**: `if x is greater than 10 then`
  - **If-Else Statements**: `if x is equal to 5 then ... else ...`
  - **For Loops**:
    - Range: `for i from 1 to 5`
    - Array iteration: `for day in days`
  - **While Loops**: `while x is less than 10`

- **Boolean Logic**

  - **AND**: `if x is greater than 5 and y is less than 10 then`
  - **OR**: `if x is equal to 5 or y is equal to 10 then`
  - **NOT**: `if x is not equal to 5 then`

- **Comparison Operators**

  - Equal to: `is equal to`
  - Not equal to: `is not equal to`
  - Greater than: `is greater than`
  - Less than: `is less than`

- **Ternary Conditionals**

  ```
  if age is greater than 17 print "Adult" otherwise print "Minor"
  ```

- **Increment/Decrement Operations**

  ```
  increment counter by 1
  increment counter by 5
  ```

- **Print Statements**
  ```
  print "Hello, World!"
  print x
  print "Value: " + x
  ```

### Web Interface & Documentation

- **Interactive Documentation Website** with comprehensive examples
- **Live Code Examples** demonstrating all language features
- **API Documentation** for parser and interpreter
- **Syntax Reference Guide** with detailed explanations
- **Quick Start Tutorial** for new users

## Getting Started

Visit the documentation website to explore examples and learn the syntax. The language supports natural English-like programming constructs that make it easy to write and understand code.

## Architecture

- **Parser**: Converts English-like syntax to JavaScript AST
- **Interpreter**: Executes the transpiled JavaScript code
- **Web Interface**: Next.js-based documentation and examples platform
