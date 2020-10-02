import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
} from "react-native";
import { Provider, TouchableRipple, Appbar, Menu } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

// Custom
import AnimeListCard from "../components/AnimeListCard";

export default function List({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState([]);
    const [filterBy, setFilterBy] = useState("all");

    // Menu
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    useEffect(() => {
        fetch(
            `https://api.jikan.moe/v3/user/stroheimrequiem/animelist/${filterBy}`
        )
            .then((response) => response.json())
            .then((json) => setTitles(json.anime))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [filterBy]);

    const handleFilterName = () => {
        if (filterBy === "all") return "All";
        if (filterBy === "watching") return "Currently Watching";
        if (filterBy === "completed") return "Completed";
        if (filterBy === "onhold") return "On Hold";
        if (filterBy === "plantowatch") return "Plan to watch";
        if (filterBy === "dropped") return "Dropped";
    };

    return (
        <Provider>
            <Appbar.Header style={{ backgroundColor: "white" }}>
                <Appbar.Content
                    title="StroheimRequiem's List"
                    subtitle={handleFilterName()}
                />
                {/* <Appbar.Action icon="filter-variant" onPress={() => {}} /> */}

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                            icon="filter-variant"
                            onPress={openMenu}
                        />
                    }
                >
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("all");
                            closeMenu();
                        }}
                        title="All"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("watching");
                            closeMenu();
                        }}
                        title="Watching"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("completed");
                            closeMenu();
                        }}
                        title="Completed"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("plantowatch");
                            closeMenu();
                        }}
                        title="Plan to watch"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("onhold");
                            closeMenu();
                        }}
                        title="On Hold"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("dropped");
                            closeMenu();
                        }}
                        title="Dropped"
                    />
                </Menu>
            </Appbar.Header>
            <View style={styles.container}>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="blue" />
                    </View>
                ) : (
                    <FlatList
                        contentContainerStyle={styles.list}
                        numColumns={3}
                        data={titles}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.mal_id.toString()}
                        renderItem={({ item }) => (
                            <TouchableRipple
                                borderless
                                centered
                                rippleColor="rgba(256,256,256,0.3)"
                                style={styles.opac}
                                onPress={() =>
                                    navigation.navigate("Details", item)
                                }
                            >
                                <AnimeListCard item={item} />
                            </TouchableRipple>
                        )}
                    />
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
