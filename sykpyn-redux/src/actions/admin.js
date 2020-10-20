import { ApiHelper } from "../helpers";
import { showSuccessModal } from "./authorization";

export const addNewProduct = (newProduct) => {
  return (dispatch) => {
    ApiHelper.post("admins/products", newProduct).then(() => {
      dispatch(showSuccessModal());
    });
  };
};

export const deleteChosenProduct = (id, history) => {
  return () => {
    ApiHelper.delete(`admins/products/${id}`).then(history.go(0));
  };
};

export const updateChosenProduct = (id, updateProduct) => {
  return () => {
    ApiHelper.update("admins/products", id, updateProduct)
      .then((response) => response.json())
      .then((parsedResponse) =>
        alert(`Updated product id: ${parsedResponse.update.id}`)
      );
  };
};
