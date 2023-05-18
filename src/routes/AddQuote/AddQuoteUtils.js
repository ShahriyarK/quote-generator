export function updateUserQuotes(array, id, content) {
    const newUserQuote = {};
    const matchingUser = array.find(obj => obj.id === id)
    if (matchingUser) {
        matchingUser.quotes.push(content);
        return array;
    } else {
        newUserQuote.id = id;
        newUserQuote.quotes = [content];
        array.push(newUserQuote);
        return array;
    }
}


