import type { DishProps } from "../../types/Dish"
import styles from "./styles.module.css"
import { addToBasket, deleteFromBasket } from "../../store/slices/basketSlice";
import { selectDishCountById } from "../../store/selectors/selectDishCountById";
import { type AppDispatch, type RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export const Dish: React.FC<DishProps> = ({id, name, price, ingredients}) => {
    const dispatch = useDispatch<AppDispatch>()

    const dishCount = useSelector((store: RootState) => selectDishCountById(store, id));

    const onClickIncrement = () => { 
        if (dishCount !== 5) {
            dispatch(addToBasket(id));
        }
    }
    
    const onClickDecrement = () => { 
        if (dishCount !== 0) {
            dispatch(deleteFromBasket(id));
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
                <p>{dishCount}</p>
                <button onClick={onClickDecrement}>-</button>
            </div>
        </div>
    )
}