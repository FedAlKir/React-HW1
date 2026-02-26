import { restaurants } from "../materials/mocks/mockRestaurants";
import { RestaurantDescribe } from "../components/RestaurantDescribe";
import { Restaurants } from "../components/Restaurants";

export const RestaurantPage = () => {
    return (
        <div>
            <Restaurants
            names={restaurants.map((restaurant) => restaurant.name)}
            onRestaurantSelect={(name) => {
                
            }}/>
        </div>
    )
}