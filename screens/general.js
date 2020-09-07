// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Image, ActivityIndicator, ImageBackground, Clipboard, ToastAndroid, ScrollView, Vibration  } from 'react-native';


// export default function General({title}) {
//     return (
//         <View style={styles.mainContainer}>
//                         <View style={styles.statsContainer}>
//                             <View style={styles.details}>
//                                     <View style={styles.stat}>
//                                         <Text style={styles.episode}>Episodes </Text>
//                                         { title.episodes ?
//                                             <Text>{title.episodes}</Text> :
//                                             <Text>?</Text>
//                                             }
//                                     </View>
//                                     <View style={styles.stat}>
//                                         <Text style={styles.episode}>Type </Text>
//                                         <Text>{title.type}</Text>
//                                     </View>
//                             </View>
//                             <View style={styles.details2}>
//                                     <View style={styles.stat}>
//                                         <Text style={styles.episode}>Score </Text>
//                                         <Text>{title.score}</Text>
//                                     </View>
//                                     <View style={styles.stat}>
//                                         <Text style={styles.episode}>Status </Text>
//                                         <Text>{title.status}</Text>
//                                     </View>
//                             </View>
//                             <View style={styles.details}>
//                                     <View style={styles.stat}>
//                                         <Text style={styles.episode}>Start </Text>
//                                         <Text>{title.aired.from.substring(0,10)}</Text>
//                                     </View>
//                                     <View style={styles.stat}>
//                                         <Text style={styles.episode}>End </Text>
//                                         { title.aired.to ?
//                                         <Text>{title.aired.to.substring(0,10)}</Text> :
//                                         <Text>?</Text>
//                                         }
//                                     </View>
//                             </View>
//                         </View>
//                         <View style={{marginTop: 10, alignItems: 'center'}}>
//                             <Text style={styles.summary}>
//                                 Synopsiss
//                             </Text>
//                             <Text style={styles.synopsis}>
//                                 {title.synopsis}
//                             </Text>
//                         </View>
//                     </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'space-between',
//         backgroundColor: 'white'
//     },
//     background: {
//         height: 240,
//     },
//     linearGradient: {
//         height: '100%',
//         backgroundColor: 'rgba(256, 256, 256, 0.5)',
//     },
//     detailsContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         margin: 17,
//     },
//     logo: {
//         height: 180,
//         width: 120,
//         margin: 3.2,
//         borderRadius: 6, 
//     },
//     mainContainer: {
//         flexDirection: 'column',
//         margin: 17,
//         marginTop: 0,
//     },
//     nameContainer: {
//         flex:1, 
//         width: '100%',
//         marginHorizontal: 15,
//     },
//     head: {
//         fontWeight: 'bold',
//         fontSize: 20,
//     },
//     synopsis: {
//         lineHeight: 20,
//         // fontFamily: 'nunito-regular'
//     },
//     desc: {
//         color: '#424242',
//         marginVertical: 3,
//         fontSize: 16,
//     },
//     studio: {
//         color: '#212121',
//         marginVertical: 3,
//         fontSize: 16,
//     },
//     summary: {
//       fontWeight: 'bold',
//       fontSize: 16,
//       marginBottom: 10,
//     },
//     details: {
//         flexDirection: 'row',
//     },
//     details2: {
//         flexDirection: 'row',
//         backgroundColor: '#F0F0F0',
//         borderRadius: 6,
//     },
//     stat: {
//         flexDirection: 'row',
//         flex: 1/2,
//         paddingVertical: 10,
//         paddingRight: 20,
//         justifyContent: 'space-between',
//         paddingHorizontal: 5,
//     },
//     episode: {
//         fontWeight: 'bold',
//         fontSize: 15,
//     },
//     statsContainer: {
//         borderBottomColor: 'rgba(0,0,0,0.1)',
//         borderBottomWidth: 1,
//         borderTopColor: 'rgba(0,0,0,0.1)',
//         borderTopWidth: 1,
//     }
// })