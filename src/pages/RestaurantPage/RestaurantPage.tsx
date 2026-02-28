import { restaurants } from "../../materials/mocks/mockRestaurants";
import { RestaurantDescribe } from "../../components/RestaurantDescribe/RestaurantDescribe";
import { Restaurants } from "../../components/Restaurants/Restaurants";
import styles from"./styles.module.css"
import { useParams } from "react-router";

export const RestaurantPage = () => {
    const { id } = useParams();

    const restaurant = restaurants.find((res) => res.id === id);

    if (!restaurant){
        return (<h1>Restaurant not found</h1>);
    }

    return (
        <div className={styles.container}>
            <Restaurants
            names={restaurants.map((restaurant) => restaurant.name)}
            onRestaurantSelect={(name: string) => {
                //setSelectedRestaurant(name);
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