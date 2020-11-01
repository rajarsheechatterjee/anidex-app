import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableRipple } from "react-native-paper";

export default function General({ title }) {
    const [viewSynText, setViewSynText] = useState("More");
    const [synLines, setSynLines] = useState(14);

    const handleSynView = () => {
        if (viewSynText === "More") {
            setSynLines(200);
            setViewSynText("Less");
        } else {
            setSynLines(14);
            setViewSynText("More");
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.mainContainer}>
                <View style={styles.statsContainer}>
                    <View style={styles.details}>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>Episodes </Text>
                            {title.episodes ? (
                                <Text>{title.episodes}</Text>
                            ) : (
                                <Text>?</Text>
                            )}
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>Type </Text>
                            <Text>{title.type}</Text>
                        </View>
                    </View>
                    <View style={styles.details2}>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>Score </Text>
                            <Text>{title.score}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>Status </Text>
                            <Text>{title.status}</Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>Start </Text>
                            {title.aired.from ? (
                                <Text>{title.aired.from.substring(0, 10)}</Text>
                            ) : (
                                <Text>?</Text>
                            )}
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>End </Text>
                            {title.aired.to ? (
                                <Text>{title.aired.to.substring(0, 10)}</Text>
                            ) : (
                                <Text>?</Text>
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.genres}>
                    <FlatList
                        horizontal
                        data={title.genres}
                        keyExtractor={(item) => item.mal_id.toString()}
                        renderItem={({ item }) => (
                            <Text style={styles.genre}>{item.name}</Text>
                        )}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                        }}
                    >
                        <Text style={styles.summary}>Synopsis</Text>
                        <TouchableRipple
                            borderless
                            onPress={handleSynView}
                            style={{
                                borderWidth: 1,
                                borderColor: "#e0e0e0",
                                width: 80,
                                height: 22,
                                borderRadius: 24,
                                position: "absolute",
                                right: 0,
                            }}
                            rippleColor="#2979FF"
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    textAlignVertical: "center",
                                    paddingRight: 5,
                                }}
                            >
                                <MaterialCommunityIcons
                                    name={
                                        viewSynText === "More"
                                            ? "chevron-down"
                                            : "chevron-up"
                                    }
                                />
                                {"  " + viewSynText}
                            </Text>
                        </TouchableRipple>
                    </View>
                    <Text style={styles.synopsis} numberOfLines={synLines}>
                        {title.synopsis}
                    </Text>
                    {title.background && (
                        <View>
                            <Text style={styles.summary}>Background</Text>
                            <Text style={styles.synopsis}>
                                {title.background}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    nameContainer: {
        flex: 1,
        width: "100%",
        marginHorizontal: 15,
    },
    head: {
        fontWeight: "bold",
        fontSize: 20,
    },
    synopsis: {
        lineHeight: 20,
        // fontFamily: "product-sans",
    },
    desc: {
        color: "#424242",
        marginVertical: 3,
        fontSize: 16,
    },
    studio: {
        color: "#212121",
        marginVertical: 3,
        fontSize: 16,
    },
    summary: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
    },
    details: {
        flexDirection: "row",
    },
    details2: {
        flexDirection: "row",
        backgroundColor: "#F0F0F0",
        borderRadius: 6,
    },
    stat: {
        flexDirection: "row",
        flex: 1 / 2,
        paddingVertical: 10,
        paddingRight: 20,
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    episode: {
        fontWeight: "bold",
        fontSize: 15,
    },
    statsContainer: {
        borderBottomColor: "rgba(0,0,0,0.1)",
        borderBottomWidth: 1,
    },
    genre: {
        color: "blue",
        borderRadius: 24,
        borderColor: "blue",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginHorizontal: 2,
        fontSize: 13,
        paddingVertical: 1,
        justifyContent: "center",
        flex: 1,
    },
    genres: {
        marginTop: 10,
    },
});
