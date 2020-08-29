import {
  ADD_TO_CART,
  CLEAN_CART,
  SHOW_PRODUCTS,
  ADD_ONE_MORE,
  DELETE_ONE_PRODUCT,
  REMOVE_CHOSEN_TYPE,
  FILTER,
} from "../constants";

export const addToCart = (id) => ({ type: ADD_TO_CART, productID: id });
export const cleanCart = () => ({ type: CLEAN_CART });
export const showProducts = () => ({ type: SHOW_PRODUCTS });
export const addOneMore = (id) => ({ type: ADD_ONE_MORE, productID: id });
export const deleteOneProduct = (id) => ({
  type: DELETE_ONE_PRODUCT,
  productID: id,
});
export const removeChosenType = (id) => ({
  type: REMOVE_CHOSEN_TYPE,
  productID: id,
});
export const filter = (filterProductTypes) => ({ type: FILTER, filterProductTypes });
