export const findProductById = (productId, products) => {
  return products.filter((product) => product.id === productId)[0];
};

export const collectionContains = (combineFilters, prouctTypes) => {
  return combineFilters.every((value) => {
    return prouctTypes.indexOf(value) >= 0;
  });
};
