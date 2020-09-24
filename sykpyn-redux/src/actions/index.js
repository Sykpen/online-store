import {
  ADD_TO_CART,
  CLEAN_CART,
  ADD_ONE_PRODUCT,
  DELETE_ONE_PRODUCT,
  REMOVE_CHOSEN_TYPE,
  RECEIVE_PPODUCTS,
  FILTER_PRODUCTS,
} from "../constants";
import fetch from "cross-fetch";

export const fetchProducts = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/products`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveProducts(json)));
  };
};

export const addNewProduct = (newProduct) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  };
  return (dispatch) => {
    return fetch("http://localhost:3000/products", requestOptions)
      .then((response) => response.json())
      .then((json) => alert(`Title: ${json.new_product.title}`));
  };
};

export const deleteChosenProduct = (id) => {
  let arrayWithId = { id: id };
  const url = `http://localhost:3000/products/${id}`;
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(arrayWithId),
  };
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
  const url = `http://localhost:3000/products/${id}`;
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(updateTitleArray),
  };
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
export const filterProducts = (filterProductTypes) => ({ type: FILTER_PRODUCTS, filterProductTypes });
