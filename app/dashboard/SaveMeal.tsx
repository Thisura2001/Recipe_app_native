import {ScrollView, View, StyleSheet, Text, Linking} from "react-native";
import {Button, Card, Paragraph, Title} from "react-native-paper";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";

export default function SaveMeal() {
    return(
        <>
            <View style={styles.header}>Saved Recipes..🍟</View>
            <ScrollView>
                {/*<Card style={{ padding: 10, marginTop: 10 }}>*/}
                {/*    <Card.Cover source={{ uri: data.strMealThumb }} />*/}
                {/*    <Card.Content>*/}
                {/*        <Title style={{ fontWeight: "700", color: "#EB5B00" }}>{data.strMeal}</Title>*/}
                {/*        <Paragraph>{data.strArea} food</Paragraph>*/}
                {/*    </Card.Content>*/}
                {/*    <Card.Content>*/}
                {/*        <Title style={{ fontWeight: "700", color: "#EB5B00" }}>Recipe</Title>*/}
                {/*        <View>*/}
                {/*            {formattedInstructions.map((step, index) => (*/}
                {/*                <Text key={index} style={{ fontSize: 16, marginBottom: 5 }}>*/}
                {/*                    {step}*/}
                {/*                </Text>*/}
                {/*            ))}*/}
                {/*        </View>*/}
                {/*        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>*/}
                {/*            <Button mode="contained" style={{ backgroundColor: "#EB5B00" }} onPress={() => Linking.openURL(data.strSource)}>*/}
                {/*                Watch Video*/}
                {/*            </Button>*/}
                {/*        </View>*/}
                {/*    </Card.Content>*/}
                {/*</Card>*/}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        fontWeight: "bold",
        fontSize:30,
        alignItems:'center',
        padding:20,
        color:"#667BC6"
    }
})