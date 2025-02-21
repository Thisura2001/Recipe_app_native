import {Drawer} from "expo-router/drawer";

export default function Dashboard() {
    return (
        <Drawer>
            <Drawer.Screen name="dashboard" options={{title : "dashboard"}}/>
            <Drawer.Screen name="Saved Meal" options={{title : "Saved meal"}}/>
        </Drawer>
    );
}