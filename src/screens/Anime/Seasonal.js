import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    FlatList,
    Text,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableRipple, Appbar } from "react-native-paper";

// Custom
import Colors from "../../theming/colors";

export default function SeasonScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState([]);
    const [season, setSeason] = useState("fall");
    const [year, setYear] = useState(2020);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/season/${year}/${season}`)
            .then((response) => response.json())
            .then((json) => setTitles(json.anime))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [season, year]);

    const handleNextSeason = () => {
        if (season === "winter") setSeason("spring");
        if (season === "spring") setSeason("summer");
        if (season === "summer") setSeason("fall");
        if (season === "fall") {
            setSeason("winter");
            setYear(year + 1);
        }
    };

    const handlePreviousSeason = () => {
        if (season === "spring") setSeason("winter");
        if (season === "summer") setSeason("spring");
        if (season === "fall") setSeason("summer");
        if (season === "winter") {
            setSeason("fall");
            setYear(year - 1);
        }
    };

    const handleMonths = () => {
        if (season === "spring") return "Apr - Jun";
        if (season === "summer") return "Jul - Sep";
        if (season === "fall") return "Oct - Dec";
        if (season === "winter") return "Jan - Mar";
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <>
            <Appbar.Header
                style={{
                    backgroundColor: Colors.headerColor,
                }}
            >
                <Appbar.Action
                    icon="menu"
                    size={26}
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                    color={Colors.headerIcon}
                />
                <Appbar.Content
                    title={capitalizeFirstLetter(season) + " " + year}
                    subtitle={handleMonths()}
                    titleStyle={{ color: Colors.headerText }}
                    subtitleStyle={{ color: Colors.headerSubtitle }}
                />
                <Appbar.Action
                    icon="chevron-left"
                    size={26}
                    onPress={() => {
                        setLoading(true);
                        handlePreviousSeason();
                    }}
                    color={Colors.headerIcon}
                />
                <Appbar.Action
                    icon="chevron-right"
                    size={26}
                    onPress={() => {
                        setLoading(true);
                        handleNextSeason();
                    }}
                    color={Colors.headerIcon}
                />
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
        backgroundColor: Colors.backgroundColor,
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
