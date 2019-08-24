import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {

  pay = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.balanceWrapper}>
          <Text style={styles.balanceText}>Sie haben</Text>
          <Text style={styles.balance}>32 BT</Text>
        </View>
        <View style={styles.payWrapper}>
          <Button
            onPress={this.pay}
            title="Bezahlen"
            color={Colors.tintColor} />
        </View>
        <View style={styles.chartWrapper}></View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
  headerTintColor: '#CC0033',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  balanceWrapper: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  title: {
    alignItems: "center"
  },
  payWrapper: {
    flex: 1,
    backgroundColor: 'blue'
  },
  chartWrapper: {
    flex: 2,
    backgroundColor: 'green'
  },
});
