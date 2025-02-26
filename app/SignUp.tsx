import React, { useState } from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { TextInput, Button } from "react-native-paper";
import {router} from "expo-router";

const SignupScreen = () => {
    const [email, setEmail] = useState("");
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
                    value={email}
                    onChangeText={setEmail}
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
                    Sign Up
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
        backgroundColor: "#f5f5f5",
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginLeft: 120,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#7E5CAD",
    },
    input: {
        marginBottom: 15,

    },
    button: {
        marginTop: 10,
    },
    loginText: {
        textAlign: "center",
        marginTop: 15,
        color: "#007bff",
    },
});

export default SignupScreen;
