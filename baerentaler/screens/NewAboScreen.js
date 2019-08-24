import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function NewAboScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Test</Text>
    </ScrollView>
  );
}

NewAboScreen.navigationOptions = {
  title: 'New Abo',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
