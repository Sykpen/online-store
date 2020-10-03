import {
  SWOW_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
  SWOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
  SHOW_DEPOSIT_MODAL,
  CLOSE_DEPOSIT_MODAL,
} from "../constants";

const initialState = {
  showSuccessModal: false,
  showErrorModal: false,
  showDepositModal: false,
};

export const ModalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWOW_SUCCESS_MODAL:
      return {
        ...state,
        showSuccessModal: true,
      };
    case SHOW_DEPOSIT_MODAL:
      return {
        ...state,
        showDepositModal: true,
      };
    case CLOSE_DEPOSIT_MODAL:
      return {
        ...state,
        showDepositModal: false,
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
    case CLOSE_SUCCESS_MODAL:
      return {
        ...state,
        showSuccessModal: false,
      };
    default:
      return state;
  }
};
