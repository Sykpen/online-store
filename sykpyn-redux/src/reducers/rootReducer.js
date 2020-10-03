import { combineReducers } from "redux";
import { ProductItemsReducer } from "./ProductItemsReducer";
import { AuthorizationReducer } from "./AuthorizationReducer";
import { ModalWindowReducer } from "./ModalWindowReducer";
import { ClientReducer } from "./ClientReducer";

export const rootReducer = combineReducers({
  productItems: ProductItemsReducer,
  authorization: AuthorizationReducer,
  modal: ModalWindowReducer,
  client: ClientReducer,
});
