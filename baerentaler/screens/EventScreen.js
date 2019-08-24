import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function EventScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Test</Text>
      <ExpoLinksView />
    </ScrollView>
  );
}

EventScreen.navigationOptions = {
  title: 'Event',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
