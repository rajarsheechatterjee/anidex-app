import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Details({ route, navigation }) {

    const item = route.params;

    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/anime/${item.mal_id}`)
            .then((response) => response.json())
            .then((json) => setTitles(json.anime))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); 
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <View>
                    <Text>{item.title}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 3,
        backgroundColor: 'white'
    },
})