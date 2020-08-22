import { SHOW_INFO, ADD_TO_CART, ADD_ALL_TO_CART, REMOVE_ALL_FROM_CART } from "../constants";

export const showInfo = () => ({ type: SHOW_INFO });
export const addToCart = (id) => ({ type: ADD_TO_CART, id });
export const addAllToCart = (id) => ({ type: ADD_ALL_TO_CART, id });
export const removeAllFromCart = () => ({ type: REMOVE_ALL_FROM_CART });