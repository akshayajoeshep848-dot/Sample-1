# Day 3: Control Flow (Conditionals & Loops)

**Duration:** 2 Hours

## Lesson Objectives

By the end of this lesson, you will:

*   Understand how to make decisions in code using conditional statements
*   Learn different types of loops for repetitive tasks
*   Master the ternary operator for concise conditionals
*   Combine conditions with logical operators
*   Recognize common patterns in control flow

## 1. Conditional Statements

### The if Statement

Executes code if a condition is true:

**Basic**

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}
```

**If-Else**

```javascript
let age = 16;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

**Else If**

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
```

### Switch Statement

Alternative to multiple if-else conditions:

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("Weekend is coming!");
        break;
    default:
        console.log("Regular day");
}
```

> **Note:** Always include `break` statements to prevent "fall-through".

### Ternary Operator

Shorthand for simple if-else statements:

```javascript
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"
```

## 2. Loops in JavaScript

### for Loop

Executes code a specific number of times:

```javascript
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

#### Loop Structure:

`for (initialization; condition; increment) { ... }`

1.  **Initialization:** Runs once at start (`let i = 1`)
2.  **Condition:** Checked before each iteration (`i <= 5`)
3.  **Increment:** Runs after each iteration (`i++`)

### while Loop

Repeats while a condition is true:

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

### do...while Loop

Executes at least once, then checks condition:

```javascript
let userInput;
do {
    userInput = prompt("Enter 'quit' to exit:");
} while (userInput !== 'quit');
```

### for...of Loop (ES6)

Iterates over iterable objects (arrays, strings):

```javascript
let colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}
// red
// green
// blue
```

### for...in Loop

Iterates over object properties:

```javascript
let person = {name: "Alice", age: 25};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: Alice
// age: 25
```

## 3. Loop Control Statements

### break

Exits the loop immediately:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit loop when i is 5
    }
    console.log(i);
}
// Output: 1, 2, 3, 4
```

### continue

Skips the current iteration:

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip iteration when i is 3
    }
    console.log(i);
}
// Output: 1, 2, 4, 5
```

### Labels (Rarely Used)

Identify loops for break/continue:

```javascript
outerLoop:
for (let i = 1; i <= 3; i++) {
    innerLoop:
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // Breaks out of both loops
        }
        console.log(`i=${i}, j=${j}`);
    }
}
```

## 4. Practical Examples

### Example 1: FizzBuzz

Classic programming challenge:

```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

### Example 2: Password Validation

```javascript
let password = "Secure123";
let isValid = false;

if (password.length >= 8) {
    if (/[A-Z]/.test(password)) {
        if (/\[d]/.test(password)) {
            isValid = true;
        }
    }
}

console.log(isValid ? "Valid password" : "Invalid password");
```

### Example 3: Sum Array Elements

```javascript
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
    sum += num;
}

console.log("Total:", sum); // 100
```

## Quiz

### MCQs

1.  What will this code output?
    `let x = 5; if (x > 3) { console.log("A"); } else if (x > 4) { console.log("B"); }`
    *   a) A
    *   b) B
    *   c) A then B

2.  Which loop guarantees at least one execution?
    *   a) for
    *   b) while
    *   c) do...while

3.  What does the `continue` statement do?
    *   a) Exits the loop entirely
    *   b) Skips to the next iteration
    *   c) Restarts the loop

### Coding Exercises

1.  Write a program that checks if a number is even or odd using an if-else statement.
2.  Use a for loop to calculate the factorial of 5 (5! = 5×4×3×2×1).
3.  Rewrite this if-else using a ternary operator:
    `let access; if (age >= 18) { access = "granted"; } else { access = "denied"; }`

## Summary

*   Use `if`, `else if`, and `else` for decision making
*   `switch` statements handle multiple fixed cases
*   Loops (`for`, `while`, `do...while`) repeat code execution
*   `break` exits loops, `continue` skips iterations
*   The ternary operator (`? :`) provides concise conditionals

> **Next:** On Day 4, we'll learn about **functions in JavaScript**!

## Want More Practice?

*   Create a program that prints prime numbers up to 100
*   Build a simple number guessing game using loops and conditionals
*   Try solving problems on [Edabit](https://edabit.com/challenges/javascript) or [Codewars](https://www.codewars.com/)
