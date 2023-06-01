import { useParams, useNavigate } from "react-router-dom";
import "./AddQuote.css";
import QuoteAddForm from "../../components/QuoteAddForm/QuoteAddForm";
const AddQuote = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="quote-form-wrap">
      <div className="form-header-wrap">
        <button onClick={() => navigate(`/user/${params.userId}`)}>Back</button>
        <h1>Save your own quotes</h1>
      </div>
      <QuoteAddForm />
    </div>
  );
};

export default AddQuote;
