import { Restaurants } from "../../components/Restaurants/Restaurants";
import { Outlet } from "react-router";
import styles from "./styles.module.css"
import { useGetRestaurantsQuery } from "../../store/services/restaurant";

export const RestaurantsLayout = () => {

    const {data: restaurants, isLoading, isError} = useGetRestaurantsQuery();

    if (isLoading){
        return (
            <div>
                <p className={styles.loadingStatusLabel}>Loading</p>
            </div>
        );
    }
    else if (isError || !restaurants){
        return (
            <div>
                <p className={styles.loadingStatusLabel}>Loading failture</p>
            </div>
        );
    }

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