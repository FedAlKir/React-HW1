import { useDispatch, useSelector } from "react-redux";
import { selectAllDishes } from "../../store/selectors/selectAllDishes";
import { selectTotalPrice } from "../../store/selectors/selectTotalPrice";
import { type AppDispatch } from "../../store/store";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css"
import { Link } from "react-router";
import { clearBasket } from "../../store/slices/basketSlice";

export const Basket: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const onClick = () => { dispatch(clearBasket()) };

    const dishes = useSelector(selectAllDishes);

    return (
        <div>
            <div className={styles.container}>
                <h2>Basket:</h2>
                {
                    dishes.length !== 0 ? dishes.map(dish => (
                        <div>
                            <Dish
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            price={dish.price}
                            ingredients={dish.ingredients} />
                        </div>
                    )) :
                    <p className={styles.baskeEmptyLabel}>Your basket is empty</p>
                }
                <div className={styles.stateContainer}>
                    <p className={styles.totalPriceLabel}>Total price: ${useSelector(selectTotalPrice)}</p>
                    <button className={styles.clearBasketButton} onClick={onClick}>ClearBasket</button>
                </div>
            </div>
            <Link to={"../restaurants"} className={styles.backLink}>Restaurants</Link>
        </div>
    );
};