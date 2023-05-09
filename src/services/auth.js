export const setIsLoggedIn = (token) => {
  localStorage.setItem("isLoggedIn", token);
};

export const getIsLoggedIn = () => {
  return localStorage.getItem("isLoggedIn");
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
};
