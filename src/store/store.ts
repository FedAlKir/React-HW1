import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./middlewares/showNetworkErrorsToast";
import { rootReducer } from "./rootReducer";
import { restaurantApi } from "./services/restaurant";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .prepend(listenerMiddleware.middleware)
        .concat(restaurantApi.middleware)
});

export type { RootState } from "./rootReducer";
export type AppDispatch = typeof store.dispatch;