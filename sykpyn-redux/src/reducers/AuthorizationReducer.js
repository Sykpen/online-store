import {
  SWOW_SUCCESS_REGISTER_MODAL,
  CLOSE_SUCCESS_REGISTER_MODAL,
  LOGIN_CLIENT,
  LOGIN_ADMIN,
  SWOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
} from "../constants";

const initialState = {
  showSuccessRegisterModal: false,
  showErrorModal: false,
  isLoggedIn: false,
  isAdmin: false,
  currentLoginClientData: [],
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
        currentLoginClientData: action.data
      };
    case SWOW_SUCCESS_REGISTER_MODAL:
      return {
        ...state,
        showSuccessRegisterModal: true,
      };
    case SWOW_ERROR_MODAL:
      return {
        ...state,
        showErrorModal: true, 
      };
    case CLOSE_ERROR_MODAL:
      return {
        ...state,
        showErrorModal: false,
      };
    case CLOSE_SUCCESS_REGISTER_MODAL:
      return {
        ...state,
        showSuccessRegisterModal: false,
      };
    default:
      return state;
  }
};
