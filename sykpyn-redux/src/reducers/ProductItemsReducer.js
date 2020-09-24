import {
  ADD_TO_CART,
  CLEAN_CART,
  ADD_ONE_PRODUCT,
  DELETE_ONE_PRODUCT,
  REMOVE_CHOSEN_TYPE,
  RECEIVE_PPODUCTS,
  FILTER_PRODUCTS,
} from "../constants";
import Immutable from "seamless-immutable";
import { findProductById, collectionContains } from "../helpers";

const defaultProducts = Immutable(initialState.products);
let defaulProductsMutable;
let arrayForFilters = [];

const makeDefaultProductCopy = () => {
  return (defaulProductsMutable = Immutable.asMutable(defaultProducts, {
    deep: true,
  }));
};

const initialState = {
  products: null,
  totalPrice: 0,
  productsAddedToCart: [],
  showCart: false,
  stableProductCopy: makeDefaultProductCopy(),
};

export const ProductItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PPODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case ADD_TO_CART:
      let chosenProduct = findProductById(action.productID, state.products);
      if (
        state.productsAddedToCart.some(
          (product) => product.id === chosenProduct.id
        )
      ) {
        chosenProduct.totalAmountToOrder++;
      } else {
        chosenProduct.totalAmountToOrder = 1;
        state.productsAddedToCart.push(chosenProduct);
      }
      chosenProduct.totalPriceForOneProduct =
        chosenProduct.price * chosenProduct.totalAmountToOrder;
      chosenProduct.amount -= 1;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...state.productsAddedToCart],
        showCart: true,
      };
    case ADD_ONE_PRODUCT:
      let chosenProductInCart = findProductById(
        action.productID,
        state.productsAddedToCart
      );
      chosenProductInCart.totalAmountToOrder++;
      chosenProductInCart.totalPriceForOneProduct =
        chosenProductInCart.price * chosenProductInCart.totalAmountToOrder;
      chosenProductInCart.amount -= 1;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...state.productsAddedToCart],
      };
    case DELETE_ONE_PRODUCT:
      let chosenProductInCartForDeleting = findProductById(
        action.productID,
        state.productsAddedToCart
      );
      chosenProductInCartForDeleting.totalAmountToOrder--;
      chosenProductInCartForDeleting.totalPriceForOneProduct =
        chosenProductInCartForDeleting.price *
        chosenProductInCartForDeleting.totalAmountToOrder;
      chosenProductInCartForDeleting.amount += 1;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...state.productsAddedToCart],
      };
    case REMOVE_CHOSEN_TYPE:
      let productsInCart = state.productsAddedToCart.filter(
        (product) => product.id !== action.productID
      );
      let chosenProductFromProductList = findProductById(
        action.productID,
        state.products
      );
      let chosenProductFromCart = findProductById(
        action.productID,
        state.productsAddedToCart
      );
      chosenProductFromProductList.amount +=
        chosenProductFromCart.totalAmountToOrder;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...productsInCart],
      };
    case CLEAN_CART:
      return {
        ...state,
        totalPrice: 0,
        products: state.products ? makeDefaultProductCopy() : null,
        productsAddedToCart: [],
      };
    case FILTER_PRODUCTS:
      if (arrayForFilters.includes(action.filterProductTypes)) {
        let position = arrayForFilters.indexOf(action.filterProductTypes);
        arrayForFilters.splice(position, 1);
      } else {
        arrayForFilters.push(action.filterProductTypes);
      }
      let uniqueFiltersArray = [...new Set(arrayForFilters)];
      let filterProducts = products.filter((product) =>
        collectionContains(uniqueFiltersArray, product.type)
      );
      return {
        ...state,
        products: [...filterProducts],
      };
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: products,
      };
    default:
      return state;
  }
};
