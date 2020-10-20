import {
  SHOW_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
  SHOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
  SHOW_DEPOSIT_MODAL,
  CLOSE_DEPOSIT_MODAL,
  SHOW_PRODUCT_CHANGE_MODAL,
  CLOSE_PRODUCT_CHANGE_MODAL,
} from "../constants";

const initialState = {
  showSuccessModal: false,
  showErrorModal: false,
  showDepositModal: false,
  showProductChangeModal: false,
  productId: null,
};

export const ModalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_CHANGE_MODAL:
      return {
        ...state,
        showProductChangeModal: true,
        productId: action.id,
      };
    case CLOSE_PRODUCT_CHANGE_MODAL:
      return {
        ...state,
        showProductChangeModal: false,
      };
    case SHOW_SUCCESS_MODAL:
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
    case SHOW_ERROR_MODAL:
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
