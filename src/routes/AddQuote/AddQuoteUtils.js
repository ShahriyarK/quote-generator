export function updateUserQuotes(firstName, id, userQuote, author) {
  const userQuotesArr =
    JSON.parse(localStorage.getItem(`${firstName}_${id}`)) || [];
    userQuotesArr.push({
      quoteId: `${userQuotesArr.length}-${Date.now()}`,
      quote: userQuote,
      author: author,
    });
    return userQuotesArr;
}
