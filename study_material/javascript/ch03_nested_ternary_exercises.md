## Javascript Examples Nested Ternary Operator

1.  **Grade Calculator**: Assign a grade (A, B, C, D, or F) based on a student's score.
2.  **Number Sign**: Determine if a number is positive, negative, or zero.
3.  **Ticket Price**: Calculate the ticket price based on age (child, adult, senior).
4.  **Tax Rate**: Apply different tax rates based on income level (low, middle, high).
5.  **Shipping Cost**: Calculate shipping cost based on weight (light, medium, heavy).
6.  **Login Status**: Display a welcome message, a login button, or a "pending" message based on user and authentication status.
7.  **Access Level**: Grant different access levels (admin, editor, viewer) based on user role.
8.  **Vowel or Consonant**: Check if a character is a vowel, a consonant, or not a letter.
9.  **Time of Day**: Display "Good morning," "Good afternoon," or "Good evening" based on the hour.
10. **T-shirt Size**: Determine the T-shirt size (S, M, L, XL) based on chest measurement.
11. **Even or Odd & Positive**: Check if a number is even and positive, odd and positive, or negative.
12. **Temperature Message**: Provide a weather-related message ("It's hot," "It's cold," "It's perfect") based on temperature.
13. **Pass or Fail with Distinction**: Determine pass/fail status and add a "with distinction" note for high scores.
14. **Discount Type**: Assign a discount level (A, B, C) based on purchase amount.
15. **User Active Status**: Show "Online," "Away," or "Offline" based on user activity.
16. **Ternary in a function**: Return different values from a function based on multiple conditions.
17. **Weekend or Weekday**: Determine if a day of the week is a weekday or a weekend.
18. **Password Strength**: Classify a password as "strong," "medium," or "weak."
19. **Conditional Rendering**: Choose which component to render in a React or similar framework based on multiple states.
20. **Quiz Result**: Display a result as "Perfect," "Good," or "Needs Improvement" based on the number of correct answers.

---

### Solutions

**1. Grade Calculator**

```javascript
let score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(grade); // Output: B
```

**2. Number Sign**

```javascript
let num = -10;
let sign = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(sign); // Output: Negative
```

**3. Ticket Price**

```javascript
let age = 15;
let price = age < 12 ? "Child: $10" : age >= 65 ? "Senior: $15" : "Adult: $20";
console.log(price); // Output: Child: $10
```

**4. Tax Rate**

```javascript
let income = 55000;
let taxRate = income < 30000 ? 0.1 : income < 75000 ? 0.2 : 0.3;
console.log(taxRate); // Output: 0.2
```

**5. Shipping Cost**

```javascript
let weight = 12; // in lbs
let shipping = weight < 5 ? 5 : weight < 15 ? 10 : 20;
console.log(`Shipping cost: $${shipping}`); // Output: Shipping cost: $10
```

**6. Login Status**

```javascript
let isAuth = true;
let user = "John";
let message = isAuth
  ? user
    ? `Welcome, ${user}!`
    : "Pending..."
  : "Please log in.";
console.log(message); // Output: Welcome, John!
```

**7. Access Level**

```javascript
let role = "admin";
let access =
  role === "admin"
    ? "Full Access"
    : role === "editor"
    ? "Limited Access"
    : "Read-only";
console.log(access); // Output: Full Access
```

**8. Vowel or Consonant**

```javascript
let char = "a";
let type = "aeiou".includes(char.toLowerCase())
  ? "Vowel"
  : char.match(/[a-z]/i)
  ? "Consonant"
  : "Not a letter";
console.log(type); // Output: Vowel
```

**9. Time of Day**

```javascript
let hour = 14;
let timeOfDay =
  hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
console.log(timeOfDay); // Output: Good afternoon
```

**10. T-shirt Size**

```javascript
let chest = 42; // in inches
let size = chest < 36 ? "S" : chest < 40 ? "M" : chest < 44 ? "L" : "XL";
console.log(size); // Output: L
```

**11. Even or Odd & Positive**

```javascript
let num = -6;
let status =
  num > 0
    ? num % 2 === 0
      ? "Positive and Even"
      : "Positive and Odd"
    : "Not Positive";
console.log(status); // Output: Not Positive
```

**12. Temperature Message**

```javascript
let temp = 25;
let tempStatus =
  temp > 30 ? "It's hot" : temp < 10 ? "It's cold" : "It's perfect";
console.log(tempStatus); // Output: It's perfect
```

**13. Pass or Fail with Distinction**

```javascript
let examScore = 95;
let result =
  examScore >= 70
    ? examScore >= 90
      ? "Pass with Distinction"
      : "Pass"
    : "Fail";
console.log(result); // Output: Pass with Distinction
```

**14. Discount Type**

```javascript
let purchaseAmount = 550;
let discountType =
  purchaseAmount > 500 ? "Type A" : purchaseAmount > 200 ? "Type B" : "Type C";
console.log(discountType); // Output: Type A
```

**15. User Active Status**

```javascript
let isOnline = false;
let isAway = true;
let userStatus = isOnline ? "Online" : isAway ? "Away" : "Offline";
console.log(userStatus); // Output: Away
```

**16. Ternary in a function**

```javascript
function checkValue(val) {
  return val > 100 ? "Large" : val > 50 ? "Medium" : "Small";
}
console.log(checkValue(75)); // Output: Medium
```

**17. Weekend or Weekday**

```javascript
let day = "Saturday";
let dayType = day === "Saturday" || day === "Sunday" ? "Weekend" : "Weekday";
console.log(dayType); // Output: Weekend
```

**18. Password Strength**

```javascript
let password = "Password123!";
let strength =
  password.length >= 10
    ? password.match(/[A-Z]/) && password.match(/[0-9]/)
      ? "Strong"
      : "Medium"
    : "Weak";
console.log(strength); // Output: Strong
```

**19. Conditional Rendering**

```javascript
let isLoading = false;
let hasError = false;
let component = isLoading
  ? "LoadingSpinner"
  : hasError
  ? "ErrorMessage"
  : "Content";
console.log(component); // Output: Content
```

**20. Quiz Result**

```javascript
let correctAnswers = 8;
let resultMsg =
  correctAnswers >= 9
    ? "Perfect"
    : correctAnswers >= 7
    ? "Good"
    : "Needs Improvement";
console.log(resultMsg); // Output: Good
```
