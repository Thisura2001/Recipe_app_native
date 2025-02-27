import React, { useState } from "react";
import {View, StyleSheet, Image} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/Store";
import {User} from "../Modal/User";
import {loginUser} from "../Reducers/UserSlice";
import AwesomeAlert from "react-native-awesome-alerts";

export default function LoginScreen() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    function handleLogin() {
        const user: User = { username, password };

        dispatch(loginUser(user))
            .then(() => {
                setAlertMessage("Login successfully !!");
                setShowAlert(true);

                setTimeout(() => {
                    router.replace('/dashboard');
                }, 2000);
            })
            .catch(err => {
                console.log(err);
                setAlertMessage("Something went wrong !!");
                setShowAlert(true);
            });
    }

    function handleSignUp() {
        router.replace("/SignUp");
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/icons8-user-94.png")} style={styles.logo} />
            <Text variant="headlineMedium" style={styles.loginText}>Welcome Again.. </Text>
            <TextInput
                label="Email"
                value={username}
                onChangeText={setUsername}
                keyboardType="email-address"
                style={styles.input}
                left={<TextInput.Icon icon="email" />}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={styles.input}
                left={<TextInput.Icon icon="lock" />}
                right={
                    <TextInput.Icon
                        icon={showPassword ? "eye-off" : "eye"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
                Login
            </Button>
            <View style={styles.signUpContainer}>
                <Text style={{color:"white"}}>Don't have an account? </Text>
                <Button mode="text" onPress={handleSignUp} textColor="#D6BD98">
                    Sign Up
                </Button>
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title={"Notification"}
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="OK"
                confirmButtonColor="#FF6500"
                onConfirmPressed={() => setShowAlert(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor:"#153448"
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        alignSelf:"center",
        borderRadius:100
    },
    loginText: {
        textAlign: "center",
        marginBottom: 20,
        padding:40,
        fontWeight: "bold",
        fontSize:40,
        color: "#FF6500",

    },
    input: {
        marginBottom: 15,

    },
    loginButton: {
        marginTop: 10,
        color: "#007bff",
        backgroundColor: "#FF6500",
    },
    signUpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center",
    },
});
