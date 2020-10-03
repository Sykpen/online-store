import { LOGIN_CLIENT, LOGIN_ADMIN, LOGOUT_CLIENT } from "../constants";

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  currentLoginClientId: null,
};

export const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        isAdmin: true,
      };
    case LOGIN_CLIENT:
      return {
        ...state,
        isLoggedIn: true,
        currentLoginClientId: action.id,
      };
    case LOGOUT_CLIENT:
      return {
        ...state,
        isLoggedIn: false,
        currentLoginClientId: null,
      };
    default:
      return state;
  }
};
