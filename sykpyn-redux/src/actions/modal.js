import {
  SHOW_DEPOSIT_MODAL,
  CLOSE_DEPOSIT_MODAL,
  SHOW_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
  SHOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
  SHOW_PRODUCT_CHANGE_MODAL,
  CLOSE_PRODUCT_CHANGE_MODAL,
} from "../constants";

export const showSuccessModal = () => ({
  type: SHOW_SUCCESS_MODAL,
});
export const closeSuccessModal = () => ({
  type: CLOSE_SUCCESS_MODAL,
});
export const showErrorModal = () => ({ type: SHOW_ERROR_MODAL });
export const closeErrorModal = () => ({ type: CLOSE_ERROR_MODAL });
export const showDepositModal = () => ({ type: SHOW_DEPOSIT_MODAL });
export const closeDepositModal = () => ({ type: CLOSE_DEPOSIT_MODAL });
export const showProductChangeModal = (ProductId) => ({
  type: SHOW_PRODUCT_CHANGE_MODAL,
  id: ProductId,
});
export const closeProductChangeModal = () => ({
  type: CLOSE_PRODUCT_CHANGE_MODAL,
});
