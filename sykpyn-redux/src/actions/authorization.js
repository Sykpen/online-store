import {
  SWOW_SUCCESS_REGISTER_MODAL,
  CLOSE_SUCCESS_REGISTER_MODAL,
  LOGIN_CLIENT,
  LOGIN_ADMIN,
  SWOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
} from "../constants";
import { ApiHelper } from "../helpers";

export const showSuccessRegisterModal = () => ({
  type: SWOW_SUCCESS_REGISTER_MODAL,
});
export const closeSuccessRegisterModal = () => ({
  type: CLOSE_SUCCESS_REGISTER_MODAL,
});
export const showErrorModal = () => ({ type: SWOW_ERROR_MODAL });
export const closeErrorModal = () => ({ type: CLOSE_ERROR_MODAL });
export const loginClient = (data) => ({ type: LOGIN_CLIENT, data: data });
export const loginAdmin = () => ({ type: LOGIN_ADMIN });

export const setStoreFromLocalStorage = () => {
  return (dispatch) => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let clientData = JSON.parse(localStorage.getItem("clientData"));
    if (isLoggedIn) {
      dispatch(loginClient(clientData));
    }
  };
};

export const registerClient = (newClient) => {
  return (dispatch) => {
    ApiHelper.post("clients", newClient)
      .then((response) => response.json())
      .then((json) => dispatch(showSuccessRegisterModal()));
  };
};

export const checkIfClientExist = (clientParams, history) => {
  return (dispatch) => {
    ApiHelper.post("clients/login", clientParams)
      .then((response) => response.json())
      .then((json) => {
        if (json.response === "Login done") {
          dispatch(loginClient());
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("clientData", JSON.stringify(json.client_data));
          return history.push("/client_profile");
        } else {
          return dispatch(showErrorModal());
        }
      });
  };
};

export const adminLogin = (clientParams, history) => {
  return (dispatch) => {
    ApiHelper.post("admins/login", clientParams)
      .then((response) => response.json())
      .then((json) => {
        if (json.response === "Admin here, watchout") {
          dispatch(loginAdmin());
          return history.push("/admin_dashboard");
        } else {
          return dispatch(showErrorModal());
        }
      });
  };
};
