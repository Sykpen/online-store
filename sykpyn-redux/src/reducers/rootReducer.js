import { combineReducers } from "redux";
import { ProductItemsReducer } from "./ProductItemsReducer";
import { AuthorizationReducer } from "./AuthorizationReducer";
import { ModalWindowReducer } from "./ModalWindowReducer";
import { ClientReducer } from "./ClientReducer";
import { OrdersReducer } from "./OrdersReducer";

export const rootReducer = combineReducers({
  productItems: ProductItemsReducer,
  authorization: AuthorizationReducer,
  modals: ModalWindowReducer,
  client: ClientReducer,
  orders: OrdersReducer,
});
