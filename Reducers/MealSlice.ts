import Meal from "../Modal/MealModal";
import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:Meal[] =[];

const api = axios.create({
    baseURL:"http://localhost:3000/meal",
})

export const saveMeal = createAsyncThunk(
    'meal/saveMeal',
    async (meal:Meal)=>{
        try {
            const response = await api.post('/add',meal)
            return response.data;
        }catch (e){
            console.log("Error adding meal ",e)
        }
    }
)

const mealSlice = createSlice({
    name:'meal',
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(saveMeal.fulfilled, (state, action: PayloadAction<Meal>) => {
            state.push(action.payload);
        });
    },
})
export default mealSlice.reducer;