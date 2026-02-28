import styles from "./styles.module.css"

interface RestaurantProps{
    name: string;
    onClick: () => void;
}

export const Restaurant: React.FC<RestaurantProps> = ({name, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>{name}</button>
    );
}