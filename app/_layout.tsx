import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../Store/Store";

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="dashboard" options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    );
}
