
import {Provider} from "react-redux";
import {store} from "../../Store/Store";
import {Tabs} from "expo-router";

export default function Dashboard() {
    return (
        <Provider store={store}>
            <Tabs>
                <Tabs.Screen name="dashboard" options={{title : "dashboard"}}/>
                <Tabs.Screen name="SaveMeal" options={{title : "Saved meal"}}/>
            </Tabs>
        </Provider>
    );
}