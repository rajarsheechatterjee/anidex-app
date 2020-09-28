import React from "react";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./homeStack";
import ListStack from "./listStack";
import SearchStack from "./searchStack";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
    const scheme = useColorScheme();
    return (
        <AppearanceProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Home"
                        component={HomeStack}
                        options={{
                            tabBarLabel: "Top Anime",
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Search"
                        component={SearchStack}
                        options={{
                            tabBarLabel: "Search",
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="magnify"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="List"
                        component={ListStack}
                        options={{
                            tabBarLabel: "Anime List",
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="format-list-bulleted"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}

export default BottomTabsNavigator;
