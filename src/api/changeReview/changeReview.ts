import type { Review } from "../../types/Review";

export const changeReview = async (restaurantId: string, reviewId: string, review: Review) => {
    const response = await fetch(`http://localhost:3000/restaurants/${restaurantId}/reviews/${reviewId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    });
    if (!response.ok) throw Error(JSON.parse(await response.text()).message);
    return response.json();
};