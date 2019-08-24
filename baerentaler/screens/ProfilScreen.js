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
  title: 'Profil',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  info: {
    alignItems: "center",
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "black",
    paddingBottom: 30
  },
});
