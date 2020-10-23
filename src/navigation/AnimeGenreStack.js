import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnimeGenres from "../screens/Anime/AnimeGenres";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";

const Stack = createStackNavigator();

const AnimeListStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="List" component={AnimeGenres} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
};

export default AnimeListStack;
