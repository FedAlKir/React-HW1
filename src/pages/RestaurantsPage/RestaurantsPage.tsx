import { restaurants } from "../../materials/mocks/mockRestaurants";
import { RestaurantDescribe } from "../../components/RestaurantDescribe/RestaurantDescribe";
import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useState } from "react";
import styles from"./styles.module.css"

const data = restaurants;

export const RestaurantPage = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);

    let restaurant = data.filter((restaurant) => restaurant.name === selectedRestaurant)[0];

    return (
        <div className={styles.container}>
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
                <p className={styles.p}>Choose restaurant</p>
            }
        </div>
    );
}