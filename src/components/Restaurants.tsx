import { Restaurant } from "./Reasturant";

interface Restaurants{
    names: string[];
    onRestaurantSelect: (name: string) => void;
}

export const Restaurants: React.FC<Restaurants> = ({names, onRestaurantSelect}) => {
    return (
        <div>
            {
                names.map((name) => (
                    <Restaurant
                    name={name}
                    onClick={() => {
                        onRestaurantSelect(name);
                    }}/>
                ))
            }
        </div>
    );
};