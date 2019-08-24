import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    FormData,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function NewAboScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* <FormData>
        
      </FormData> */}
    </ScrollView>
  );
}

NewAboScreen.navigationOptions = {
  title: 'New Abo',
  headerTintColor: '#CC0033'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
