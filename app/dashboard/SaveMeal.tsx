import React, { useEffect } from "react";
import {ScrollView, View, StyleSheet, Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { getAllMeal, deleteMeal } from "../../Reducers/MealSlice";

export default function SaveMeal() {
    const dispatch = useDispatch<AppDispatch>();
    const meals = useSelector((state) => state.meals || []);


    useEffect(() => {
        dispatch(getAllMeal()); // Fetch meals when component mounts
    }, [dispatch]);

    function handleDelete(name: string) {
        dispatch(deleteMeal(name)); // Dispatch delete action
    }

    return (
        <>
            <Text style={styles.header}>Saved Recipes..🍟</Text>

        </>
    );
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        padding: 20,
        color: "#667BC6",
    },
});