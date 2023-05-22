export function updateUserQuotes(firstName, id, userQuote) {
    // const newUserQuote = {};
    // const matchingUser = quotesArr.find(obj => obj.id === id)
    // quotesArr.id = id;
    // quotesArr.quotes = [{quoteId:0, userQuote:userQuote}]
    // return quotesArr;

    // if (matchingUser) {
    //     matchingUser.quotes.push(userQuote);
    //     return quotesArr;
    // }
    // newUserQuote.id = id;
    // newUserQuote.quotes = [];
    // newUserQuote.quotes = [userQuote];
    // const quote = {
    //     quoteId: 0,
    //     quote:userQuote
    // }
    // newUserQuote.quotes.push(quote);
    // newUserQuote.quotes = {}
    // quotesArr.push(newUserQuote);
    // return quotesArr;

    // const userQuote = {}
    // const quotes = [];
    // const usersQt =
    // const quote = {
    //     id: id,
    //     quotes: quotes.push()
    // }
    // quotesArr either is empty or it contains a users data
    // 1. When its empty
    // store the object in quotes array
    // const matchingUser = quotesArr.find(obj => obj.id === id)
    // if (matchingUser) {
    //     const matchedUserQuotes = matchingUser.quotes;

    //     matchedUserQuotes.push({quoteId: matchedUserQuotes.length, userQuote: userQuote});
    //     return
    // }


    // const userQ = {};
    // userQ.id = id;
    // userQ.quotes = [{quoteId:0, userQuote:userQuote}]
    // quotesArr.push(userQ);
    // return quotesArr;

    // 2. when user exists
    // i.e. if matched:
    // const matchedObj.quotes.push({quoteId: matchedObj.quotes.length, userQuote: userQuote}) = quotesArr.quotes;
    // userQuotesArr.push({quoteId: userQuotesArr.length, userQuote: userQuote})
    // const users = JSON.parse(localStorage.getItem('users'));
    // const matchedUser = users.find((obj) => obj.id === Number(id));
    // console.log(matchedUser);
    // const firstName = matchedUser.fname;

    const userQuotesArr = JSON.parse(localStorage.getItem(`${firstName}_${id}`)) || [];
    if (userQuotesArr.length > 0) {
        userQuotesArr.push({quoteId: `${userQuotesArr.length}-${Date.now()}`, quote: userQuote});
        return userQuotesArr;
    }
    const userQt = {quoteId:`0-${Date.now()}`, quote:userQuote};
    userQuotesArr.push(userQt);
    return userQuotesArr;
}


// const users = JSON.parse(localStorage.getItem('users'));
// const matchedUser = users.find(obj => obj.id === id);
// const firstName = matchedUser.firstName;

// const userQuotesArr = JSON.parse(localStorage.getItem(`${firstName}_${id}`)) || [];
// if (userQuotesArr.length > 0) {
//     userQuotesArr.push({quoteId: userQuotesArr.length, quote: userQuote});
// }
// const userQt = {quoteId:0, quote:userQuote};
// userQuotesArr.push(userQt);
// return userQuotesArr;
