import { useOutletContext } from "react-router"
import styles from "./styles.module.css"
import type { Restaurant } from "../../types/Restaurant"
import { Link } from "react-router"
import { useState } from "react"
import { type Review } from "../../types/Review"
import penImage from "../../materials/images/pen.png";
import binImage from "../../materials/images/bin.png";
import { useDeleteReviewMutation, usePatchReviewMutation, usePostReviewMutation } from "../../store/services/restaurant"

export const ReviewList: React.FC = () => {

    const { id, reviews } = useOutletContext<Restaurant>();
    const [editingReview, setEditingReview] = useState<Review | undefined>(undefined);
    
    const [reviewText, setReviewText] = useState<string>("");
    const [reviewRating, setReviewRating] = useState<Number>(5);

    const [postReview] = usePostReviewMutation();
    const [patchReview] = usePatchReviewMutation();
    const [deleteReview] = useDeleteReviewMutation();

    const sendReview = async (text: string, rating: Number) => {
        const editedReview: Review = {
            id: editingReview ? editingReview.id : "",
            user: "Me",
            text: text,
            rating: rating
        }
        if (!editingReview) postReview({review: editedReview, restaurantId: id});
        else patchReview({restaurantId: id, reviewId: editedReview.id, review: editedReview});

        setEditingReview(undefined);
        setReviewText("");
        setReviewRating(5);
    };

    const onDeleteReview = async (reviewId: string) => deleteReview({restaurantId: id, reviewId});

    return (
        <div className={styles.container}>
            <h3 className={styles.headerLabel}>Reviews:</h3>
            {
                reviews.map((review) => (
                    <div className={styles.reviewContainer} key={review.id}>
                        <div className={styles.reviewContentContainer}>
                            <h3>{review.user}</h3>
                            <p>{review.text}</p>
                            <h4>Rating: {review.rating.toString()}</h4>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <button 
                            className={styles.modifyReviewButton} 
                            onClick={_ => {
                                setEditingReview(review);
                                setReviewText(review.text);
                                setReviewRating(review.rating);
                            }}
                            ><img src={penImage}/></button>

                            <button className={styles.modifyReviewButton} onClick={_ => onDeleteReview(review.id)}><img src={binImage}/></button>
                        </div>
                    </div>
                ))
            }

            <div className={styles.formContainer}>
                <h3 className={styles.label}>Write your review</h3>
                
                {
                    editingReview ? 
                    <button 
                    className={styles.cancelEditingButton}
                    onClick={_ => {
                            setEditingReview(undefined);
                            setReviewText("");
                            setReviewRating(5);
                        }}>
                        Cancel editing
                    </button> : 
                    <></>
                }

                <textarea 
                placeholder="Your review" 
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className={styles.reviewTextArea}
                />

                <div className={styles.ratingSelectorContainer}>
                    <h4>Rating:</h4>
                    <select className={styles.ratingSelector} onChange={e => setReviewRating(Number.parseInt(e.target.value))}>
                        {
                            [5, 4, 3, 2, 1].map(r => 
                            <option 
                            key={r} 
                            value={`${r}`} 
                            selected={r === reviewRating} 
                            >{r}</option>)
                        }
                    </select>
                </div>
                <button onClick={_ => sendReview(reviewText, reviewRating)} className={styles.submitButton}>Submit</button>
            </div>
            <Link to=".." className={styles.menuLink}>Menu</Link>
        </div>
    );
}