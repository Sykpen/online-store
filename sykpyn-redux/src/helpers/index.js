import { HOST } from "../constants";

export const findProductById = (productId, products) => {
  return products.filter((product) => product.id === productId)[0];
};

export const collectionContains = (combineFilters, prouctTypes) => {
  return combineFilters.every((value) => {
    return prouctTypes.indexOf(value) >= 0;
  });
};

export const buildRequestOptions = (method, body) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(body),
  };
};

export class ApiHelper {
  constructor(product, id) {
    this.product = product;
    this.id = id;
  }

  static post(product) {
    let requestOptions = buildRequestOptions("POST", product);
    return fetch(HOST, requestOptions);
  }

  static delete(id) {
    let arrayWithId = { id: id };
    const url = `${HOST}/${id}`;
    let requestOptions = buildRequestOptions("DELETE", arrayWithId);
    return fetch(url, requestOptions);
  }

  static update(id) {
    let updateTitleArray = { id: id, title: "New title after Update" };
    const url = `${HOST}/${id}`;
    let requestOptions = buildRequestOptions("PUT", updateTitleArray);
    return fetch(url, requestOptions);
  }
}
