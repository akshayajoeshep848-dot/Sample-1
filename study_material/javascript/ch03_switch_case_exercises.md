## Javascript Exercises Switch case

1.  **Day of the Week**: Get the name of the day based on a number (1-7).
2.  **Month of the Year**: Get the name of the month based on a number (1-12).
3.  **Traffic Light**: Display a message based on a traffic light color ("red", "yellow", "green").
4.  **Grading System**: Assign a grade (A, B, C, D, F) based on a score range.
5.  **User Role**: Display a message for different user roles ("admin", "editor", "guest").
6.  **Calculator**: Perform basic arithmetic operations (+, -, \*, /) based on a user's choice.
7.  **Weather Forecast**: Provide a weather description based on a condition ("sunny", "rainy", "cloudy").
8.  **Vowel or Consonant**: Check if a letter is a vowel or a consonant.
9.  **Season of the Year**: Determine the season based on the month.
10. **File Type**: Display a message based on a file extension (e.g., ".pdf", ".jpg", ".txt").
11. **Browser Detection**: Identify the user's browser and display a specific message.
12. **Game Command**: Execute a command ("move forward", "turn left", "shoot") based on an input.
13. **Currency Conversion**: Convert an amount to a different currency (e.g., USD, EUR, JPY).
14. **Age Group**: Categorize a person into an age group ("child", "teen", "adult", "senior").
15. **Conditional Logging**: Log different messages based on a log level ("info", "warn", "error").
16. **HTTP Status Codes**: Provide a description for common HTTP status codes (200, 404, 500).
17. **Switch with `true`**: Use a `switch` statement with `true` to check multiple conditions.
18. **Menu Selection**: Display a menu item based on a user's selection (1, 2, 3).
19. **Fruit Price**: Get the price of a fruit based on its name.
20. **T-shirt Size**: Get the description of a T-shirt size (S, M, L).

---

### Solutions

**1. Day of the Week**

```javascript
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}
console.log(dayName); // Output: Tuesday
```

---

**2. Month of the Year**

```javascript
let month = 7;
let monthName;
switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month number";
}
console.log(monthName); // Output: July
```

---

**3. Traffic Light**

```javascript
let color = "yellow";
let message;
switch (color) {
  case "red":
    message = "Stop!";
    break;
  case "yellow":
    message = "Slow down.";
    break;
  case "green":
    message = "Go!";
    break;
  default:
    message = "Invalid color.";
}
console.log(message); // Output: Slow down.
```

---

**4. Grading System**

```javascript
let score = 85;
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log(grade); // Output: B
```

---

**5. User Role**

```javascript
let role = "admin";
let accessLevel;
switch (role) {
  case "admin":
    accessLevel = "Full access granted.";
    break;
  case "editor":
    accessLevel = "Editor privileges.";
    break;
  case "guest":
    accessLevel = "Read-only access.";
    break;
  default:
    accessLevel = "No access.";
}
console.log(accessLevel); // Output: Full access granted.
```

---

**6. Calculator**

```javascript
let num1 = 10;
let num2 = 5;
let operator = "+";
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
}
console.log(result); // Output: 15
```

---

**7. Weather Forecast**

```javascript
let weather = "rainy";
let forecast;
switch (weather) {
  case "sunny":
    forecast = "Don't forget your sunglasses!";
    break;
  case "rainy":
    forecast = "Bring an umbrella!";
    break;
  case "cloudy":
    forecast = "It might be a good day for a walk.";
    break;
  default:
    forecast = "Weather unknown.";
}
console.log(forecast); // Output: Bring an umbrella!
```

---

**8. Vowel or Consonant**

```javascript
let letter = "e";
let type;
letter = letter.toLowerCase();
switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    type = "Vowel";
    break;
  default:
    type = "Consonant";
}
console.log(type); // Output: Vowel
```

---

**9. Season of the Year**

```javascript
let month = "December";
let season;
switch (month) {
  case "December":
  case "January":
  case "February":
    season = "Winter";
    break;
  case "March":
  case "April":
  case "May":
    season = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    season = "Summer";
    break;
  case "September":
  case "October":
  case "November":
    season = "Autumn";
    break;
  default:
    season = "Invalid month";
}
console.log(season); // Output: Winter
```

---

**10. File Type**

```javascript
let fileExtension = ".jpg";
let fileType;
switch (fileExtension) {
  case ".pdf":
    fileType = "Document";
    break;
  case ".jpg":
  case ".png":
  case ".gif":
    fileType = "Image";
    break;
  case ".txt":
    fileType = "Text File";
    break;
  default:
    fileType = "Unknown file type";
}
console.log(fileType); // Output: Image
```

---

**11. Browser Detection**

```javascript
let browser = "Chrome";
let message;
switch (browser) {
  case "Chrome":
  case "Firefox":
    message = "You are using a supported browser.";
    break;
  case "Safari":
    message = "Some features may not work as expected.";
    break;
  default:
    message = "Unsupported browser.";
}
console.log(message); // Output: You are using a supported browser.
```

---

**12. Game Command**

```javascript
let command = "shoot";
let action;
switch (command) {
  case "forward":
    action = "Player moves forward.";
    break;
  case "left":
    action = "Player turns left.";
    break;
  case "shoot":
    action = "Player fires weapon.";
    break;
  default:
    action = "Invalid command.";
}
console.log(action); // Output: Player fires weapon.
```

---

**13. Currency Conversion**

```javascript
let currency = "EUR";
let amount = 100;
let convertedAmount;
switch (currency) {
  case "USD":
    convertedAmount = amount * 1.1; // Example rate
    break;
  case "EUR":
    convertedAmount = amount;
    break;
  case "JPY":
    convertedAmount = amount * 130; // Example rate
    break;
  default:
    convertedAmount = "Conversion not available.";
}
console.log(convertedAmount); // Output: 100
```

---

**14. Age Group**

```javascript
let age = 30;
let group;
switch (true) {
  case age < 13:
    group = "Child";
    break;
  case age >= 13 && age < 20:
    group = "Teen";
    break;
  case age >= 20 && age < 65:
    group = "Adult";
    break;
  case age >= 65:
    group = "Senior";
    break;
  default:
    group = "Invalid age";
}
console.log(group); // Output: Adult
```

---

**15. Conditional Logging**

```javascript
let logLevel = "warn";
switch (logLevel) {
  case "info":
    console.log("This is an informational message.");
    break;
  case "warn":
    console.log("Warning: something might be wrong.");
    break;
  case "error":
    console.error("Error: something went wrong!");
    break;
  default:
    console.log("Unknown log level.");
}
// Output: Warning: something might be wrong.
```

---

**16. HTTP Status Codes**

```javascript
let statusCode = 404;
let message;
switch (statusCode) {
  case 200:
    message = "OK";
    break;
  case 404:
    message = "Not Found";
    break;
  case 500:
    message = "Internal Server Error";
    break;
  default:
    message = "Unknown status code";
}
console.log(message); // Output: Not Found
```

---

**17. Switch with `true`**

```javascript
let temperature = 25;
let clothingSuggestion;
switch (true) {
  case temperature > 30:
    clothingSuggestion = "Wear shorts and a t-shirt.";
    break;
  case temperature > 20:
    clothingSuggestion = "A light jacket might be needed.";
    break;
  default:
    clothingSuggestion = "Wear a warm coat.";
}
console.log(clothingSuggestion); // Output: A light jacket might be needed.
```

---

**18. Menu Selection**

```javascript
let selection = 2;
let menuItem;
switch (selection) {
  case 1:
    menuItem = "View Profile";
    break;
  case 2:
    menuItem = "Edit Settings";
    break;
  case 3:
    menuItem = "Log Out";
    break;
  default:
    menuItem = "Invalid selection";
}
console.log(menuItem); // Output: Edit Settings
```

---

**19. Fruit Price**

```javascript
let fruit = "Apple";
let price;
switch (fruit) {
  case "Apple":
    price = 1.5;
    break;
  case "Banana":
    price = 0.5;
    break;
  case "Orange":
    price = 1.0;
    break;
  default:
    price = "Price not available.";
}
console.log(`The price of a ${fruit} is $${price}`); // Output: The price of a Apple is $1.5
```

---

**20. T-shirt Size**

```javascript
let size = "L";
let description;
switch (size) {
  case "S":
    description = "Small size, fits chest 34-36 inches.";
    break;
  case "M":
    description = "Medium size, fits chest 38-40 inches.";
    break;
  case "L":
    description = "Large size, fits chest 42-44 inches.";
    break;
  default:
    description = "Invalid size.";
}
console.log(description); // Output: Large size, fits chest 42-44 inches.
```
