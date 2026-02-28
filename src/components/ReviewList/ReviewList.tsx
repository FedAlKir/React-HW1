import { useOutletContext } from "react-router"
import styles from "./styles.module.css"
import type { Restaurant } from "../../types/Restaurant"

export const ReviewList: React.FC = () => {

    const { reviews } = useOutletContext<Restaurant>();

    return (
        <div>
            <h3 className={styles.headerLabel}>Reviews:</h3>
            {
                reviews.map((review) => (
                    <div className={styles.review}>
                        <h4>{review.user}</h4>
                        <p>{review.text}</p>
                        <h4>Rating: {review.rating.toString()}</h4>
                    </div>
                ))
            }
        </div>
    )
}