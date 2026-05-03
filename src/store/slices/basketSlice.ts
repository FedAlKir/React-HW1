import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface BasketState{
    dishes: [string, number][];
}

const initialState: [string, number][] = [];

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<string>) => {
            const dishesMap = new Map(state);
            const addedDishId = action.payload;
            const dishState = dishesMap.get(addedDishId);
            if (!dishState) {
                dishesMap.set(addedDishId, 1);
            }
            else{
                dishesMap.set(addedDishId, dishState + 1);
            }
            const newState: [string, number][] = [];
            dishesMap.forEach((num, id) => newState.push([id, num]));
            console.log(newState);
            return newState;
        },
        deleteFromBasket: (state, action: PayloadAction<string>) => {
            const dishesMap = new Map(state);
            const dishId = action.payload;
            const dishState = dishesMap.get(dishId);
            if (!dishState){
                return Object.entries(dishesMap);
            }
            else if (dishState == 1){
                dishesMap.delete(dishId);
            }
            else{
                dishesMap.set(dishId, dishState - 1);
            }
            const newState: [string, number][] = [];
            dishesMap.forEach((num, id) => newState.push([id, num]));
            console.log(newState);
            return newState;
        },
        clearBasket: () => {
            return initialState;
        }
    },
})

export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;