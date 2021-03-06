import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../screens/details";

const Stack = createStackNavigator();

function recomStack({ title, navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Details} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default recomStack;
