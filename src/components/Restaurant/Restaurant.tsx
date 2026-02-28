import styles from "./styles.module.css"
import { Link } from "react-router";

interface RestaurantProps{
    id: string,
    name: string;
    onClick: () => void;
}

export const Restaurant: React.FC<RestaurantProps> = ({id, name, onClick}) => {
    return (
        <Link to={`/restaurants/${id}`} onClick={onClick} className={styles.button}>{name}</Link>
    );
}