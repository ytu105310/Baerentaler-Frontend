import React from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.info}>
      </ScrollView>
    </View>
  );
}

ProfileScreen.navigationOptions = {
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
