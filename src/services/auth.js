export const setUid = (token) => {
  localStorage.setItem("uid", token);
};

export const getUid = () => {
  return localStorage.getItem("uid");
};

export const logout = () => {
  localStorage.removeItem("uid");
};
