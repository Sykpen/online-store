import { ADD_TO_CART, CLEAN_CART, SHOW_PRODUCTS } from "../constants";
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
    case ADD_TO_CART:
      let chosenProduct = state.products.filter(
        (product) => product.id === action.productID
      )[0];
      chosenProduct.amount -= 1;
      let amounToPay = chosenProduct.price;
      return {
        ...state,
        totalPrice: state.totalPrice + amounToPay,
        products: [...state.products],
      };
    case CLEAN_CART:
      return {
        ...state,
        totalPrice: 0,
        products: state.products ? makeDefaultProductCopy() : null,
      };
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: products,
      };
    default:
      return state;
  }
};
