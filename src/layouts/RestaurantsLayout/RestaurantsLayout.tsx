import { Restaurants } from "../../components/Restaurants/Restaurants";
import { Outlet } from "react-router";
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch } from "../../store/store";
import { loadRestaurantsThunk } from "../../api/loadRestaurantsThunk";
import { selectRestaurants } from "../../store/selectors/selectRestaurants";
import { selectRestaurantsStatus } from "../../store/selectors/selectRestaurantsStatus";
import { useEffect } from "react";

export const RestaurantsLayout = () => {

    const loadingStatus = useSelector(selectRestaurantsStatus);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (loadingStatus !== "fulfilled"){
            dispatch(loadRestaurantsThunk());
        }
    }, [dispatch]);

    const restaurants = useSelector(selectRestaurants);

    if (loadingStatus === "idle" || loadingStatus === "pending"){
        return (
            <div>
                <p className={styles.loadingStatusLabel}>Loading</p>
            </div>
        );
    }

    else if (loadingStatus === "rejected"){
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