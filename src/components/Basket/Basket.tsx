import { useSelector } from "react-redux";
import { selectAllDishes } from "../../store/selectors/selectAllDishes";
import { selectTotalPrice } from "../../store/selectors/selectTotalPrice";
import { store } from "../../store/store";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css"
import { Link } from "react-router";

export const Basket: React.FC = () => {

    const dishes = selectAllDishes(store.getState());

    return (
        <div>
            <div className={styles.container}>
                <h2>Basket:</h2>
                {
                    dishes.map(dish => (
                        <div>
                            <Dish
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            price={dish.price}
                            ingredients={dish.ingredients} />
                        </div>
                    ))
                }
                <p className={styles.totalPriceLabel}>Total price: ${useSelector(selectTotalPrice)}</p>
            </div>
            <Link to={"../restaurants"} className={styles.backLink}>Restaurants</Link>
        </div>
    );
}