import {
  ADD_TO_CART,
  CLEAN_CART,
  ADD_ONE_PRODUCT,
  DELETE_ONE_PRODUCT,
  REMOVE_CHOSEN_TYPE,
  RECEIVE_PPODUCTS,
} from "../constants";
import Immutable from "seamless-immutable";
import { findProductById } from "../helpers";

const initialState = {
  products: null,
  totalPrice: 0,
  productsAddedToCart: [],
  showCart: false,
};

const defaultProducts = Immutable(initialState.products);
let defaulProductsMutable;

const makeDefaultProductCopy = () => {
  return (defaulProductsMutable = Immutable.asMutable(defaultProducts, {
    deep: true,
  }));
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
    default:
      return state;
  }
};
