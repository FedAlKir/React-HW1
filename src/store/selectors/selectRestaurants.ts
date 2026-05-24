import type { RootState } from "../store";

export const selectRestaurants = (state: RootState) => {
    return state.restaurants.restaurants;
};