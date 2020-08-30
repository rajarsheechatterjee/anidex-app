import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {

    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/top/anime`)
            .then((response) => response.json())
            .then((json) => setTitles(json.top))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); 
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                contentContainerStyle={styles.list}
                numColumns={3}
                data={titles}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.mal_id.toString()}
                renderItem={({ item }) => (
                        <Image 
                            source={{
                                uri: item.image_url
                            }} 
                            style={styles.logo} 
                        />
                )}
            />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3,
        backgroundColor: 'white'
    },
    list: {
        flexGrow: 1,
    },
    logo: {
        height: 180,
        flex: 1,
        borderRadius: 6,
        margin: 4,
    }
})