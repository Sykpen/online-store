import { combineReducers } from "redux";
import { infoShowReduser } from "./infoShowReduser";

export const rootReduser = combineReducers({
  showInfo: infoShowReduser,
});
