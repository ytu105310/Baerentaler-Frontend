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

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 30,
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
