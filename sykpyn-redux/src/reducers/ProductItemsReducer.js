import {
  SHOW_INFO,
  ADD_TO_CART,
  ADD_ALL_PRODUCT_ITEMS_TO_CART,
  CLEAN_CART,
} from "../constants";
import { products } from "../api/products";
import Immutable from "seamless-immutable";

const initialState = {
  products: null,
  totalPrice: 0,
};

const defaultProduct = Immutable(products);
let defaulProductsMutable;

const makeMakedefaultProductCopy = () => {
  return (defaulProductsMutable = Immutable.asMutable(defaultProduct, {
    deep: true,
  }));
};

export const ProductItemsReducer = (state = initialState, action) => {
  console.log(state)
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
    case ADD_ALL_PRODUCT_ITEMS_TO_CART:
      let totalPriceForOneProduct =
        state.products[action.id - 1].price *
        state.products[action.id - 1].amount;
      state.products[action.id - 1].amount = 0;
      return {
        ...state,
        totalPrice: state.totalPrice + totalPriceForOneProduct,
        products: [...state.products],
      };
    case CLEAN_CART:
      return {
        ...state,
        totalPrice: 0,
        products: state.products ? makeMakedefaultProductCopy() : null,
      };
    default:
      return state;
  }
};
