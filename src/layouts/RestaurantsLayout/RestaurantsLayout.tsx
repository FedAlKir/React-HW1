import { Restaurants } from "../../components/Restaurants/Restaurants";
import { restaurants } from "../../materials/mocks/mockRestaurants";
import { Outlet } from "react-router";
import styles from "./styles.module.css"

export const RestaurantsLayout = () => {
    return (
        <div className={styles.container}>
            <Restaurants
            ids={restaurants.map((restaurant) => restaurant.id)}
            names={restaurants.map((restaurant) => restaurant.name)}
            />
            
            <Outlet />
        </div>
    )
}