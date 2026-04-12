import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./styles.module.css"

interface Restaurants{
    ids: string[],
    names: string[];
}

export const Restaurants: React.FC<Restaurants> = ({ids, names}) => {

    const idNamePairs = ids.map((id, index) => [id, names[index]]);

    return (
        <div className={styles.container}>
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
    );
};