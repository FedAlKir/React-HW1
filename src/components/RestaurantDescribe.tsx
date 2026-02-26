import {Dish, type DishProps} from "../components/Dish";
import { Review, type ReviewProps } from "./Review";

interface RestaurantDescribeProps{
    id: string;
    name: string;
    menu: DishProps[];
    reviews: ReviewProps[];
}

export const RestaurantDescribe: React.FC<RestaurantDescribeProps> = ({name, menu, reviews}) => {
    return (
        <div>
            <h3>{`Name: ${name}`}</h3>
            <div>
                {
                    menu.map((dish) => (
                        <Dish
                        id=""
                        name={dish.name}
                        price={dish.price}
                        ingredients={dish.ingredients}/>
                    ))
                }
            </div>
            <div>
                {
                    reviews.map((review) => (
                        <Review
                        id=""
                        user={review.user}
                        text={review.text}
                        rating={review.rating}/>
                    ))
                }
            </div>
        </div>
    )
}