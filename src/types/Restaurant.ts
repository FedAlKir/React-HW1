import type { DishProps } from "./Dish";
import type { Review } from "./Review";

export interface Restaurant {
    id: string,
    name: string,
    menu: DishProps[],
    reviews: Review[]
}