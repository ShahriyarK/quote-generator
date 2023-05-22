import {useActionData, Form, useNavigate, useParams, redirect} from 'react-router-dom';
import {useState} from 'react';

const EditQuote = () => {
    const params = useParams();
    const navigate = useNavigate();
    const users = JSON.parse(localStorage.getItem('users'));
    const matchingUser = users.find(obj => obj.id === Number(params.userId));
    const firstName = matchingUser.fname;
    const quotes = JSON.parse(localStorage.getItem(`${firstName}_${params.userId}`))
    const matchingQuote = quotes.find(obj => obj.quoteId === params.quoteId);
    const [quote, setQuote] = useState(matchingQuote.quote)

    const handleChange = (e) => {
        setQuote(e.target.value);
    }
  return (
    <div className="edit-wrap">
      <div className="form-header-wrap">
        <button onClick={() => navigate(`/user/${params.userId}`)}>Back</button>
        <h1>Edit Quote</h1>
        {/*I can actually make a separate component for my back button*/}
      </div>
      <Form method="post">
        <textarea
          name="quote"
          required
          spellCheck="true"
          rows="6"
          minLength="10"
          maxLength="110"
          value={quote}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update</button>
      </Form>
    </div>
  );
};

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const userFields = Object.fromEntries(formData);
    console.log(userFields)
    const quoteId = params.quoteId;
    console.log(quoteId);
    const userId = params.userId;
    const users = JSON.parse(localStorage.getItem('users'));
    const matchingUser = users.find(obj => obj.id === Number(params.userId));
    const firstName = matchingUser.fname;
    const quotes = JSON.parse(localStorage.getItem(`${firstName}_${userId}`));
    const matchedIdx = quotes.findIndex(obj => obj.quoteId === quoteId);
    console.log(matchedIdx);
    const updatedQuote = {
        quoteId: quoteId, quote:userFields.quote
    }
    quotes.splice(matchedIdx, 1, updatedQuote);
    console.log(quotes);
    localStorage.setItem(`${firstName}_${userId}`, JSON.stringify(quotes));
    return redirect(`/user/${params.userId}`);
};

export default EditQuote;
