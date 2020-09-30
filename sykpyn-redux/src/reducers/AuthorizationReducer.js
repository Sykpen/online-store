import {
  SHOW_MODAL,
  CLOSE_MODAL,
  LOGIN_CLIENT,
  LOGIN_ADMIN,
} from "../constants";

const initialState = {
  showModal: false,
  isLoggedIn: false,
  isAdmin: false,
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
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};
