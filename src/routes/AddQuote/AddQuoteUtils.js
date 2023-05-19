export function updateUserQuotes(quotesArr, id, userQuote) {
    const newUserQuote = {};
    const matchingUser = quotesArr.find(obj => obj.id === id)
    if (matchingUser) {
        matchingUser.quotes.push(userQuote);
        return quotesArr;
    } else {
        newUserQuote.id = id;
        newUserQuote.quotes = [userQuote];
        quotesArr.push(newUserQuote);
        return quotesArr;
    }
}
