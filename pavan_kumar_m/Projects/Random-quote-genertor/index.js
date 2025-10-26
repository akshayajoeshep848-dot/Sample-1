let quotes;

async function fetchQuotes() {
  try {
    const res = await fetch("https://dummyjson.com/quotes");
    //  console.log(res)
    const data = await res.json();
    // console.log(data);
    quotes = data.quotes;
    // console.log(quotes);
    displayRandomQuote();
  } catch (err) {
    console.log("Error is : ", err);
  }
}

fetchQuotes();

let button1 = document.getElementById("btn1");
let p1 = document.getElementById("quotetext");
let p2 = document.getElementById("author");
// console.log(p2)

function displayRandomQuote() {
  if (!quotes || quotes.length === 0) {
    p1.textContent = "No quotes available.";
    p2.textContent = "";
    return;
  }
  let randomquote = quotes[Math.floor(Math.random() * quotes.length)];
  // console.log(randomquote);
  p1.textContent = randomquote.quote;
  p2.textContent = `-- ${randomquote.author}`;
}

button1.addEventListener("click", displayRandomQuote);
