import type { Review } from "../../types/Review";

export const postNewReview = async (restaurantId: string, review: Review) => {
    const response = await fetch(`http://localhost:3000/restaurants/${restaurantId}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    });
    if (!response.ok) throw Error(JSON.parse(await response.text()).message);
    return response.json();
}