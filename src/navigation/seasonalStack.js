import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Season from "../screens/Anime/Seasonal";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";

const Stack = createStackNavigator();

function seasonalStack() {
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
            <Stack.Screen name="Season" component={Season} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default seasonalStack;
