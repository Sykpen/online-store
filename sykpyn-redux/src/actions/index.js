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
import { ApiHelper } from "../helpers";

export const showModal = () => ({ type: SHOW_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const fetchProducts = () => {
  return (dispatch) => {
    ApiHelper.get("products")
      .then((response) => response.json())
      .then((json) => dispatch(receiveProducts(json)));
  };
};

export const addNewClient = (newClient) => {
  return (dispatch) => {
    ApiHelper.post(newClient, "clients")
      .then((response) => response.json())
      .then((json) => dispatch(showModal()));
  };
};

export const addNewProduct = (newProduct) => {
  return (dispatch) => {
    ApiHelper.post(newProduct, "admins/products")
      .then((response) => response.json())
      .then((json) => dispatch(showModal()));
  };
};

export const deleteChosenProduct = (id) => {
  return (dispatch) => {
    ApiHelper.delete(id, "admins/products")
      .then((response) => response.json())
      .then(
        (json) => alert(`Deleted product: ${json.deleted_product.title}`),
        window.location.reload(false)
      );
  };
};

export const updateChosenProduct = (id) => {
  return (dispatch) => {
    ApiHelper.update(id, "admins/products")
      .then((response) => response.json())
      .then(
        (json) => alert(`Updated product id: ${json.update.id}`),
        window.location.reload(false)
      );
  };
};

export const checkIfClientExist = (clientParams) => {
  return (dispatch) => {
    ApiHelper.post(clientParams, "clients/login")
      .then((response) => response.json())
      .then((json) => alert(json.response));
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
