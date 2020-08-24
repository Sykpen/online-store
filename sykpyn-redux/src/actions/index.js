import {
  ADD_TO_CART,
  CLEAN_CART,
} from "../constants";

export const addToCart = (id) => ({ type: ADD_TO_CART, productID: id });
export const cleanCart = () => ({ type: CLEAN_CART });
