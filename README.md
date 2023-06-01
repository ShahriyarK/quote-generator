# quote-generator
An app that displays random quote ( that is fetched from https://type.fit/api/quotes ) and also allows users to view their own saved quotes when logged in.
* The app displays a random quote from the api on home page and on clicking a button, the next quote is generated.
* The app allows users to save their own quotes and view them once they are logged in.
* Before logging in, a user has to sign up with the app.
* When the user is logged in, they can add their own quotes and can view them, delete them or update them as per requirement.
* The user data during sign up is saved in local storage as this app doesnot utilize any database.
* The login credential are also matched from the users data stored in local storage.
* Furthermore, whatever quote user adds is also saved in local storage and is updated there accordingly depending on the action the user takes (edit, delete, or add).

Additional comments:
* The response from the api has not been cached because there was no rate limit on the api.
* The routes that rely on a user being logged in have been protected by managing a user authentication state.
* However, when the page reloads the user authentication state resets to false and hence the user is logged out. This is probably because state has not been managed using Redux.
