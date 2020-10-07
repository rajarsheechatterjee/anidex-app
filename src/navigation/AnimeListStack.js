import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnimeList from "../screens/Anime/AnimeList";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";

const Stack = createStackNavigator();

const AnimeListStack = () => {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade,
            }}
        >
            <Stack.Screen name="List" component={AnimeList} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
};

export default AnimeListStack;
