import { combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { restaurantsSliceReducer } from "./slices/restaurantsSlice";

export const rootReducer = combineReducers({
  basket: basketReducer,
  restaurants: restaurantsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;