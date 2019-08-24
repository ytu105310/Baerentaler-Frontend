import React from 'react';
import { ExpoLinksView } from '@expo/samples';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfilScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.info}>
      </ScrollView>
    </View>
  );
}

ProfilScreen.navigationOptions = {
  title: 'Händler',
  headerTintColor: '#CC0033'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  info: {
    marginBottom: 40,
    paddingBottom: 30
  },
});
