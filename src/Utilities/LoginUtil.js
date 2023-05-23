export const matchUserCredentials = (array, email, password) => {
  const matchedUser = array.find(
    (obj) => obj.email === email && obj.password === password
  );
  return matchedUser;
};
