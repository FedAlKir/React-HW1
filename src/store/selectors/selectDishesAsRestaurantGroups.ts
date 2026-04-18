import type { DishProps } from "../../types/Dish";
import type { Restaurant } from "../../types/Restaurant";
import type { RootState } from "../store";
import { selectAllDishes } from "./selectAllDishes";
import { selectRestaurants } from "./selectRestaurants";

interface RestaurantGroup{
    id: string,
    name: string,
    selectedDishes: DishProps[]
}

function toRestaurantGroup(rest: Restaurant): RestaurantGroup{
    return {
        id: rest.id,
        name: rest.name,
        selectedDishes: rest.menu
    };
}

export const selectDishesAsRestaurantGroups = (state: RootState): RestaurantGroup[] => {
    const restaurants = selectRestaurants(state);
    const dishesIds = selectAllDishes(state).map(d => d.id);
    const restaurantsGroups: RestaurantGroup[] = restaurants.map(r => toRestaurantGroup(r));
    restaurantsGroups.forEach(r => r.selectedDishes = r.selectedDishes.filter(d => dishesIds.includes(d.id)));
    return restaurantsGroups.filter(group => group.selectedDishes.length > 0);
}