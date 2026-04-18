import type { DishProps } from "../../types/Dish";
import type { RootState } from "../store";
import { selectRestaurants } from "./selectRestaurants";

export const selectAllDishes = (state: RootState): DishProps[] => {
    const restaurants = selectRestaurants(state);
    const dishesIds = state.basket.map((item) => item[0]);
    let mockDishes: DishProps[] = [];
    restaurants.forEach(restaurant => mockDishes = mockDishes.concat(restaurant.menu));
    const dishes = dishesIds.map(id => mockDishes.find(dish => dish.id === id)).filter(dish => !!dish);
    return dishes;
};