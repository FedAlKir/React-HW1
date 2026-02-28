import type { Restaurant } from "../../types/Restaurant"
import { Dish } from "../Dish/Dish"
import styles from "./styles.module.css"
import { useOutletContext } from "react-router"

export const Menu: React.FC = () => {

    const { menu } = useOutletContext<Restaurant>();

    return (
        <div>
            <h3 className={styles.headerLabel}>Menu:</h3>
            {
                menu.map((dish) => (
                    <Dish
                    key={dish.id}
                    id={dish.id}
                    name={dish.name}
                    price={dish.price}
                    ingredients={dish.ingredients}/>
                ))
            }
        </div>
    )
}