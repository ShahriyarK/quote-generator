import { redirect } from "react-router-dom";
import { accessLocalStorage } from "./LocalStorage";

export const validateUser = (userObj, usersArr, matchedUser, url) => {
  if (matchedUser) {
    return "An account associated with this email already exists";
  } else if (userObj.password !== userObj.confirmPass) {
    return "Passwords dont match";
  } else {
    userObj.id = usersArr.length.toString();
    usersArr.push(userObj);
    accessLocalStorage("users", "save", usersArr);
    accessLocalStorage(
      "signup-success",
      "save",
      "Congratulations, you are successfully signed up. Please enter your credentials to login."
    );
    return redirect(url);
  }
};
