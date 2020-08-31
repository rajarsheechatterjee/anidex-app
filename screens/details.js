import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground, Clipboard, ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function Details({ route, navigation }) {

    const item = route.params;

    const [isLoading, setLoading] = useState(true);
    const [title, setTitles] = useState([]);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/anime/${item.mal_id}`)
            .then((response) => response.json())
            .then((json) => setTitles(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); 
    }, []);

    const copyTitle = () => {
        Clipboard.setString(`${title.title}`);
        ToastAndroid.show(`Copied to clipboard: ${title.title}`, ToastAndroid.SHORT);
    }

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <View>
                    <ImageBackground
                        source={{
                            uri: item.image_url
                        }} 
                        style={styles.background} 
                    >
                        <LinearGradient
                          colors={['transparent', 'white']}
                          style={styles.linearGradient}
                        >
                        <View style={styles.detailsContainer}>
                            <Image
                                source={{
                                    uri: item.image_url
                                }} 
                                style={styles.logo} 
                            />
                            <View style={styles.nameContainer}>
                                <Text onLongPress={copyTitle} numberOfLines={4} style={styles.head}>
                                    {title.title}
                                </Text>
                                { title.studios &&
                                    <Text style={styles.studio}>
                                        {title.studios.map(item => item.name)}
                                    </Text>
                                }
                                <View style={{marginTop: 10}}>
                                <Text style={styles.desc}>
                                    {title.type}
                                </Text>
                                { title.aired.string && 
                                    <Text style={styles.desc}>
                                        {title.aired.string}
                                    </Text>
                                }
                                </View>
                            </View>
                        </View>                        
                        </LinearGradient>
                    </ImageBackground>
                <View style={styles.mainContainer}>
                    <Text>
                        Summary
                    </Text>
                    <Text style={styles.synopsis}>
                        {title.synopsis}
                    </Text>
                </View>
                </View>
)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    background: {
        height: 240,
    },
    linearGradient: {
        height: '100%',
        backgroundColor: 'rgba(256, 256, 256, 0.5)',
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 17,
    },
    logo: {
        height: 180,
        width: 120,
        margin: 3.2,
        borderRadius: 6, 
    },
    mainContainer: {
        margin: 17,
    },
    nameContainer: {
        flex:1, 
        width: '100%',
        marginHorizontal: 15,
    },
    head: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    synopsis: {
    },
    desc: {
        color: '#424242',
        marginVertical: 3,
        fontSize: 16,
    },
    studio: {
        color: '#212121',
        marginVertical: 3,
        fontSize: 16,
    }
})