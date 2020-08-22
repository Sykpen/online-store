import { SHOW_INFO, ADD_TO_CART, ADD_ALL_TO_CART } from "../constants";
import { products } from "../api/products";

const initialState = {
  products: null,
  totalPrice: 0,
};

export const ProductItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return { ...state, products: products };
    case ADD_TO_CART:
      state.products[action.id - 1].amount -= 1;
      let amounToPay = state.products[action.id - 1].price;
      return {
        ...state,
        totalPrice: state.totalPrice + amounToPay,
        products: [...state.products],
      };
    case ADD_ALL_TO_CART:
      let totalPriseForOneProduct =
        state.products[action.id - 1].price *
        state.products[action.id - 1].amount;
      state.products[action.id - 1].amount = 0;
      return {
        ...state,
        totalPrice: state.totalPrice + totalPriseForOneProduct,
        products: [...state.products],
      };
    default:
      return state;
  }
};
