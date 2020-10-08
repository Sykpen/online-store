import { ApiHelper } from "../helpers";
import { SET_CURRENT_CLIENT_ORDERS } from "../constants";

export const setOrderInfoToDb = (newOrder) => {
  console.log(newOrder);
  return (dispatch) => {
    ApiHelper.post("orders", newOrder)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
      });
  };
};

export const getAllOrders = () => {
  return (dispatch) => {
    ApiHelper.get("orders")
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
      });
  };
};

export const getAllOrdersForCurrentClient = (clientId) => {
  return (dispatch) => {
    ApiHelper.get(`clients/${clientId}/orders`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        dispatch(setCurrentClientOrders(parsedResponse.client_orders));
      });
  };
};

export const setCurrentClientOrders = (ClientOrders) => ({
  type: SET_CURRENT_CLIENT_ORDERS,
  orders: ClientOrders,
});
