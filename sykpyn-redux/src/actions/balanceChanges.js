import { ApiHelper } from "../helpers";
import { showSuccessModal, showErrorModal } from "./modal";
import { setCurrentClientData } from "../actions";

export const updateClientBalance = (id, updateProperties) => {
  return (dispatch) => {
    ApiHelper.update("clients", id, updateProperties)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setCurrentClientData(json.client));
        dispatch(showSuccessModal());
      });
  };
};
