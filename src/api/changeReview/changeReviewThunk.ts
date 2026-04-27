import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Review } from "../../types/Review";
import { changeReview } from "./changeReview";

interface ChangeReviewProps{
    restaurantId: string,
    reviewId: string,
    review: Review
}

export const changeReviewThunk = createAsyncThunk("put/review", ({restaurantId, reviewId, review}: ChangeReviewProps) => changeReview(restaurantId, reviewId, review));