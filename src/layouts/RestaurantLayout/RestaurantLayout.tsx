import { useParams } from "react-router"
import { restaurants } from "../../materials/mocks/mockRestaurants";
import { Outlet } from "react-router"
import styles from "./styles.module.css"

export const RestaurantLayout = () => {

    const { id } = useParams();

    const restaurant = restaurants.find((res) => res.id === id);

    if (!restaurant){
        return (<h1>Restaurant not found</h1>);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.name}>{restaurant.name}</h2>

            <Outlet context={ restaurant } />
        </div>
    )
}