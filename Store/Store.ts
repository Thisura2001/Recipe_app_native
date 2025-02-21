import {configureStore} from "@reduxjs/toolkit";
import MealSlice from "../Reducers/MealSlice";

export const store = configureStore({
    reducer: {
        meals : MealSlice
    }
});
export type AppDispatch = typeof store.dispatch;