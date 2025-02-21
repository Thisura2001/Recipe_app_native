import {Drawer} from "expo-router/drawer";
import {Provider} from "react-redux";
import {store} from "../../Store/Store";

export default function Dashboard() {
    return (
        <Provider store={store}>
            <Drawer>
                <Drawer.Screen name="dashboard" options={{title : "dashboard"}}/>
                <Drawer.Screen name="Saved Meal" options={{title : "Saved meal"}}/>
            </Drawer>
        </Provider>
    );
}