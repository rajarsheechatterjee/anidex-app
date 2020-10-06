import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopAnime from "../screens/Anime/TopAnime";
import Details from "../screens/Anime/AnimeDetails/AnimeDetails";
import MalWebview from "../screens/Anime/MalWebview";

const Stack = createStackNavigator();

function topAnimeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Top Anime"
                component={TopAnime}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Mal Webview"
                component={MalWebview}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default topAnimeStack;
