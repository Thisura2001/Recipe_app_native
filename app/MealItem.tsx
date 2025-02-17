import React from "react";
import { View, Image, Linking, ScrollView } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

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
                    <Button
                        mode="contained"
                        onPress={() => Linking.openURL(data.strSource)}
                    >
                        Watch Video
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

export default MealItem;
