import { createSlice } from "@reduxjs/toolkit";
import type { Restaurant } from "../../types/Restaurant";
import { loadRestaurantsThunk } from "../../api/loadRestaurantsThunk";

interface RestaurantsSliceState {
    status: "idle" | "pending" | "fulfilled" | "rejected";
    restaurants: Restaurant[];
}

const initialState: RestaurantsSliceState = {
    status: "idle",
    restaurants: []
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(loadRestaurantsThunk.pending, (state) => {
            state.status = "pending";
        })
        .addCase(loadRestaurantsThunk.fulfilled, (state, action) => {
            state.restaurants = action.payload;
            state.status = "fulfilled";
        })
        .addCase(loadRestaurantsThunk.rejected, (state) => {
            state.status = "rejected";
        });
    }
});

export const restaurantsSliceReducer = restaurantsSlice.reducer