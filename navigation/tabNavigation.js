import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";

import General from "../screens/general";
import Details from "../screens/stats";
import Recom from "../screens/recommendations";

const Tab = createMaterialTopTabNavigator();

function MyTabs({ title, navigation }) {
    return (
        <View>
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
                    {() => <Details title={title} />}
                </Tab.Screen>
                <Tab.Screen name="Recoms">
                    {() => <Recom title={title} navigation={navigation} />}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
}

export default MyTabs;
