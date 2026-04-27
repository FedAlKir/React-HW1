import { createAsyncThunk } from "@reduxjs/toolkit";
import { postNewReview } from "./postNewReview";
import type { Review } from "../../types/Review";

interface ReviewPostProps{
    restaurantId: string,
    review: Review
}

export const postNewReviewThunk = createAsyncThunk("post/review", ({restaurantId, review}: ReviewPostProps) => postNewReview(restaurantId, review));