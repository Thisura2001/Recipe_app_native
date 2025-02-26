import React, { useState } from "react";
import { View, ScrollView, Text, Linking } from "react-native";
import { Card, Title, Paragraph, Button, Snackbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store/Store";
import { saveMeal } from "../Reducers/MealSlice";
import { FontAwesome } from "@expo/vector-icons";

interface MealProps {
    data: {
        strMealThumb: string;
        strMeal: string;
        strArea: string;
        strInstructions: string;
        strSource: string;
    };
}

const MealItem: React.FC<MealProps> = ({ data }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    function handleSave() {
        const newMeal = {
            name: data.strMeal,
            area: data.strArea,
            instructions: data.strInstructions,
            image: data.strMealThumb,
            source: data.strSource,
        };

        dispatch(saveMeal(newMeal))
            .unwrap()
            .then(() => {
                console.log("Meal saved successfully!");
                setSnackbarVisible(true);
            })
            .catch((error) => console.error("Error saving meal:", error));
    }

    const formattedInstructions = formatInstructions(data.strInstructions);

    return (
        <ScrollView>
            <Card style={{ padding: 10, marginTop: 10 }}>
                <Card.Cover source={{ uri: data.strMealThumb }} />
                <Card.Content>
                    <Title style={{ fontWeight: "700", color: "#EB5B00" }}>{data.strMeal}</Title>
                    <Paragraph>{data.strArea} food</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title style={{ fontWeight: "700", color: "#EB5B00" }}>Recipe</Title>
                    <View>
                        {formattedInstructions.map((step, index) => (
                            <Text key={index} style={{ fontSize: 16, marginBottom: 5 }}>
                                {step}
                            </Text>
                        ))}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <Button mode="contained" style={{ backgroundColor: "#EB5B00" }}
                                onPress={() => Linking.openURL(data.strSource)}>
                            Watch Video
                        </Button>
                        <Button onPress={handleSave}>
                            <FontAwesome name="bookmark" size={30} color="#EB5B00" />
                        </Button>
                    </View>
                </Card.Content>
            </Card>

            {/* Snackbar Alert */}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                action={{
                    label: "OK",
                    onPress: () => setSnackbarVisible(false),
                }}>
                Meal saved successfully!
            </Snackbar>
        </ScrollView>
    );
};

const formatInstructions = (instructions: string) => {
    return instructions
        .split(".")
        .filter((step) => step.trim().length > 0)
        .map((step, index) => `• ${step.trim()}.`);
};

export default MealItem;
