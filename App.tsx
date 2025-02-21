import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./Store/Store";

export default function App() {
  return (
      <Provider store={store}>
        <View>
        </View>
      </Provider>
  );
}
