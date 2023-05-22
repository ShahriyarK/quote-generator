import { useNavigate } from "react-router-dom";
import {accessLocalStorage} from '../../Utilities/LocalStorage'
import './UserQuote.css';
const UserQuote = ({ content, quoteId, id, firstName, setQuotes, author }) => {
    const key=`${firstName}_${id}`;
    const quotes = accessLocalStorage(key, 'fetch');
  const navigate = useNavigate();

  const handleDelete = (quoteId) => {
    const updatedQuotes = quotes.filter((quote) => quote.quoteId !== quoteId);
    accessLocalStorage(key,'save', updatedQuotes)
    setQuotes([...updatedQuotes]);
  };

  return (
    <div className="user-quote">
      <p>{content}</p>
      <p>{author}</p>
      <button onClick={() => handleDelete(quoteId)}>Delete</button>
      <button onClick={() => navigate(`edit-quote/${quoteId}`)}>Edit</button>
    </div>
  );
};

export default UserQuote;
