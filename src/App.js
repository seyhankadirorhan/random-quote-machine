import React, { useState } from "react";

const quotes = [
  { text: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
  { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" }
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div id="quote-box" style={{ maxWidth: 600, margin: "100px auto", padding: 20, background: "#f4f4f4", borderRadius: 10, textAlign: "center" }}>
      <p id="text" style={{ fontSize: "1.5em" }}>"{quote.text}"</p>
      <p id="author" style={{ marginBottom: "20px", color: "#555" }}>- {quote.author}</p>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#1da1f2", color: "#fff", padding: "10px 15px", borderRadius: 5, textDecoration: "none" }}
        >
          Tweet
        </a>
        <button
          id="new-quote"
          onClick={handleNewQuote}
          style={{ backgroundColor: "#4caf50", color: "#fff", padding: "10px 15px", border: "none", borderRadius: 5 }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
