import { LOGIN_CLIENT, LOGIN_ADMIN, LOGOUT_CLIENT } from "../constants";

const initialState = {
  isAdmin: false,
  currentLoginClientId: false,
};

export const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        isAdmin: true,
      };
    case LOGIN_CLIENT:
      debugger;
      return {
        ...state,
        currentLoginClientId: action.id,
      };
    case LOGOUT_CLIENT:
      return {
        ...state,
        currentLoginClientId: false,
      };
    default:
      return state;
  }
};
