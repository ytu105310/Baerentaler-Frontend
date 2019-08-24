import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
    </View>
  );
}

ExploreScreen.navigationOptions = {
  title: 'Endtecken',
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  info: {
    marginBottom: 40,
    paddingBottom: 30
  },
  title: {
    fontSize: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
