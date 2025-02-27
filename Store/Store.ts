import {configureStore} from "@reduxjs/toolkit";
import MealSlice from "../Reducers/MealSlice";

export const store = configureStore({
    reducer: {
        meals : MealSlice,
        users : UserSlice,
    }
});
export type AppDispatch = typeof store.dispatch;