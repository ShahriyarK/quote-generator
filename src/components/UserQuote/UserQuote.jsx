import { useNavigate } from "react-router-dom";

const UserQuote = ({ content, quoteId, id, firstName, state, setState }) => {
  const quotes = JSON.parse(localStorage.getItem(`${firstName}_${id}`));
  const navigate = useNavigate();
  const handleDelete = (quoteId) => {
    const updatedQuotes = quotes.filter((quote) => quote.quoteId !== quoteId);
    localStorage.setItem(`${firstName}_${id}`, JSON.stringify(updatedQuotes));
    setState([...updatedQuotes]);
  };

  return (
    <div className="user-quote">
      <p>{content}</p>
      <button onClick={() => handleDelete(quoteId)}>Delete</button>
      <button onClick={() => navigate(`edit-quote/${quoteId}`)}>Edit</button>
    </div>
  );
};

export default UserQuote;
