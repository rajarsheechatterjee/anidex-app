import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/search";
import Details from "../screens/details";

const Stack = createStackNavigator();

function homeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default homeStack;
