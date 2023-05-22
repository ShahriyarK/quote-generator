const UserQuote = ({content, quoteId, id, firstName, state, setState}) => {
    const quotes = JSON.parse(localStorage.getItem(`${firstName}_${id}`));
    const handleDelete = (quoteId) =>{
        const updatedQuotes = quotes.filter(quote => quote.quoteId !== quoteId)
        localStorage.setItem(`${firstName}_${id}`, JSON.stringify(updatedQuotes));
        setState([...updatedQuotes]);
    }
    return(
        <div className='user-quote'>
            <button onClick={()=>handleDelete(quoteId)}>Delete</button>
            <p>{content}</p>
        </div>
    )
}

export default UserQuote;
