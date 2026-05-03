import { combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { restaurantApi } from "./services/restaurant";

export const rootReducer = combineReducers({
  basket: basketReducer,
  [restaurantApi.reducerPath]: restaurantApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;