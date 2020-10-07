import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopManga from "../screens/Manga/TopManga";
import mangaDetails from "../screens/Manga/MangaDetails";

const Stack = createStackNavigator();

function TopMangaStack() {
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
            <Stack.Screen name="Top Manga" component={TopManga} />
            <Stack.Screen name="Manga Details" component={mangaDetails} />
        </Stack.Navigator>
    );
}

export default TopMangaStack;
