import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import MealItem from "./MealItem";
import {Card, Paragraph, Searchbar} from "react-native-paper";

const Index: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [myMeal, setMeal] = useState<any[]>([]);

    const searchMeal = (evt: { nativeEvent: { key: string } }) => {
        if (evt.nativeEvent.key === "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then((res) => res.json())
                .then((data) => {
                    setMeal(data.meals || []);
                    setSearch("");
                });
        }
    };

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Card style={{ marginBottom: 20, padding: 10 }}>
                    <Card.Content>
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Search Your Food Recipe</Text>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!
                        </Paragraph>
                    </Card.Content>
                </Card>
                <Searchbar
                    style={{ borderBottomWidth: 1, marginBottom: 20, fontSize: 18 }}
                    placeholder="Search for a meal..."
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                    onKeyPress={searchMeal}
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

export default Index;
