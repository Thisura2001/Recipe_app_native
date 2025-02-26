import React, { useState } from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { TextInput, Button } from "react-native-paper";
import {router} from "expo-router";

const SignupScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = () => {

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
