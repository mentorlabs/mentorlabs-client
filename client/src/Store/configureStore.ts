import { createStore } from "redux";

import { rootReducer } from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// github.com/zalmoxisus/redux-devtools-extension
// example using middleware
export const store = createStore(rootReducer, composeWithDevTools());
