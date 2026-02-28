import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./styles.module.css"

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
    );
};