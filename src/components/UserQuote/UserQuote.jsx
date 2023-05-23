import { useNavigate } from "react-router-dom";
import { accessLocalStorage } from "../../Utilities/LocalStorage";
import deleteIcon from "./icons/delete-icon.png";
import pencilIcon from "./icons/pencil.png";
import "./UserQuote.css";

const UserQuote = ({ content, quoteId, id, firstName, setQuotes, author }) => {
  const key = `${firstName}_${id}`;
  const quotes = accessLocalStorage(key, "fetch");
  const navigate = useNavigate();

  const handleDelete = (quoteId) => {
    const updatedQuotes = quotes.filter((quote) => quote.quoteId !== quoteId);
    accessLocalStorage(key, "save", updatedQuotes);
    setQuotes([...updatedQuotes]);
  };
  return (
    <div className="user-quote">
      <div className="content-wrapper">
        <p>"{content}"</p>
        <p className="card-author">{author}</p>
      </div>
      <div className="btn-wrapper">
        <button onClick={() => navigate(`edit-quote/${quoteId}`)}>
          <img className="delete-icon" src={pencilIcon} alt="pencil icon"></img>
        </button>
        <button onClick={() => handleDelete(quoteId)}>
          <img className="delete-icon" src={deleteIcon} alt="delete icon"></img>
        </button>
      </div>
    </div>
  );
};

export default UserQuote;
