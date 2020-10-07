import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/Anime/AnimeSearch";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";

const Stack = createStackNavigator();

function homeStack() {
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
            <Stack.Screen name="Anime Search" component={Search} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default homeStack;
