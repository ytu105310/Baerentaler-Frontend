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

export default function FinanceScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      </ScrollView>
    </View>
  );
}

FinanceScreen.navigationOptions = {
  title: 'CO2',
  headerTintColor: '#CC0033'
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft:30,
    marginRight: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    alignItems: "center"
  },
  fonts: {
    fontSize: 50
  }
});
