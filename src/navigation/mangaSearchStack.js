import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/Manga/MangaSearch";
import Details from "../screens/Manga/MangaDetails";

const Stack = createStackNavigator();

function homeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Manga Search" component={Search} />
            <Stack.Screen name="Manga Details" component={Details} />
        </Stack.Navigator>
    );
}

export default homeStack;
