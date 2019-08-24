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

<<<<<<< HEAD:baerentaler/screens/FinanceScreen.js
FinanceScreen.navigationOptions = {
  title: 'CO2',
  headerTintColor: '#CC0033'
=======
HomeScreen.navigationOptions = {
  title: 'Home',
>>>>>>> 0cb23888f2d191bd6b2e5225095181e70d0837ae:baerentaler/screens/HomeScreen.js
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
