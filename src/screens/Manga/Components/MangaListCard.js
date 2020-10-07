import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AnimeListCard = ({ item }) => {
    const WatchingStatusBadge = () => {
        if (item.reading_status === 1) {
            return <Text style={styles.watchingBadge}>CR</Text>;
        } else if (item.reading_status === 2) {
            return <Text style={styles.completedBadge}>CMPL</Text>;
        } else if (item.reading_status === 3) {
            return <Text style={styles.onholdBadge}>OH</Text>;
        } else if (item.reading_status === 4) {
            return <Text style={styles.droppedBadge}>DR</Text>;
        } else if (item.reading_status === 6) {
            return <Text style={styles.ptwBadge}>PTW</Text>;
        }
    };

    return (
        <ImageBackground
            source={{
                uri: item.image_url,
            }}
            style={styles.logo}
            imageStyle={{ borderRadius: 6 }}
        >
            <View style={styles.badge}>
                <WatchingStatusBadge />
            </View>
            <View style={styles.titleContainer}>
                <LinearGradient
                    colors={["transparent", "black"]}
                    style={styles.linearGradient}
                >
                    <Text numberOfLines={2} style={styles.title}>
                        {item.title}
                    </Text>
                </LinearGradient>
            </View>
        </ImageBackground>
    );
};

export default AnimeListCard;

const styles = StyleSheet.create({
    logo: {
        height: "100%",
        borderRadius: 6,
    },
    titleContainer: {
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
        right: 5,
        top: 5,
    },
    watchingBadge: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#47a84a",
    },
    completedBadge: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#448AFF",
    },
    ptwBadge: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#212121",
    },
    droppedBadge: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#a12f31",
    },
    onholdBadge: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#f1c83e",
    },
});
