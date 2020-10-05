import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator, View, FlatList } from "react-native";
import { TouchableRipple } from "react-native-paper";

import AnimeCard from "../../Components/AnimeCard";

export default function Home({ title, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [recomTitles, setTitles] = useState([]);

    const getRecommendations = () => {
        fetch(`https://api.jikan.moe/v3/anime/${title.mal_id}/recommendations`)
            .then((response) => response.json())
            .then((json) => setTitles(json.recommendations.slice(0, 9)))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getRecommendations();
    }, [title]);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="blue" />
                </View>
            ) : (
                <FlatList
                    numColumns={3}
                    data={recomTitles}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.mal_id.toString()}
                    renderItem={({ item }) => (
                        <TouchableRipple
                            borderless
                            centered
                            rippleColor="rgba(256,256,256,0.3)"
                            style={styles.opac}
                            onPress={() => {
                                navigation.navigate("Details", item);
                                navigation.navigate("General");
                            }}
                        >
                            <AnimeCard item={item} />
                        </TouchableRipple>
                    )}
                />
            )}
        </View>
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
});
