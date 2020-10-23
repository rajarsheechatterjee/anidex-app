import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";

// Stack Navigators
import topAnimeStack from "./TopAnimeStack";
import ListStack from "./AnimeListStack";
import SearchStack from "./AnimeSearchStack";
import seasonalStack from "./SeasonalStack";
import animeGenreStack from "./AnimeGenreStack";
import topMangaStack from "./TopMangaStack";
import searchMangaStack from "./MangaSearchStack";
import mangaListStack from "./MangaListStack";

// Material Components
import { MaterialIcons } from "@expo/vector-icons";
import { Drawer as PaperDrawer } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name="Top Anime" component={topAnimeStack} />
                <Drawer.Screen name="Top Manga" component={topMangaStack} />
                <Drawer.Screen name="Seasonal" component={seasonalStack} />
                <Drawer.Screen name="Anime Search" component={SearchStack} />
                <Drawer.Screen name="Anime List" component={ListStack} />
                <Drawer.Screen
                    name="Anime Genres"
                    component={animeGenreStack}
                />
                <Drawer.Screen
                    name="Manga Search"
                    component={searchMangaStack}
                />
                <Drawer.Screen name="Manga List" component={mangaListStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;

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
                        <MaterialCommunityIcons name="apps" size={22} />
                    )}
                    label="Anime Genres"
                    onPress={() => {
                        navigation.navigate("Anime Genres");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialCommunityIcons name="magnify" size={22} />
                    )}
                    label="Anime Search"
                    onPress={() => {
                        navigation.navigate("Anime Search");
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
                <PaperDrawer.Item
                    icon={() => <MaterialIcons name="list" size={22} />}
                    label="Manga List"
                    onPress={() => {
                        navigation.navigate("Manga List");
                    }}
                />
            </PaperDrawer.Section>
        </DrawerContentScrollView>
    );
};
