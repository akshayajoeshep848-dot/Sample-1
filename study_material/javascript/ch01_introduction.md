
# Day 1: Introduction to JavaScript
**Duration:** 2 Hours

## Lesson Objectives
By the end of this lesson, you will:
- Understand what JavaScript is and its role in web development
- Learn how to run JavaScript in a browser and VS Code
- Write your first JavaScript program using `console.log()`
- Recognize basic syntax rules and common errors

## 1. What is JavaScript?

### Definition
JavaScript (JS) is a **high-level**, **interpreted** programming language used to make web pages interactive. Unlike HTML (structure) and CSS (styling), JavaScript adds **behavior** to websites.

### Key Features
- Runs in the browser (client-side) and on servers (Node.js)
- Dynamically updates content without page reloads (e.g., live notifications)
- Works with APIs to fetch data (e.g., weather updates)

### JavaScript vs. Other Languages
| Feature | JavaScript | Python | Java |
| :--- | :--- | :--- | :--- |
| Typing | Dynamic | Dynamic | Static |
| Execution | Interpreted | Interpreted | Compiled |
| Primary Use | Web Dev | General | Enterprise |

## 2. JavaScript in Web Development

### Where Does JavaScript Run?
- **Browser (Frontend):** Chrome, Firefox, Safari
- **Server (Backend):** Node.js
- **Mobile Apps:** React Native, Ionic

### How JavaScript Works with HTML & CSS
```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Example</title>
  <style>
    body { font-family: Arial; }
  </style>
</head>
<body>
  <h1 id="greeting">Hello</h1>
  <script>
    document.getElementById("greeting").innerText = "Hello, JavaScript!";
  </script>
</body>
</html>
```
- **HTML:** Defines structure (`<h1>`)
- **CSS:** Styles the page (`font-family`)
- **JavaScript:** Changes content dynamically (`innerText`)

## 3. Setting Up the Environment

### Option 1: Browser Console (Quick Testing)
1. Open Chrome/Firefox
2. Press `F12` or `Ctrl+Shift+I` → **Console** tab
3. Type `console.log("Hello");` and press `Enter`

### Option 2: VS Code (For Projects)
1. Install [VS Code](https://code.visualstudio.com/)
2. Create a file `index.html`:
```html
<!DOCTYPE html>
<html>
<body>
  <script src="script.js"></script>
</body>
</html>
```
3. Create `script.js`:
```javascript
console.log("Hello from VS Code!");
```
4. Open `index.html` in a browser

## 4. Writing Your First JavaScript Program

### Basic Syntax Rules
- **Case-sensitive:** `myVar` ≠ `myvar`
- **Statements end with `;`** (optional but recommended)
- **Comments:**
```javascript
// Single-line comment
/* Multi-line 
   comment */
```

### Using `console.log()`
Prints output to the console:
```javascript
console.log("Hello, World!"); // String
console.log(42);              // Number
console.log(true);            // Boolean
```

### Common Errors & Fixes
| Error | Why? | Fix |
| :--- | :--- | :--- |
| `Uncaught SyntaxError: Unexpected identifier` | Missed `"` or `)` | `console.log("Hello");` |
| `Uncaught ReferenceError: consle is not defined` | Typo | `console.log()` |

## 5. Hands-On Examples

### Example 1: Greet the User
```javascript
let userName = "Alice";
console.log("Welcome, " + userName + "!");
// Output: "Welcome, Alice!"
```

### Example 2: Simple Math
```javascript
let x = 5, y = 3;
console.log(x + y); // 8
```

### Example 3: Boolean Check
```javascript
let isLoggedIn = false;
console.log("User logged in?", isLoggedIn); // false
```

## Quiz

### MCQs
1. JavaScript is primarily used for:
    a) Styling websites
    b) Adding interactivity to web pages
    c) Structuring databases

2. How do you print "Hello" in the console?
    a) `print("Hello")`
    b) `console.log("Hello")`
    c) `log.console("Hello")`

3. Which symbol is used for single-line comments?
    a) `#`
    b) `//`
    c) `/*`

### Coding Exercises
1. Fix the error:
```javascript
consle.log("Hi");
```

2. Write a script that prints your name and age.

3. Calculate and print the sum of `10` and `20`.

## Summary
- JavaScript makes websites **interactive**
- Run JS in **browser console** or **VS Code**
- `console.log()` prints output
- Watch for **syntax errors** (typos, missing symbols)

> Next: On Day 2, we'll dive into **variables, data types, and operators**!

## Want More Practice?
- Try [JavaScript30](https://javascript30.com/) (Free 30-day coding challenge)
- Experiment in the browser console with different `console.log()` messages
