# Selectors

In JavaScript, **selectors** are used to access and manipulate elements within the Document Object Model (DOM). They allow you to find elements based on their tag name, class, ID, attributes, or more complex CSS selectors. Understanding selectors is fundamental to effectively working with the DOM.

## Basic Selector Methods

### `getElementById`

Selects a single element by its unique `id` attribute.

```javascript
const header = document.getElementById("main-header");
```

- Returns the element with the specified `id`.
- Returns `null` if no element is found.
- Since IDs should be unique, this method returns only one element.

### `getElementsByClassName`

Selects all elements with a given class name.

```javascript
const items = document.getElementsByClassName("list-item");
```

- Returns an **HTMLCollection** (live collection) of elements.
- Can be accessed like an array but is not a true array.
- To convert to an array: `Array.from(items)`.

### `getElementsByTagName`

Selects all elements with a given tag name.

```javascript
const paragraphs = document.getElementsByTagName("p");
```

- Returns an **HTMLCollection** of elements.
- Tag names are case-insensitive in HTML.

## Modern Selector Methods

### `querySelector`

Selects the **first** element that matches a CSS selector.

```javascript
const firstButton = document.querySelector("button.primary");
```

- Accepts any valid CSS selector.
- Returns the first matching element or `null` if none found.

### `querySelectorAll`

Selects **all** elements that match a CSS selector.

```javascript
const allButtons = document.querySelectorAll("button.primary");
```

- Returns a **NodeList** of matching elements.
- NodeList is static (not live).
- Supports iteration methods like `forEach`.

## Examples of CSS Selectors in JavaScript

### Selecting by ID

```javascript
const main = document.querySelector("#main");
```

Equivalent to:

```javascript
const main = document.getElementById("main");
```

### Selecting by Class

```javascript
const activeItems = document.querySelectorAll(".active");
```

Equivalent to:

```javascript
const activeItems = document.getElementsByClassName("active");
```

### Selecting by Attribute

```javascript
const inputs = document.querySelectorAll('input[type="text"]');
```

Selects all `<input>` elements with `type="text"`.

### Descendant Selector

```javascript
const listItems = document.querySelectorAll("ul li");
```

Selects all `<li>` elements inside any `<ul>`.

### Child Selector

```javascript
const directChildren = document.querySelectorAll("div > p");
```

Selects all `<p>` elements that are **direct children** of a `<div>`.

### Pseudo-classes

```javascript
const firstItem = document.querySelector("li:first-child");
```

Selects the first `<li>` element among its siblings.

## Differences Between Selector Methods

| Method                   | Returns        | Selector Type | Live Collection | Supports CSS Selectors |
| ------------------------ | -------------- | ------------- | --------------- | ---------------------- |
| `getElementById`         | Single Element | ID            | N/A             | No                     |
| `getElementsByClassName` | HTMLCollection | Class Name    | Yes             | No                     |
| `getElementsByTagName`   | HTMLCollection | Tag Name      | Yes             | No                     |
| `querySelector`          | Single Element | CSS Selector  | N/A             | Yes                    |
| `querySelectorAll`       | NodeList       | CSS Selector  | No              | Yes                    |

## Iterating Over Selected Elements

Since `getElementsByClassName` and `getElementsByTagName` return live **HTMLCollections**, and `querySelectorAll` returns a static **NodeList**, iteration differs slightly.

### Using `for` loop with HTMLCollection

```javascript
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}
```

### Using `forEach` with NodeList

```javascript
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log(item.textContent);
});
```

### Converting HTMLCollection to Array

```javascript
const items = document.getElementsByClassName("item");
const itemsArray = Array.from(items);
itemsArray.forEach((item) => {
  console.log(item.textContent);
});
```

## Selecting Elements Within a Specific Context

You can call selector methods on any DOM element, not just `document`. This scopes the search to descendants of that element.

```javascript
const container = document.getElementById("container");
const buttons = container.querySelectorAll("button");
```

This selects all `<button>` elements inside the element with `id="container"`.

## Summary of Selector Usage

- Use `getElementById` for fast, single element selection by ID.
- Use `getElementsByClassName` or `getElementsByTagName` for live collections by class or tag.
- Use `querySelector` and `querySelectorAll` for flexible, CSS-based selection.
- Remember that `querySelectorAll` returns a static NodeList, while `getElementsByClassName` and `getElementsByTagName` return live HTMLCollections.
- Use context-based selection to narrow down searches within specific parts of the DOM.

## Practical Example

Suppose you want to highlight all active menu items inside a navigation bar:

```html
<nav id="main-nav">
  <ul>
    <li class="active">Home</li>
    <li>About</li>
    <li class="active">Services</li>
    <li>Contact</li>
  </ul>
</nav>
```

JavaScript:

```javascript
const nav = document.getElementById("main-nav");
const activeItems = nav.querySelectorAll("li.active");

activeItems.forEach((item) => {
  item.style.backgroundColor = "yellow";
});
```

This code selects all `<li>` elements with class `active` inside the navigation bar and highlights them.

---

Selectors are the gateway to DOM manipulation, enabling precise targeting of elements for reading or modifying content, attributes, styles, and more. Mastery of selectors is essential for effective JavaScript programming in the browser.

---

# Selectors Practice Questions

### Questions

1. Select the element with the ID `header` and change its text content to `"Welcome!"`.

2. Select all elements with the class `highlight` and set their background color to `lightblue`.

3. Select all `<p>` elements inside a container with the ID `content` and log their text content to the console.

4. Select the first `<input>` element of type `checkbox` and check it (set its `checked` property to `true`).

5. Select all `<li>` elements that are direct children of a `<ul>` and add the class `list-item` to each.

6. Select the element with the class `active` inside a navigation bar with the ID `nav` and remove the class `active` from it.

7. Select all buttons with the class `btn` and add a click event listener that logs `"Button clicked!"` to the console.

8. Select all `<a>` elements with an `href` attribute starting with `https://` and set their `target` attribute to `_blank`.

9. Select the last `<div>` element inside a container with the class `wrapper` and change its border to `2px solid red`.

10. Select all elements with the attribute `data-toggle="modal"` and log their number to the console.

11. Select the element with ID `footer` using two different selector methods.

12. Select all elements with the class `card` and convert the returned collection to an array.

13. Select all `<span>` elements that are the first child of their parent and change their font weight to bold.

14. Select all `<input>` elements inside a form with ID `signup` and clear their values.

15. Select the element with the class `menu-item` that is the third child of its parent and add the class `selected` to it.

16. Select all `<img>` elements without an `alt` attribute and add an `alt` attribute with the value `"Image"`.

17. Select all `<section>` elements that are siblings of an element with the class `intro`.

18. Select the element with the class `modal` inside a container with ID `popup` and toggle its visibility.

19. Select all `<li>` elements inside an ordered list (`<ol>`) and prepend their index number to their text content.

20. Select all elements with the class `hidden` and remove that class from them.

---

# Solutions

```javascript
// 1.
const header = document.getElementById("header");
if (header) header.textContent = "Welcome!";

// 2.
const highlights = document.getElementsByClassName("highlight");
Array.from(highlights).forEach((el) => {
  el.style.backgroundColor = "lightblue";
});

// 3.
const contentParagraphs = document.querySelectorAll("#content p");
contentParagraphs.forEach((p) => {
  console.log(p.textContent);
});

// 4.
const firstCheckbox = document.querySelector('input[type="checkbox"]');
if (firstCheckbox) firstCheckbox.checked = true;

// 5.
const listItems = document.querySelectorAll("ul > li");
listItems.forEach((li) => {
  li.classList.add("list-item");
});

// 6.
const navActive = document.querySelector("#nav .active");
if (navActive) navActive.classList.remove("active");

// 7.
const buttons = document.querySelectorAll("button.btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
});

// 8.
const secureLinks = document.querySelectorAll('a[href^="https://"]');
secureLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
});

// 9.
const wrapperDivs = document.querySelectorAll(".wrapper div");
if (wrapperDivs.length > 0) {
  const lastDiv = wrapperDivs[wrapperDivs.length - 1];
  lastDiv.style.border = "2px solid red";
}

// 10.
const modalToggles = document.querySelectorAll('[data-toggle="modal"]');
console.log(modalToggles.length);

// 11.
const footerById = document.getElementById("footer");
const footerByQuery = document.querySelector("#footer");

// 12.
const cardsCollection = document.getElementsByClassName("card");
const cardsArray = Array.from(cardsCollection);

// 13.
const firstChildSpans = document.querySelectorAll("span:first-child");
firstChildSpans.forEach((span) => {
  span.style.fontWeight = "bold";
});

// 14.
const signupInputs = document.querySelectorAll("#signup input");
signupInputs.forEach((input) => {
  input.value = "";
});

// 15.
const thirdMenuItem = document.querySelector(".menu-item:nth-child(3)");
if (thirdMenuItem) thirdMenuItem.classList.add("selected");

// 16.
const imgsWithoutAlt = document.querySelectorAll("img:not([alt])");
imgsWithoutAlt.forEach((img) => {
  img.setAttribute("alt", "Image");
});

// 17.
const introElement = document.querySelector(".intro");
if (introElement) {
  const siblings = Array.from(introElement.parentElement.children).filter(
    (el) => el !== introElement && el.tagName.toLowerCase() === "section"
  );
  // siblings now contains all <section> siblings of .intro
}

// 18.
const modal = document.querySelector("#popup .modal");
if (modal) {
  if (
    modal.style.display === "none" ||
    getComputedStyle(modal).display === "none"
  ) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

// 19.
const olListItems = document.querySelectorAll("ol li");
olListItems.forEach((li, index) => {
  li.textContent = `${index + 1}. ${li.textContent}`;
});

// 20.
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  el.classList.remove("hidden");
});
```
