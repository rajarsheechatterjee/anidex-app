import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/Anime/AnimeSearch";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";

const Stack = createStackNavigator();

function homeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Anime Search"
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
