import { BASE_HOST } from "../constants";

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
  static get(path) {
    return fetch(`${BASE_HOST}/${path}`);
  }

  static post(path, product) {
    let requestOptions = buildRequestOptions("POST", product);
    return fetch(`${BASE_HOST}/${path}`, requestOptions);
  }

  static delete(path) {
    const url = `${BASE_HOST}/${path}`;
    let requestOptions = buildRequestOptions("DELETE");
    return fetch(url, requestOptions);
  }

  static update(path, id, updateProperties) {
    const url = `${BASE_HOST}/${path}/${id}`;
    let requestOptions = buildRequestOptions("PUT", updateProperties);
    return fetch(url, requestOptions);
  }
}
