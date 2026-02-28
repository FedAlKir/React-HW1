import type { DishProps } from "../../types/Dish";
import type { Review } from "../../types/Review";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css"

interface RestaurantDescribeProps{
    id: string;
    name: string;
    menu: DishProps[];
    reviews: Review[];
}

export const RestaurantDescribe: React.FC<RestaurantDescribeProps> = ({name, menu, reviews}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.name}>{name}</h2>
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
            <h3 className={styles.headerLabel}>Reviews:</h3>
            {
                reviews.map((review) => (
                    <div className={styles.review}>
                        <h4>{review.user}</h4>
                        <p>{review.text}</p>
                        <h4>Rating: {review.rating.toString()}</h4>
                    </div>
                ))
            }
        </div>
    );
};