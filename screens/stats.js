import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, ImageBackground, Clipboard, ToastAndroid, ScrollView, Vibration } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function General({title}) {
    return (
            <View style={styles.mainContainer}>
                <View style={styles.genres}>
                    <Text style={styles.heading}>Genres</Text>
                    <Text style={styles.genre}>{title.genres.map((item) => (item.name)).join(', ')}</Text>
                </View>
                <View>
                    <Text style={styles.heading}>Information</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 17,
        paddingVertical: 10,
    },
    heading: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 16, 
        marginVertical: 10
    },
    genre: {
        borderRadius: 6,
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 5,
        paddingVertical: 10,
        textAlign: 'center',
        lineHeight: 20,

    }
})