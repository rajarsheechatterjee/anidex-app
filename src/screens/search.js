import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
} from "react-native";
import { Appbar, TouchableRipple } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
// import SearchBar from "react-native-dynamic-search-bar";

// Custom
import Colors from "../theming/colors";

export default function Details({ route, navigation }) {
    const [isLoading, setLoading] = useState(false);
    const [titles, setTitles] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getTitles = (searchText) => {
        setLoading(true);
        fetch(`https://api.jikan.moe/v3/search/anime?q=${searchText}`)
            .then((response) => response.json())
            .then((json) => setTitles(json.results))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    return (
        <>
            <Appbar.Header style={{ backgroundColor: Colors.headerColor }}>
                <Appbar.BackAction
                    onPress={() => {
                        navigation.navigate("Top Anime");
                    }}
                    color={Colors.headerIcon}
                    size={26}
                />
                <TextInput
                    placeholder="Search Anime Titles..."
                    defaultValue={searchText}
                    style={{ fontSize: 17, flex: 1, color: Colors.headerText }}
                    placeholderTextColor="#e0e0e0"
                    blurOnSubmit={true}
                    onChangeText={async (text) => {
                        await setSearchText(text);
                        getTitles(searchText);
                    }}
                />
                {searchText !== "" && (
                    <Appbar.Action
                        icon="close"
                        onPress={() => {
                            setSearchText("");
                        }}
                        color={Colors.headerIcon}
                    />
                )}
            </Appbar.Header>
            <View style={styles.container}>
                {/* <SearchBar
                iconColor="#3f51b5"
                placeholder="Search here"
                onChangeText={getTitles}
                onPressCancel={() => {
                    setTitles([]);
                }}
                onPressToFocus
            /> */}
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
                                <ImageBackground
                                    source={{
                                        uri: item.image_url,
                                    }}
                                    style={styles.logo}
                                    imageStyle={{ borderRadius: 6 }}
                                >
                                    <View style={styles.titleContainer}>
                                        <LinearGradient
                                            colors={["transparent", "black"]}
                                            style={styles.linearGradient}
                                        >
                                            <Text
                                                numberOfLines={2}
                                                style={styles.title}
                                            >
                                                {item.title}
                                            </Text>
                                        </LinearGradient>
                                    </View>
                                </ImageBackground>
                            </TouchableRipple>
                        )}
                    />
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: "white",
    },
    textInput: {
        alignItems: "center",
        backgroundColor: "#E6E8E9",
        borderRadius: 10,
        color: "#8E8E93",
        flexDirection: "row",
        fontSize: 17,
        height: 43,
        margin: 8,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    opac: {
        height: 190,
        flex: 1 / 3,
        margin: 3.2,
    },
    logo: {
        height: "100%",
        borderRadius: 6,
    },
    titleContainer: {
        zIndex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        borderRadius: 6,
    },
    title: {
        fontFamily: "pt-sans-bold",
        fontSize: 15,
        color: "white",
        padding: 5,
        width: "100%",
    },
    linearGradient: {
        borderRadius: 6,
    },
    badge: {
        position: "absolute",
        left: 5,
        top: 5,
    },
    badgeText: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 6,
        borderRadius: 4,
        backgroundColor: "rgba(0,0,0,0.6)",
    },
});
