import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/selectors/selectTotalPrice";
import { type AppDispatch } from "../../store/store";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css"
import { Link } from "react-router";
import { clearBasket } from "../../store/slices/basketSlice";
import { selectDishesAsRestaurantGroups } from "../../store/selectors/selectDishesAsRestaurantGroups";

export const Basket: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const onClearButtonClick = () => { dispatch(clearBasket()) };

    const restaurantsGroups = useSelector(selectDishesAsRestaurantGroups);

    return (
        <div>
            <div className={styles.container}>
                <h2>Basket:</h2>
                {
                    restaurantsGroups.length !== 0 ? 
                    restaurantsGroups.map(({id, name, selectedDishes}) => (
                        <div key={id} className={styles.restaurantGroup}>
                            <h2>{name}</h2>
                            {
                                selectedDishes.map(dish => (
                                    <Dish
                                    key={dish.id}
                                    id={dish.id}
                                    name={dish.name}
                                    price={dish.price}
                                    ingredients={dish.ingredients} />
                                ))
                            }
                        </div>
                    )) :
                    <p className={styles.baskeEmptyLabel}>Your basket is empty</p>
                }
                <div className={styles.stateContainer}>
                    <p className={styles.totalPriceLabel}>Total price: ${useSelector(selectTotalPrice)}</p>
                    <button className={styles.clearBasketButton} onClick={onClearButtonClick}>ClearBasket</button>
                </div>
            </div>
            <Link to={"../restaurants"} className={styles.backLink}>Restaurants</Link>
        </div>
    );
};