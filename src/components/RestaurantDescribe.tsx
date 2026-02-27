import type { Dish } from "../types/Dish";
import type { Review } from "../types/Review";

interface RestaurantDescribeProps{
    id: string;
    name: string;
    menu: Dish[];
    reviews: Review[];
}

export const RestaurantDescribe: React.FC<RestaurantDescribeProps> = ({id, name, menu, reviews}) => {
    return (
        <div>
            <h3>{`Name: ${name}`}</h3>
            <div>
                <h4>Menu</h4>
                {
                    menu.map((dish) => (
                        <div>
                            <h5>{dish.name}</h5>
                            <h6>Ingridients</h6>
                            {
                                dish.ingredients.map((ingridient) => (<p>{ingridient}</p>))
                            }
                        </div>
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