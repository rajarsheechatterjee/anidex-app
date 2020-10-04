import React, { useState, useEffect, useCallback } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text,
    FlatList,
} from "react-native";
import { Provider, TouchableRipple, Appbar, Menu } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import {
    Button,
    Paragraph,
    Dialog,
    Portal,
    TextInput,
} from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

// Custom
import AnimeListCard from "../components/AnimeListCard";
import Colors from "../theming/colors";

export default function List({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState([]);
    const [username, setUsername] = useState();
    const [filterBy, setFilterBy] = useState("all");

    const loadUser = async () => {
        setLoading(true);
        const currentUser = await AsyncStorage.getItem("username");
        if (currentUser !== null) {
            setUsername(currentUser);
        } else {
            setDialogVisible(true);
        }
    };

    useEffect(() => {
        loadUser();
        fetch(`https://api.jikan.moe/v3/user/${username}/animelist/${filterBy}`)
            .then((response) => response.json())
            .then((json) => setTitles(json.anime))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [username, filterBy]);

    // Menu
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    //Dialog
    const [text, setText] = useState();
    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = async () => {
        await AsyncStorage.setItem("username", text);
        setDialogVisible(false);
        setUsername(text);
    };
    const cancelDialog = () => {
        setDialogVisible(false);
    };

    const handleFilterName = () => {
        if (filterBy === "all") return "All";
        if (filterBy === "watching") return "Currently Watching";
        if (filterBy === "completed") return "Completed";
        if (filterBy === "onhold") return "On Hold";
        if (filterBy === "plantowatch") return "Plan to watch";
        if (filterBy === "dropped") return "Dropped";
    };

    return (
        <Provider>
            <Appbar.Header style={{ backgroundColor: Colors.headerColor }}>
                <Appbar.Action
                    icon="menu"
                    size={26}
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                    color={Colors.headerIcon}
                />
                <Appbar.Content
                    title={username + "'s" + " " + "List"}
                    subtitle={handleFilterName()}
                    titleStyle={{ color: Colors.headerText }}
                    subtitleStyle={{ color: Colors.headerSubtitle }}
                />
                <Appbar.Action
                    icon="tune"
                    onPress={showDialog}
                    color={Colors.headerIcon}
                />

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                            icon="filter-variant"
                            size={26}
                            onPress={openMenu}
                            color={Colors.headerIcon}
                        />
                    }
                >
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("all");
                            closeMenu();
                        }}
                        title="All"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("watching");
                            closeMenu();
                        }}
                        title="Watching"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("completed");
                            closeMenu();
                        }}
                        title="Completed"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("plantowatch");
                            closeMenu();
                        }}
                        title="Plan to watch"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("onhold");
                            closeMenu();
                        }}
                        title="On Hold"
                    />
                    <Menu.Item
                        onPress={() => {
                            setLoading(true);
                            setFilterBy("dropped");
                            closeMenu();
                        }}
                        title="Dropped"
                    />
                </Menu>
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
                        extraData={titles}
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
                                <AnimeListCard item={item} />
                            </TouchableRipple>
                        )}
                    />
                )}
            </View>
            <Portal>
                <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                    <Dialog.Title>Get Your Anime List</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            label="Username"
                            mode="outlined"
                            dense={true}
                            value={text}
                            onChangeText={(text) => setText(text)}
                            selectionColor="#ACCEF7"
                            theme={{
                                colors: {
                                    primary: Colors.headerColor,
                                    underlineColor: "transparent",
                                },
                            }}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog} color={Colors.headerColor}>
                            Save
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Provider>
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
});
