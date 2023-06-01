import searchIcon from "./icons/search-ic.png";
import closeIcon from "./icons/crossed.png";
import "./SearchForm.css";

const SearchForm = ({ toggleClear, submitHandler, handleClear, inputRef }) => {
  return (
    <form onSubmit={submitHandler} className="search-form">
      <input
        type="text"
        name="quotes"
        placeholder="Search your saved quotes"
        ref={inputRef}
        required
      ></input>
      {toggleClear && (
        <button onClick={handleClear}>
          <img src={closeIcon} alt="reset icon" className="icon"></img>
        </button>
      )}
      <button type="submit">
        <img src={searchIcon} alt="search icon" className="icon"></img>
      </button>
    </form>
  );
};

export default SearchForm;
