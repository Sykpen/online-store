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

const defaultProducts = Immutable(products);
let defaulProductsMutable;

const makeDefaultProductCopy = () => {
  return (defaulProductsMutable = Immutable.asMutable(defaultProducts, {
    deep: true,
  }));
};

export const ProductItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return { ...state, products: products };
    case ADD_TO_CART:
      let oneCurrentChosenProduct = state.products.filter(
        (product) => product.id === action.productID
      )[0];
      oneCurrentChosenProduct.amount -= 1;
      let amounToPay = oneCurrentChosenProduct.price;
      return {
        ...state,
        totalPrice: state.totalPrice + amounToPay,
        products: [...state.products],
      };
    case ADD_ALL_PRODUCT_ITEMS_TO_CART:
      let currentChosenProduct = state.products.filter(
        (product) => product.id === action.productID
      )[0];
      let totalPriceForOneProduct =
        currentChosenProduct.price * currentChosenProduct.amount;
      currentChosenProduct.amount = 0;
      return {
        ...state,
        totalPrice: state.totalPrice + totalPriceForOneProduct,
        products: [...state.products],
      };
    case CLEAN_CART:
      return {
        ...state,
        totalPrice: 0,
        products: state.products ? makeDefaultProductCopy() : null,
      };
    default:
      return state;
  }
};
