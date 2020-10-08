import {
  ADD_TO_CART,
  CLEAN_CART,
  ADD_ONE_PRODUCT,
  DELETE_ONE_PRODUCT,
  REMOVE_CHOSEN_TYPE,
  RECEIVE_PPODUCTS,
  FILTER_PRODUCTS,
  SET_CURRENT_CLIENT_DATA,
} from "../constants";
import { ApiHelper } from "../helpers";
import { getAllOrdersForCurrentClient } from "./order";

export const fetchProducts = () => {
  return (dispatch) => {
    ApiHelper.get("products")
      .then((response) => response.json())
      .then((parsedResponse) => dispatch(receiveProducts(parsedResponse)));
  };
};

function receiveProducts(json) {
  return {
    type: RECEIVE_PPODUCTS,
    products: json.products,
  };
}

export const addToCart = (id) => ({ type: ADD_TO_CART, productID: id });
export const cleanCart = () => ({ type: CLEAN_CART });
export const addOneProduct = (id) => ({ type: ADD_ONE_PRODUCT, productID: id });
export const deleteOneProduct = (id) => ({
  type: DELETE_ONE_PRODUCT,
  productID: id,
});
export const removeChosenType = (id) => ({
  type: REMOVE_CHOSEN_TYPE,
  productID: id,
});
export const filterProducts = (filterProductTypes) => ({
  type: FILTER_PRODUCTS,
  filterProductTypes,
});

export const getCurrentClientData = (id) => {
  return (dispatch) => {
    ApiHelper.get(`clients/${id}`)
      .then((responce) => responce.json())
      .then((data) => {
        dispatch(setCurrentClientData(data.client));
        dispatch(getAllOrdersForCurrentClient(id));
      });
  };
};

export const setCurrentClientData = (ClientData) => ({
  type: SET_CURRENT_CLIENT_DATA,
  data: ClientData,
});
