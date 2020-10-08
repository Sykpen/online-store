import { LOGIN_CLIENT, LOGIN_ADMIN, LOGOUT_CLIENT } from "../constants";

const initialState = {
  currentAdminId: false,
  currentLoginClientId: false,
};

export const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        currentAdminId: action.id,
      };
    case LOGIN_CLIENT:
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
