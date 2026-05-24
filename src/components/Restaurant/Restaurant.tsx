import styles from "./styles.module.css"
import { Link } from "react-router";

interface RestaurantProps{
    id: string,
    name: string;
}

export const Restaurant: React.FC<RestaurantProps> = ({id, name}) => {
    return (
        <Link to={`/restaurants/${id}`} className={styles.button}>{name}</Link>
    );
}