// DOM Elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const fetchQuoteBtn = document.getElementById("fetch-quote-btn");
const errorMessage = document.getElementById("error-message");

// Fetch and display a new quote
async function fetchQuote() {
  try {
    // Clear previous messages
    errorMessage.hidden = true;

    // Fetch data from the Quotes API
    const response = await fetch("https://api.quotable.io/random");

    // Check for errors
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Display the quote and author
    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `— ${data.author}`;
  } catch (error) {
    // Handle errors
    quoteText.textContent = "Oops!";
    quoteAuthor.textContent = "";
    errorMessage.hidden = false;
    console.error("Error fetching the quote:", error);
  }
}

// Event listener for the button
fetchQuoteBtn.addEventListener("click", fetchQuote);
