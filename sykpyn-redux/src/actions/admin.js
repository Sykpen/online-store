import { ApiHelper } from "../helpers";
import { showSuccessModal } from "./authorization";

export const addNewProduct = (newProduct) => {
  return (dispatch) => {
    ApiHelper.post("admins/products", newProduct)
      // .then((response) => {
      //   response.json();
      // })
      .then(() => {
        dispatch(showSuccessModal());
      });
  };
};

export const deleteChosenProduct = (id, history) => {
  return () => {
    ApiHelper.delete(`admins/products/${id}`).then(history.go(0));
  };
};

export const updateChosenProduct = (id, history) => {
  let updateTitleArray = { id: id, title: "New title after Update" };
  return (dispatch) => {
    ApiHelper.update("admins/products", id, updateTitleArray)
      .then((response) => response.json())
      .then(
        (parsedResponse) =>
          alert(`Updated product id: ${parsedResponse.update.id}`),
        history.go(0)
      );
  };
};
