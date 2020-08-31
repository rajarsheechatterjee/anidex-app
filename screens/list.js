import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Image ,Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function List({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/user/stroheimrequiem/animelist`)
            .then((response) => response.json())
            .then((json) => setTitles(json.anime))
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
            <TouchableOpacity style={styles.opac} onPress={() => navigation.navigate('Details', item)}>
            <ImageBackground 
                source={{
                    uri: item.image_url
                }} 
                style={styles.logo} 
                imageStyle={{ borderRadius: 6}}
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
                {item.watching_status === 6 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText3}>PTW</Text>
                    </View>
                )}
                <View style={styles.titleContainer}>
                    <LinearGradient
                      colors={['transparent', 'black']}
                      style={styles.linearGradient}
                    >
                        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                    </LinearGradient>
                </View>
            </ImageBackground>
            </TouchableOpacity>
            )}
        />
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
    opac: {
        height: 190,
        flex: 1/3,
        margin: 3.2,
    },
    logo: {
        height: '100%',
        borderRadius: 6,
    },
    titleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: '100%',
        borderRadius: 6
    },
    title: {
        fontFamily: "pt-sans-bold",
        fontSize: 15,
        color: "white",
        padding: 5,
        width: '100%',
    },
    linearGradient: {
        borderRadius: 6
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
        width: '100%',
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: '#47a84a',
    },
    badgeText2: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: '100%',
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: '#448AFF',
    },
    badgeText3: {
        fontFamily: "pt-sans-bold",
        fontSize: 12,
        color: "white",
        width: '100%',
        paddingHorizontal: 3,
        borderRadius: 4,
        backgroundColor: '#212121',
    },
})