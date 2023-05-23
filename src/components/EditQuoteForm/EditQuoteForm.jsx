import {
  accessLocalStorage,
  findFromArray,
  findWithIndex,
} from "../../Utilities/LocalStorage";
import { Form, redirect } from "react-router-dom";
import "../QuoteAddForm/QuoteAddForm.css";

const EditQuoteForm = ({ handleChange, quote, author }) => {
  return (
    <Form method="post" className="quote-form">
      <textarea
        name="quote"
        required
        spellCheck="true"
        rows="6"
        minLength="10"
        maxLength="150"
        value={quote}
        onChange={handleChange}
      ></textarea>
      <input
        value={author}
        name="author"
        onChange={handleChange}
        placeholder="Who said it? (Optional)"
      ></input>
      <button type="submit">Update</button>
    </Form>
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

export default EditQuoteForm;
