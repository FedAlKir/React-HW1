import { Link } from "react-router";
import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./styles.module.css"
import { selectTotalPrice } from "../../store/selectors/selectTotalPrice";
import { useSelector } from "react-redux";

interface Restaurants{
    ids: string[],
    names: string[];
    onRestaurantSelect: (name: string) => void;
}

export const Restaurants: React.FC<Restaurants> = ({ids, names, onRestaurantSelect}) => {

    let idNamePairs: { id: string, name: string }[] = [];
    for (const index in ids){
        idNamePairs.push({id: ids[index], name: names[index]});
    }

    return (
        <div className={styles.container}>
            <div className={styles.restaurants}>
                {
                idNamePairs.map(({id, name}) => (
                    <Restaurant
                    key={id}
                    id={id}
                    name={name}
                    onClick={() => {
                        onRestaurantSelect(id);
                    }}/>
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