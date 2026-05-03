import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type Restaurant } from "../../types/Restaurant";
import type { Review } from "../../types/Review";

export const restaurantApi = createApi({
    reducerPath: "restaurantApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes: ["Restaurant", "Review"],
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurant[], void>({
            query: () => "/restaurants",
            providesTags: [{type: "Restaurant", id: "LIST"}]
        }),
        postReview: builder.mutation<Review, {review: Review, restaurantId: string}>({
            query: ({review, restaurantId}) => ({
                method: "POST",
                url: `/restaurants/${restaurantId}/reviews`,
                body: review
            }),
            invalidatesTags: (_result, _error, {restaurantId}) => [{type: "Restaurant", id: restaurantId}]
        }),
        patchReview: builder.mutation<Review, {restaurantId: string, reviewId: string, review: Review}>({
            query: ({restaurantId, reviewId, review}) => ({
                method: "PATCH",
                url: `/restaurants/${restaurantId}/reviews/${reviewId}`,
                body: review
            }),
            invalidatesTags: (_result, _error, {reviewId}) => [{type: "Review", id: reviewId}]
        }),
        deleteReview: builder.mutation<Review, {restaurantId: string, reviewId: string}>({
            query: ({restaurantId, reviewId}) => ({
                method: "DELETE",
                url: `/restaurants/${restaurantId}/reviews/${reviewId}`,
            }),
            invalidatesTags: (_result, _error, {reviewId}) => [{type: "Review", id: reviewId}]
        })
    })
});

export const {
    useGetRestaurantsQuery,
    usePostReviewMutation,
    usePatchReviewMutation,
    useDeleteReviewMutation
} = restaurantApi;