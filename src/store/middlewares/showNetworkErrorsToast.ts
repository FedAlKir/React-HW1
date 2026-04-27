import { createListenerMiddleware } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { toast, type ToastOptions } from "react-toastify";
import { loadRestaurantsThunk } from "../../api/loadRestaurants/loadRestaurantsThunk";
import { postNewReviewThunk } from "../../api/postNewReview/postNewReviewThunk";
import { changeReviewThunk } from "../../api/changeReview/changeReviewThunk";
import { deleteReviewThunk } from "../../api/deleteReview/deleteReviewThunk";

const BASIC_TOAST_OPTIONS: ToastOptions = {
    position: "top-right",
    autoClose: 5000
};

export const listenerMiddleware = createListenerMiddleware<RootState>();

listenerMiddleware.startListening({
    actionCreator: loadRestaurantsThunk.fulfilled,
    effect: () => {
        toast.success("Loading success!", BASIC_TOAST_OPTIONS);
    }
});

listenerMiddleware.startListening({
    actionCreator: loadRestaurantsThunk.rejected,
    effect: () => {
        toast.error("Loading failed", BASIC_TOAST_OPTIONS);
    }
});

listenerMiddleware.startListening({
    actionCreator: postNewReviewThunk.rejected,
    effect: (action) => {
        toast.error(`${action.error.message}`, BASIC_TOAST_OPTIONS)
    }
});

listenerMiddleware.startListening({
    actionCreator: changeReviewThunk.rejected,
    effect: (action) => {
        toast.error(`${action.error.message}`, BASIC_TOAST_OPTIONS)
    }
});

listenerMiddleware.startListening({
    actionCreator: deleteReviewThunk.rejected,
    effect: (action) => {
        toast.error(`${action.error.message}`, BASIC_TOAST_OPTIONS)
    }
});