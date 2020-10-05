import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    FlatList,
    Alert,
    Text,
} from "react-native";
import {
    TouchableRipple,
    Appbar,
    Provider,
    Menu,
    Divider,
} from "react-native-paper";

// Custom
import { Button } from "../../components/Button";
import Colors from "../../theming/colors";
import AnimeCard from "../Anime/Components/TopAnimeCard";

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState();
    const [sortBy, setSortBy] = useState("");
    const [pageNo, setPageNo] = useState(2);

    // Menu
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/top/manga/1/${sortBy}`)
            .then((response) => response.json())
            .then((json) => setTitles(json.top))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [sortBy]);

    const handleLoadMore = async () => {
        fetch(`https://api.jikan.moe/v3/top/manga/${pageNo}/${sortBy}`)
            .then((response) => response.json())
            .then((json) => setTitles((titles) => titles.concat(json.top)))
            .catch((error) => console.error(error))
            .finally(() => setPageNo(pageNo + 1));
    };

    const handleFilterName = () => {
        if (sortBy === "") return "By Rating";
        // if (sortBy === "manga") return "Manga";
        if (sortBy === "novels") return "Novels";
        // if (sortBy === "oneshots") return "OneShots";
        // if (sortBy === "doujin") return "Doujins";
        if (sortBy === "manhwa") return "Manhwa";
        if (sortBy === "bypopularity") return "By Popularity";
    };

    return (
        <Provider>
            <Appbar.Header style={{ backgroundColor: Colors.headerColor }}>
                <Appbar.Action
                    icon="menu"
                    size={26}
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                    color={Colors.headerIcon}
                />
                <Appbar.Content
                    title="Top Manga"
                    subtitle={handleFilterName()}
                    onPress={openMenu}
                    titleStyle={{ color: Colors.headerText }}
                    subtitleStyle={{ color: Colors.headerSubtitle }}
                />
                {/* <Appbar.Action icon="filter-variant" onPress={() => {}} /> */}

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                            icon="filter-variant"
                            size={26}
                            onPress={openMenu}
                            color={Colors.headerIcon}
                        />
                    }
                >
                    <Menu.Item
                        onPress={() => {
                            closeMenu();
                            setLoading(true);
                            setPageNo(2);
                            setSortBy("");
                        }}
                        title="By Rating"
                    />
                    <Menu.Item
                        onPress={() => {
                            closeMenu();
                            setLoading(true);
                            setPageNo(2);
                            setSortBy("bypopularity");
                        }}
                        title="By Popularity"
                    />
                    <Menu.Item
                        onPress={() => {
                            closeMenu();
                            setLoading(true);
                            setPageNo(2);
                            setSortBy("manhwa");
                        }}
                        title="By Manhwa"
                    />
                    <Menu.Item
                        onPress={() => {
                            closeMenu();
                            setLoading(true);
                            setPageNo(2);
                            setSortBy("novels");
                        }}
                        title="By Novels"
                    />
                </Menu>
            </Appbar.Header>
            <View style={styles.container}>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="blue" />
                    </View>
                ) : (
                    <>
                        <FlatList
                            contentContainerStyle={styles.list}
                            numColumns={3}
                            data={titles}
                            extraData={titles}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: "center",
                                        marginVertical: 10,
                                    }}
                                >
                                    <Button
                                        title="Load More"
                                        handleLoadMore={handleLoadMore}
                                    />
                                </View>
                            }
                            keyExtractor={(item) => item.mal_id.toString()}
                            renderItem={({ item }) => (
                                <TouchableRipple
                                    borderless
                                    centered
                                    rippleColor="rgba(256,256,256,0.3)"
                                    style={styles.opac}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Manga Details",
                                            item
                                        )
                                    }
                                >
                                    <AnimeCard item={item} />
                                </TouchableRipple>
                            )}
                        />
                    </>
                )}
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: "white",
    },
    opac: {
        height: 190,
        flex: 1 / 3,
        margin: 3.2,
    },
});
