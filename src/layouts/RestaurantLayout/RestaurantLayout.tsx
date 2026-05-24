import { useParams } from "react-router"
import { Outlet } from "react-router"
import styles from "./styles.module.css"
import { useSelector } from "react-redux"
import { selectRestaurants } from "../../store/selectors/selectRestaurants"

export const RestaurantLayout = () => {

    const restaurants = useSelector(selectRestaurants);

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