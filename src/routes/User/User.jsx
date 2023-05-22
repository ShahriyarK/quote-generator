import RandomQuote from "../../components/RandomQuote/RandomQuote";
import { Link, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import UserQuote from "../../components/UserQuote/UserQuote";
import "./User.css";

const User = () => {
  const { userId } = useParams();
  const inputRef = useRef();
  const users = JSON.parse(localStorage.getItem("users"));
  const currentUser = users[userId];
  const quotesData =
    JSON.parse(localStorage.getItem(`${currentUser.fname}_${userId}`)) || [];
  const [quotes, setQuotes] = useState(quotesData);
  const [toggleClear, setToggleClear] = useState(false);

  const handleClear = () => {
    setQuotes([...quotesData]);
    inputRef.current.value = "";
    setToggleClear(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const searched = quotesData.filter((el) =>
      el.quote.toLowerCase().includes(inputRef.current.value.toLowerCase())
    );
    setQuotes([...searched]);
    setToggleClear(true);
  };

  return (
    <div className="user-wrapper">
      <RandomQuote />
      <form onSubmit={submitHandler} className="search-form">
        <input
          type="text"
          name="quotes"
          placeholder="Search your saved quotes"
          ref={inputRef}
        ></input>
        {toggleClear && <button onClick={handleClear}>X</button>}
        <button type="submit">Search</button>
      </form>
      <h1 className="user-heading">{currentUser.fname}'s Quotes</h1>
      {quotes.length === 0 && (
        <p className="no-quote-msg">No quotes found...</p>
      )}
      <div className="user-quote-wrap">
        {quotes.map((quote) => (
          <UserQuote
            key={quote.quoteId}
            firstName={currentUser.fname}
            id={userId}
            quoteId={quote.quoteId}
            content={quote.quote}
            state={quotes}
            setState={setQuotes}
          />
        ))}
      </div>
      <p className="user-p">
        <span>
          <Link to="add-quote" className="add-quote">
            Add
          </Link>
        </span>{" "}
        additional quotes.
      </p>
    </div>
  );
};

export default User;
