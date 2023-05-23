import RandomQuote from "../../components/RandomQuote/RandomQuote";
import { Link, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import UserQuote from "../../components/UserQuote/UserQuote";
import { accessLocalStorage } from "../../Utilities/LocalStorage";
import "./User.css";
import searchIcon from "./icons/search-ic.png";
import closeIcon from "./icons/crossed.png";

const User = () => {
  const { userId } = useParams();
  const inputRef = useRef();
  const users = accessLocalStorage("users", "fetch");
  const currentUser = users[userId];
  const key = `${currentUser.fname}_${userId}`;
  const quotesData = accessLocalStorage(key, "fetch");
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
          required
        ></input>
        {toggleClear && (
          <button onClick={handleClear}>
            <img src={closeIcon} alt="reset icon" className="search-icon"></img>
          </button>
        )}
        <button type="submit">
          <img src={searchIcon} alt="search icon" className="search-icon"></img>
        </button>
      </form>
      <h1 className="user-heading">
        <span className="user-name">{currentUser.fname}'s</span> Quotes
      </h1>
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
            setQuotes={setQuotes}
            author={quote.author}
          />
        ))}
      </div>
      <p className="user-p">
        <span>
          <Link to="add-quote" className="add-quote">
            Add
          </Link>
        </span>{" "}
        quotes.
      </p>
    </div>
  );
};

export default User;
