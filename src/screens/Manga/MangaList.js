import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text,
    FlatList,
    RefreshControl,
} from "react-native";
import { Provider, TouchableRipple, Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { Picker } from "react-native";

// Custom
import MangaListCard from "../Manga/Components/MangaListCard";
import Colors from "../../theming/colors";

export default function List({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState([]);
    const [username, setUsername] = useState();
    const [filterBy, setFilterBy] = useState("");
    const [tempfilterBy, setTempFilterBy] = useState("");

    // Menu Dialog
    const [filterDialogVisible, setFilterDialogVisible] = useState(false);
    const showFilterDialog = () => setFilterDialogVisible(true);
    const hideFilterDialog = () => {
        setFilterBy(tempfilterBy);
        setLoading(true);
        setFilterDialogVisible(false);
    };

    // Refresh Control
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        await setRefreshing(true);
        loadUser();
    };

    const loadUser = async () => {
        setLoading(true);
        setTitles([]);
        const currentUser = await AsyncStorage.getItem("username");
        if (currentUser !== null) {
            setUsername(currentUser);
            fetch(
                `https://api.jikan.moe/v3/user/${currentUser}/mangalist/${filterBy}`
            )
                .then((response) => response.json())
                .then((json) => setTitles(json.manga))
                .catch((error) => console.error(error))
                .finally(() => {
                    setLoading(false);
                    setRefreshing(false);
                });
        } else {
            setDialogVisible(true);
        }
    };

    useEffect(() => {
        loadUser();
    }, [username, filterBy]);

    // Username Dialog
    const [text, setText] = useState();
    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = async () => {
        await AsyncStorage.setItem("username", text);
        setDialogVisible(false);
        setUsername(text);
    };

    const handleFilterName = () => {
        if (filterBy === "") return "All";
        if (filterBy === "reading") return "Currently Reading";
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

                <Appbar.Action
                    icon="filter-variant"
                    size={26}
                    onPress={showFilterDialog}
                    color={Colors.headerIcon}
                />
            </Appbar.Header>
            <View>
                <Portal>
                    <Dialog
                        visible={filterDialogVisible}
                        onDismiss={hideFilterDialog}
                    >
                        <Dialog.Title>Preferences</Dialog.Title>
                        <Dialog.Content>
                            <View style={{ flexDirection: "row" }}>
                                <Text
                                    style={{
                                        flex: 2.5 / 10,
                                        fontSize: 15,
                                        color: Colors.headerSubtitle,
                                        textAlignVertical: "center",
                                    }}
                                >
                                    Filter by
                                </Text>
                                <Picker
                                    selectedValue={tempfilterBy}
                                    mode="dropdown"
                                    style={{ flex: 7.5 / 10, height: 40 }}
                                    onValueChange={(itemValue) =>
                                        setTempFilterBy(itemValue)
                                    }
                                >
                                    <Picker.Item label="All" value="" />
                                    <Picker.Item
                                        label="Reading"
                                        value="reading"
                                    />
                                    <Picker.Item
                                        label="Completed"
                                        value="completed"
                                    />
                                    <Picker.Item
                                        label="On Hold"
                                        value="onhold"
                                    />
                                    <Picker.Item
                                        label="Dropped"
                                        value="dropped"
                                    />
                                </Picker>
                            </View>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                onPress={hideFilterDialog}
                                style={{ marginRight: 7 }}
                                color={Colors.buttonColor}
                            >
                                Apply
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
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
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={["white"]}
                                progressBackgroundColor={Colors.buttonColor}
                            />
                        }
                        renderItem={({ item }) => (
                            <TouchableRipple
                                borderless
                                centered
                                rippleColor="rgba(256,256,256,0.3)"
                                style={styles.opac}
                                onPress={() =>
                                    navigation.navigate("Manga Details", item)
                                }
                            >
                                <MangaListCard item={item} />
                            </TouchableRipple>
                        )}
                    />
                )}
            </View>
            <Portal>
                <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                    <Dialog.Title>Get Your Manga List</Dialog.Title>
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
                                    primary: Colors.buttonColor,
                                    underlineColor: "transparent",
                                },
                            }}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog} color={Colors.buttonColor}>
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
        backgroundColor: Colors.backgroundColor,
    },
    opac: {
        height: 190,
        flex: 1 / 3,
        margin: 3.2,
    },
});
