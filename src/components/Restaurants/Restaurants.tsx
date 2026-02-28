import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./styles.module.css"

interface Restaurants{
    names: string[];
    onRestaurantSelect: (name: string) => void;
}

export const Restaurants: React.FC<Restaurants> = ({names, onRestaurantSelect}) => {
    return (
        <div className={styles.container}>
            {
                names.map((name) => (
                    <Restaurant
                    key={name}
                    name={name}
                    onClick={() => {
                        onRestaurantSelect(name);
                    }}/>
                ))
            }
        </div>
    );
};