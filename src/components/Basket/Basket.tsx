import { useDispatch, useSelector } from "react-redux";
import { selectAllDishes } from "../../store/selectors/selectAllDishes";
import { selectTotalPrice } from "../../store/selectors/selectTotalPrice";
import { type AppDispatch } from "../../store/store";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css"
import { Link } from "react-router";
import { clearBasket } from "../../store/slices/basketSlice";
import { restaurants } from "../../materials/mocks/mockRestaurants";
import type { DishProps } from "../../types/Dish";

export const Basket: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const onClick = () => { dispatch(clearBasket()) };

    const dishes = useSelector(selectAllDishes);
    let restaurantsGroups: [string, DishProps[]][] = (restaurants.map(r => [r.name, r.menu.filter(d => dishes.map(dish => dish.id).includes(d.id)).map(d => d as DishProps)]) as [string, DishProps[]][]).filter(rg => rg[1].length > 0);
    console.log(restaurantsGroups);

    return (
        <div>
            <div className={styles.container}>
                <h2>Basket:</h2>
                {
                    restaurantsGroups.length !== 0 ? 
                    restaurantsGroups.map(([name, dishes]) => (
                        <div className={styles.restaurantGroup}>
                            <h2>{name}</h2>
                            {
                                dishes.map(dish => (
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
                    <button className={styles.clearBasketButton} onClick={onClick}>ClearBasket</button>
                </div>
            </div>
            <Link to={"../restaurants"} className={styles.backLink}>Restaurants</Link>
        </div>
    );
};