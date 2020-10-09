import { ApiHelper } from "../helpers";
import { SET_CURRENT_CLIENT_ORDERS } from "../constants";
import { showSuccessModal } from "../actions/modal";

export const setOrderInfoToDb = (newOrder) => {
  console.log(newOrder);
  return (dispatch) => {
    ApiHelper.post("orders", newOrder)
      .then((response) => response.json())
      .then(() => {
        dispatch(showSuccessModal());
      });
  };
};

export const getAllOrders = () => {
  return () => {
    ApiHelper.get("orders")
      .then((response) => response.json())
  };
};

export const getAllOrdersForCurrentClient = (clientId) => {
  return (dispatch) => {
    ApiHelper.get(`clients/${clientId}/orders`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        dispatch(setCurrentClientOrders(parsedResponse.client_orders));
      });
  };
};

export const setCurrentClientOrders = (ClientOrders) => ({
  type: SET_CURRENT_CLIENT_ORDERS,
  orders: ClientOrders,
});
