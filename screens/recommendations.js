import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ title, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [recomTitles, setTitles] = useState([]);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/anime/${title.mal_id}/recommendations`)
            .then((response) => response.json())
            .then((json) => setTitles(json.recommendations.slice(0, 9)))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="blue" />
                </View>
            ) : (
                <FlatList
                    contentContainerStyle={styles.list}
                    numColumns={3}
                    data={recomTitles}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.mal_id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.opac}
                            onPress={() => {
                                navigation.navigate("Details", item);
                                navigation.navigate("General");
                            }}
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
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: "white",
    },
    list: {},
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
