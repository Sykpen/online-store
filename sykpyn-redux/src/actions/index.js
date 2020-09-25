import {
  ADD_TO_CART,
  CLEAN_CART,
  ADD_ONE_PRODUCT,
  DELETE_ONE_PRODUCT,
  REMOVE_CHOSEN_TYPE,
  RECEIVE_PPODUCTS,
  FILTER_PRODUCTS,
  SHOW_MODAL,
  CLOSE_MODAL,
} from "../constants";
import fetch from "cross-fetch";
import { buildRequestOptions } from "../helpers";

const HOST = `http://localhost:3000/products`;

export const showModal = () => ({ type: SHOW_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const fetchProducts = () => {
  return (dispatch) => {
    return fetch(HOST)
      .then((response) => response.json())
      .then((json) => dispatch(receiveProducts(json)));
  };
};

export const addNewProduct = (newProduct) => {
  let requestOptions = buildRequestOptions(
    "POST",
    { "Content-Type": "application/json" },
    newProduct
  );
  return (dispatch) => {
    return fetch(HOST, requestOptions)
      .then((response) => response.json())
      .then((json) => dispatch(showModal()));
  };
};

export const deleteChosenProduct = (id) => {
  let arrayWithId = { id: id };
  const url = `${HOST}/${id}`;
  let requestOptions = buildRequestOptions(
    "DELETE",
    {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    arrayWithId
  );
  return (dispatch) => {
    return fetch(url, requestOptions)
      .then((response) => response.json())
      .then(
        (json) => alert(`Deleted product: ${json.deleted_product.title}`),
        window.location.reload(false)
      );
  };
};

export const updateChosenProduct = (id) => {
  let updateTitleArray = { id: id, title: "New title after Update" };
  let requestOptions = buildRequestOptions(
    "PUT",
    {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    updateTitleArray
  );
  const url = `${HOST}/${id}`;
  return (dispatch) => {
    return fetch(url, requestOptions)
      .then((response) => response.json())
      .then(
        (json) => alert(`Updated product id: ${json.update.id}`),
        window.location.reload(false)
      );
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
