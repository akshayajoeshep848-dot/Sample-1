# Javascript Questions on If else statements

### **Beginner Level: Basic `if` and `if-else` Statements**

1.  What is the output of the following code?

    ```javascript
    let x = 10;
    if (x > 5) {
      console.log("Hello");
    }
    ```

2.  What is the output of the following code?

    ```javascript
    let y = 3;
    if (y > 5) {
      console.log("Hello");
    } else {
      console.log("Goodbye");
    }
    ```

3.  What is the output of `true || false` in an `if` condition?

    ```javascript
    if (true || false) {
      console.log("It's true!");
    } else {
      console.log("It's false!");
    }
    ```

4.  What is the output of the following code?

    ```javascript
    let a = 10;
    if (a < 5) {
      console.log("A");
    } else {
      console.log("B");
    }
    ```

5.  What is the output of the following code?

    ```javascript
    let b = "cat";
    if (b === "dog") {
      console.log("Woof!");
    } else {
      console.log("Meow!");
    }
    ```

6.  Is the code `if (0) { console.log("A"); }` executed? Why or why not?

7.  Is the code `if ("") { console.log("A"); }` executed? Why or why not?

8.  Is the code `if ("hello") { console.log("A"); }` executed? Why or why not?

9.  Is the code `if (null) { console.log("A"); }` executed? Why or why not?

10. Is the code `if (undefined) { console.log("A"); }` executed? Why or why not?

11. What is the output of the following code?

    ```javascript
    let isStudent = true;
    if (isStudent) {
      console.log("User is a student.");
    }
    ```

12. What is the output of the following code?

    ```javascript
    let isRaining = false;
    if (isRaining) {
      console.log("Take an umbrella.");
    } else {
      console.log("Leave the umbrella.");
    }
    ```

13. What is the output of `!true` inside an `if` condition?

    ```javascript
    if (!true) {
      console.log("This will not be printed.");
    } else {
      console.log("This will be printed.");
    }
    ```

14. What is the output of the following code?

    ```javascript
    let isLoggedIn = 1;
    if (isLoggedIn) {
      console.log("Logged In.");
    } else {
      console.log("Logged Out.");
    }
    ```

15. What is the output of the following code?

    ```javascript
    let city = "New York";
    if (city === "London") {
      console.log("UK");
    } else if (city === "New York") {
      console.log("USA");
    }
    ```

---

### **Intermediate Level: `if-else if` Chains and Complex Conditions**

16. What is the output of the following code?

    ```javascript
    let score = 85;
    if (score >= 90) {
      console.log("A");
    } else if (score >= 80) {
      console.log("B");
    } else {
      console.log("C");
    }
    ```

17. What is the output of the following code?

    ```javascript
    let day = "Sunday";
    if (day === "Saturday" || day === "Sunday") {
      console.log("Weekend");
    } else {
      console.log("Weekday");
    }
    ```

18. What is the output of the following code?

    ```javascript
    let temperature = 25;
    if (temperature > 30) {
      console.log("Hot");
    } else if (temperature > 20) {
      console.log("Warm");
    } else if (temperature > 10) {
      console.log("Cool");
    } else {
      console.log("Cold");
    }
    ```

19. What is the output of the following code?

    ```javascript
    let fruit = "apple";
    let color = "red";
    if (fruit === "banana" && color === "yellow") {
      console.log("Banana is yellow");
    } else if (fruit === "apple" && color === "green") {
      console.log("Apple is green");
    } else {
      console.log("No match");
    }
    ```

20. What is the output of the following code?

    ```javascript
    let num = 10;
    if (num % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
    ```

21. What is the output of the following code?

    ```javascript
    let grade = "B";
    if (grade === "A") {
      console.log("Excellent!");
    } else if (grade === "B") {
      console.log("Good!");
    } else {
      console.log("Needs Improvement.");
    }
    ```

22. What is the output of the following code?

    ```javascript
    let value = 100;
    if (value === 100) {
      console.log("A");
    } else if (value === "100") {
      console.log("B");
    } else {
      console.log("C");
    }
    ```

23. What is the output of `(5 > 3) ? "A" : "B"`?

24. What is the output of `(5 < 3) ? "A" : "B"`?

25. What is the output of the following code?

    ```javascript
    let hasPermission = true;
    let isUser = true;
    if (hasPermission && isUser) {
      console.log("Access Granted");
    } else {
      console.log("Access Denied");
    }
    ```

26. What is the output of the following code?

    ```javascript
    let isMember = false;
    let isGuest = true;
    if (isMember || isGuest) {
      console.log("Welcome!");
    } else {
      console.log("Please sign up.");
    }
    ```

27. What is the output of the following code?

    ```javascript
    let month = "February";
    if (month === "January" || month === "March" || month === "May") {
      console.log("31 days");
    } else if (month === "February") {
      console.log("28 or 29 days");
    } else {
      console.log("30 days");
    }
    ```

28. What is the output of the following code?

    ```javascript
    let age = 16;
    let hasID = true;
    if (age >= 18 && hasID) {
      console.log("Can vote.");
    } else {
      console.log("Cannot vote.");
    }
    ```

29. What is the output of the following code?

    ```javascript
    let pass = "password123";
    if (pass.length > 8 && pass.includes("1")) {
      console.log("Strong password.");
    } else {
      console.log("Weak password.");
    }
    ```

30. What is the output of the following code?

    ```javascript
    let number = 15;
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Other");
    }
    ```

---

### **Advanced Level: Nesting and Ternary Operators**

31. What is the output of the following code?

    ```javascript
    let age = 20;
    let hasLicense = true;
    if (age >= 18) {
      if (hasLicense) {
        console.log("Eligible to drive");
      } else {
        console.log("Not eligible to drive (no license)");
      }
    } else {
      console.log("Not eligible to drive (too young)");
    }
    ```

32. What is the output of the following code?

    ```javascript
    let number = -5;
    if (number > 0) {
      if (number % 2 === 0) {
        console.log("Positive and Even");
      } else {
        console.log("Positive and Odd");
      }
    } else {
      console.log("Not Positive");
    }
    ```

33. Refactor the following nested `if` statement into a single `if` statement using a logical operator:

    ```javascript
    if (x > 0) {
      if (x < 10) {
        console.log("Between 0 and 10");
      }
    }
    ```

34. What is the output of the following code?

    ```javascript
    let num1 = 5;
    let num2 = 10;
    let result =
      num1 > num2
        ? "num1 is greater"
        : num1 < num2
        ? "num2 is greater"
        : "They are equal";
    console.log(result);
    ```

35. What is the output of the following code?

    ```javascript
    let isLoggedIn = true;
    let isAdmin = false;
    if (isLoggedIn && isAdmin) {
      console.log("Admin Dashboard");
    } else if (isLoggedIn) {
      console.log("User Dashboard");
    } else {
      console.log("Please log in");
    }
    ```

36. What is the output of the following code?

    ```javascript
    let p = 10;
    let q = 20;
    let r = 30;
    if (p > q || p > r) {
      console.log("P is the largest");
    } else if (q > r && q > p) {
      console.log("Q is the largest");
    } else {
      console.log("R is the largest");
    }
    ```

37. What is the output of the following code?

    ```javascript
    let score = 75;
    let passed = score >= 70 ? "Passed" : "Failed";
    console.log(passed);
    ```

38. What is the output of the following code?

    ```javascript
    let value = 0;
    if (value) {
      console.log("Truthy");
    } else {
      console.log("Falsy");
    }
    ```

39. What is the output of the following code?

    ```javascript
    let s = "";
    if (s.length > 0) {
      console.log("String is not empty");
    } else {
      console.log("String is empty");
    }
    ```

40. What is the output of the following code?

    ```javascript
    let userRole = "guest";
    let isVip = true;
    if (userRole === "admin" || (userRole === "guest" && isVip)) {
      console.log("Special Access");
    } else {
      console.log("Standard Access");
    }
    ```

---

### **Expert Level: Complex Nesting and Logical Expression Evaluation**

41. What is the output of the following code?

    ```javascript
    let price = 150;
    let hasDiscount = true;
    if (price > 100) {
      if (hasDiscount) {
        price = price * 0.9;
      }
    }
    console.log(price);
    ```

42. What is the output of the following code?

    ```javascript
    let username = "";
    let password = "pass";
    let message =
      username && password ? "Welcome!" : "Please fill out all fields.";
    console.log(message);
    ```

43. What is the output of the following code?

    ```javascript
    let isPremium = true;
    let accessLevel = "basic";
    if (isPremium && (accessLevel === "premium" || accessLevel === "basic")) {
      console.log("Allowed access");
    } else {
      console.log("Denied access");
    }
    ```

44. What is the output of the following code?

    ```javascript
    let points = 50;
    let result =
      points > 75
        ? "Great"
        : points > 50
        ? "Good"
        : points > 25
        ? "Okay"
        : "Bad";
    console.log(result);
    ```

45. What is the output of the following code?

    ```javascript
    let a = 5;
    let b = 5;
    if (a++ === b) {
      console.log("Equal");
    } else {
      console.log("Not Equal");
    }
    console.log(a);
    ```

46. What is the output of the following code?

    ```javascript
    let balance = 100;
    let withdrawal = 120;
    let isVerified = true;
    if (isVerified) {
      if (withdrawal <= balance) {
        console.log("Withdrawal successful.");
      } else {
        console.log("Insufficient funds.");
      }
    } else {
      console.log("Verification failed.");
    }
    ```

47. What is the output of the following code?

    ```javascript
    let userType = "admin";
    let hasSuperPowers = false;
    let message =
      userType === "admin" && hasSuperPowers
        ? "Super Admin"
        : userType === "admin"
        ? "Admin"
        : "User";
    console.log(message);
    ```

48. What is the output of the following code?

    ```javascript
    let num = 10;
    let check = false;
    if (num > 5 && (check || num < 20)) {
      console.log("Condition met.");
    } else {
      console.log("Condition not met.");
    }
    ```

49. What is the output of the following code?

    ```javascript
    let fruit = "orange";
    let message =
      fruit === "apple"
        ? "A"
        : fruit === "banana"
        ? "B"
        : fruit === "orange"
        ? "C"
        : "D";
    console.log(message);
    ```

50. What is the output of the following code?

    ```javascript
    let isWeekend = true;
    let isHoliday = false;
    if (isWeekend) {
      if (isHoliday) {
        console.log("Long weekend!");
      } else {
        console.log("Regular weekend.");
      }
    } else if (isHoliday) {
      console.log("Mid-week holiday.");
    } else {
      console.log("Weekday.");
    }
    ```

---

### **Answers**

1.  `Hello`
2.  `Goodbye`
3.  `It's true!`
4.  `B`
5.  `Meow!`
6.  No, because `0` is a falsy value.
7.  No, because `""` is a falsy value.
8.  Yes, because any non-empty string is a truthy value.
9.  No, because `null` is a falsy value.
10. No, because `undefined` is a falsy value.
11. `User is a student.`
12. `Leave the umbrella.`
13. `This will be printed.`
14. `Logged In.` (Any non-zero number is truthy)
15. `USA`
16. `B`
17. `Weekend`
18. `Warm`
19. `No match`
20. `Even`
21. `Good!`
22. `A`
23. `A`
24. `B`
25. `Access Granted`
26. `Welcome!`
27. `28 or 29 days`
28. `Cannot vote.`
29. `Strong password.`
30. `FizzBuzz`
31. `Eligible to drive`
32. `Not Positive`
33. `if (x > 0 && x < 10) { console.log("Between 0 and 10"); }`
34. `num2 is greater`
35. `User Dashboard`
36. `R is the largest`
37. `Passed`
38. `Falsy`
39. `String is empty`
40. `Special Access`
41. `135`
42. `Please fill out all fields.` (`username` is an empty string, which is falsy)
43. `Allowed access`
44. `Okay`
45. `Equal` and then `6`
46. `Insufficient funds.`
47. `Admin`
48. `Condition met.`
49. `C`
50. `Regular weekend.`
