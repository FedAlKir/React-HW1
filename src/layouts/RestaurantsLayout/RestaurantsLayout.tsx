import { useState } from "react";
import { Restaurants } from "../../components/Restaurants/Restaurants";
import { restaurants } from "../../materials/mocks/mockRestaurants";
import { Outlet } from "react-router";

export const RestaurantsLayout = () => {
    const [_, setSelectedRestaurant] = useState<string | null>(null);

    return (
        <div>
            <Restaurants
            ids={restaurants.map((restaurant) => restaurant.id)}
            names={restaurants.map((restaurant) => restaurant.name)}
            onRestaurantSelect={(id: string) => {
                setSelectedRestaurant(id);
            }}/>
            
            <Outlet />
        </div>
    )
}