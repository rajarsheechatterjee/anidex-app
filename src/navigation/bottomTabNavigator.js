import React from "react";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";

import topAnimeStack from "./topAnimeStack";
import ListStack from "./listStack";
import SearchStack from "./searchStack";
import seasonalStack from "./seasonalStack";
import topMangaStack from "./topMangaStack";
import searchMangaStack from "./mangaSearchStack";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { Drawer as PaperDrawer } from "react-native-paper";

const Drawer = createDrawerNavigator();

function BottomTabsNavigator({ navigation }) {
    const scheme = useColorScheme();
    return (
        <AppearanceProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={(props) => <CustomDrawer {...props} />}
                >
                    <Drawer.Screen name="Top Anime" component={topAnimeStack} />
                    <Drawer.Screen name="Top Manga" component={topMangaStack} />
                    <Drawer.Screen name="Seasonal" component={seasonalStack} />
                    <Drawer.Screen
                        name="Anime Search"
                        component={SearchStack}
                    />
                    <Drawer.Screen name="Anime List" component={ListStack} />
                    <Drawer.Screen
                        name="Manga Search"
                        component={searchMangaStack}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}

const CustomDrawer = ({ navigation }) => {
    return (
        <DrawerContentScrollView>
            <PaperDrawer.Section title="Anime">
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialIcons name="collections-bookmark" size={22} />
                    )}
                    label="Top Anime"
                    onPress={() => {
                        navigation.navigate("Top Anime");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialCommunityIcons name="compass" size={22} />
                    )}
                    label="Seasonal Anime"
                    onPress={() => {
                        navigation.navigate("Seasonal");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialCommunityIcons name="magnify" size={22} />
                    )}
                    label="Search"
                    onPress={() => {
                        navigation.navigate("Search");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => <MaterialIcons name="list" size={22} />}
                    label="Anime List"
                    onPress={() => {
                        navigation.navigate("Anime List");
                    }}
                />
            </PaperDrawer.Section>
            <PaperDrawer.Section title="Manga">
                <PaperDrawer.Item
                    icon={() => <MaterialIcons name="bookmark" size={22} />}
                    label="Top Manga"
                    onPress={() => {
                        navigation.navigate("Top Manga");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialCommunityIcons name="magnify" size={22} />
                    )}
                    label="Manga Search"
                    onPress={() => {
                        navigation.navigate("Manga Search");
                    }}
                />
            </PaperDrawer.Section>
        </DrawerContentScrollView>
    );
};

export default BottomTabsNavigator;
