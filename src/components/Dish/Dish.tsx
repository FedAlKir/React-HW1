import { useState } from "react"
import type { DishProps } from "../../types/Dish"
import styles from "./styles.module.css"

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

    let ingredientsDescription = "";
    for (const ingredient of ingredients){
        ingredientsDescription += ingredient + ", ";
    }
    ingredientsDescription = ingredientsDescription.substring(0, ingredientsDescription.length - 2);

    return (
        <div className={styles.container}>
            <div>
                <h4>{name}</h4>
                <p>{ingredientsDescription}</p>
                <h4>Price: ${price.toString()}</h4>
            </div>
            <div className={styles.counter}>
                <button onClick={onClickIncrement}>+</button>
                <p>{dishCounter}</p>
                <button onClick={onClickDecrement}>-</button>
            </div>
        </div>
    )
}