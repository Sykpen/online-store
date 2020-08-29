import {
  ADD_TO_CART,
  CLEAN_CART,
  SHOW_PRODUCTS,
  ADD_ONE_PRODUCT,
  DELETE_ONE_PRODUCT,
  REMOVE_CHOSEN_TYPE,
} from "../constants";
import { products } from "../api/products";
import Immutable from "seamless-immutable";

const initialState = {
  products: null,
  totalPrice: 0,
  productsAddedToCart: [],
  showCart: false,
  chosenProduct: null,
};

const defaultProducts = Immutable(products);
let defaulProductsMutable;

const makeDefaultProductCopy = () => {
  return (defaulProductsMutable = Immutable.asMutable(defaultProducts, {
    deep: true,
  }));
};

export const ProductItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let chosenProduct = state.products.filter(
        (product) => product.id === action.productID
      )[0];
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
        chosenProduct: chosenProduct,
      };
    case ADD_ONE_PRODUCT:
      state.chosenProduct.totalAmountToOrder++;
      state.chosenProduct.totalPriceForOneProduct =
        state.chosenProduct.price * state.chosenProduct.totalAmountToOrder;
      state.chosenProduct.amount -= 1;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...state.productsAddedToCart],
      };
    case DELETE_ONE_PRODUCT:
      state.chosenProduct.totalAmountToOrder--;
      state.chosenProduct.totalPriceForOneProduct =
        state.chosenProduct.price * state.chosenProduct.totalAmountToOrder;
      state.chosenProduct.amount += 1;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...state.productsAddedToCart],
      };
    case REMOVE_CHOSEN_TYPE:
      let filtered = state.productsAddedToCart.filter(
        (product) => product.id !== action.productID
      );
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...filtered],
      };
    case CLEAN_CART:
      return {
        ...state,
        totalPrice: 0,
        products: state.products ? makeDefaultProductCopy() : null,
        productsAddedToCart: [],
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
