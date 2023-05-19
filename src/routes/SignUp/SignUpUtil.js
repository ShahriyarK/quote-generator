import { redirect } from "react-router-dom";

export const validateUser = (userObj, usersArr, matchedUser, url) => {
  if (matchedUser) {
    return "An account associated with this email already exists";
  } else if (userObj.password !== userObj.confirmPass) {
    return "Passwords dont match";
  } else {
    userObj.id = usersArr.length;
    usersArr.push(userObj);
    localStorage.setItem("users", JSON.stringify(usersArr));
    return redirect(url);
  }
};
