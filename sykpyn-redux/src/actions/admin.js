import { ApiHelper } from "../helpers";
import { showSuccessRegisterModal } from "./authorization";

export const addNewProduct = (newProduct) => {
    return (dispatch) => {
      ApiHelper.post("admins/products", newProduct)
        .then((response) => {
          console.log(response);
          response.json();
        })
        .then((json) => {
          dispatch(showSuccessRegisterModal());
        });
    };
  };
  
  export const deleteChosenProduct = (id) => {
    return (dispatch) => {
      ApiHelper.delete("admins/products", id)
        .then((response) => response.json())
        .then(
          (json) => alert(`Deleted product: ${json.deleted_product.title}`),
          window.location.reload(false)
        );
    };
  };
  
  export const updateChosenProduct = (id) => {
    return (dispatch) => {
      ApiHelper.update("admins/products", id)
        .then((response) => response.json())
        .then(
          (json) => alert(`Updated product id: ${json.update.id}`),
          window.location.reload(false)
        );
    };
  };