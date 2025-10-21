## JavaScript Practice Questions

### Callback Functions

1.  What is a callback function in JavaScript?
2.  Write a higher-order function named `operate` that takes two numbers and a callback function. The callback function should perform a mathematical operation (e.g., addition, subtraction), and `operate` should return the result.
3.  Create a function `greet` that takes a name and a callback function. The callback function should format the greeting message. Call `greet` with a callback that makes the message uppercase.
4.  Explain the difference between a synchronous and an asynchronous callback. Provide a simple example of each.
5.  Write a function `processData` that simulates fetching data. It should accept a callback function that will be executed after a delay of 2 seconds (use `setTimeout`). The callback should receive a sample data object.
6.  Can a callback function be an anonymous function? Provide an example.
7.  Create a function `doSomething` that takes a callback. The callback should be executed only if a certain condition is met (e.g., a random number is greater than 0.5).

---

### Array Iterator Methods: forEach

8.  What is the primary purpose of the `Array.prototype.forEach()` method?
9.  Given the array `let numbers = [1, 2, 3, 4, 5];`, use `forEach` to print each number to the console.
10. What does the `forEach` method return?
11. Using `forEach`, iterate over `let fruits = ['apple', 'banana', 'cherry'];` and print each fruit along with its index.
12. Can you stop or break a `forEach` loop? If not, what are the alternatives?
13. Write a function `sumArray` that takes an array of numbers and uses `forEach` to calculate and return their sum.

---

### Array Iterator Methods: map

14. What is the main difference between `map()` and `forEach()`?
15. Given `let numbers = [1, 2, 3, 4, 5];`, use `map` to create a new array where each number is doubled.
16. Create a new array of strings from an array of objects. For example, from `[{ name: 'Alice' }, { name: 'Bob' }]`, create `['Alice', 'Bob']`.
17. Use `map` to convert an array of Fahrenheit temperatures to Celsius. The formula is `(F - 32) * 5/9`.
18. Given `let strings = ['hello', 'world'];`, use `map` to return a new array with the strings in uppercase.
19. What are the arguments passed to the callback function of the `map` method?

---

### Array Iterator Methods: filter

20. What does the `Array.filter()` method do? What does its callback function need to return?
21. Given `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`, use `filter` to create a new array containing only the even numbers.
22. From an array of objects representing people, filter out those who are younger than 18. The objects have `name` and `age` properties.
23. Given `let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];`, use `filter` to get words with a length greater than 6.
24. Can you use `filter` to remove `null` or `undefined` values from an array? Provide an example.
25. Use `filter` to find all prime numbers in an array of numbers.

---

### Array Iterator Methods: reduce

26. What is the purpose of the `Array.reduce()` method?
27. Given `let numbers = [1, 2, 3, 4, 5];`, use `reduce` to find the sum of all the numbers.
28. Use `reduce` to find the product of all numbers in an array.
29. What is the role of the optional `initialValue` parameter in the `reduce` method? Provide an example of when it's necessary.
30. Given an array of strings, use `reduce` to concatenate them into a single string.

---

## Solutions

### Callback Functions

1.  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

2.

<!-- end list -->

```javascript
function operate(num1, num2, callback) {
  return callback(num1, num2);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(operate(10, 5, add)); // Output: 15
console.log(operate(10, 5, subtract)); // Output: 5
```

3\.

```javascript
function greet(name, callback) {
  console.log(callback(name));
}

greet("Alice", (name) => `HELLO, ${name.toUpperCase()}!`); // Output: HELLO, ALICE!
```

4.  A **synchronous callback** is executed immediately during the execution of the higher-order function. An **asynchronous callback** is executed at a later time, after the higher-order function has completed.

    - **Synchronous Example:**
      ```javascript
      let numbers = [1, 2, 3];
      numbers.forEach(function (num) {
        console.log(num); // This is a synchronous callback
      });
      console.log("After forEach");
      ```
    - **Asynchronous Example:**
      ```javascript
      console.log("Before setTimeout");
      setTimeout(function () {
        console.log("Inside setTimeout"); // This is an asynchronous callback
      }, 2000);
      console.log("After setTimeout");
      ```

5.

<!-- end list -->

```javascript
function processData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Sample Data" };
    callback(data);
  }, 2000);
}

processData((data) => {
  console.log("Data received:", data);
});
```

6.  Yes, a callback function can be an anonymous function. In fact, it's a very common pattern.

    ```javascript
    const numbers = [1, 2, 3];
    numbers.map(function (n) {
      // Anonymous function as a callback
      return n * 2;
    });
    ```

7.

<!-- end list -->

```javascript
function doSomething(callback) {
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    callback();
  } else {
    console.log("Condition not met.");
  }
}

doSomething(() => {
  console.log("Callback executed!");
});
```

### Array Iterator Methods: forEach

8.  The primary purpose of `forEach()` is to execute a provided function once for each array element. It's used for iterating over an array when you want to perform an action for each element, but you don't need to create a new array.

9.

<!-- end list -->

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
```

10. The `forEach` method returns `undefined`.

11.

<!-- end list -->

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});
```

12. No, you cannot stop or break a `forEach` loop. If you need to terminate the loop early, you should use a traditional `for` loop, a `for...of` loop, or array methods like `every()`, `some()`, `find()`, or `findIndex()`.

13.

<!-- end list -->

```javascript
function sumArray(arr) {
  let sum = 0;
  arr.forEach((number) => {
    sum += number;
  });
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
```

### Array Iterator Methods: map

14. The main difference is that `map()` returns a new array containing the results of calling a function on every element in the calling array, whereas `forEach()` does not return a new array (it returns `undefined`).

15.

<!-- end list -->

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((number) => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

16\.

```javascript
let people = [{ name: "Alice" }, { name: "Bob" }];
let names = people.map((person) => person.name);
console.log(names); // Output: ['Alice', 'Bob']
```

17\.

```javascript
let fahrenheitTemps = [32, 68, 86];
let celsiusTemps = fahrenheitTemps.map((f) => ((f - 32) * 5) / 9);
console.log(celsiusTemps); // Output: [0, 20, 30]
```

18\.

```javascript
let strings = ["hello", "world"];
let uppercaseStrings = strings.map((str) => str.toUpperCase());
console.log(uppercaseStrings); // Output: ['HELLO', 'WORLD']
```

19. The callback function of the `map` method receives three arguments: the current element being processed, the index of that element, and the array that `map` was called upon.

### Array Iterator Methods: filter

20. The `filter()` method creates a new array with all elements that pass the test implemented by the provided callback function. The callback function must return a boolean value (`true` to keep the element, `false` to discard it).

21.

<!-- end list -->

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbers.filter((number) => number % 2 === 0);
console.log(evens); // Output: [2, 4, 6, 8, 10]
```

22\.

```javascript
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];
let adults = people.filter((person) => person.age >= 18);
console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
```

23\.

```javascript
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let longWords = words.filter((word) => word.length > 6);
console.log(longWords); // Output: ["exuberant", "destruction", "present"]
```

24. Yes, you can. You can filter based on the truthiness of the values.

    ```javascript
    let mixedArray = [1, null, "hello", undefined, 0, false, "world"];
    let cleanArray = mixedArray.filter(Boolean);
    console.log(cleanArray); // Output: [1, "hello", "world"]
    ```

25.

<!-- end list -->

```javascript
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let primes = numbers.filter(isPrime);
console.log(primes); // Output: [2, 3, 5, 7, 11, 13]
```

### Array Iterator Methods: reduce

26. The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

27.

<!-- end list -->

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
```

28\.

```javascript
let numbers = [1, 2, 3, 4, 5];
let product = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(product); // Output: 120
```

29. The `initialValue` is the value to use as the first argument to the first call of the callback. If no `initialValue` is supplied, the first element in the array will be used as the initial accumulator value, and iteration starts from the second element. It's necessary when the array could be empty (to avoid a `TypeError`) or when the initial value is of a different type than the array elements (e.g., reducing an array of objects to a number).

    ```javascript
    let emptyArray = [];
    // This would throw a TypeError without an initial value
    let sum = emptyArray.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // Output: 0
    ```

30.

<!-- end list -->

```javascript
let words = ["Hello", " ", "World", "!"];
let sentence = words.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sentence); // Output: "Hello World!"
```
