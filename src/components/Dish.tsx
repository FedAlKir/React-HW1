import { useState } from "react"
import type { DishProps } from "../types/Dish"

export const Dish: React.FC<DishProps> = ({name, price, ingredients}) => {
    const [dishCounter, setDishCounter] = useState<number>(0);

    const onClickIncrement = () => { 
        if (dishCounter !== 5) {
            setDishCounter(dishCounter + 1);
        }
    }
    
    const onClickDecrement = () => { 
        if (dishCounter !== 0) {
            setDishCounter(dishCounter - 1);
        }
    }

    return (
        <div>
            <h5>{name}</h5>
            <h6>Ingridients</h6>
            {
                ingredients.map((ingridient) => (<p>{ingridient}</p>))
            }
            <p>Price: {price.toString()}</p>
            <button onClick={onClickIncrement}>+</button>
            <p>{dishCounter}</p>
            <button onClick={onClickDecrement}>-</button>
        </div>
    )
}