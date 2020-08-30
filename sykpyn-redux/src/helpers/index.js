export const findProductById = (productId, products) => {
    return products.filter(
        (product) => product.id === productId
    )[0]
}