import React, {useEffect, useState} from "react";
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { getAllMeal, deleteMeal } from "../../Reducers/MealSlice";
import {Snackbar} from "react-native-paper";

export default function SaveMeal() {
    const dispatch = useDispatch<AppDispatch>();
    const meals = useSelector((state) => state.meals || []);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    useEffect(() => {
        dispatch(getAllMeal());
    }, [dispatch]);

    function handleDelete(name: string) {
        dispatch(deleteMeal(name)).then(()=>{
            console.log("Deleting Meal");
            setSnackbarVisible(true);
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Saved Recipes..🍟</Text>
            {meals.map((meal, index) => (
                <View key={index} style={styles.card}>
                    <Image source={{ uri: meal.image }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <Text style={styles.mealName}>{meal.name}</Text>
                        <Text style={styles.mealDescription}>{meal.instructions}</Text>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(meal.name)}>
                            <Text style={styles.deleteButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <Snackbar
                        visible={snackbarVisible}
                        onDismiss={()=>setSnackbarVisible(false)}
                        duration={3000}
                        action={{
                            label: "OK",
                            onPress: () => setSnackbarVisible(false),
                        }}>
                        Meal deleted successfully!
                    </Snackbar>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 20,
        color: "#667BC6",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
        elevation: 5, // for shadow effect
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    cardContent: {
        padding: 10,
    },
    mealName: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#ff5c5c",
    },
    mealDescription: {
        fontSize: 14,
        color: "#666",
        marginVertical: 5,
    },
    deleteButton: {
        marginTop: 10,
        backgroundColor: "#ff5c5c",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    deleteButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
