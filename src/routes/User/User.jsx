import RandomQuote from "../../components/RandomQuote/RandomQuote";
import { Link, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import "./User.css";

const User = () => {
  const [searchedQuotes, setSearchedQuotes] = useState([]);
  const inputRef = useRef();
  const { userId } = useParams();
  const users = JSON.parse(localStorage.getItem("users"));
  const currentUser = users[userId];
  const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
  const matchedUser = quotes.find((obj) => obj.id === userId);
  function submitHandler(e) {
    e.preventDefault();
    if (matchedUser) {
      const userQuotes = matchedUser.quotes;
      const searched = userQuotes.filter((el) =>
        el.toLowerCase().includes(inputRef.current.value.toLowerCase())
      );
      setSearchedQuotes([...searched]);
    }
  }

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
        <button type="submit">Search</button>
      </form>
      <h1 className="user-h1">{currentUser.fname}'s Quotes</h1>
      {!matchedUser && <p className="no-quote-msg">No quotes added yet...</p>}
      <div className="user-quote-wrap">
        {searchedQuotes.length === 0 &&
          matchedUser &&
          matchedUser.quotes.map((el, i) => (
            <div className="user-quote" key={i}>
              "{el}"
            </div>
          ))}
      </div>
      <div className="user-quote-wrap">
        {searchedQuotes.length > 0 &&
          searchedQuotes.map((quote, i) => (
            <div className="user-quote" key={i}>
              "{quote}"
            </div>
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
