export const findProductById = (productId, products) => {
  return products.filter((product) => product.id === productId)[0];
};

export const collectionContains = (combineFilters, prouctTypes) => {
  return combineFilters.every((value) => {
    return prouctTypes.indexOf(value) >= 0;
  });
};

export const buildRequestOptions = (method, headers, body) => {
  return { method: method, headers: headers, body: JSON.stringify(body) };
};
