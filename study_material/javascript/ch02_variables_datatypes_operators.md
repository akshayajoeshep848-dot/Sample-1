# Day 2: Variables, Data Types, and Operators

**Duration:** 2 Hours

## Lesson Objectives

By the end of this lesson, you will:

*   Understand how to declare and use variables in JavaScript
*   Learn about JavaScript's primitive data types
*   Work with different types of operators (arithmetic, comparison, logical)
*   Practice type coercion and conversion

## 1. Variables in JavaScript

### Variable Declaration

Variables are containers for storing data values. JavaScript has three ways to declare variables:

*   **`var`**: Function-scoped, can be redeclared
    ```javascript
    var age = 25;
    ```
*   **`let`**: Block-scoped, can be reassigned
    ```javascript
    let name = "Alice";
    ```
*   **`const`**: Block-scoped, cannot be reassigned
    ```javascript
    const PI = 3.14;
    ```

### Naming Conventions

*   Can contain letters, digits, underscores, and dollar signs
*   Must begin with a letter, $ or _
*   Case sensitive (`myVar` ≠ `myvar`)
*   Use camelCase for variable names (`userName`)
*   Avoid JavaScript reserved words (`class`, `function`, etc.)

### Variable Examples

```javascript
// Valid variable declarations
let userName = "John_Doe123";
const MAX_USERS = 100;
var $price = 9.99;

// Invalid declarations (will cause errors)
// let 1stPlace = "winner";  // Cannot start with number
// const class = "math";     // Reserved word
```

## 2. Data Types in JavaScript

### Primitive Data Types

JavaScript has 7 primitive data types:

*   **String**: Textual data
    ```javascript
    let name = "Alice";
    let msg = 'Hello world!';
    ```
*   **Number**: Numeric data (integers and decimals)
    ```javascript
    let age = 25;
    let price = 9.99;
    ```
*   **Boolean**: Logical true/false
    ```javascript
    let isActive = true;
    let isAdmin = false;
    ```
*   **Null**: Intentional absence of value
    ```javascript
    let data = null;
    ```
*   **Undefined**: Variable declared but not assigned
    ```javascript
    let username;
    console.log(username); // undefined
    ```
*   **Symbol**: Unique and immutable value
    ```javascript
    const id = Symbol('id');
    ```
*   **BigInt**: Very large integers
    ```javascript
    const bigNum = 123456789012345678901234567890n;
    ```

### Typeof Operator

Check the type of a variable:

```javascript
console.log(typeof "hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof null);    // "object" (historical bug)
console.log(typeof undefined); // "undefined"
```

### Type Conversion

Convert between types explicitly:

```javascript
// String to Number
let str = "123";
let num = Number(str);

// Number to String
let num2 = 456;
let str2 = String(num2);

// Boolean conversion
let bool = Boolean(1); // true
let bool2 = Boolean(0); // false
```

## 3. Operators in JavaScript

### Arithmetic Operators

| Operator | Description         | Example      |
| :------- | :------------------ | :----------- |
| `+`      | Addition            | `5 + 2 // 7`   |
| `-`      | Subtraction         | `5 - 2 // 3`   |
| `*`      | Multiplication      | `5 * 2 // 10`  |
| `/`      | Division            | `5 / 2 // 2.5` |
| `%`      | Modulus (remainder) | `5 % 2 // 1`   |
| `**`     | Exponentiation      | `5 ** 2 // 25` |

### Comparison Operators

| Operator | Description         | Example           |
| :------- | :------------------ | :---------------- |
| `==`     | Equal to (loose)    | `5 == '5' // true`  |
| `===`    | Equal to (strict)   | `5 === '5' // false` |
| `!=`     | Not equal (loose)   | `5 != '5' // false` |
| `!==`    | Not equal (strict)  | `5 !== '5' // true` |
| `>`      | Greater than        | `5 > 3 // true`   |
| `<`      | Less than           | `5 < 3 // false`  |

### Logical Operators

| Operator | Description | Example               |
| :------- | :---------- | :-------------------- |
| `&&`     | Logical AND | `true && false // false` |
| `||`     | Logical OR  | `true || false // true`  |
| `!`      | Logical NOT | `!true // false`      |

## 4. Type Coercion

JavaScript automatically converts types in certain operations:

```javascript
// String + Number = String
console.log("5" + 2); // "52"

// Other arithmetic converts to Number
console.log("5" - 2); // 3
console.log("5" * "2"); // 10

// Boolean in numeric context
console.log(true + 1); // 2
console.log(false + 1); // 1

// Loose equality checks
console.log(5 == "5"); // true
console.log(0 == false); // true
console.log("" == false); // true
```

> **Best Practice:**
> Always use `===` and `!==` for comparisons to avoid unexpected type coercion.

## 5. Hands-On Examples

### Example 1: Variable Declarations

```javascript
// Declare variables
let productName = "Laptop";
const PRICE = 999.99;
var inStock = true;

// Reassign values (except const)
productName = "Gaming Laptop";
inStock = false;
// PRICE = 899.99; // Error: Assignment to constant
```

### Example 2: Type Conversion

```javascript
// String to number
let userInput = "123";
let numericValue = Number(userInput);
console.log(numericValue + 5); // 128

// Number to string
let age = 25;
let ageString = String(age);
console.log("I am " + ageString + " years old");

// Boolean conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
```

### Example 3: Operator Precedence

```javascript
let result = 5 + 3 * 2; // 11 (multiplication first)
let result2 = (5 + 3) * 2; // 16 (parentheses first)

let a = 5, b = 3, c = 2;
let logicalResult = a > b && b < c; // true && false → false
let logicalResult2 = a > b || b < c; // true || false → true
```

## Quiz

### MCQs

1.  Which variable declaration cannot be reassigned?
    *   a) `var`
    *   b) `let`
    *   c) `const`

2.  What is the result of `"5" + 2` in JavaScript?
    *   a) `7`
    *   b) `"52"`
    *   c) `Error`

3.  Which operator checks both value AND type?
    *   a) `==`
    *   b) `===`
    *   c) `=`

### Coding Exercises

1.  Declare a constant `PI` with value `3.14` and print it.
2.  Write a script that converts a string "123" to a number and adds 5 to it.
3.  Fix the error: `let 1stPlace = "winner";`

## Summary

*   Use `let` and `const` for variable declarations (avoid `var`)
*   JavaScript has 7 primitive data types (`string`, `number`, `boolean`, etc.)
*   Operators include arithmetic (`+ - * /`), comparison (`=== !==`), and logical (`&& || !`)
*   JavaScript performs type coercion in certain operations (use strict equality checks)

> **Next:** On Day 3, we'll learn about **control flow (conditionals and loops)**!

## Want More Practice?

*   Experiment with different variable declarations and type conversions
*   Try all the arithmetic and comparison operators in the console
*   Explore JavaScript's [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
