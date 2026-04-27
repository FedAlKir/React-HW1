import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Restaurant } from "../../types/Restaurant";
import { loadRestaurantsThunk } from "../../api/loadRestaurants/loadRestaurantsThunk";
import type { Review } from "../../types/Review";

interface RestaurantsSliceState {
    status: "idle" | "pending" | "fulfilled" | "rejected";
    restaurants: Restaurant[];
}

interface AddOrEditReviewPayloadAction{
    restaurantId: string,
    review: Review
}

const initialState: RestaurantsSliceState = {
    status: "idle",
    restaurants: []
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {
        addReview: (state, action: PayloadAction<AddOrEditReviewPayloadAction>) => {
            const {restaurantId, review} = action.payload;
            const restaurants = state.restaurants;
            const restaurantIndex = restaurants.findIndex(rest => rest.id === restaurantId);
            if (restaurantIndex !== -1){
                restaurants[restaurantIndex].reviews.push(review); 
            }
        },
        editReview: (state, action: PayloadAction<AddOrEditReviewPayloadAction>) => {
            const {restaurantId, review} = action.payload;
            const restaurant = state.restaurants.find(rest => rest.id === restaurantId);
            if (restaurant){
                const oldReview = restaurant.reviews.find(r => r.id === review.id);
                if (oldReview){
                    oldReview.text = review.text;
                    oldReview.rating = review.rating;
                }
            }
        },
        deleteReview: (state, action: PayloadAction<[string, string]>) => {
            const [restaurantId, reviewId] = action.payload;
            const restaurant = state.restaurants.find(r => r.id === restaurantId);
            if (restaurant){
                const reviewIndex = restaurant.reviews.findIndex(r => r.id === reviewId);
                if (reviewIndex !== -1) restaurant.reviews.splice(reviewIndex, 1);
            }
        }
    },
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

export const { addReview, editReview, deleteReview } = restaurantsSlice.actions;

export const restaurantsSliceReducer = restaurantsSlice.reducer;