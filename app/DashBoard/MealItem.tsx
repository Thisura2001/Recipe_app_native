import React from "react";
import {View, Image, Linking, ScrollView, Alert} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import Meal from "../../Modal/MealModal";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../Store/Store";
import {saveMeal} from "../../Reducers/MealSlice";

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
            .then(() => console.log("Meal saved successfully!"))
            .catch((error) => console.error("Error saving meal:", error));
    }

    return (
        <ScrollView>
            <Card>
                <Card.Cover source={{ uri: data.strMealThumb }} />
                <Card.Content>
                    <Title>{data.strMeal}</Title>
                    <Paragraph>{data.strArea} food</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Recipe</Title>
                    <Paragraph>{data.strInstructions}</Paragraph>
                    <Image
                        source={{ uri: data.strMealThumb }}
                        style={{ width: "100%", height: 200, marginVertical: 10 }}
                        resizeMode="cover"
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Button mode="contained" onPress={() => Linking.openURL(data.strSource)}>
                            Watch Video
                        </Button>
                        <Button onPress={handleSave}>
                            Save
                        </Button>
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

export default MealItem;
