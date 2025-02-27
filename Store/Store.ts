import {configureStore} from "@reduxjs/toolkit";
import MealSlice from "../Reducers/MealSlice";
import UserSlice from "../Reducers/UserSlice";

export const store = configureStore({
    reducer: {
        meals : MealSlice,
        users : UserSlice,
    }
});
export type AppDispatch = typeof store.dispatch;