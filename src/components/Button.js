import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Colors from "../theming/colors";

export const Button = ({ title, handleLoadMore }) => {
    return (
        <TouchableRipple
            borderless
            centered
            style={styles.buttonContainer}
            onPress={() => handleLoadMore()}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableRipple>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: 35,
        backgroundColor: Colors.buttonColor,
        justifyContent: "center",
        borderRadius: 10,
        elevation: 1,
    },
    buttonText: {
        textAlign: "center",
        paddingHorizontal: 30,
        color: "white",
    },
});
