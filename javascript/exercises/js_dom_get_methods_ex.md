## JS DOM `get` Methods

### `getElementById`, `getElementsByClassName`, `getElementsByTagName`

1.  Given the HTML `<div id="main-container">Welcome!</div>`, which JavaScript method would you use to select this specific `div` element, and what will it return?
2.  If you have multiple paragraphs with `class="article-text"`, what will `document.getElementsByClassName('article-text')` return? Can you access the first element directly using `[0]`?
3.  You want to select all the `<li>` elements on a webpage. Which method is best suited for this, and what kind of object does it return?
4.  What is the key difference in the return value between `getElementById` and `getElementsByTagName`?
5.  Consider the HTML below. Write the JavaScript code to select only the `<strong>` element.
    ```html
    <div id="content">
      <p>This is a <strong>very</strong> important message.</p>
    </div>
    ```

### `querySelector`, `querySelectorAll`

6.  Given the HTML `<p class="highlight">First</p><p class="highlight">Second</p>`, what will `document.querySelector('.highlight')` select?
7.  How would you select all `<img>` tags that are inside a `<div>` with the ID `gallery`? What does the method return?
8.  Write the JavaScript code using `querySelector` to select the element with `id="nav-bar"`.
9.  If you have several `<h2>` and `<p>` elements with the class `section-title`, how can you select all of them in a single command?
10. What is the primary advantage of using `querySelector` and `querySelectorAll` over the `getElementsBy...` methods?

---

## Exercise: Populate HTML with Array Elements

For each question below, write the JavaScript code to populate the given HTML using the provided array.

11. **HTML:**

    ```html
    <ul id="fruit-list">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    ```

    **JavaScript:**

    ```javascript
    const fruits = ["Apple", "Banana", "Cherry"];
    ```

    **Task:** Populate the `<li>` elements with the fruit names.

12. **HTML:**

    ```html
    <div id="user-ages">
      <p class="age"></p>
      <p class="age"></p>
      <p class="age"></p>
    </div>
    ```

    **JavaScript:**

    ```javascript
    const ages = [25, 30, 22];
    ```

    **Task:** Display each age in one of the `<p>` tags.

13. **HTML:**

    ```html
    <div id="product-list">
      <h2></h2>
      <h2></h2>
    </div>
    ```

    **JavaScript:**

    ```javascript
    const products = [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 25 },
    ];
    ```

    **Task:** Set the `innerText` of the `<h2>` elements to the product names.

14. **HTML:**

    ```html
    <p id="sentence"></p>
    ```

    **JavaScript:**

    ```javascript
    const words = ["JavaScript", "DOM", "is", "powerful"];
    ```

    **Task:** Combine all the words into a single sentence and display it in the `<p>` tag.

15. **HTML:**

    ```html
    <div id="scores">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    ```

    **JavaScript:**

    ```javascript
    const scores = [88, 92, 75, 100];
    ```

    **Task:** Use `querySelectorAll` and a loop to populate the `<span>` elements with the scores.

16. **HTML:**

    ```html
    <ul id="even-numbers">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    ```

    **JavaScript:**

    ```javascript
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    ```

    **Task:** Filter the array to get only the even numbers, then populate the first three `<li>` elements with the first three even numbers.

17. **HTML:**

    ```html
    <div id="greetings">
      <p></p>
      <p></p>
    </div>
    ```

    **JavaScript:**

    ```javascript
    const names = ["Alice", "Bob"];
    ```

    **Task:** Populate the `<p>` tags with a greeting, like "Hello, Alice\!" and "Hello, Bob\!".

18. **HTML:**

    ```html
    <div id="container">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    ```

    **JavaScript:**

    ```javascript
    const colors = ["Red", "Green", "Blue"];
    ```

    **Task:** Use `getElementsByClassName` and a `for` loop to set the `innerText` of each div to its corresponding color.

19. **HTML:**

    ```html
    <h1>City Names</h1>
    <section>
      <p></p>
      <p></p>
    </section>
    ```

    **JavaScript:**

    ```javascript
    const cities = ["New York", "London", "Tokyo", "Paris"];
    ```

    **Task:** Select all `<p>` tags within the `<section>` and populate them with the first two cities from the array.

20. **HTML:**

    ```html
    <div id="summary"></div>
    ```

    **JavaScript:**

    ```javascript
    const user = {
      firstName: "John",
      lastName: "Doe",
      role: "Developer",
    };
    ```

    **Task:** Create a summary string "Name: John Doe, Role: Developer" and set it as the `innerText` of the `summary` div.

---

\<br\>
\<br\>

## Answers 💡

### JS DOM `get` Methods

1.  `document.getElementById('main-container')`. It will return a **single HTML element object**.
2.  It returns an `HTMLCollection` of the two paragraph elements. Yes, you can access the first element with `document.getElementsByClassName('article-text')[0]`.
3.  `document.getElementsByTagName('li')`. It returns a live `HTMLCollection` of all `<li>` elements.
4.  `getElementById` returns a **single element object** (or `null` if not found), while `getElementsByTagName` returns an **`HTMLCollection`** (which is array-like), even if only one or zero elements are found.
5.  `document.getElementById('content').getElementsByTagName('strong')[0];`
6.  It will select only the **first** element with the class `highlight`: `<p class="highlight">First</p>`.
7.  `document.querySelectorAll('#gallery img')`. It returns a static `NodeList` of all matching `<img>` elements.
8.  `document.querySelector('#nav-bar');`
9.  `document.querySelectorAll('.section-title');`
10. Their main advantage is **flexibility**. They allow you to use any valid CSS selector (like `#id .class`, `div > p`, `[attribute=value]`, etc.) to find elements, making complex selections much easier.

### Exercise: Populate HTML with Array Elements

11. ```javascript
    const listItems = document
      .getElementById("fruit-list")
      .getElementsByTagName("li");
    for (let i = 0; i < fruits.length; i++) {
      listItems[i].innerText = fruits[i];
    }
    ```
12. ```javascript
    const ageElements = document.querySelectorAll("#user-ages .age");
    ageElements.forEach((element, index) => {
      element.innerText = ages[index];
    });
    ```
13. ```javascript
    const productHeadings = document.querySelectorAll("#product-list h2");
    productHeadings[0].innerText = products[0].name;
    productHeadings[1].innerText = products[1].name;
    ```
14. ```javascript
    document.getElementById("sentence").innerText = words.join(" ");
    ```
15. ```javascript
    const scoreSpans = document.querySelectorAll("#scores span");
    scoreSpans.forEach((span, index) => {
      span.innerText = scores[index];
    });
    ```
16. ```javascript
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const listItems = document.querySelectorAll("#even-numbers li");
    for (let i = 0; i < 3; i++) {
      listItems[i].innerText = evenNumbers[i];
    }
    ```
17. ```javascript
    const greetingElements = document.querySelectorAll("#greetings p");
    greetingElements.forEach((p, index) => {
      p.innerText = `Hello, ${names[index]}!`;
    });
    ```
18. ```javascript
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < colors.length; i++) {
      boxes[i].innerText = colors[i];
    }
    ```
19. ```javascript
    const pTags = document.querySelector("section").getElementsByTagName("p");
    pTags[0].innerText = cities[0];
    pTags[1].innerText = cities[1];
    ```
20. ```javascript
    const summaryDiv = document.getElementById("summary");
    summaryDiv.innerText = `Name: ${user.firstName} ${user.lastName}, Role: ${user.role}`;
    ```
