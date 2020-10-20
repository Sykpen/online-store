import { SET_CURRENT_CLIENT_ORDERS } from "../constants";

const initialState = {
  ordersForOneClient: null,
};

export const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CLIENT_ORDERS:
      return {
        ...state,
        ordersForOneClient: action.orders,
      };
    default:
      return state;
  }
};
