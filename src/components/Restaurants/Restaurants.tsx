import { Link } from "react-router";
import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./styles.module.css"
import { selectTotalPrice } from "../../store/selectors/selectTotalPrice";
import { useSelector } from "react-redux";

interface Restaurants{
    ids: string[],
    names: string[];
}

export const Restaurants: React.FC<Restaurants> = ({ids, names}) => {

    const idNamePairs = ids.map((id, index) => [id, names[index]]);

    return (
        <div className={styles.container}>
            <div className={styles.restaurants}>
                {
                idNamePairs.map(([id, name]) => (
                    <Restaurant
                    key={id}
                    id={id}
                    name={name}
                    />
                ))
            }
            </div>
            <div className={styles.basketContainer}>
                <Link to="../basket" className={styles.basketLink}>Basket</Link>
                <p className={styles.totalPriceLabel}>Total: ${useSelector(selectTotalPrice)}</p>
            </div>
        </div>
    );
};