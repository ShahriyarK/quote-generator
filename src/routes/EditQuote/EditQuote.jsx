import { Form, useNavigate, useParams, redirect } from "react-router-dom";
import { useState } from "react";
import {
  accessLocalStorage,
  findFromArray,
  findWithIndex,
} from "../../Utilities/LocalStorage";

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
    <div className="edit-wrap">
      <div className="form-header-wrap">
        <button onClick={() => navigate(`/user/${params.userId}`)}>Back</button>
        <h1>Edit Quote</h1>
      </div>
      <Form method="post">
        <textarea
          name="quote"
          required
          spellCheck="true"
          rows="6"
          minLength="10"
          maxLength="110"
          value={quote.quote}
          onChange={handleChange}
        ></textarea>
        <input
          value={quote.author}
          name="author"
          onChange={handleChange}
          placeholder="Who said it? (Optional)"
        ></input>
        <button type="submit">Update</button>
      </Form>
    </div>
  );
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const { author, quote } = Object.fromEntries(formData);
  const [quoteId, userId] = [params.quoteId, params.userId];
  const users = accessLocalStorage("users", "fetch");
  const matchedUser = findFromArray("users", users, "id", userId);
  const firstName = matchedUser.fname;
  const key = `${firstName}_${userId}`;
  const quotes = accessLocalStorage(key, "fetch");
  const matchedIdx = findWithIndex(key, quotes, "quoteId", quoteId);
  const updatedQuote = {
    quoteId: quoteId,
    quote: quote,
    author: author,
  };
  quotes.splice(matchedIdx, 1, updatedQuote);
  accessLocalStorage(key, "save", quotes);
  return redirect(`/user/${userId}`);
};

export default EditQuote;
