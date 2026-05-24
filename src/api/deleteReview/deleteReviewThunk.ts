import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteReview } from "./deleteReview";

export const deleteReviewThunk = createAsyncThunk("delete/review", ([restaurantId, reviewId]: [string, string]) => deleteReview(restaurantId, reviewId));