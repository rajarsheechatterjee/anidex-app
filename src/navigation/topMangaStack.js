import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopManga from "../screens/TopManga";
import Details from "../screens/details";

const Stack = createStackNavigator();

function TopMangaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Top Manga"
                component={TopManga}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default TopMangaStack;
