import type { RootState } from "../store";

export const selectDishCountById = (state: RootState, id: string): number => {
    const dish = state.basket.find(basketDish => basketDish[0] === id);
    if (!dish) return 0;
    return dish[1];
}