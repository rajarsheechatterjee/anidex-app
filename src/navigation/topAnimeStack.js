import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopAnime from "../screens/Anime/TopAnime";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";
import MalWebview from "../screens/Anime/MalWebview";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createStackNavigator();

function topAnimeStack() {
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
            <Stack.Screen name="Top Anime" component={TopAnime} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Mal Webview" component={MalWebview} />
        </Stack.Navigator>
    );
}

export default topAnimeStack;
