import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';
import { Dimensions } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {

  pay = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.balanceWrapper}>
          <Text style={styles.balanceText}>Sie haben</Text>
          <Text style={styles.balance}>32 Bärentaler</Text>
        </View>
        <View style={styles.payWrapper}>
          <Button
            onPress={this.pay}
            title="Bezahlen"
            color={Colors.tintColor} />
        </View>
        <View style={styles.chartWrapper}>
        <Image style={styles.chart} source={require('../assets/images/chart.png')} />
        </View>
        <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 20,
  },
  balance: {
    fontSize: 45,
  },
  payWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chart: {
    width: '80%',
    height: '80%',
  }
});
