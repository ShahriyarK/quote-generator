import {Form, redirect, useParams, useNavigate} from 'react-router-dom';
import './AddQuote.css';
import {updateUserQuotes} from './AddQuoteUtils';

const AddQuote = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className='quote-form-wrap'>
            <div className='form-header-wrap'>
                <button onClick={()=>navigate(`/user/${params.userId}`)}>Back</button>
                <h1>Save your own quotes</h1>
            </div>
            <Form method='post'>
                <textarea
                placeholder='Type your quote'
                name='quote'
                required
                spellCheck='true'
                rows="6"
                minLength='10'
                maxLength='110'
                ></textarea>
                <button type='submit'>Save</button>
            </Form>
        </div>
    )
}

export async function action({request, params}) {
    const formData = await request.formData();
    const {quote} = Object.fromEntries(formData);
    const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    const updatedQuotes = updateUserQuotes(quotes,params.userId, quote);
    localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    return redirect(`/user/${params.userId}`);
}

export default AddQuote;
