export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});
// export const setFavorite = (payload) => payload;
export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});
export const addUser = (payload) => ({
  type: "ADD_USER",
  payload,
});
