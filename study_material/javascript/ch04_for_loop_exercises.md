### 20 Basic `for` Loop Coding Questions in JavaScript

1.  **Print 1 to 10**: Write a loop to print numbers from 1 to 10.
2.  **Print Even Numbers**: Print all even numbers from 1 to 20.
3.  **Sum of Numbers**: Calculate the sum of all numbers from 1 to 50.
4.  **Multiplication Table**: Print the multiplication table for a given number (e.g., 7).
5.  **Reverse Loop**: Print numbers from 10 down to 1.
6.  **Count Vowels**: Count the number of vowels in a given string.
7.  **Find the Largest Number**: Find the largest number in an array.
8.  **Array Sum**: Calculate the sum of all elements in a numeric array.
9.  **FizzBuzz**: Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".
10. **Factorial**: Calculate the factorial of a number (e.g., 5\! = 5\*4\*3\*2\*1).
11. **Reverse a String**: Reverse a given string.
12. **Count Down by 2s**: Print numbers from 20 down to 0, skipping every other number.
13. **Array Search**: Check if a specific element exists in an array.
14. **Powers of 2**: Print the first 10 powers of 2 (2^0, 2^1, ... 2^9).
15. **Palindrome Check**: Determine if a string is a palindrome.
16. **Pattern Printing (Stars)**: Print a right-angled triangle pattern of stars.
17. **Duplicate Elements**: Find and print duplicate elements in an array.
18. **Count Characters**: Count the occurrences of a specific character in a string.
19. **Calculate Average**: Calculate the average of all numbers in an array.
20. **Fibonacci Sequence**: Print the first 10 numbers of the Fibonacci sequence.

---

### Solutions

**1. Print 1 to 10**

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**2. Print Even Numbers**

```javascript
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
```

**3. Sum of Numbers**

```javascript
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);
```

**4. Multiplication Table**

```javascript
let num = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
```

**5. Reverse Loop**

```javascript
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

**6. Count Vowels**

```javascript
let str = "hello world";
let count = 0;
let vowels = "aeiou";
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i].toLowerCase())) {
    count++;
  }
}
console.log(count);
```

**7. Find the Largest Number**

```javascript
let arr = [3, 8, 1, 6, 10, 2];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
```

**8. Array Sum**

```javascript
let numbers = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
```

**9. FizzBuzz**

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
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

**10. Factorial**

```javascript
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);
```

**11. Reverse a String**

```javascript
let str = "javascript";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
```

**12. Count Down by 2s**

```javascript
for (let i = 20; i >= 0; i -= 2) {
  console.log(i);
}
```

**13. Array Search**

```javascript
let arr = [10, 20, 30, 40, 50];
let searchElement = 30;
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchElement) {
    found = true;
    break; // Exit the loop once found
  }
}
console.log(found ? "Element found" : "Element not found");
```

**14. Powers of 2**

```javascript
for (let i = 0; i < 10; i++) {
  console.log(Math.pow(2, i));
}
```

**15. Palindrome Check**

```javascript
let str = "racecar";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}
```

**16. Pattern Printing (Stars)**

```javascript
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
```

- **Note**: This problem requires a nested `for` loop. The outer loop controls the number of rows, and the inner loop controls the number of stars in each row.

**17. Duplicate Elements**

```javascript
let arr = [1, 2, 3, 2, 4, 5, 4];
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
}
console.log(duplicates);
```

- **Note**: This problem also uses a nested `for` loop to compare each element with all subsequent elements.

**18. Count Characters**

```javascript
let str = "programming";
let char = "g";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    count++;
  }
}
console.log(count);
```

**19. Calculate Average**

```javascript
let arr = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let average = sum / arr.length;
console.log(average);
```

**20. Fibonacci Sequence**

```javascript
let n = 10;
let a = 0;
let b = 1;
console.log(a); // Print the first number
for (let i = 1; i < n; i++) {
  console.log(b);
  let temp = a + b;
  a = b;
  b = temp;
}
```

- **Note**: This solution uses a `for` loop to iterate `n-1` times, generating each subsequent number in the sequence.
