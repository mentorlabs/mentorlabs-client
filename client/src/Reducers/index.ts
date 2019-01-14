import { combineReducers } from "redux";
import { userReducer } from "./user";
import { RootReducer } from "../types";

export const rootReducer = combineReducers<RootReducer>({
  user: userReducer
});
