import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/MangaSearch";
import Details from "../screens/MangaDetails";

const Stack = createStackNavigator();

function homeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Manga Search"
                component={Search}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Manga Details"
                component={Details}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default homeStack;
