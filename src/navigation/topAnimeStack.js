import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopAnime from "../screens/TopAnime";
import Details from "../screens/details";

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
                options={({ route }) => ({
                    title: route.params.title,
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}

export default topAnimeStack;
