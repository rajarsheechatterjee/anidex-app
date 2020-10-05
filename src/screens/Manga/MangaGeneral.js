import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableRipple } from "react-native-paper";

export default function General({ title }) {
    const [viewText, setViewText] = useState("More");
    const [lines, setLines] = useState(3);
    const [viewSynText, setViewSynText] = useState("More");
    const [synLines, setSynLines] = useState(10);

    const handleView = () => {
        if (viewText === "More") {
            setLines(10);
            setViewText("Less");
        } else {
            setLines(3);
            setViewText("More");
        }
    };
    const handleSynView = () => {
        if (viewSynText === "More") {
            setSynLines(100);
            setViewSynText("Less");
        } else {
            setSynLines(10);
            setViewSynText("More");
        }
    };
    return (
        <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: "#F0F0F0" }}>
            <View style={styles.mainContainer}>
                <View style={styles.statsContainer}>
                    <View style={styles.details}>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>Volumes </Text>
                            {title.volumes ? (
                                <Text>{title.volumes}</Text>
                            ) : (
                                <Text>?</Text>
                            )}
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>Chapters </Text>
                            {title.chapters ? (
                                <Text>{title.chapters}</Text>
                            ) : (
                                <Text>?</Text>
                            )}
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
                            {title.published.from ? (
                                <Text>
                                    {title.published.from.substring(0, 10)}
                                </Text>
                            ) : (
                                <Text>?</Text>
                            )}
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.episode}>End </Text>
                            {title.published.to ? (
                                <Text>
                                    {title.published.to.substring(0, 10)}
                                </Text>
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
                    {title.synopsis && (
                        <>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 10,
                                }}
                            >
                                <Text
                                    style={[
                                        styles.summary,
                                        { flex: 1, textAlign: "center" },
                                    ]}
                                >
                                    Synopsis
                                </Text>
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
                            <Text
                                style={styles.synopsis}
                                numberOfLines={synLines}
                            >
                                {title.synopsis}
                            </Text>
                        </>
                    )}
                    {title.background && (
                        <>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 10,
                                }}
                            >
                                <Text
                                    style={[
                                        styles.summary,
                                        { flex: 1, textAlign: "center" },
                                    ]}
                                >
                                    Background
                                </Text>
                                <TouchableRipple
                                    borderless
                                    onPress={handleView}
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
                                                viewText === "More"
                                                    ? "chevron-down"
                                                    : "chevron-up"
                                            }
                                        />
                                        {"  " + viewText}
                                    </Text>
                                </TouchableRipple>
                            </View>
                            <Text
                                style={[styles.synopsis, { marginBottom: 10 }]}
                                numberOfLines={lines}
                            >
                                {title.background}
                            </Text>
                        </>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        height: 240,
    },
    linearGradient: {
        height: "100%",
        backgroundColor: "rgba(256, 256, 256, 0.5)",
    },
    detailsContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 17,
    },
    logo: {
        height: 180,
        width: 120,
        margin: 3.2,
        borderRadius: 6,
    },
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "white",
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
        // fontFamily: 'nunito-regular'
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
    },
    genres: {
        marginTop: 10,
    },
});
