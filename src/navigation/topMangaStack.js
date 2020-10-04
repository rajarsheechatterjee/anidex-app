import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopManga from "../screens/TopManga";
import mangaDetails from "../screens/MangaDetails";

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
                name="Manga Details"
                component={mangaDetails}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default TopMangaStack;
