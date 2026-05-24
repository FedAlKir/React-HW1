export const deleteReview = async (restaurantId: string, reviewId: string) => {
    const response = await fetch(`http://localhost:3000/restaurants/${restaurantId}/reviews/${reviewId}`, {
        method: "DELETE",
    });
    if (!response.ok) throw Error(JSON.parse(await response.text()).message);
    return response.json();
};