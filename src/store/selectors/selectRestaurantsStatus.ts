import type { RootState } from "../store";

export const selectRestaurantsStatus = (state: RootState) => {
    return state.restaurants.status;
};