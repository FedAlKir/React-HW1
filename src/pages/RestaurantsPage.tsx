import { restaurants } from "../materials/mocks/mockRestaurants";
import { RestaurantDescribe } from "../components/RestaurantDescribe";
import { Restaurants } from "../components/Restaurants";
import { useState } from "react";

const data = restaurants;

export const RestaurantPage = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);

    let restaurant = data.filter((restaurant) => restaurant.name === selectedRestaurant)[0];

    return (
        <div>
            <Restaurants
            names={restaurants.map((restaurant) => restaurant.name)}
            onRestaurantSelect={(name: string) => {
                setSelectedRestaurant(name);
            }}/>
            {
                restaurant ? 
                <RestaurantDescribe
                id={restaurant.id}
                name={restaurant.name}
                menu={restaurant.menu}
                reviews={restaurant.reviews}
                /> :
                <p>Choose restaurant</p>
            }
        </div>
    );
}