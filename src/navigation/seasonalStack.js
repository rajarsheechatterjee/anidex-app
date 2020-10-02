import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Season from "../screens/Seasonal";
import Details from "../screens/details";

const Stack = createStackNavigator();

function seasonalStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Season"
                component={Season}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={({ route }) => ({ title: route.params.title })}
            />
        </Stack.Navigator>
    );
}

export default seasonalStack;
