import {
  SHOW_INFO,
  ADD_TO_CART,
  ADD_ALL_PRODUCT_ITEMS_TO_CART,
  CLEAN_CART,
} from "../constants";

export const showInfo = () => ({ type: SHOW_INFO });
export const addToCart = (id) => ({ type: ADD_TO_CART, id });
export const addAllProductItemsToCart = (id) => ({ type: ADD_ALL_PRODUCT_ITEMS_TO_CART, id });
export const cleanCart = () => ({ type: CLEAN_CART });
