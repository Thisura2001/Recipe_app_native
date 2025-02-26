import { Provider } from "react-redux";
import { store } from "../../Store/Store";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Dashboard() {
    return (
        <Provider store={store}>
            <Tabs
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap;

                        switch (route.name) {
                            case "index":
                                iconName = focused ? "home" : "home-outline";
                                break;
                            case "SaveMeal":
                                iconName = focused ? "save" : "save-outline";
                                break;
                            default:
                                iconName = "search";
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#667BC6",
                    tabBarInactiveTintColor: "gray",
                    tabBarShowLabel: false,
                })}
            >
                <Tabs.Screen name="index" options={{ headerShown: false }} />
                <Tabs.Screen name="SaveMeal" options={{ headerShown: false }} />
            </Tabs>
        </Provider>
    );
}
