import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
  } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function InfoStandScreen({ navigation }) {
    const daten = navigation.getParam('data');
  return (
    <ScrollView style={styles.container}>
      {/* <Text>
          {daten.name}
      </Text>
      <Text>
          {daten.artikel}
      </Text>
      <Text>
          {daten.location}
      </Text>
      <Text>
          {daten.wann}
      </Text>
      <Button onPress={() => navigation.navigate('NewAbo')} /> */}
    </ScrollView>
  );
}

InfoStandScreen.navigationOptions = {
  title: 'Infos zum Stand',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
