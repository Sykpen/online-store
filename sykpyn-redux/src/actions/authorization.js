import {
  SWOW_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
  LOGIN_CLIENT,
  LOGIN_ADMIN,
  SWOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
  LOGOUT_CLIENT,
} from "../constants";
import { ApiHelper } from "../helpers";
import { setCurrentClientData } from "./index";

export const showSuccessModal = () => ({
  type: SWOW_SUCCESS_MODAL,
});
export const closeSuccessModal = () => ({
  type: CLOSE_SUCCESS_MODAL,
});
export const showErrorModal = () => ({ type: SWOW_ERROR_MODAL });
export const closeErrorModal = () => ({ type: CLOSE_ERROR_MODAL });
export const loginClient = (id) => ({ type: LOGIN_CLIENT, id: id });
export const loginAdmin = () => ({ type: LOGIN_ADMIN });

export const logoutClient = () => {
  localStorage.setItem("currentClientID", null);
  localStorage.setItem("isLoggedIn", false);
  return { type: LOGOUT_CLIENT };
};

export const setStoreFromLocalStorage = () => {
  return (dispatch) => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let currentClientID = localStorage.getItem("currentClientID");
    if (isLoggedIn) {
      dispatch(loginClient(currentClientID));
    }
  };
};

export const registerClient = (newClient) => {
  return (dispatch) => {
    ApiHelper.post("clients", newClient)
      .then((response) => response.json())
      .then(() => dispatch(showSuccessModal()));
  };
};

export const checkIfClientExist = (clientParams, history) => {
  return (dispatch) => {
    ApiHelper.post("clients/login", clientParams)
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "Login done") {
          localStorage.setItem("isLoggedIn", true);
          dispatch(setCurrentClientData(json.client));
          localStorage.setItem("currentClientID", json.client.id);
          dispatch(loginClient());
          return history.push("/client_profile");
        } else {
          return dispatch(showErrorModal());
        }
      });
  };
};

export const adminLogin = (clientParams, history) => {
  return (dispatch) => {
    ApiHelper.post("admins/login", clientParams).then((response) => {
      if (response.status === 200) {
        dispatch(loginAdmin());
        return history.push("/admin_dashboard");
      } else {
        return dispatch(showErrorModal());
      }
    });
  };
};
