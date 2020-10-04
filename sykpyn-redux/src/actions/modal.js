import {
  SHOW_DEPOSIT_MODAL,
  CLOSE_DEPOSIT_MODAL,
  SWOW_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
  SWOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
} from "../constants";

export const showSuccessModal = () => ({
  type: SWOW_SUCCESS_MODAL,
});
export const closeSuccessModal = () => ({
  type: CLOSE_SUCCESS_MODAL,
});
export const showErrorModal = () => ({ type: SWOW_ERROR_MODAL });
export const closeErrorModal = () => ({ type: CLOSE_ERROR_MODAL });
export const showDepositModal = () => ({ type: SHOW_DEPOSIT_MODAL });
export const closeDepositModal = () => ({ type: CLOSE_DEPOSIT_MODAL });
