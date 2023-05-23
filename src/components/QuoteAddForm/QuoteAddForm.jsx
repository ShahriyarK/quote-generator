import { Form, redirect } from "react-router-dom";
import {
  accessLocalStorage,
  findFromArray,
} from "../../Utilities/LocalStorage";
import { updateUserQuotes } from "../../Utilities/AddQuoteUtils";
import "./QuoteAddForm.css";
const QuoteAddForm = () => {
  return (
    <Form method="post" className="quote-form">
      <textarea
        placeholder="Enter your quote"
        name="quote"
        required
        spellCheck="true"
        rows="6"
        minLength="10"
        maxLength="150"
      ></textarea>
      <input placeholder="Who said it? (Optional)" name="author"></input>
      <button type="submit">Save</button>
    </Form>
  );
};

export default QuoteAddForm;

export async function action({ request, params }) {
  const formData = await request.formData();
  const { quote, author } = Object.fromEntries(formData);
  const id = params.userId;
  const users = accessLocalStorage("users", "fetch");
  const matchedUser = findFromArray("users", users, "id", id);
  const firstName = matchedUser.fname;
  const updatedQuotes = updateUserQuotes(
    firstName,
    params.userId,
    quote,
    author
  );
  accessLocalStorage(`${firstName}_${id}`, "save", updatedQuotes);
  return redirect(`/user/${params.userId}`);
}
