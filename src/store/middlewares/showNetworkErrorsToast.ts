import { createListenerMiddleware } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { toast, type ToastOptions } from "react-toastify";
import { restaurantApi } from "../services/restaurant";

const BASIC_TOAST_OPTIONS: ToastOptions = {
    position: "top-right",
    autoClose: 5000
};

export const listenerMiddleware = createListenerMiddleware<RootState>();

listenerMiddleware.startListening({
    matcher: restaurantApi.endpoints.getRestaurants.matchFulfilled,
    effect: () => {
        toast.success("Loading success!", BASIC_TOAST_OPTIONS);
    }
});

listenerMiddleware.startListening({
    matcher: restaurantApi.endpoints.getRestaurants.matchRejected,
    effect: () => {
        toast.error("Loading failed", BASIC_TOAST_OPTIONS);
    }
});

listenerMiddleware.startListening({
    matcher: restaurantApi.endpoints.postReview.matchRejected,
    effect: (action) => {
        toast.error(`${action.error.message}`, BASIC_TOAST_OPTIONS)
    }
});

listenerMiddleware.startListening({
    matcher: restaurantApi.endpoints.patchReview.matchRejected,
    effect: (action) => {
        toast.error(`${action.error.message}`, BASIC_TOAST_OPTIONS)
    }
});

listenerMiddleware.startListening({
    matcher: restaurantApi.endpoints.deleteReview.matchRejected,
    effect: (action) => {
        toast.error(`${action.error.message}`, BASIC_TOAST_OPTIONS)
    }
});