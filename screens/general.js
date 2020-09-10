import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function General({ title }) {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.statsContainer}>
          <View style={styles.details}>
            <View style={styles.stat}>
              <Text style={styles.episode}>Episodes </Text>
              {title.episodes ? <Text>{title.episodes}</Text> : <Text>?</Text>}
            </View>
            <View style={styles.stat}>
              <Text style={styles.episode}>Type </Text>
              <Text>{title.type}</Text>
            </View>
          </View>
          <View style={styles.details2}>
            <View style={styles.stat}>
              <Text style={styles.episode}>Score </Text>
              <Text>{title.score}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.episode}>Status </Text>
              <Text>{title.status}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.stat}>
              <Text style={styles.episode}>Start </Text>
              <Text>{title.aired.from.substring(0, 10)}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.episode}>End </Text>
              {title.aired.to ? (
                <Text>{title.aired.to.substring(0, 10)}</Text>
              ) : (
                <Text>?</Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.genres}>
          <FlatList
            horizontal
            data={title.genres}
            keyExtractor={(item) => item.key}
            renderItem={({ item, index }) => (
              <Text style={styles.genre}>{item.name}</Text>
            )}
          />
        </View>
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text style={styles.summary}>Synopsiss</Text>
          <Text style={styles.synopsis}>{title.synopsis}</Text>
          {title.background && (
            <View>
              <Text style={styles.summary}>Backgroundd</Text>
              <Text style={styles.synopsis}>{title.background}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 17,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  nameContainer: {
    flex: 1,
    width: '100%',
    marginHorizontal: 15,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  synopsis: {
    lineHeight: 20,
    // fontFamily: 'nunito-regular'
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
  },
  summary: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
  },
  details2: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
  },
  stat: {
    flexDirection: 'row',
    flex: 1 / 2,
    paddingVertical: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  episode: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  statsContainer: {
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  genre: {
    color: 'blue',
    borderRadius: 24,
    borderColor: 'blue',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 2,
    fontSize: 13,
    paddingVertical: 1,
  },
  genres: {
    marginTop: 10,
  },
});
