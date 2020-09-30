import {
  SHOW_MODAL,
  CLOSE_MODAL,
  LOGIN_CLIENT,
  LOGIN_ADMIN,
} from "../constants";
import { ApiHelper } from "../helpers";

export const showModal = () => ({ type: SHOW_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const loginClient = () => ({ type: LOGIN_CLIENT });
export const loginAdmin = () => ({ type: LOGIN_ADMIN });

export const setStoreFromLocal = () => {
  return (dispatch) => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      dispatch(loginClient());
    }
  };
};

export const addNewClient = (newClient) => {
  return (dispatch) => {
    ApiHelper.post(newClient, "clients")
      .then((response) => response.json())
      .then((json) => dispatch(showModal()));
  };
};

export const checkIfClientExist = (clientParams, history) => {
  return (dispatch) => {
    ApiHelper.post(clientParams, "clients/login")
      .then((response) => response.json())
      .then((json) => {
        if (json.response === "Login done") {
          dispatch(loginClient());
          localStorage.setItem("isLoggedIn", true);
          return history.push(history.path);
        } else {
          return console.log(`${json.response}`);
        }
      });
  };
};

export const adminLogin = (clientParams, history) => {
  return (dispatch) => {
    ApiHelper.post(clientParams, "admins/login_admin")
      .then((response) => response.json())
      .then((json) => {
        if (json.response === "Admin here, watchout") {
          return history.push("/admin_dashboard");
        } else {
          return console.log(`${json.response}`);
        }
      });
  };
};
