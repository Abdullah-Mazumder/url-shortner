import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import urlListReducer from "./features/urlListSlice";

console.log(urlListReducer);

const rootReducer = combineReducers({
  urlList: urlListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
