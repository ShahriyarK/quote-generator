import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  accessLocalStorage,
  findFromArray,
} from "../../Utilities/LocalStorage";
import "../AddQuote/AddQuote.css";
import EditQuoteForm from "../../components/EditQuoteForm/EditQuoteForm";

const EditQuote = () => {
  const params = useParams();
  const navigate = useNavigate();
  const users = accessLocalStorage("users", "fetch");
  const matchingUser = findFromArray("users", users, "id", params.userId);
  const firstName = matchingUser.fname;
  const key = `${firstName}_${params.userId}`;
  const quotes = accessLocalStorage(key, "fetch");
  const matchingQuote = findFromArray(key, quotes, "quoteId", params.quoteId);
  const [quote, setQuote] = useState({
    quote: matchingQuote.quote,
    author: matchingQuote.author,
  });

  const handleChange = (e) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };
  return (
    <div className="quote-form-wrap">
      <div className="form-header-wrap">
        <button onClick={() => navigate(`/user/${params.userId}`)}>Back</button>
        <h1>Edit Quote</h1>
      </div>
      <EditQuoteForm
        handleChange={handleChange}
        quote={quote.quote}
        author={quote.author}
      />
    </div>
  );
};

export default EditQuote;
