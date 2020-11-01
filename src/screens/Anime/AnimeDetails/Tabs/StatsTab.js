import React from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

export default function General({ title }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.heading}>Statistics</Text>
                    <View style={styles.statsContainer}>
                        <Text style={styles.smHeading}>Score </Text>
                        <Text style={styles.stat1}>
                            {title.score} (Scored by {title.scored_by} users)
                        </Text>
                    </View>
                    <View style={styles.statsContainer2}>
                        <Text style={styles.smHeading}>Rank </Text>
                        <Text style={styles.stat1}>{title.rank}</Text>
                    </View>
                    <View style={styles.statsContainer}>
                        <Text style={styles.smHeading}>Popularity </Text>
                        <Text style={styles.stat1}>#{title.popularity}</Text>
                    </View>
                    <View style={styles.statsContainer2}>
                        <Text style={styles.smHeading}>Members </Text>
                        <Text style={styles.stat1}>{title.members}</Text>
                    </View>
                    <View style={styles.statsContainer}>
                        <Text style={styles.smHeading}>Favorites </Text>
                        <Text style={styles.stat1}>{title.favorites}</Text>
                    </View>
                </View>
                {title.opening_themes.length !== 0 && (
                    <FlatList
                        data={title.opening_themes}
                        keyExtractor={(index) => index}
                        renderItem={({ item, index }) => (
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.opening,
                                    index % 2 === 0 && styles.bg,
                                ]}
                            >
                                {item}
                            </Text>
                        )}
                        ListHeaderComponent={() => (
                            <Text style={styles.heading}>Opening Themes</Text>
                        )}
                    />
                )}
                {title.ending_themes.length !== 0 && (
                    <FlatList
                        data={title.ending_themes}
                        keyExtractor={(index) => index}
                        renderItem={({ item, index }) => (
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.opening,
                                    index % 2 === 0 && styles.bg,
                                ]}
                            >
                                {item}
                            </Text>
                        )}
                        ListHeaderComponent={() => (
                            <Text style={styles.heading}>Ending Themes</Text>
                        )}
                    />
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    heading: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginVertical: 15,
    },
    genre: {
        borderRadius: 6,
        backgroundColor: "#F0F0F0",
        paddingHorizontal: 5,
        paddingVertical: 10,
        textAlign: "center",
        lineHeight: 20,
    },
    opening: {
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    bg: {
        backgroundColor: "#f0f0f0",
    },
    statsContainer2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 7,
        paddingHorizontal: 15,
    },
    statsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: "#f0f0f0",
        borderRadius: 6,
    },
    smHeading: {
        fontWeight: "bold",
        fontSize: 15,
    },
    stat1: {
        // paddingRight: 40,
    },
});
