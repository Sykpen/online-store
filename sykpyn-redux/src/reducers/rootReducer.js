import { combineReducers } from "redux";
import { ProductItemsReducer } from "./ProductItemsReducer";

export const rootReducer = combineReducers({
  productItems: ProductItemsReducer,
});
