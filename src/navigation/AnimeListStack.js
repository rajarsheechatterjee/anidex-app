import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnimeList from "../screens/Anime/AnimeList";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";

const Stack = createStackNavigator();

const AnimeListStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="List"
                component={AnimeList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AnimeListStack;
