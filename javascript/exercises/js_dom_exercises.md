Absolutely! Here are 20 practice coding questions focused on **JavaScript DOM manipulation**, covering the methods and properties you specified.

These questions are structured to increase slightly in complexity.

---

## 20 JavaScript DOM Practice Questions

### I. Selecting and Accessing Elements

| Question | Topic                                                                                                                                                                                                                          |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1.**   | **`getElementById`**: Write a function `updateGreeting(newText)` that selects the HTML element with the ID **`#header-title`** and changes its **`innerText`** to the value of `newText`.                                      |
| **2.**   | **`getElementsByClassName`**: Select all elements with the class **`.list-item`**. Iterate through the collection and change the **`style.color`** of every second element to **`blue`**.                                      |
| **3.**   | **`getElementsByTagName`**: Select all **`<li>`** elements and set their **`style.fontSize`** to **`18px`**.                                                                                                                   |
| **4.**   | **`querySelector`**: Select the first button element in the document and change its **`id`** attribute to **`main-action-btn`**.                                                                                               |
| **5.**   | **`querySelectorAll`**: Select all elements with the class **`.card`** that are also nested within an element with the ID **`#container`**. Change the **`style.backgroundColor`** of these specific cards to **`lightgray`**. |

---

### II. Creating and Inserting Elements

| Question | Topic                                                                                                                                                                                                                                                                                                     |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **6.**   | **`createElement` & `appendChild`**: Create a new **`<h2>`** element. Set its **`innerText`** to "New Section Header" and append it as the last child of the element with the ID **`#content-area`**.                                                                                                     |
| **7.**   | **`createElement` & `append`**: Create three new **`<span>`** elements. Set the **`innerText`** of the first to "Red", the second to "Green", and the third to "Blue". Use the **`append`** method to add all three **`<span>`** elements simultaneously to the element with the class **`.status-bar`**. |
| **8.**   | **Creating a List Item**: Write a function **`addListItem(text)`** that creates a new **`<li>`**, sets its text content, and appends it to the **`<ul>`** with the ID **`#shopping-list`**.                                                                                                               |

---

### III. Modifying Content and Styling

| Question | Topic                                                                                                                                                                                                                                                                             |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **9.**   | **`innerHTML`**: Select the element with the ID **`#promo-box`**. Replace its entire content by setting its **`innerHTML`** to a new paragraph: **`<p>Limited Time Offer! <strong>Save 50%</strong></p>`**.                                                                       |
| **10.**  | **`innerText` vs. `innerHTML`**: Select the element with the class **`.data-output`**. First, use **`innerText`** to add the string **`'<em>Raw Data</em>'`**. Next, comment out that line and use **`innerHTML`** to add the same string, observing the difference in rendering. |
| **11.**  | **`style`**: Select the element with the ID **`#banner`**. Use the **`style`** property to set its **`border`** to **`1px solid black`** and its **`padding`** to **`10px`**.                                                                                                     |
| **12.**  | **`className`**: Select the button with the ID **`#toggle-theme`**. Change its class from **`btn-light`** to **`btn-dark`**.                                                                                                                                                      |
| **13.**  | **Adding a Class**: Select the element with the ID **`#warning-message`**. Use the **`classList.add()`** method to add a new class called **`is-visible`**.                                                                                                                       |
| **14.**  | **Removing a Class**: Select the main container element with the class **`.main-layout`**. Use the **`classList.remove()`** method to remove the class **`loading`**.                                                                                                             |

---

### IV. Working with Attributes

| Question | Topic                                                                                                                                                                                                                                        |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **15.**  | **`setAttribute`**: Select the image element (which is the only `<img>` on the page). Use **`setAttribute`** to change its **`src`** attribute to **`'./assets/new-image.jpg'`** and its **`alt`** attribute to **`'A placeholder image'`**. |
| **16.**  | **`getAttribute`**: Select the link element with the ID **`#profile-link`**. Retrieve its **`href`** attribute value and log it to the console.                                                                                              |
| **17.**  | **ID Modification**: Select the paragraph element with the class **`.draft`**. Use its **`id`** property to change its ID from its current value to **`archived-draft-42`**.                                                                 |

---

### V. Combined and Advanced Operations

| Question | Topic                                                                                                                                                                                                                                                                     |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **18.**  | **Multi-step Creation & Insertion**: Create a new **`<div>`**. Set its class to **`modal`**. Inside this div, create a **`<p>`** element with the text "Modal Content". Append the paragraph to the div, and then append the entire div to the document **`body`**.       |
| **19.**  | **Selection and Style**: Select all elements that have a **`data-active="true"`** attribute (using **`querySelectorAll`**). For each of these elements, set their **`style.fontWeight`** to **`bold`** and set the attribute **`data-active`** to **`false`**.            |
| **20.**  | **DOM Scoping**: Select the **`div`** with the ID **`#user-profile`**. Within _only_ that div, select all **`<span>`** elements and change their **`style.color`** to **`darkorange`**. (Hint: Use `querySelector` or `querySelectorAll` on the specific parent element). |
