import { restaurantApi } from "../services/restaurant";
import type { RootState } from "../store";

export const selectRestaurants = (state: RootState) => {
    return restaurantApi.endpoints.getRestaurants.select()(state).data ?? [];
};