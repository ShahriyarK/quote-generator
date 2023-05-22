import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./RandomQuote.css";

const RandomQuote = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const quotes = useLoaderData();
  const quote = quotes[currentIdx];
  const error = quotes.message;

  return (
    <div className="quote-wrapper">
      {/* <h1>Magic Quotes</h1> */}
      {quote && <p className="quote">''{quote.text}''</p>}
      {quote && (
        <p className="author">- {quote.author ? quote.author : "Anonymous"}</p>
      )}
      {error && <p className="fetch-error">Unable to retrieve data</p>}
      <button onClick={() => setCurrentIdx((currentIdx + 1) % quotes.length)}>
        Generate Quote
      </button>
    </div>
  );
};

export async function loader() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default RandomQuote;
