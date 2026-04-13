import { restaurants } from "../../materials/mocks/mockRestaurants";
import type { DishProps } from "../../types/Dish";
import type { RootState } from "../store";
import { selectAllDishes } from "./selectAllDishes";

interface RestaurantGroup{
    id: string,
    name: string,
    selectedDishes: DishProps[]
}

function toDishProps(obj: {
        id: string;
        name: string;
        price: number;
        ingredients: string[];
    }) : DishProps{
    return {
        id: obj.id,
        name: obj.name,
        price: obj.price,
        ingredients: obj.ingredients
    };
}

function toRestaurantGroup(rest: {
    id: string;
    name: string;
    menu: {
        id: string;
        name: string;
        price: number;
        ingredients: string[];
    }[];
    reviews: {
        id: string;
        user: string;
        text: string;
        rating: number;
    }[];
}) : RestaurantGroup{
    return {
        id: rest.id,
        name: rest.name,
        selectedDishes: rest.menu.map(d => toDishProps(d))
    };
}

export const selectDishesAsRestaurantGroups = (state: RootState): RestaurantGroup[] => {
    const dishesIds = selectAllDishes(state).map(d => d.id);
    const restaurantsGroups: RestaurantGroup[] = restaurants.map(r => toRestaurantGroup(r));
    restaurantsGroups.forEach(r => r.selectedDishes = r.selectedDishes.filter(d => dishesIds.includes(d.id)));
    return restaurantsGroups.filter(group => group.selectedDishes.length > 0);
}