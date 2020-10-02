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

export default function AnimeListCard({ item }) {
    return (
        <ImageBackground
            source={{
                uri: item.image_url,
            }}
            style={styles.logo}
            imageStyle={{ borderRadius: 6 }}
        >
            {item.watching_status === 1 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>CW</Text>
                </View>
            )}
            {item.watching_status === 2 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText2}>CMPL</Text>
                </View>
            )}
            {item.watching_status === 3 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText5}>OH</Text>
                </View>
            )}
            {item.watching_status === 4 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText4}>DR</Text>
                </View>
            )}
            {item.watching_status === 6 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText3}>PTW</Text>
                </View>
            )}
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
}

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
    badgeText: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#47a84a",
    },
    badgeText2: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#448AFF",
    },
    badgeText3: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#212121",
    },
    badgeText4: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#a12f31",
    },
    badgeText5: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: "100%",
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: "#f1c83e",
    },
});
