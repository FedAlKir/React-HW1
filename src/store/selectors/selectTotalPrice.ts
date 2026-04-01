import type { RootState } from "../store";
import { selectAllDishes } from "./selectAllDishes";
import { selectDishCountById } from "./selectDishCountById";

export const selectTotalPrice = (state: RootState): number => {
    let totalPrice = 0;
    const dishes = selectAllDishes(state);
    dishes.forEach(dish => totalPrice += dish.price * selectDishCountById(state, dish.id));
    return totalPrice;
}