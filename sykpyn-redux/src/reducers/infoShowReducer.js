import { SHOW_INFO } from "../constants";
import { products } from "../api/products";

const initialState = {
  products: null,
  name: null,
  id: null,
  prise: null,
  amountAvailable: null,
  title: null,
};

export const infoShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return { ...state, name: "Sykpyn", products: products };
    default:
      return state;
  }
};
