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
