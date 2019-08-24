import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Overlay } from "react-native-elements";
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {

  priceToPay = 4;

  state = {
    balance: 32,
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
        <View style={styles.chartWrapper}>
          <Image style={styles.chart} source={require('../assets/images/chart.png')} />
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
