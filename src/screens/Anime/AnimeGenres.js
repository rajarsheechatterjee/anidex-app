import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Appbar, TouchableRipple } from "react-native-paper";
import Colors from "../../theming/colors";
import { animeGenres } from "../../utils/constants";

const GenreButton = ({ title }) => {
    return (
        <TouchableRipple
            borderless
            centered
            style={{
                flex: 1 / 3,
                justifyContent: "center",
                margin: 5,
                borderRadius: 10,
                elevation: 3,
                backgroundColor: "white",
            }}
            onPress={() => console.log("XD")}
        >
            <Text style={{ textAlign: "center", padding: 10 }}>{title}</Text>
        </TouchableRipple>
    );
};

const AnimeSearch = ({ navigation }) => {
    return (
        <>
            <Appbar.Header style={{ backgroundColor: Colors.headerColor }}>
                <Appbar.BackAction
                    onPress={() => {
                        navigation.goBack();
                    }}
                    color={Colors.headerIcon}
                    size={26}
                />
                <Appbar.Content
                    title="Anime By Genre"
                    titleStyle={{ color: Colors.headerText }}
                    subtitleStyle={{ color: Colors.headerSubtitle }}
                />
            </Appbar.Header>
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    numColumns={3}
                    data={animeGenres}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <GenreButton title={item} />}
                />
            </View>
        </>
    );
};

export default AnimeSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: Colors.backgroundColor,
    },
});
