import React from "react";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import topAnimeStack from "./topAnimeStack";
import ListStack from "./listStack";
import SearchStack from "./searchStack";
import seasonalStack from "./seasonalStack";
import topMangaStack from "./topMangaStack";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {
    const scheme = useColorScheme();
    return (
        <AppearanceProvider>
            <NavigationContainer>
                <Tab.Navigator
                    activeColor="black"
                    barStyle={{ backgroundColor: "white" }}
                    shifting={false}
                >
                    <Tab.Screen
                        name="Home"
                        component={topAnimeStack}
                        options={{
                            tabBarLabel: "Top Anime",
                            tabBarIcon: ({ color }) => (
                                <MaterialIcons
                                    name="collections-bookmark"
                                    color={color}
                                    size={22}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Top Manga"
                        component={topMangaStack}
                        options={{
                            tabBarLabel: "Top Manga",
                            tabBarIcon: ({ color }) => (
                                <MaterialIcons
                                    name="bookmark"
                                    color={color}
                                    size={22}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Seasonal"
                        component={seasonalStack}
                        options={{
                            tabBarLabel: "Fall 2020",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name="compass"
                                    color={color}
                                    size={22}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Search"
                        component={SearchStack}
                        options={{
                            tabBarLabel: "Search",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name="magnify"
                                    color={color}
                                    size={22}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="List"
                        component={ListStack}
                        options={{
                            tabBarLabel: "Anime List",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name="format-list-bulleted"
                                    color={color}
                                    size={22}
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
