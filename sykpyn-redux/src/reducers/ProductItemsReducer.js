import {
  ADD_TO_CART,
  CLEAN_CART,
  SHOW_PRODUCTS,
  ADD_ONE_MORE,
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
};

const defaultProducts = Immutable(products);
let defaulProductsMutable;

const makeDefaultProductCopy = () => {
  return (defaulProductsMutable = Immutable.asMutable(defaultProducts, {
    deep: true,
  }));
};

const chosenProductId = (givenId) => {
  let id = givenId;
  return id;
};

export const ProductItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let chosenProduct = state.products.filter(
        (product) => product.id === action.productID
      )[0];
      console.log(chosenProductId(chosenProduct.id));
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
    case ADD_ONE_MORE:
      let chosenProduct1 = state.products.filter(
        (product) => product.id === action.productID
      )[0];
      chosenProduct1.totalAmountToOrder++;
      chosenProduct1.totalPriceForOneProduct =
        chosenProduct1.price * chosenProduct1.totalAmountToOrder;
      chosenProduct1.amount -= 1;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...state.productsAddedToCart],
      };
    case DELETE_ONE_PRODUCT:
      let chosenProduct2 = state.products.filter(
        (product) => product.id === action.productID
      )[0];
      chosenProduct2.totalAmountToOrder--;
      chosenProduct2.totalPriceForOneProduct =
        chosenProduct2.price * chosenProduct2.totalAmountToOrder;
      chosenProduct2.amount += 1;
      return {
        ...state,
        products: [...state.products],
        productsAddedToCart: [...state.productsAddedToCart],
      };
    case REMOVE_CHOSEN_TYPE:
      let filtered = state.productsAddedToCart.filter(
        (el) => el.id !== action.productID
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
