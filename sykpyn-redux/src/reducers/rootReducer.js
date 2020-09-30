import { combineReducers } from "redux";
import { ProductItemsReducer } from "./ProductItemsReducer";
import { AuthorizationReducer } from "./AuthorizationReducer";

export const rootReducer = combineReducers({
  productItems: ProductItemsReducer,
  authorization: AuthorizationReducer,
});
