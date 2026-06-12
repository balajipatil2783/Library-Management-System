export const getBooks = () => {
  return JSON.parse(localStorage.getItem("books")) || [];
};

export const saveBooks = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};

export const getNotifications = () => {
  return JSON.parse(localStorage.getItem("notifications")) || [];
};

export const saveNotifications = (data) => {
  localStorage.setItem("notifications", JSON.stringify(data));
};

export const getHistory = () => {
  return JSON.parse(localStorage.getItem("history")) || [];
};

export const saveHistory = (data) => {
  localStorage.setItem("history", JSON.stringify(data));
};