import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import List from "../screens/list";
import Details from "../screens/details";

const Stack = createStackNavigator();

function listStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="StroheimRequiem's List"
                component={List}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={({ route }) => ({
                    title: route.params.title,
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}

export default listStack;
