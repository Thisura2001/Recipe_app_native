import React, { useState } from "react";
import { View, Text, ScrollView ,StyleSheet} from "react-native";
import { Card, Paragraph, Searchbar } from "react-native-paper";

import MealItem from "./MealItem";

const Index: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [myMeal, setMeal] = useState<any[]>([]);

    const searchMeal = () => {
        if (search.trim() === "") return; // Prevent empty searches
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setMeal(data.meals || []);
                setSearch("");
            })
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Card style={styles.topCard}>
                    <Card.Content>
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Search Your Food Recipe</Text>
                        <Paragraph>
                            Discover delicious recipes in a quiet and simple way. Search, cook, and enjoy every bite!
                        </Paragraph>
                    </Card.Content>
                </Card>
                <Searchbar
                    style={{ borderBottomWidth: 1, marginBottom: 20, fontSize: 18 }}
                    placeholder="Search for a meal..."
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                    onSubmitEditing={searchMeal} // Works on both mobile and web
                />
                <View>
                    {myMeal.length === 0 ? (
                        <Text style={{ textAlign: "center", fontSize: 18, color: "red" }}>Not found</Text>
                    ) : (
                        myMeal.map((res, index) => <MealItem key={index} data={res} />)
                    )}
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    topCard:{
        backgroundColor:"pink",
        marginBottom: 20,
        padding: 10
    }
})

export default Index;
