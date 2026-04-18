import { createListenerMiddleware } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { toast } from "react-toastify";
import { loadRestaurantsThunk } from "../../api/loadRestaurantsThunk";

export const listenerMiddleware = createListenerMiddleware<RootState>();

listenerMiddleware.startListening({
    actionCreator: loadRestaurantsThunk.fulfilled,
    effect: () => {
        toast.success("Loading success!", {
            position: "top-right",
            autoClose: 5000
        });
    }
});

listenerMiddleware.startListening({
    actionCreator: loadRestaurantsThunk.rejected,
    effect: () => {
        toast.error("Loading failed", {
            position: "top-right",
            autoClose: 5000
        });
    }
})