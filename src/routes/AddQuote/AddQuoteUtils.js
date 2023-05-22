export function updateUserQuotes(firstName, id, userQuote) {
    const userQuotesArr = JSON.parse(localStorage.getItem(`${firstName}_${id}`)) || [];
    if (userQuotesArr.length > 0) {
        userQuotesArr.push({quoteId: `${userQuotesArr.length}-${Date.now()}`, quote: userQuote});
        return userQuotesArr;
    }
    const userQt = {quoteId:`0-${Date.now()}`, quote:userQuote};
    userQuotesArr.push(userQt);
    return userQuotesArr;
}
