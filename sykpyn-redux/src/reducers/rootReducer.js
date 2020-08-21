import { combineReducers } from "redux";
import { infoShowReducer } from "./infoShowReducer";

export const rootReducer = combineReducers({
  showInfo: infoShowReducer,
});
