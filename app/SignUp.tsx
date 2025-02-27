import React, { useState } from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { TextInput, Button } from "react-native-paper";
import {router} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../Store/Store";
import {User} from "../Modal/User";
import {registerUser} from "../Reducers/UserSlice";
import AwesomeAlert from "react-native-awesome-alerts";

const SignupScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const handleSignup = () => {
        if (username && password){
            const user:User = {username:username,password:password}
            dispatch(registerUser(user)).then(()=>{
                setAlertMessage("User Registered successfully !!");
                setShowAlert(true)
            }).catch(err=>{
                console.log(err)
                setAlertMessage("Something went wrong !!");
                setShowAlert(true)
            })
        }else{
            setAlertMessage("Please Enter the valid username and password");
            setShowAlert(true)
        }
    };

    function navigateLog() {
        router.replace('/')
    }

    return (
        <>
            <View style={styles.container}>
                <Image source={require("../assets/cooking-logo-design-vector.jpg")} style={styles.logo} />
                <Text style={styles.title}>Create Account..👨‍💻</Text>
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
                <Button mode="contained" onPress={handleSignup} style={styles.button}>
                    SIGN UP
                </Button>
                <TouchableOpacity onPress={navigateLog}>
                    <Text style={styles.loginText}>Already have an account? Log In</Text>
                </TouchableOpacity>
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
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#2C4E80",
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        alignSelf:"center",
        borderRadius:100
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#FF6500",
    },
    input: {
        marginBottom: 15,

    },
    button: {
        marginTop: 10,
        backgroundColor: "#FF6500",
    },
    loginText: {
        textAlign: "center",
        marginTop: 15,
        color: "#ffffff",
    },
});

export default SignupScreen;
