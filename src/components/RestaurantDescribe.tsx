import type { DishProps } from "../types/Dish";
import type { Review } from "../types/Review";
import { Dish } from "./Dish";

interface RestaurantDescribeProps{
    id: string;
    name: string;
    menu: DishProps[];
    reviews: Review[];
}

export const RestaurantDescribe: React.FC<RestaurantDescribeProps> = ({name, menu, reviews}) => {
    return (
        <div>
            <h3>{`Name: ${name}`}</h3>
            <div>
                <h4>Menu</h4>
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
            <div>
                <h4>Reviews</h4>
                {
                    reviews.map((review) => (
                        <div>
                            <h5>{review.user}</h5>
                            <p>{review.text}</p>
                            <h6>Rating: {review.rating.toString()}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};