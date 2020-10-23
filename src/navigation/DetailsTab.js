import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";

import General from "../screens/Anime/AnimeDetails/Tabs/GeneralTab";
import Stats from "../screens/Anime/AnimeDetails/Tabs/StatsTab";
import Recom from "../screens/Anime/AnimeDetails/Tabs/RecomTab";

const Tab = createMaterialTopTabNavigator();

function DetailsTab({ title, navigation }) {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontSize: 12, textTransform: "none" },
                tabStyle: { minHeight: 10, maxHeight: 30 },
            }}
        >
            <Tab.Screen name="General">
                {() => <General title={title} />}
            </Tab.Screen>
            <Tab.Screen name="Details">
                {() => <Stats title={title} />}
            </Tab.Screen>
            <Tab.Screen name="Recoms">
                {() => <Recom title={title} navigation={navigation} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default DetailsTab;
