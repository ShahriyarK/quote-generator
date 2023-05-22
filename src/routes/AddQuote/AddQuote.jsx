import { Form, redirect, useParams, useNavigate } from "react-router-dom";
import "./AddQuote.css";
import { updateUserQuotes } from "./AddQuoteUtils";
import {accessLocalStorage, findFromArray} from '../../Utilities/LocalStorage'

const AddQuote = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="quote-form-wrap">
      <div className="form-header-wrap">
        <button onClick={() => navigate(`/user/${params.userId}`)}>Back</button>
        <h1>Save your own quotes</h1>
      </div>
      <Form method="post">
        <textarea
          placeholder="Enter your quote"
          name="quote"
          required
          spellCheck="true"
          rows="6"
          minLength="10"
          maxLength="110"
        ></textarea>
        <input placeholder='Who said it? (Optional)' name='author'></input>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export async function action({ request, params }) {
  const formData = await request.formData();
  const { quote, author } = Object.fromEntries(formData);
  const id = params.userId;
  const users = accessLocalStorage('users', 'fetch');
  const matchedUser = findFromArray('users', users,'id', id);
  const firstName = matchedUser.fname;
  const updatedQuotes = updateUserQuotes(firstName, params.userId, quote, author);
  accessLocalStorage(`${firstName}_${id}`, 'save', updatedQuotes);
  return redirect(`/user/${params.userId}`);
}

export default AddQuote;
