## Javascript Ternary operator Examples

1.  **Even or Odd**: Check if a number is even or odd.
2.  **Positive or Negative**: Determine if a number is positive, negative, or zero.
3.  **Login Status**: Display "Logged In" or "Logged Out" based on a boolean variable.
4.  **Max of Two Numbers**: Find the larger of two numbers.
5.  **Vote Eligibility**: Check if a person is eligible to vote (age 18 or older).
6.  **Passing Grade**: Check if a student's score is a passing grade (70 or higher).
7.  **Discount Eligibility**: Give a discount if a customer's total purchase is over $100.
8.  **String Empty Check**: Check if a string is empty and return a default value if it is.
9.  **Single or Plural**: Display "item" or "items" based on a count.
10. **Ternary Chaining**: Assign a grade (A, B, or F) based on a score.
11. **User Role**: Display "Admin" or "User" based on a user's role.
12. **Temperature Status**: Display "Hot" if temperature is over 30, "Cold" if under 10, otherwise "Moderate."
13. **Array Status**: Check if an array is empty and return a message.
14. **Authentication Check**: Return "Authenticated" or "Guest" based on user session status.
15. **Conditional Class Name**: Assign a CSS class based on a boolean state (e.g., 'active' or 'inactive').
16. **Ternary within a string literal**: Create a dynamic message that includes a condition. (a product is "available" or "Out of Stock")
17. **File Size Check**: Check if a file size is large (over 1024KB).
18. **Newsletter Subscription**: Display "Subscribed" or "Not Subscribed."
19. **Website Redirection**: Redirect a user to a specific page based on their login status. (redirect to "Dashboard Page" or "Login Page")
20. **Function Return Value**: Return a different value from a function based on a condition.

---

### Solutions

**1. Even or Odd**

```javascript
let num = 10;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); // Output: Even
```

**2. Positive or Negative**

```javascript
let num = -5;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(result); // Output: Negative
```

**3. Login Status**

```javascript
let isLoggedIn = true;
let status = isLoggedIn ? "Logged In" : "Logged Out";
console.log(status); // Output: Logged In
```

**4. Max of Two Numbers**

```javascript
let a = 15;
let b = 20;
let max = a > b ? a : b;
console.log(max); // Output: 20
```

**5. Vote Eligibility**

```javascript
let age = 20;
let canVote = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote); // Output: Eligible to vote
```

**6. Passing Grade**

```javascript
let score = 75;
let gradeStatus = score >= 70 ? "Passing" : "Failing";
console.log(gradeStatus); // Output: Passing
```

**7. Discount Eligibility**

```javascript
let total = 120;
let discount = total > 100 ? total * 0.1 : 0;
console.log(discount); // Output: 12
```

**8. String Empty Check**

```javascript
let username = "";
let display = username ? username : "Guest";
console.log(display); // Output: Guest
```

**9. Single or Plural**

```javascript
let count = 1;
let message = "You have " + count + " new message" + (count === 1 ? "" : "s");
console.log(message); // Output: You have 1 new message
```

**10. Ternary Chaining**

```javascript
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "F";
console.log(grade); // Output: B
```

**11. User Role**

```javascript
let userRole = "admin";
let roleDisplay = userRole === "admin" ? "Admin" : "User";
console.log(roleDisplay); // Output: Admin
```

**12. Temperature Status**

```javascript
let temp = 25;
let status = temp > 30 ? "Hot" : temp < 10 ? "Cold" : "Moderate";
console.log(status); // Output: Moderate
```

**13. Array Status**

```javascript
let users = [];
let statusMessage =
  users.length === 0 ? "No users found." : `Found ${users.length} users.`;
console.log(statusMessage); // Output: No users found.
```

**14. Authentication Check**

```javascript
let isAuthenticated = false;
let userType = isAuthenticated ? "Authenticated" : "Guest";
console.log(userType); // Output: Guest
```

**15. Conditional Class Name**

```javascript
let isActive = true;
let className = isActive ? "btn active" : "btn inactive";
console.log(className); // Output: btn active
```

**16. Ternary within a string literal**

```javascript
let isAvailable = false;
let productStatus = `The product is currently ${
  isAvailable ? "in stock" : "out of stock"
}.`;
console.log(productStatus); // Output: The product is currently out of stock.
```

**17. File Size Check**

```javascript
let fileSizeKB = 1500;
let sizeStatus = fileSizeKB > 1024 ? "Large" : "Small";
console.log(sizeStatus); // Output: Large
```

**18. Newsletter Subscription**

```javascript
let subscribed = true;
let subscriptionStatus = subscribed ? "Subscribed" : "Not Subscribed";
console.log(subscriptionStatus); // Output: Subscribed
```

**19. Website Redirection**

```javascript
let loggedIn = false;
let redirectUrl = loggedIn ? "/dashboard" : "/login";
console.log(redirectUrl); // Output: /login
```

**20. Function Return Value**

```javascript
function checkValue(value) {
  return value > 0 ? "Positive" : "Non-positive";
}
console.log(checkValue(5)); // Output: Positive
```
