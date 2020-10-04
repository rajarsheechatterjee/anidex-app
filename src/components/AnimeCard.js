import React from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AnimeCard({ item }) {
    return (
        <ImageBackground
            source={{
                uri: item.image_url,
            }}
            style={styles.logo}
            imageStyle={{ borderRadius: 6 }}
        >
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.rank}</Text>
            </View>
            <View style={styles.titleContainer}>
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,1)"]}
                    style={styles.linearGradient}
                >
                    <Text numberOfLines={2} style={styles.title}>
                        {item.title}
                    </Text>
                </LinearGradient>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: "rgba(0,0,0,0.8)",
    },
});
