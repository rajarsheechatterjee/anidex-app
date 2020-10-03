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
                    <Drawer.Screen name="Search" component={SearchStack} />
                    <Drawer.Screen name="List" component={ListStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}

const CustomDrawer = ({ navigation }) => {
    const [active, setActive] = React.useState("");

    return (
        <DrawerContentScrollView>
            <PaperDrawer.Section title="Anime">
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialIcons name="collections-bookmark" size={22} />
                    )}
                    label="Top Anime"
                    active={active === "first"}
                    onPress={() => {
                        setActive("first");
                        navigation.navigate("Top Anime");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialCommunityIcons name="compass" size={22} />
                    )}
                    label="Seasonal Anime"
                    active={active === "second"}
                    onPress={() => {
                        setActive("second");
                        navigation.navigate("Seasonal");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => (
                        <MaterialCommunityIcons name="magnify" size={22} />
                    )}
                    label="Search"
                    active={active === "third"}
                    onPress={() => {
                        setActive("third");
                        navigation.navigate("Search");
                    }}
                />
                <PaperDrawer.Item
                    icon={() => <MaterialIcons name="list" size={22} />}
                    label="List"
                    active={active === "fourth"}
                    onPress={() => {
                        setActive("fourth");
                        navigation.navigate("List");
                    }}
                />
            </PaperDrawer.Section>
            <PaperDrawer.Section title="Manga">
                <PaperDrawer.Item
                    icon={() => <MaterialIcons name="bookmark" size={22} />}
                    label="Top Manga"
                    active={active === "fifth"}
                    onPress={() => {
                        setActive("fifth");
                        navigation.navigate("List");
                    }}
                />
            </PaperDrawer.Section>
        </DrawerContentScrollView>
    );
};

export default BottomTabsNavigator;
