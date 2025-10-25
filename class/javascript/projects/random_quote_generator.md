# functional specifications for the Random Quote Generator.

## 1.0 User Interface (UI) Elements

The application shall present the user with a simple interface containing three key elements:

- **1.1 Quote Display Area:** A designated area (e.g., a `<p>` or `<blockquote>` element) that displays the text of the current quote.
- **1.2 Author Display Area:** A designated area (e.g., a `<p>` or `<span>` element) that displays the author of the current quote.
- **1.3 "New Quote" Button:** A clickable button element (e.g., `<button>`) with clear text (e.g., "New Quote," "Generate Quote").

---

## 2.0 System Behavior

The system shall perform the following functions:

- **2.1 Initial Load:**

  - **2.1.1** Upon loading, the system **shall** immediately select one random quote from the internal data source.
  - **2.1.2** The system **shall** display the text of this selected quote in the **Quote Display Area**.
  - **2.1.3** The system **shall** display the author of this selected quote in the **Author Display Area**.

- **2.2 "New Quote" Button Click Event:**
  - **2.2.1** The system **shall** listen for a "click" event on the **"New Quote" Button**.
  - **2.2.2** When the user clicks the button, the system **shall** execute a function to select a new random quote object from the data source.
  - **2.2.3** The system **shall** update the text content of the **Quote Display Area** to display the text of the _newly_ selected quote.
  - **2.2.4** The system **shall** update the text content of the **Author Display Area** to display the author of the _newly_ selected quote.

---

## 3.0 Data Source

- **3.1 Data Structure:** The application **shall** contain an internal, predefined collection (e.g., an array) of quote objects.
- **3.2 Object Schema:** Each object within the collection **shall** have at least two properties:
  - `quote`: A string containing the full text of the quote.
  - `author`: A string containing the name of the author.
- **3.3 Data Requirement:** The data source **shall** contain a minimum of five (5) unique quote objects to ensure a varied user experience.

## Sample Data

```javascript
[
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  {
    quote: "What we think, we become.",
    author: "Buddha",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
];
```
