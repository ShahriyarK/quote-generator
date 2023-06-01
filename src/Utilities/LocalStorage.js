export const accessLocalStorage = (key, mode, value) => {
  if (mode === "fetch") {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    return data;
  }
  if (mode === "save") {
    const data = localStorage.setItem(key, JSON.stringify(value));
    return data;
  }
};

export const findFromArray = (key, array, property, value) => {
  if (key === "users") {
    const matchingUser = array.find((obj) => obj[property] === value);
    return matchingUser;
  }
  const matchingQuotes = array.find((obj) => obj[property] === value);
  return matchingQuotes;
};

export const findWithIndex = (key, array, property, value) => {
  if (key === "users") {
    const matchingIdx = array.findIndex(
      (obj) => obj[property] === Number(value)
    );
    return matchingIdx;
  }
  const matchingIdx = array.findIndex((obj) => obj[property] === value);
  return matchingIdx;
};
