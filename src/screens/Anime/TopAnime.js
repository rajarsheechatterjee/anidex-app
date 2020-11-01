import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    FlatList,
    RefreshControl,
    Text,
} from "react-native";
import {
    TouchableRipple,
    Appbar,
    Provider,
    Button as PaperButton,
    Dialog,
    Portal,
} from "react-native-paper";
import { Picker } from "react-native";

// Custom
import { Button } from "../../components/Button";
import AnimeCard from "./Components/TopAnimeCard";
import Colors from "../../theming/colors";

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState();
    const [sortBy, setSortBy] = useState("");
    const [tempsortBy, setTempSortBy] = useState("");
    const [pageNo, setPageNo] = useState(2);

    // Dialog
    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => {
        if (tempsortBy !== sortBy) {
            setSortBy(tempsortBy);

            setLoading(true);
            setPageNo(2);
        }
        setDialogVisible(false);
    };
    // Refresh Control
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        setPageNo(2);
        getTopAnime();
    };

    getTopAnime = () => {
        fetch(`https://api.jikan.moe/v3/top/anime/1/${sortBy}`)
            .then((response) => response.json())
            .then((json) => setTitles(json.top))
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
                setRefreshing(false);
            });
    };

    useEffect(() => {
        getTopAnime();
    }, [sortBy]);

    const handleLoadMore = async () => {
        fetch(`https://api.jikan.moe/v3/top/anime/${pageNo}${sortBy}`)
            .then((response) => response.json())
            .then((json) => setTitles((titles) => titles.concat(json.top)))
            .catch((error) => console.error(error))
            .finally(() => setPageNo(pageNo + 1));
    };

    const handleFilterName = () => {
        if (sortBy === "") return "By Rating";
        if (sortBy === "upcoming") return "By Upcoming";
        if (sortBy === "bypopularity") return "By Popularity";
        if (sortBy === "airing") return "By Airing";
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
                    title="Top Anime"
                    subtitle={handleFilterName()}
                    onPress={showDialog}
                    titleStyle={{ color: Colors.headerText }}
                    subtitleStyle={{ color: Colors.headerSubtitle }}
                />
                <Appbar.Action
                    icon="filter-variant"
                    size={26}
                    onPress={showDialog}
                    color={Colors.headerIcon}
                />
            </Appbar.Header>
            <View>
                <Portal>
                    <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                        <Dialog.Title>Preferences</Dialog.Title>
                        <Dialog.Content>
                            <View style={{ flexDirection: "row" }}>
                                <Text
                                    style={{
                                        flex: 2.5 / 10,
                                        fontSize: 15,
                                        color: Colors.headerSubtitle,
                                        textAlignVertical: "center",
                                    }}
                                >
                                    Filter by
                                </Text>
                                <Picker
                                    selectedValue={tempsortBy}
                                    mode="dropdown"
                                    style={{ flex: 7.5 / 10, height: 40 }}
                                    onValueChange={(itemValue) =>
                                        setTempSortBy(itemValue)
                                    }
                                >
                                    <Picker.Item label="Rating" value="" />
                                    <Picker.Item
                                        label="Popularity"
                                        value="bypopularity"
                                    />
                                    <Picker.Item
                                        label="Airing"
                                        value="airing"
                                    />
                                    <Picker.Item
                                        label="Upcoming"
                                        value="upcoming"
                                    />
                                </Picker>
                            </View>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <PaperButton
                                onPress={hideDialog}
                                style={{ marginRight: 7 }}
                                color={Colors.buttonColor}
                            >
                                Apply
                            </PaperButton>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <View style={styles.container}>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="blue" />
                    </View>
                ) : (
                    <>
                        <FlatList
                            removeClippedSubviews={true}
                            initialNumToRender={12}
                            contentContainerStyle={styles.list}
                            numColumns={3}
                            data={titles}
                            extraData={titles}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    colors={["white"]}
                                    progressBackgroundColor={Colors.buttonColor}
                                />
                            }
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
                                    style={styles.animeCardContainer}
                                    onPress={() =>
                                        navigation.navigate("Details", item)
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
        backgroundColor: Colors.backgroundColor,
    },
    animeCardContainer: {
        height: 190,
        flex: 1 / 3,
        margin: 3.2,
    },
});
