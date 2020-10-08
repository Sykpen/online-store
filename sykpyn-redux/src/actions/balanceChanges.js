import { ApiHelper } from "../helpers";
import { showSuccessModal } from "./modal";
import { setCurrentClientData } from "../actions";

export const updateClientBalance = (id, updateProperties) => {
  return (dispatch) => {
    ApiHelper.update("clients", id, updateProperties)
      .then((response) => response.json())
      .then((parsedResponse) => {
        dispatch(setCurrentClientData(parsedResponse.client));
        dispatch(showSuccessModal());
      });
  };
};
