import { SHOW_INFO, ADD_TO_CART } from "../constants";

export const showInfo = () => ({ type: SHOW_INFO });
export const addToCart = (id) => ({type: ADD_TO_CART , id : id});