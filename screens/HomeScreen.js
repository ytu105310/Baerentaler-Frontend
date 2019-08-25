import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { LineChart } from 'react-native-chart-kit'
import { Overlay } from "react-native-elements";
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {

  priceToPay = 4;

  state = {
    balance: 32,
    carbonSavings: [],
    overlayIsVisible: false
  }

  pay = () => {
    this.setState({ overlayIsVisible: true });
  }

  confirm = () => {
    setTimeout(() => {
      this.setState({ overlayIsVisible: false });
    }, 800);
    this.setState({ balance: this.state.balance - this.priceToPay });
  }

  refuse = () => {
    this.setState({ overlayIsVisible: false });
  }

  componentDidMount() {
    return fetch('http://localhost:3000/carbonSavings')
      .then((response) => response.json())
      .then((responseJson) => {
        let carbonSavings = [];
        responseJson.forEach(element => {
          carbonSavings.push(element.savings);
        });
        this.setState({ carbonSavings: carbonSavings });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Overlay isVisible={this.state.overlayIsVisible}>
          <View style={styles.overlayContainer}>
            <Text style={styles.overlayPrice}>{this.priceToPay} Bärentaler</Text>
            <Text style={styles.overlayText}>bezahlen?</Text>
            <View style={styles.yesNo}>
              <TouchableOpacity onPress={this.confirm}>
                <Image style={styles.yesNoImage} source={require('../assets/images/ok.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.refuse}>
                <Image style={styles.yesNoImage} source={require('../assets/images/cancel.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
        <View style={styles.balanceWrapper}>
          <Text style={styles.balanceText}>Sie haben</Text>
          <Text style={styles.balance}>{this.state.balance} Bärentaler</Text>
        </View>
        <View style={styles.payWrapper}>
          <TouchableOpacity
            onPress={this.pay}
            style={styles.payButton}>
            <Text style={styles.payText}>Bezahlen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.latestTransactionsWrapper}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Transactions')}>
            <Text style={styles.latestTransactionsText}>Letzte Transaktionen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chartWrapper}>
          <LineChart
            data={{
              labels: ['Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug'],
              datasets: [{
                data: this.state.carbonSavings
              }]
            }}
            width={290} // from react-native
            height={220}
            yAxisLabel={'Kg '}
            chartConfig={{
              backgroundColor: '#C4CCD3',
              backgroundGradientFrom: '#C4CCD3',
              backgroundGradientTo: '#C4CCD3',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(204, 0, 51, ${opacity})`,
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
          <Text>Eingesparte CO₂-Emissionen</Text>
        </View>
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
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayPrice: {
    fontSize: 30,
  },
  overlayText: {
    fontSize: 20,
  },
  yesNo: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  yesNoImage: {
    width: 60,
    height: 60,
    margin: 10,
  },
  balanceWrapper: {
    flex: 2,
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
    marginTop: -20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payButton: {
    paddingHorizontal: '10%',
    paddingVertical: '4%',
    backgroundColor: Colors.tintColor,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  payText: {
    fontSize: 20,
  },
  latestTransactionsWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  latestTransactionsText: {
    textDecorationLine: 'underline',
  },
  chartWrapper: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
